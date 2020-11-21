.PHONY: help

SHELL := '/bin/bash'
CONSOLE=bin/console
HTTP_USER=$$(ps axo user,comm | grep -E '[a]pache|[h]ttpd|[_]www|[w]ww-data|[n]ginx' | grep -v root | head -1 | cut -d\  -f1)

help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## --- Install & Update --------------------
install: git-update composer-install node-install db-create db-update
update: git-update composer-install db-update

## --- Symfony -----------------------------
cc: ## cache clear & assets install
	php $(CONSOLE) c:c
	php $(CONSOLE) assets:install --symlink

composer-install: ## composer install vendors
	composer install

composer-update: ## composer update vendors
	composer update

acl:
	sudo setfacl -dR -m u:$(HTTP_USER):rwX -m u:$(whoami):rwX var public
	sudo setfacl -R -m u:$(HTTP_USER):rwX -m u:$(whoami):rwX var public

## --- Node & Webpack ----------------------
node-install: ## yarn install node_modules
	yarn install

watch: ## DRun Webpack with watch
	yarn watch

dev-server: ## Run Webpack with hot reload using Webpack dev server
	yarn dev-server

wb-build: ## Build webpack package on dev env
	yarn dev

wb-build-prod: ## delete build & Webpack build
	yarn build

## --- Database ----------------------------
db-create: ##  create database
	php $(CONSOLE) doctrine:database:create --if-not-exists

db-update: ## update database
	php $(CONSOLE) doctrine:schema:update --force --dump-sql --complete

## --- Project -----------------------------
git-update: ## update project from git
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