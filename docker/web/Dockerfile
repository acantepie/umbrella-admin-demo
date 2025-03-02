FROM dunglas/frankenphp:1.4.2-php8.3-bookworm

RUN install-php-extensions \
    @composer \
    apcu \
    intl \
    opcache \
    zip \
    pgsql
