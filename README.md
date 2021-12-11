How to run
```
git clone git@github.com:kricha/ts-server-test.git
cd ts-server-test
docker run --rm -it -v `pwd`:/app -w /app node:16-alpine sh
```

Inside container:
```
npm install && ./node_modules/.bin/ts-node ./src/index.ts
```