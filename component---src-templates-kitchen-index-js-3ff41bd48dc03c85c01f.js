webpackJsonp([0x8618986bcda6],{58:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),o=a(9),i=n(o),s=a(67),c=n(s),u=function(e){var t=e.items,a=e.renderer;return r.default.createElement("ul",{className:c.default.list},t.map(function(e,t){return r.default.createElement("li",{key:""+e.id+t,className:(0,i.default)(c.default.item,{firstline:t<2})},a(e,t<2))}))};t.default=u,e.exports=t.default},67:function(e,t){e.exports={list:"src-components-PageGrid----style-module---list---2oYkk",item:"src-components-PageGrid----style-module---item---12WvF"}},341:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),o=a(10),i=n(o),s=a(9),c=(n(s),a(458)),u=n(c),f=a(34),d=n(f),m=function(e){var t=e.locale,a=e.t,n=e[t],l=(new Date(n.date),void 0);return l=e.firstline?{default:{w:579},"(max-width:1023px)":{w:459},"(max-width:767px)":{w:679},"(max-width:479px)":{w:399}}:{default:{w:281},"(max-width:1023px)":{w:459},"(max-width:767px)":{w:679},"(max-width:479px)":{w:399}},r.default.createElement(i.default,{to:"/menu/"+e.slug,className:u.default.tile},n.image.file&&r.default.createElement("div",{className:u.default.image_container},r.default.createElement(d.default,{className:u.default.image,sizes:l,file:n.image.file})),!n.image.file&&r.default.createElement("div",{className:u.default.image_placeholder}),r.default.createElement("div",{className:u.default.info},r.default.createElement("span",{className:u.default.title},n.title),r.default.createElement("span",{className:u.default.price},a({ru:n.price+" руб.",en:n.price+" rub"}))))};t.default=m,e.exports=t.default},458:function(e,t){e.exports={tile:"src-templates-kitchen-components-Tile----style-module---tile---1nH2c",info:"src-templates-kitchen-components-Tile----style-module---info---2h7_J",image_container:"src-templates-kitchen-components-Tile----style-module---image_container---39sRd",image_placeholder:"src-templates-kitchen-components-Tile----style-module---image_placeholder---qzAq8",title:"src-templates-kitchen-components-Tile----style-module---title---3mqo3",price:"src-templates-kitchen-components-Tile----style-module---price---3o4hR",image:"src-templates-kitchen-components-Tile----style-module---image---2srLt"}},342:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=a(1),c=n(s),u=a(10),f=(n(u),a(9)),d=(n(f),a(35)),m=a(33),p=n(m),h=a(58),y=n(h),w=a(341),_=n(w),x=function(e){function t(){var a,n,o;l(this,t);for(var s=arguments.length,u=Array(s),f=0;f<s;f++)u[f]=arguments[f];return a=n=r(this,e.call.apply(e,[this].concat(u))),n.itemRenderer=function(e){return c.default.createElement(_.default,i({},e,{t:n.props.actions.translate,locale:n.props.locale}))},o=a,r(n,o)}return o(t,e),t.prototype.render=function(){var e=(this.props.actions.translate,this.props.locale,this.props.pathContext.data.items);return c.default.createElement(p.default,i({},this.state,this.props),c.default.createElement(y.default,{renderer:this.itemRenderer,items:e}))},t}(s.Component);t.default=(0,d.connectComponent)(x),e.exports=t.default}});
//# sourceMappingURL=component---src-templates-kitchen-index-js-3ff41bd48dc03c85c01f.js.map