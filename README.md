# Holamundo

Boilerplate node+express web server, great for micro-services, restful APIs, web apps.

Built with [Express][], and largely based on the [Express Generator][], but with a few additions:

- out-of-the-box Docker support
  - use docker-compose to run a local environment:
    ```sh
    docker-compose build
    docker-compose up -d
    ```
  - build and push docker images, deploy wherever Docker is accepted:
    ```sh
    docker build -t repo/my_image:v1.0.0 .
    docker push repo/my_image:v1.0.0
    ```
- [nodemon](https://nodemon.io/) - development server (watches and restarts for file changes)
- [pino](https://getpino.io/) - extremely fast json logging
- [dotenv](https://github.com/motdotla/dotenv) - 12-factor style configuration management
- [helmet](https://helmetjs.github.io/) - security best practices for Express

## Quickstart

Local:
```sh
npm install
npm run start:dev
```

Docker:
```sh
docker-compose build
docker-compose up -d
```

[Express]: https://expressjs.com/
[Express Generator]: https://expressjs.com/en/starter/generator.html
