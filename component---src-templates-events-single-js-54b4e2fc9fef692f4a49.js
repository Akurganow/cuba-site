webpackJsonp([0x767162c0de90],{63:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),s=n(8),l=(r(s),n(74)),u=r(l),i=function(e){return o.default.createElement("section",{className:u.default.single_post},o.default.createElement("aside",{className:u.default.presentation},e.presentation),o.default.createElement("article",{className:u.default.content},e.content))};t.default=i,e.exports=t.default},74:function(e,t){e.exports={single_post:"src-components-SinglePost----style-module---single_post---2vvU_",presentation:"src-components-SinglePost----style-module---presentation---3w9l-"}},118:function(e,t){"use strict";function n(e){var t=e.getMonth(),n={ru:["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},r=e.getDate();return{ru:r+" "+n.ru[t],en:n.en[t]+" "+r}}function r(e){var t=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return t}t.__esModule=!0,t.getDate=n,t.getTime=r},353:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),s=n(118),l=n(482),u=r(l),i=function(e){var t=e.item,n=e.t,r=new Date(t.date);return o.default.createElement("div",null,o.default.createElement("div",{className:u.default.heading},o.default.createElement("h3",{className:u.default.title},t.title),o.default.createElement("span",{className:u.default.date},n({ru:(0,s.getDate)(r).ru+" в "+(0,s.getTime)(r),en:(0,s.getDate)(r).en+" at "+(0,s.getTime)(r)}))),o.default.createElement("div",{className:u.default.description},t.description&&t.description.description))};t.default=i,e.exports=t.default},482:function(e,t){e.exports={date:"src-templates-events-components-Content----style-module---date---3cdqd",title:"src-templates-events-components-Content----style-module---title---1MSh_",description:"src-templates-events-components-Content----style-module---description---HyGwb",heading:"src-templates-events-components-Content----style-module---heading---1grFq"}},354:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),s=n(483),l=r(s),u=n(30),i=r(u),c=function(e){var t=e.item;return t.image&&t.image.file?o.default.createElement(i.default,{className:l.default.picture,sizes:{default:{w:360},"(max-width: 1023px)":{w:380},"(max-width: 767px)":{w:690},"(max-width: 479px)":{w:430},"(min-width: 320px)":{w:290}},file:t.image.file}):null};t.default=c,e.exports=t.default},483:function(e,t){e.exports={picture:"src-templates-events-components-Presentation----style-module---picture---21gyQ"}},357:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),i=r(u),c=n(36),d=n(35),f=r(d),p=n(63),m=r(p),h=n(353),g=r(h),y=n(354),_=r(y),v=function(e){function t(){var n,r,s;a(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=r=o(this,e.call.apply(e,[this].concat(u))),r.t=r.props.actions.translate,r.renderContent=function(e){return i.default.createElement(g.default,{t:r.t,item:e})},r.renderPresentation=function(e){return i.default.createElement(_.default,{item:e})},s=n,o(r,s)}return s(t,e),t.prototype.render=function(){var e=(this.t,this.props.locale),t=this.props.pathContext.data,n=t[e];return i.default.createElement(f.default,l({},this.state,this.props),i.default.createElement(m.default,{content:this.renderContent(n),presentation:this.renderPresentation(n)}))},t}(u.Component);t.default=(0,c.connectComponent)(v),e.exports=t.default}});
//# sourceMappingURL=component---src-templates-events-single-js-54b4e2fc9fef692f4a49.js.map