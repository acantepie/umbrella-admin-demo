<h1 align="center" style="border-bottom: none">
    <img src="./umbrella.svg" width="25" height="25" alt="Umbrella logo"/> Umbrella Admin Demo
</h1>

<p align="center">
    A demo application to showcase the main features of <a href="https://github.com/acantepie/umbrella">Umbrella framework</a>.
</p>

<p align="center">
    <a href="https://umbrella-corp.dev"><b>Online demo</b></a> •
    <a href="https://acantepie.github.io/umbrella/"><b>Documentation</b></a>
</p> 

<p align="center">
    <img src="/screenshot.png" width="100%">
    <br/><br/>
</p>

# Installation

### Requirements
- [docker compose](https://docs.docker.com/compose/install/)

```bash
# Clone repository
git clone git@github.com:acantepie/umbrella-admin-demo.git umbrella_demo
cd umbrella_demo

# up docker
docker compose up -d

# install php dependency
docker compose exec web composer install

# update database schema
docker compose exec web bin/console doctrine:schema:update --force

# load fixtures
docker compose exec web bin/console doctrine:fixtures:load -n
```

App url : http://localhost

# Build assets

### Requirements
- node 20 or higher
- yarn

```bash
# install assets
yarn install

# build assets in prod mode
yarn build

# install ckeditor
cp -R node_modules/ckeditor4 public
# or yarn copy-ckeditor
```