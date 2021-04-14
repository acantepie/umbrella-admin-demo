Create a new project
========================

Requirements
------------

* PHP 7.4 or higher;
* and the [usual Symfony application requirements](https://symfony.com/doc/current/reference/requirements.html).

Installation
------------

```bash
composer create-project umbrella2/skeleton:dev-master my_project
cd my_project/
```

Configure your database :

Edit `DATABASE_URL` env var in the `.env`file to use your own credentials.

```bash
php bin/console doctrine:database:create
php bin/console doctrine:schema:update --force
```

Build assets:
```bash
yarn install
yarn build
```

How use
------------
Start web server :
```bash
php -S localhost:8000 -t public/
```

Go on url http://localhost:8000/admin and hint **umbrella** / **umbrella** to login and backoffice.



