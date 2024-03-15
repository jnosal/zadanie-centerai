## Web Setup

``` bash
cd web
# install dependencies
npm install

# serve with hot reload at localhost:5173
npm run dev
```

## Backend Setup

``` bash
cd api
# install dependencies
docker-compose build

# serve with hot reload at localhost:4444
docker-compose up api

# run tests
docker-compose run test
```