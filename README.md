# Events Web App

## Clone the project

### `git clone`

## Set private api key

1. `Create new file` <i>.env.local</i> `in app root dir`
2. `Generate new api key` </br>
   https://developer-acct.ticketmaster.com/user/26837/apps/add
3. `Past your key into` <i>.env.local</i> `like below` </br>
   REACT_APP_API_KEY=**YOUR_API_KEY**

## Build and start the app

### `docker-compose up -d --build`

## Go to default port

### `localhost:3001`

> You can change default port in **.env** file

## Test the app

You have two possibilities to run tests

#### 1. Log in to the Docker container and then run tests (inside container)

```shell
$ docker-compose exec events-web sh
/app # npm run test
```

#### 2. Run tests inside Docker container (without log in to the container)

```shell
$ docker-compose exec events-web npm run test
```

## Generate React Components

```shell
$ npx generate-react-cli component Box
```
