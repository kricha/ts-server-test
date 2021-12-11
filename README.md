How to run
```
git clone git@github.com:kricha/ts-server-test.git
cd ts-server-test
docker run --rm -it -p 3000:3000 -v `pwd`:/app -w /app node:16-alpine sh
```

Inside container:
```
npm install && npx tsc && node --experimental-specifier-resolution=node dist/index.js
```