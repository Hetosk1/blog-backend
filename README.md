
1. Pull & Run Redis Container
```
docker pull redis`
docker run -d -p 6379:6379 redis 
```

2. Pull MySQL Container
```
docker pull mysql
docker run -d -e MYSQL_ROOT_PASSWORD=<your-password> -p 3306:3306 mysql
```

3. Add a .env file 
```
# Server Port
PORT=port_number

# MySQL Credentials
DB_HOST=host
DB_PORT=port
DB_USER=user
DB_PASSWORD=password
DB_NAME=blog

# Redis URL
REDIS_URL=redis_url
```

4. Run Server
```
node server.js
```
