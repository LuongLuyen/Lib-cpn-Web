# Lib-cpn-Web
npm i luongluyen
lib support ts,js, es6
import phiên bản thấp hơn ES6
const A = require('luongluyen/BeforeES6')
console.log(A.Name)

angular.json "styles": [ "node_modules/luongluyen/index.css" ],

app.component.ts import 'luongluyen/index.css'; 
import {ButtonW} from 'luongluyen/btn/lib'

# How to use
# # Angular 
<div style="color: black; border: 10px;" onmouseover="this.style=\'color: red; border: 10px;\'" onmouseout="this.style=\'color: black; border: 10px;\'">hover</div>

index.html "root html"

<body>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</body>

app.component.ts

import { DomSanitizer } from '@angular/platform-browser';

import {ButtonW} from 'luongluyen/lib/btn'

export class AppComponent  {

  constructor(private sanitizer: DomSanitizer) { }

  ButtonW: any;

  ngOnInit() {

    this.ButtonW = this.sanitizer.bypassSecurityTrustHtml(ButtonW);

  }

}

app.component.html

<div [innerHTML]="ButtonW"></div>

function
ComponentSearch(api)

