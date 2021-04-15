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

Configure database connection :<br>
Edit `DATABASE_URL` env var in the `.env`file.
```bash
# Sqlite
DATABASE_URL="sqlite:///%kernel.project_dir%/var/database.sqlite"

# mariadb/mysql
DATABASE_URL=mysql://login:password@127.0.0.1:3306/database
```

Create database and update schema :
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

How use ckeditor
------------
Install js library
```bash
yarn add ckeditor
```

Add entry on `webpack.config.js` :
```javascripts
Encore
    .addEntry('ckeditor', './vendor/umbrella2/corebundle/assets/ckeditor/ckeditor.js')
```

Rebuild javascripts with yarn and copy vendor on public/ directory
```bash
yarn build
cp -R node_modules/ckeditor4 public
```

You can now use `CkeditorType`on your symfony form :)

