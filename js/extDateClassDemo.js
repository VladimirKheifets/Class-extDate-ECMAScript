/*
  Demo of class extDate
  Version: 1.0, 2025-03-01
  Author: Vladimir Kheifets vladimir.kheifets@online.de
  Copyright © 2025 Vladimir Kheifets All Rights Reserved
*/

import {demo1} from './module/extDateClassDemo1.js';
import {demo2} from './module/extDateClassDemo2.js';
import {demo3} from './module/extDateClassDemo3.js';
import {demo4} from './module/extDateClassDemo4.js';
import {viewCode} from './module/viewCode.js';

const buttonEl = document.querySelector("button");
var demoN = 1;
var maxdemoN = 4;
demo1();
viewCode(demoN);
buttonEl.onclick = function(){
  demoN++;
  if(demoN > maxdemoN)
    demoN = 1;
  eval(`demo${demoN}();`);
  viewCode(demoN);
};
