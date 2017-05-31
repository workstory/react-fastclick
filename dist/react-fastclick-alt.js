!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactFastClick=t(require("react")):e.ReactFastClick=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),l=r(i),s=n(2),h=r(s),f=function(e){return document.activeElement===e},p=function(e,t){return e&&"string"==typeof e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()},d=function(e){return p(e,"input")},T=function(e){return d(e)&&f(e)},v=function(e){return d(e)&&e.type&&"checkbox"===e.type.toLowerCase()},y=function(e){return p(e,"select")},m=function(e){return p(e,"textarea")},g=function(e){return f(e)&&m(e)},b=function(e){return 1!==e.touches.length||1!==e.targetTouches.length},O=function(e){return d(e)&&!v(e)||y(e)||m(e)||e.isContentEditable||"submit"===e.type},_=function(e){function t(){var e,n,r,c;o(this,t);for(var a=arguments.length,i=Array(a),l=0;l<a;l++)i[l]=arguments[l];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={touchId:null,touchX:null,touchY:null,touchTime:null},r.handleTouchStart=function(e){if(b(e)||O(e.target))return void r.clearTouchData();var t=e.targetTouches[0];r.setState({touchId:t.identifier,touchX:t.screenX,touchY:t.screenY,touchTime:(new Date).getTime()})},r.handleTouchMove=function(e){var t=r.state.touchId,n=r.props.threshold;if(null!==t){if(1!==e.touches.length||1!==e.targetTouches.length)return void r.clearTouchData();var o=e.targetTouches[0];if(t!==o.identifier)return void r.clearTouchData();r.calculateTouchDistanceFromOrigin(o)>n&&r.clearTouchData()}},r.handleTouchEnd=function(e){var n=r.state,o=n.touchId,u=n.touchTime,c=r.props,a=c.timeThreshold,i=c.threshold;if(null!==o){if(null!==a&&(new Date).getTime()-u>a)return void r.clearTouchData();if(0!==e.touches.length)return void r.clearTouchData();for(var l=null,s=0;s<e.changedTouches.length;s++){var h=e.changedTouches[s];if(h.identifier===r.state.touchId){l=h;break}}if(null===l)return void r.clearTouchData();if(r.calculateTouchDistanceFromOrigin(l)>i)return void r.clearTouchData();var f=l.target;if((T(f)||g(f))&&!v(f))return void r.clearTouchData();e.preventDefault(),e.stopPropagation(),r.clearTouchData(function(){t.triggerClick(f)})}},r.handleTouchCancel=function(e){r.clearTouchData()},c=n,u(r,c)}return c(t,e),a(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.children!==e.children}},{key:"clearTouchData",value:function(e){this.setState({touchId:null,touchX:null,touchY:null,touchTime:null},e)}},{key:"calculateTouchDistanceFromOrigin",value:function(e){var t=this.state,n=t.touchX,r=t.touchY,o=e.screenX,u=e.screenY;return Math.sqrt(Math.pow(o-n,2)+Math.pow(u-r,2))}},{key:"render",value:function(){var e=this.props.children,t={onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel};return l.default.createElement("span",t,e)}}],[{key:"triggerClick",value:function(e){for(;e&&"function"!=typeof e.click;)e=e.parentNode;e&&(e.click(),(d(e)&&!v(e)||y(e)||m(e))&&e.focus())}}]),t}(i.Component);_.propTypes={threshold:h.default.number,timeThreshold:h.default.number},_.defaultProps={threshold:15,timeThreshold:125},t.default=_},function(t,n){t.exports=e},function(e,t,n){e.exports=n(3)()},function(e,t,n){"use strict";var r=n(4),o=n(5),u=n(6);e.exports=function(){function e(e,t,n,r,c,a){a!==u&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n,r,u,c,a,i){if(o(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,u,c,a,i],h=0;l=new Error(t.replace(/%s/g,function(){return s[h++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])});