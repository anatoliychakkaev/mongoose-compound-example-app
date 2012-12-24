## Welcome to CompoundJS

### Installation

    npm install mongoose-compound-example-app

### Usage

1. programmatically

    `require('mongoose-compound-example-app')().listen(3000, '0.0.0.0');`

2. command line (inside this project dir)

    `node .`

### It works?

```sh
$ curl -I http://localhost:3000/cat/heyKitty

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 39
Set-Cookie:
connect.sid=s%3AhrqT8VJ%2BMDTC8iBsVOy20ZfL.EKKIjbY7oPlEygBI%2BwpyVqW5ZLPombojyDwh8cfkjq8;
Path=/; HttpOnly
Date: Sat, 22 Dec 2012 11:35:30 GMT
Connection: keep-alive

$ curl http://localhost:3000/cat/heyKitty

{
  "_id": "50d59af79e1077cf7b000001"
}
```

If you have any questions, ask in corresponding issue:
https://github.com/1602/compound/issues/288
