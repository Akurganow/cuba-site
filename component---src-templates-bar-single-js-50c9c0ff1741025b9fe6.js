webpackJsonp([0xf95c8d7bc672],{59:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),l=n(10),s=(r(l),n(68)),u=r(s),i=function(e){return a.default.createElement("section",{className:u.default.single_post},a.default.createElement("aside",{className:u.default.presentation},e.presentation),a.default.createElement("article",{className:u.default.content},e.content))};t.default=i,e.exports=t.default},68:function(e,t){e.exports={single_post:"src-components-SinglePost----style-module---single_post---2vvU_",presentation:"src-components-SinglePost----style-module---presentation---3w9l-"}},329:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),l=n(452),s=r(l),u=function(e){var t=e.item,n=e.t;return a.default.createElement("div",null,a.default.createElement("div",{className:s.default.heading},a.default.createElement("h3",{className:s.default.title},t.title),a.default.createElement("span",{className:s.default.price},n({ru:t.price+" руб.",en:t.price+" rub"}))),a.default.createElement("div",{className:s.default.description},t.description.description))};t.default=u,e.exports=t.default},452:function(e,t){e.exports={price:"src-templates-bar-components-Content----style-module---price---19Z9I",title:"src-templates-bar-components-Content----style-module---title---3oGPA",description:"src-templates-bar-components-Content----style-module---description---3ox2v",heading:"src-templates-bar-components-Content----style-module---heading---2-gcu"}},330:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),l=n(453),s=(r(l),n(31)),u=r(s),i=function(e){var t=e.item;return t.image.file?a.default.createElement(u.default,{sizes:{default:{w:640}},file:t.image.file}):null};t.default=i,e.exports=t.default},453:function(e,t){e.exports={presentation:"src-templates-bar-components-Presentation----style-module---presentation---1VrOR"}},333:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),i=r(u),c=n(10),f=(r(c),n(8)),p=(r(f),n(35)),d=n(34),m=r(d),h=n(59),_=r(h),y=n(329),b=r(y),v=n(330),E=r(v),g=function(e){function t(){var n,r,l;o(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=r=a(this,e.call.apply(e,[this].concat(u))),r.t=r.props.actions.translate,r.renderContent=function(e){return i.default.createElement(b.default,{t:r.t,item:e})},r.renderPresentation=function(e){return i.default.createElement(E.default,{item:e})},l=n,a(r,l)}return l(t,e),t.prototype.render=function(){var e=(this.t,this.props.locale),t=this.props.pathContext.data,n=t[e];return i.default.createElement(m.default,s({},this.state,this.props),i.default.createElement(_.default,{content:this.renderContent(n),presentation:this.renderPresentation(n)}))},t}(u.Component);t.default=(0,p.connectComponent)(g),e.exports=t.default}});
//# sourceMappingURL=component---src-templates-bar-single-js-50c9c0ff1741025b9fe6.js.map