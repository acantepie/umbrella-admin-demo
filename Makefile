.PHONY: help

SHELL := '/bin/bash'
CONSOLE=bin/console
WEBPACK=node_modules/.bin/webpack
WEBPACK_DEV_SERVER=node_modules/.bin/webpack-dev-server

help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## --- Install & Update --------------------
install-dev: dump-env-dev vendor-install node-install webpack-dev cc db-create db-update ## DEV env : install for dev environment

update-dev: project-update vendor-update node-install cc db-update ## DEV env : update project, vendors (php & node), database and cache clear (dev & prod)

update: project-update vendor-update cc db-update ## PROD env : update project, vendor (php), database and cache clear prod

dump-env-dev:
	echo "APP_ENV=dev" > .env.local

## --- Symfony -----------------------------
cc: ## cache delete, warmup & assets install
	rm -Rf var/cache/*
	php $(CONSOLE) c:c
	php $(CONSOLE) assets:install --symlink

vendor-install: ## composer install vendors
	composer install --no-scripts

vendor-umbrella-update:
	composer update umbrella/*

vendor-update: ## composer update vendors
	composer update

dump-env: ## optimize env vars for prod env
	composer dump-env prod

acl:
	httpuser="$$(ps axo user,comm | grep -E '[a]pache|[h]ttpd|[_]www|[w]ww-data|[n]ginx' | grep -v root | head -1 | cut -d\  -f1)";  sudo setfacl -dR -m u:$$httpuser:rwX -m u:$(whoami):rwX var; sudo setfacl -R -m u:$$httpuser:rwX -m u:$(whoami):rwX var

## --- Node & Webpack ----------------------
webpack-dev: ## Build webpack package on dev env
	export NODE_ENV="development" && $(WEBPACK) --config webpack.config.js

webpack-build: ## delete build & Webpack build
	rm -Rf public/build
	export NODE_ENV="production" && $(WEBPACK) --config webpack.config.js

watch: ## DRun Webpack with watch
	export NODE_ENV="development" && $(WEBPACK) --config webpack.config.js --progress --colors --watch

hotreload: ## Run Webpack with hot reload using Webpack dev server
	export NODE_ENV="development" && $(WEBPACK_DEV_SERVER) --config webpack.config.js

node-install: ## yarn install node_modules
	yarn install

node-update: ## yarn update node_modules
	yarn upgrade

## --- Database ----------------------------
db-create: ##drop database if exists, and create database
	php $(CONSOLE) doctrine:database:drop --force --if-exists
	php $(CONSOLE) doctrine:database:create --if-not-exists

db-update: ## update database
	php $(CONSOLE) doctrine:schema:update --force --dump-sql --complete

## --- Project -----------------------------
project-update: ## update project from git
	git pull

vendor_fix: ## fix vendor
	rm -Rf vendor_fix
	mkdir vendor_fix

	git clone --no-checkout git@github.com:acantepie/UmbrellaCore.git vendor_fix/UmbrellaCore
	rm -Rf vendor/umbrella/corebundle/.git
	mv vendor_fix/UmbrellaCore/.git vendor/umbrella/corebundle
	cd vendor/umbrella/corebundle && git add -A . && cd ../../..

	git clone --no-checkout git@github.com:acantepie/UmbrellaAdmin.git vendor_fix/UmbrellaAdmin
	rm -Rf vendor/umbrella/adminbundle/.git
	mv vendor_fix/UmbrellaAdmin/.git vendor/umbrella/adminbundle
	cd vendor/umbrella/adminbundle && git add -A . && cd ../../..

	git clone --no-checkout git@github.com:acantepie/UmbrellaMaker.git vendor_fix/UmbrellaMaker
	rm -Rf vendor/umbrella/makerbundle/.git
	mv vendor_fix/UmbrellaMaker/.git vendor/umbrella/makerbundle
	cd vendor/umbrella/makerbundle && git add -A . && cd ../../..

	rm -Rf vendor_fix