# Lib-cpn-Web
npm i luongluyen
lib support ts,js, es6
import phiên bản thấp hơn ES6
const A = require('luongluyen/BeforeES6')
console.log(A.Name)

# How to use
# # Angular
angular.json
"styles": [
    "node_modules/luongluyen/lib/btn/index.css"
],

app.component.ts
import 'luongluyen/lib/btn/index.css';
import {ButtonW} from 'luongluyen/btn/lib'
export class AppComponent  {
  buttonw:string = ButtonW;
}

app.component.html
<button [class]="buttonw">Button</button>
