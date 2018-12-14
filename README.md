# MobX training application

You can create, view and delete strange creatures. That's all.

For more information about MobX see:
* https://mobx.js.org/getting-started.html
* https://github.com/mobxjs/mobx-react

## How to use MobX in react app
 
* npx create-react-app mobx-training
* yarn run eject
* yarn add @babel/plugin-proposal-decorators
* webpack config
```javascript
              plugins: [
                [// for  MobX
                  require('@babel/plugin-proposal-decorators'),
                  { legacy: true }
                ],
```
                
## Prerequisites

* node, npm
* npx
* yarn
* create-react-app

## How to run

* git clone https://github.com/dmitryweiner/mobx-training.git
* yarn
* yarn run start

