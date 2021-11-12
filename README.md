<h1 align="center" style="border-bottom: none">
    ☂ Umbrella Admin Demo
</h1>

<p align="center">
    A demo application to showcase the main features of <a href="https://github.com/acantepie/umbrella">Umbrella framework</a>.
</p>

<p align="center">
    <a href="https://umbrella-corp.dev"><b>Online demo</b></a> •
    <a href="https://github.com/acantepie/umbrella/tree/master/docs"><b>Documentation</b></a>
</p> 

<p align="center">
    <img src="/screenshot.png" width="100%">
    <br/><br/>
</p>

# Install with Docker Compose

### Technical requirements
- [docker-compose][docker-compose]

### Installation

```bash
# Clone repository
git clone git@github.com:acantepie/umbrella-admin-demo.git umbrella_demo
cd umbrella-demo

# Build / Up Docker
docker-compose up -d
```

Open a docker shell :
```bash
docker-compose exec symfony bash
```

All commands below must be executed on *Docker Shell* :
```bash
# Install / build dependencies
composer install
yarn install
yarn build
yarn copy-ckeditor

# Prepare database
php bin/console doctrine:schema:create
php bin/console doctrine:fixtures:load
```

App url : http://127.0.0.1:8080/

# Install locally

### Technical requirements
- PHP 7.4 or higher
- PHP extensions: `json`, `mbstring`, `xml`
- [composer][get-composer]
- [Symfony requirements][symfony-req]
- [Node.js][node-js]
- [yarn][yarn]

### Installation

```bash
# Clone repository
git clone git@github.com:acantepie/umbrella-admin-demo.git umbrella_demo
cd umbrella-demo
```

You must edit the `DATABASE_URL` env var in the `.env` file to use your database credentials.

```bash
# Install / build dependencies
composer install
yarn install
yarn build
yarn copy-ckeditor

# Prepare database
php bin/console doctrine:database:create
php bin/console doctrine:schema:create
php bin/console doctrine:fixtures:load
```

Serve:
```bash
php -S localhost:8000 -t public/
```
App url : http://127.0.0.1:8000/

[docker-compose]: https://docs.docker.com/compose/install/
[get-composer]: https://getcomposer.org/
[symfony-req]: https://symfony.com/doc/current/setup.html#technical-requirements
[node-js]: https://nodejs.org/en/download/
[yarn]: https://yarnpkg.com/getting-started/install
