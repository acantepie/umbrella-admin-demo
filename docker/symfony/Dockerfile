# The latest PHP fpm-buster image
FROM php:8.0-fpm-buster
ARG USER=docker
ARG USER_PWD=docker
ARG UID=1000
ARG GID=1000
ARG WORKDIR=/app

ENV NODE_VERSION=16.0.0
ENV NVM_DIR /usr/local/nvm

# Docker user
RUN useradd ${USER} --uid=${UID} --shell /bin/bash --create-home \
  && usermod --append --groups sudo ${USER} \
  && echo 'ALL ALL = (ALL) NOPASSWD: ALL' >> /etc/sudoers \
  && echo "${USER}:${USER_PWD}" | chpasswd

RUN mkdir ${WORKDIR}
RUN chmod -R g+w ${WORKDIR}
RUN chown -R ${USER}:${USER} ${WORKDIR}

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer
RUN chmod +x /usr/local/bin/composer

# dev tools (git / zip)
RUN apt-get -y update
RUN apt-get -y install git p7zip-full

# node / yarn
RUN mkdir -p $NVM_DIR
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
RUN . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN npm install --global yarn

# php extension
RUN docker-php-ext-install pdo pdo_mysql
RUN apt-get install -y libicu-dev \
    && docker-php-ext-configure intl \
    && docker-php-ext-install intl

# Clear packages artifcat
RUN apt-get clean && apt-get --yes --quiet autoremove --purge && \
        rm -rf  /var/lib/apt/lists/* /tmp/* /var/tmp/* \
                /usr/share/doc/* /usr/share/groff/* /usr/share/info/* /usr/share/linda/* \
                /usr/share/lintian/* /usr/share/locale/* /usr/share/man/*

USER ${USER}
WORKDIR ${WORKDIR}
