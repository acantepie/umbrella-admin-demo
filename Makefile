.PHONY: help

SHELL := '/bin/bash'
CONSOLE=bin/console
WEBPACK=node_modules/.bin/webpack
WEBPACK_DEV_SERVER=node_modules/.bin/webpack-dev-server
HTTP_USER=$$(ps axo user,comm | grep -E '[a]pache|[h]ttpd|[_]www|[w]ww-data|[n]ginx' | grep -v root | head -1 | cut -d\  -f1)

help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## --- Install & Update --------------------
install-dev: composer-install node-install db-create db-update ## install project on local env

update-dev: project-update composer-update node-install db-update ## update project on local env

update: project-update composer-update db-update ## update project on server

## --- Symfony -----------------------------
cc: ## cache delete, warmup & assets install
	php $(CONSOLE) c:c
	php $(CONSOLE) assets:install --symlink

composer-install: ## composer install vendors
	composer install

composer-update: ## composer update vendors
	composer update

acl:
	sudo setfacl -dR -m u:$(HTTP_USER):rwX -m u:$(whoami):rwX var public
	sudo setfacl -R -m u:$(HTTP_USER):rwX -m u:$(whoami):rwX var public

php-cs-fix:
	vendor/bin/php-cs-fixer fix

## --- Node & Webpack ----------------------
webpack-build-dev: ## Build webpack package on dev env
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

vendor-fix: ## fix vendor
	rm -Rf vendor_fix
	mkdir vendor_fix

	git clone --no-checkout git@github.com:acantepie/umbrella-core.git vendor_fix/umbrella-core
	rm -Rf vendor/umbrella2/corebundle/.git
	mv vendor_fix/umbrella-core/.git vendor/umbrella2/corebundle
	cd vendor/umbrella2/corebundle && git add -A . && cd ../../..

	git clone --no-checkout git@github.com:acantepie/umbrella-admin.git vendor_fix/umbrella-admin
	rm -Rf vendor/umbrella2/adminbundle/.git
	mv vendor_fix/umbrella-admin/.git vendor/umbrella2/adminbundle
	cd vendor/umbrella2/adminbundle && git add -A . && cd ../../..

	git clone --no-checkout git@github.com:acantepie/umbrella-maker.git vendor_fix/umbrella-maker
	rm -Rf vendor/umbrella2/makerbundle/.git
	mv vendor_fix/umbrella-maker/.git vendor/umbrella2/makerbundle
	cd vendor/umbrella2/makerbundle && git add -A . && cd ../../..

	rm -Rf vendor_fix