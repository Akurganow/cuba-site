webpackJsonp([0x767162c0de90],{109:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),l=n(13),u=(r(l),n(131)),s=r(u),i=function(e){return o.default.createElement("section",{className:s.default.single_post},o.default.createElement("aside",{className:s.default.presentation},e.presentation),o.default.createElement("article",{className:s.default.content},e.content))};t.default=i,e.exports=t.default},131:function(e,t){e.exports={single_post:"src-components-SinglePost----style-module---single_post---2vvU_",presentation:"src-components-SinglePost----style-module---presentation---3w9l-"}},111:function(e,t){"use strict";function n(e){var t=e.getMonth(),n={ru:["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},r=e.getDate();return{ru:r+" "+n.ru[t],en:n.en[t]+" "+r}}function r(e){var t=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return t}t.__esModule=!0,t.getDate=n,t.getTime=r},336:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),l=n(111),u=n(453),s=r(u),i=function(e){var t=e.item,n=e.t,r=new Date(t.date);return o.default.createElement("div",null,o.default.createElement("div",{className:s.default.heading},o.default.createElement("h3",{className:s.default.title},t.title),o.default.createElement("span",{className:s.default.date},n({ru:(0,l.getDate)(r).ru+" в "+(0,l.getTime)(r),en:(0,l.getDate)(r).en+" at "+(0,l.getTime)(r)}))),o.default.createElement("div",{className:s.default.description},t.description.description))};t.default=i,e.exports=t.default},453:function(e,t){e.exports={date:"src-templates-events-components-Content----style-module---date---3cdqd",title:"src-templates-events-components-Content----style-module---title---1MSh_",description:"src-templates-events-components-Content----style-module---description---HyGwb",heading:"src-templates-events-components-Content----style-module---heading---1grFq"}},337:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),l=n(454),u=(r(l),n(44)),s=r(u),i=function(e){var t=e.item;return t.image.file?o.default.createElement(s.default,{sizes:{default:{w:640}},file:t.image.file}):null};t.default=i,e.exports=t.default},454:function(e,t){},340:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(1),i=r(s),c=n(45),f=n(43),d=r(f),p=n(109),m=r(p),h=n(336),g=r(h),_=n(337),y=r(_),v=function(e){function t(){var n,r,l;a(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=r=o(this,e.call.apply(e,[this].concat(s))),r.t=r.props.actions.translate,r.renderContent=function(e){return i.default.createElement(g.default,{t:r.t,item:e})},r.renderPresentation=function(e){return i.default.createElement(y.default,{item:e})},l=n,o(r,l)}return l(t,e),t.prototype.render=function(){var e=(this.t,this.props.locale),t=this.props.pathContext.data,n=t[e];return i.default.createElement(d.default,u({},this.state,this.props),i.default.createElement(m.default,{content:this.renderContent(n),presentation:this.renderPresentation(n)}))},t}(s.Component);t.default=(0,c.connectComponent)(v),e.exports=t.default}});
//# sourceMappingURL=component---src-templates-events-single-js-2a8224bba7ff2a4c31c3.js.map