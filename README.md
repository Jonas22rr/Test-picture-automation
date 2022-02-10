#file-configuration - examples for a automation

##example tsconfig.json

`{
  "compileOnSave": true,
  "compilerOptions": {
    "skipLibCheck": true,
    "strict": true,
    "allowJs": false,
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "downlevelIteration": true,
    "module": "ESNext",
    "target": "ESNext",
    "outDir": "./bin",
    "lib": [
      "es2020"
    ],
  }
}`

##example package.json

`{
  "name": "Auomation",
  "description": "Automatic ...",
  "version": "1.0.52",
  "dependencies": {
    "@types/command-line-args": "^5.2.0",
    "@types/js-yaml": "^4.0.5",
    "@types/node": "^16.11.12",
    "@types/node-fetch": "^2.5.12",
    "command-line-args": "^5.2.0",
    "js-yaml": "^4.1.0",
    "node-fetch": "^2.6.6",
    "typescript": "^4.5.3"
  },
  "scripts": {
    "push": "tsc;git add --all; git commit --allow-empty-message; git push; ",
    "deploy": "node ./bin/index.js"
  },
  "main": "./bin/index.js",
  "files": [
    "bin/"
  ],
  "type": "module",
  "repository": {
    "type": "git",
    "url": "https://myGitHub.repo"
  },
  "bin": "./bin/index.js"
}`
