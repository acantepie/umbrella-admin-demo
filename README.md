Umbrella Demo Application
========================

Demo
------------
Demo application is available [here](https://umbrella-corp.dev)


Requirements
------------

  * PHP 7.4 or higher;
  * and the [usual Symfony application requirements][2].

Installation
------------

```bash
$ composer create-project umbrella2/umbrella-demo:dev-master my_project
```

Usage
-----
```bash
$ cd my_project/
```

You **MUST** check **DATABASE_URL** on `.env` file.

Then, initialize database :
```bash
$ php bin/console doctrine:database:create --if-not-exists
$ php bin/console doctrine:schema:update --force
```

You can load fixtures on database :
```bash
$ php bin/console doctrine:fixtures:load --no-interaction
```

Run `php -S localhost:8000 -t public/`
to use the built-in PHP web server or [configure a web server][2] like Nginx or
Apache to run the application.

[1]: https://umbrella-corp.dev
[2]: https://symfony.com/doc/current/reference/requirements.html
[3]: https://symfony.com/doc/current/cookbook/configuration/web_server_configuration.html