/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[20],{472:function(Ba){(function(){Ba.exports={mZ:function(){function wa(b,f){this.scrollLeft=b;this.scrollTop=f}function r(b){if(null===b||"object"!==typeof b||void 0===b.behavior||"auto"===b.behavior||"instant"===b.behavior)return!0;if("object"===typeof b&&"smooth"===b.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+b.behavior+" is not a valid value for enumeration ScrollBehavior.");}function oa(b,f){if("Y"===
f)return b.clientHeight+a<b.scrollHeight;if("X"===f)return b.clientWidth+a<b.scrollWidth}function na(b,f){b=aa.getComputedStyle(b,null)["overflow"+f];return"auto"===b||"scroll"===b}function ma(b){var f=oa(b,"Y")&&na(b,"Y");b=oa(b,"X")&&na(b,"X");return f||b}function fa(b){var f=(e()-b.startTime)/468;var n=.5*(1-Math.cos(Math.PI*(1<f?1:f)));f=b.nz+(b.x-b.nz)*n;n=b.oz+(b.y-b.oz)*n;b.method.call(b.yF,f,n);f===b.x&&n===b.y||aa.requestAnimationFrame(fa.bind(aa,b))}function ea(b,f,n){var z=e();if(b===w.body){var y=
aa;var da=aa.scrollX||aa.pageXOffset;b=aa.scrollY||aa.pageYOffset;var ia=h.scroll}else y=b,da=b.scrollLeft,b=b.scrollTop,ia=wa;fa({yF:y,method:ia,startTime:z,nz:da,oz:b,x:f,y:n})}var aa=window,w=document;if(!("scrollBehavior"in w.documentElement.style&&!0!==aa.Ora)){var x=aa.HTMLElement||aa.Element,h={scroll:aa.scroll||aa.scrollTo,scrollBy:aa.scrollBy,BU:x.prototype.scroll||wa,scrollIntoView:x.prototype.scrollIntoView},e=aa.performance&&aa.performance.now?aa.performance.now.bind(aa.performance):Date.now,
a=RegExp("MSIE |Trident/|Edge/").test(aa.navigator.userAgent)?1:0;aa.scroll=aa.scrollTo=function(b,f){void 0!==b&&(!0===r(b)?h.scroll.call(aa,void 0!==b.left?b.left:"object"!==typeof b?b:aa.scrollX||aa.pageXOffset,void 0!==b.top?b.top:void 0!==f?f:aa.scrollY||aa.pageYOffset):ea.call(aa,w.body,void 0!==b.left?~~b.left:aa.scrollX||aa.pageXOffset,void 0!==b.top?~~b.top:aa.scrollY||aa.pageYOffset))};aa.scrollBy=function(b,f){void 0!==b&&(r(b)?h.scrollBy.call(aa,void 0!==b.left?b.left:"object"!==typeof b?
b:0,void 0!==b.top?b.top:void 0!==f?f:0):ea.call(aa,w.body,~~b.left+(aa.scrollX||aa.pageXOffset),~~b.top+(aa.scrollY||aa.pageYOffset)))};x.prototype.scroll=x.prototype.scrollTo=function(b,f){if(void 0!==b)if(!0===r(b)){if("number"===typeof b&&void 0===f)throw new SyntaxError("Value could not be converted");h.BU.call(this,void 0!==b.left?~~b.left:"object"!==typeof b?~~b:this.scrollLeft,void 0!==b.top?~~b.top:void 0!==f?~~f:this.scrollTop)}else f=b.left,b=b.top,ea.call(this,this,"undefined"===typeof f?
this.scrollLeft:~~f,"undefined"===typeof b?this.scrollTop:~~b)};x.prototype.scrollBy=function(b,f){void 0!==b&&(!0===r(b)?h.BU.call(this,void 0!==b.left?~~b.left+this.scrollLeft:~~b+this.scrollLeft,void 0!==b.top?~~b.top+this.scrollTop:~~f+this.scrollTop):this.scroll({left:~~b.left+this.scrollLeft,top:~~b.top+this.scrollTop,behavior:b.behavior}))};x.prototype.scrollIntoView=function(b){if(!0===r(b))h.scrollIntoView.call(this,void 0===b?!0:b);else{for(b=this;b!==w.body&&!1===ma(b);)b=b.parentNode||
b.host;var f=b.getBoundingClientRect(),n=this.getBoundingClientRect();b!==w.body?(ea.call(this,b,b.scrollLeft+n.left-f.left,b.scrollTop+n.top-f.top),"fixed"!==aa.getComputedStyle(b).position&&aa.scrollBy({left:f.left,top:f.top,behavior:"smooth"})):aa.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}}}}}})()}}]);}).call(this || window)
