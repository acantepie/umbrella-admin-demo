COMPOSER      = composer
YARN          = yarn
PHP_CS_FIXER  = ./vendor/bin/php-cs-fixer
PHPSTAN       = ./vendor/bin/phpstan
PHPUNIT      = ./vendor/bin/phpunit

help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Coding standards ——————————————————————————————————————————————————————
analyse: ## Analyse PHP
	$(PHPSTAN) analyse

fix-php: ## Fix files with php-cs-fixer
	$(PHP_CS_FIXER) fix

fix-js: ## Fix files with eslint
	$(YARN) lint-fix

fix-all: fix-php fix-js ## Fix all files

## —— Tests ——————————————————————————————————————————————————————
test: ## Test app
	$(PHPUNIT)

check: fix-all analyse test

## —— docker-composer ——————————————————————————————————————————————————————
dc-sh:
	docker-compose exec symfony bash


dc-up:
	docker-compose up -d

dc-down:
	docker-compose down --remove-orphans

