
mkdir minimalmaximal
npm init -y

npm install -S typescript express ts-node
npm install -D @types/node @types/express
npm install -S body-parser
npm install -S ejs

nano tsconfig.json
nano package.json


start with: 
npm run dev
npm run start (will build)
npm run build (build only)


testing:
npm install -D jest ts-jest @types/jest
nano package.json

npx ts-jest config:init



https://github.com/atomAltera/my-fullstack-typescript-app-scaffold
https://dev.to/nuclight/setting-up-fullstack-typescript-app-1bbe
https://levelup.gitconnected.com/setup-express-with-typescript-in-3-easy-steps-484772062e01
https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/
https://github.com/mwanago/express-typescript/tree/part-1