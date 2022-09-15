# congrant-frontend-v2
congrant-frontend-v2

## Run without docker

```
make sure node14, npm, yarn installed properly
```

```
yarn install
yarn start
```

## Run by docker

1. create `.env` file
- Create `.env` if it does not exist. You can find the sample content in here [How To Run Docker](##how-to-run-docker)
- Create `.env` in `client` folder. You can find the sample content in here [.env.example](./.env.example)
```
PORT=9001
LOG_LEVEL=info

NODE_ENV="production"
#Client port
CLIENT_PORT=9001



# Local docker network
D_SERVICES_NETWORK=congrant-microservices
```

2. create `congrant-microservices` network
```
docker network create congrant-microservices
```

3. start docker
```
docker-compose up -d
```
