<h1 align="center" style="border-bottom: none">
    ☂ Umbrella Admin Demo
</h1>

<p align="center">
    A demo application to showcase the main features of <a href="https://github.com/acantepie/umbrella">Umbrella framework</a>.
</p>

<p align="center">
    <a href="https://umbrella-corp.dev"><b>Online demo</b></a> •
    <a href="https://github.com/acantepie/umbrella/tree/master/docs"><b>Documenation</b></a>
</p> 

<p align="center">
    <img src="/screenshot.png" width="100%">
    <br/><br/>
</p>

# Installation

### Technical requirements
- PHP 7.4 or higher
- PHP extensions: `json`, `zip`
- [composer][get-composer]
- [Symfony requirements][symfony-req]
- [Node.js][node-js]
- [yarn][yarn]

### Installation

- `git clone git@github.com:acantepie/umbrella-admin-demo.git my_project`
- `cd my_project/`
- `composer  install`

Configure your database:

- Edit the `DATABASE_URL` env var in the `.env` file to use your database credentials.
- `php bin/console doctrine:database:create`
- `php bin/console doctrine:schema:create`
- `php bin/console doctrine:fixtures:load`

Build assets with webpack:

- `yarn install`
- `yarn build`
- `yarn copy-ckeditor`

Serve:

- `php -S localhost:8000 -t public/`
- Browse http://localhost:8000

[get-composer]: https://getcomposer.org/
[symfony-req]: https://symfony.com/doc/current/setup.html#technical-requirements
[node-js]: https://nodejs.org/en/download/
[yarn]: https://yarnpkg.com/getting-started/install