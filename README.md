# Webpack 5 Module Federation with React/Typescript

[![s3-deploy](https://github.com/ogzhanolguncu/react-typescript-module-federation/actions/workflows/s3-deploy.yaml/badge.svg)](https://github.com/ogzhanolguncu/react-typescript-module-federation/actions/workflows/s3-deploy.yaml)

This project consist of three pieces, a host app `container` and two remotes `app1` `app2`.

Workflow:

- `app1` expose CounterAppOne component.
- `app2` expose CounterAppTwo header component.
- `container` import CounterAppOne and CounterAppTwo component.

## Running Demo

In order to run the demo I highly recommend installing lerna globally via

```bash
npm i -g lerna
```

Then,

```bash
lerna bootstrap
```

Run the command above at the root of your project. This command will make sure you have dependencies you need in order to run this project.

Finally,

```bash
npm run start
```

Lerna will start all your projects parallelly and open your browser.

- http://localhost:3000/ (container)
- http://localhost:3001/ (app1)
- http://localhost:3002/ (app2)

## Screenshots

![App Screenshot](./app.png)

## Tech Stack

React, Typescript, Chakra UI, Webpack, Lerna, React Router V6

## Article

If you are curious about building this template head over to [Introduction to Micro Frontends with Module Federation, React and Typescript](https://ogzhanolguncu.com/blog/micro-frontends-with-module-federation)

## Feedback

If you have any feedback, please reach out to me or feel free to open up a issue.
