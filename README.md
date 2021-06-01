<h1 align="center" style="border-bottom: none">
    ☂ Umbrella Admin Demo
</h1>

<p align="center">
    A demo application to showcase the main features of <a href="https://github.com/acantepie/umbrella">Umbrella framework</a>.
</p>

<p align="center">
    <a href="https://umbrella-corp.dev"><b>Demo website</b></a> •
    <a href="https://github.com/acantepie/umbrella"><b>Documenation</b></a>
</p> 

<p align="center">
    <img src="/screenshot.png" width="100%">
    <br/><br/>
</p>

# Installation
First, make sure you <a href="https://nodejs.org/en/download/">install Node.js</a>, <a href="https://yarnpkg.com/getting-started/install">Yarn package manager</a> and also php7.4.

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