!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("mobx"),require("fbjs/lib/shallowEqual")):"function"==typeof define&&define.amd?define(["react","mobx","fbjs/lib/shallowEqual"],t):e["k-mobx-react"]=t(e.React,e.mobx,e.shallowEqual)}(this,function(e,t,n){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var r=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};return function(a){return function(s){var c,f;return f=c=function(c){function f(e,o){r(this,f);var s=u(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,e,o));s.state={injectedProps:{},props:e};var c=!0;return s.dispose=t.autorun(function(){var e=a(s.context.mobxStores),r=i({},e);Object.keys(r).forEach(function(e){var n=r[e];t.isObservable(n)&&(r[e]=t.toJS(r[e]))}),c?(c=!1,s.state=i({},s.state,{injectedProps:r})):n(r,s.state.injectedProps)||s.setState(function(e){return i({},e,{injectedProps:r})})}),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(f,e.Component),o(f,[{key:"componentWillReceiveProps",value:function(e){n(e,this.props)||this.setState(function(t){return i({},t,{props:e})})}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"render",value:function(){return e.createElement(s,i({},this.state.props,this.state.injectedProps))}}]),f}(),c.contextTypes={mobxStores:function(){return null}},f}}});
//# sourceMappingURL=index.js.map
