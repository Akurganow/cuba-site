webpackJsonp([0xd0aa68787935],{58:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),o=a(8),i=l(o),s=a(67),u=l(s),c=function(e){var t=e.items,a=e.renderer;return r.default.createElement("ul",{className:u.default.list},t.map(function(e,t){return r.default.createElement("li",{key:""+e.id+t,className:(0,i.default)(u.default.item,{firstline:t<2})},a(e,t<2))}))};t.default=c,e.exports=t.default},67:function(e,t){e.exports={list:"src-components-PageGrid----style-module---list---2oYkk",item:"src-components-PageGrid----style-module---item---12WvF"}},331:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),o=a(10),i=l(o),s=a(8),u=(l(s),a(454)),c=l(u),f=a(31),d=l(f),p=function(e){var t=e.locale,a=e.t,l=e[t],n=(new Date(l.date),void 0);return n=e.firstline?{default:{w:579},"(max-width:1023px)":{w:459},"(max-width:767px)":{w:679},"(max-width:479px)":{w:399}}:{default:{w:281},"(max-width:1023px)":{w:459},"(max-width:767px)":{w:679},"(max-width:479px)":{w:399}},r.default.createElement(i.default,{to:"/menu/"+e.slug,className:c.default.tile},l.image.file&&r.default.createElement("div",{className:c.default.image_container},r.default.createElement(d.default,{className:c.default.image,sizes:n,file:l.image.file})),!l.image.file&&r.default.createElement("div",{className:c.default.image_placeholder}),r.default.createElement("div",{className:c.default.info},r.default.createElement("span",{className:c.default.title},l.title),r.default.createElement("span",{className:c.default.price},a({ru:l.price+" руб.",en:l.price+" rub"}))))};t.default=p,e.exports=t.default},454:function(e,t){e.exports={tile:"src-templates-bar-components-Tile----style-module---tile---1RSXx",info:"src-templates-bar-components-Tile----style-module---info---2CBQP",image_container:"src-templates-bar-components-Tile----style-module---image_container---KdBK4",image_placeholder:"src-templates-bar-components-Tile----style-module---image_placeholder---e_nxq",title:"src-templates-bar-components-Tile----style-module---title---SxOxP",price:"src-templates-bar-components-Tile----style-module---price---1QpYo",image:"src-templates-bar-components-Tile----style-module---image---u4HKx"}},332:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},s=a(1),u=l(s),c=a(10),f=(l(c),a(8)),d=(l(f),a(35)),p=a(34),m=l(p),h=a(58),x=l(h),y=a(331),w=l(y),_=function(e){function t(){var a,l,o;n(this,t);for(var s=arguments.length,c=Array(s),f=0;f<s;f++)c[f]=arguments[f];return a=l=r(this,e.call.apply(e,[this].concat(c))),l.itemRenderer=function(e){return u.default.createElement(w.default,i({},e,{t:l.props.actions.translate,locale:l.props.locale}))},o=a,r(l,o)}return o(t,e),t.prototype.render=function(){var e=(this.props.actions.translate,this.props.locale,this.props.pathContext.data.items);return u.default.createElement(m.default,i({},this.state,this.props),u.default.createElement(x.default,{renderer:this.itemRenderer,items:e}))},t}(s.Component);t.default=(0,d.connectComponent)(_),e.exports=t.default}});
//# sourceMappingURL=component---src-templates-bar-index-js-c9333614cc640850a61f.js.map