# setup nodejs project
# env setup
 npm install dotenv
 npm install cross-env --save-dev

# husky setup
#run below command
npm i husky lint-staged -D
npx husky init

# typescript setup

# run below command

npm i typescript ts-node -D
npx tsc --init

# enable some settings in tsconfig

    "rootDir":"./src"
    "outdir":"./dist"
    "removeComments":true
    "noImplicitAny":true
    "strictNullCheck":true
    "strictFunctionTypes":true
    "strictPropertyInitialization":true
    "alwaysStrict":true
    "noUnusedLocals":true
    "noUnusedParameters":true
    "noImplicitReturns":true

# nodemon setup

# run command

    npm i nodemon -D

# add in nodemon.json

{
"ext": ".ts",
"inore": [
"dist",
"node_modules"
]
}
# git commit setup
npm i @commitlint/cli @commitlint/config-conventional -D


# make new file with the name of commitlint.config.js add below code


# ES lint setup

eslint typescript docs https://typescript-eslint.io/getting-started


npm i husky lint-staged ts-node @types/node  eslint @eslint/js @types/eslint\_\_js typescript-eslint @types/express -D
npm install --save-dev --save-exact prettier
npm install --save-dev eslint-config-prettier

npm i dotenv express

npx tsc --init
npx husky init
#setup es lint
https://typescript-eslint.io/getting-started

#add this in packges.json
"lint-staged":{
"\*.ts": [
"npm run lint:fix",
"npm run format:fix",
]
}
#add scripts in package.json
"dist":"npx tsc",
"dev":"nodemon src/index.ts",
"start": "node dist/index.js",
"lint":"eslint",
"lint:fix":"eslint --fix",
"format:check": "prettier . --check,
"format:fix": "prettier . --fix,

#project structrets
.husky/
commit-msg
pre-commit
docker/
Dockerfile
logs/
.gitignore
#add this \*
!.gitignore
nginx/
http.conf
https.conf
script/
src/
config/
config.ts
require('dotenv').config()
export default {
PORT:process.env.PORT
}
constants/
application.ts
responseMessage.ts
controllers/
authController.
middlewares/
globalErrorHandler.ts
models/
userModel.ts
routes/
authRoutes.ts
import {Router} from "express"
const userRouter = Router();
userRouter.route("/).get();
export default userRouter
services/
UserServices.ts
test/
test.ts
types/
index.d.ts
utils/
quicker.ts
errorObject.ts
httpError.ts
httpResponse.ts
views/
app.ts
index.ts
eslint.config.mjs
.env.example
.env
.prettierrc
add below code
{
"trailingComma":"none",
"tabWidth":4,
"semi":false,
"singleQuote":true,
"bracketSameLine":true,
"printWidth":150,
"SingleAtrributePerLine":true,
"endOfLine":"crlf",
}
nodemon.json
{
"ext":".ts"
"inore":["dist","node_modules"]
}
ecosystem.config.js
commitlint.config.js # add below code in this
module.exports = {
extends: ["@commitlint/cli", "@commitlint/config-conventional"],
rules:{
"type-enum":[
2,
"always",
[
"feat",
"fix",
"docs",
"style",
"refactor",
"perf",
"test",
"build",
"ci",
"chore",
"revert"
]
],
"subject-case":[2,"always","sentence-case"],
}
}
