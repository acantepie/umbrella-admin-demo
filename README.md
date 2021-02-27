Umbrella Admin Demo 
========================

This is a demo application to show the main features of [UmbrellaAdminBundle][1].

Check online demo [here][2] 

Screenshot
------------
![Screenshot of the Umbrella Admin Demo app](screenshot.png)

Requirements
------------

  * PHP 7.4 or higher;
  * and the [usual Symfony application requirements][3].

How to install
------------

```bash
git clone git@github.com:acantepie/umbrella-demo.git my_project
cd my_project/
composer install
```


Configure your database :

Edit `DATABASE_URL` env var in the `.env`file to use your own credentials.

```bash
php bin/console doctrine:database:create
php bin/console doctrine:schema:update --force
php bin/console doctrine:fixtures:load
```

Build assets:
```bash
yarn install
yarn build
yarn copy-ckeditor
```

Run `php -S localhost:8000 -t public/`
to use the built-in PHP web server or [configure a web server][4] like Nginx or
Apache to run the application.

[1]: https://github.com/acantepie/umbrella-admin
[2]: https://umbrella-corp.dev
[3]: https://symfony.com/doc/current/reference/requirements.html
[4]: https://symfony.com/doc/current/cookbook/configuration/web_server_configuration.html