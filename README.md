# Lib-cpn-Web
npm i luongluyen
lib support ts,js, es6
import phiên bản thấp hơn ES6
const A = require('luongluyen/BeforeES6')
console.log(A.Name)

# How to use
# # Angular 
'<div style="color: black; border: 10px;" onmouseover="this.style=\'color: red; border: 10px;\'" onmouseout="this.style=\'color: black; border: 10px;\'">hover</div>'

app.component.ts

import { DomSanitizer } from '@angular/platform-browser';

import {NutMauTrang} from 'luongluyen/lib/btn'

export class AppComponent  {

  constructor(private sanitizer: DomSanitizer) { }

  NutMauTrang: any;

  ngOnInit() {

    this.NutMauTrang = this.sanitizer.bypassSecurityTrustHtml(NutMauTrang);

  }

}

app.component.html

<div [innerHTML]="NutMauTrang"></div>

