webpackJsonp([0x6076cb9b4688],{57:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=l(1),a=n(r),o=l(11),s=n(o),i=l(66),c=n(i),u=function(e){var t=e.items,l=e.renderer;return a.default.createElement("ul",{className:c.default.list},t.map(function(e,t){return a.default.createElement("li",{key:""+e.id+t,className:(0,s.default)(c.default.item,{firstline:t<2})},l(e))}))};t.default=u,e.exports=t.default},66:function(e,t){e.exports={list:"src-components-PageGrid----style-module---list---2oYkk",item:"src-components-PageGrid----style-module---item---12WvF"}},342:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=l(1),a=n(r),o=l(8),s=n(o),i=l(11),c=(n(i),l(460)),u=n(c),f=function(e){var t=e.locale,l=(e.t,e[t]);return a.default.createElement(s.default,{to:"/gallery/"+e.slug,className:u.default.tile},l.image[0].responsiveResolution&&a.default.createElement("div",{className:u.default.image_container},a.default.createElement("img",{srcSet:l.image[0].responsiveResolution.srcSet,src:l.image[0].responsiveResolution.src})),!l.image[0].responsiveResolution&&a.default.createElement("div",{className:u.default.image_placeholder}),a.default.createElement("div",{className:u.default.info},a.default.createElement("span",{className:u.default.title},l.title)))};t.default=f,e.exports=t.default},460:function(e,t){e.exports={tile:"src-templates-gallery-components-Tile----style-module---tile---1ivC9",info:"src-templates-gallery-components-Tile----style-module---info---LYmXD",image_container:"src-templates-gallery-components-Tile----style-module---image_container---3M9bt",image_placeholder:"src-templates-gallery-components-Tile----style-module---image_placeholder---32-O8",title:"src-templates-gallery-components-Tile----style-module---title---3fgI-",image:"src-templates-gallery-components-Tile----style-module---image---2lqwt"}},343:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},i=l(1),c=n(i),u=l(8),f=(n(u),l(11)),p=(n(f),l(34)),m=l(33),d=n(m),y=l(57),g=n(y),h=l(342),_=n(h),v=function(e){function t(){var l,n,o;r(this,t);for(var i=arguments.length,u=Array(i),f=0;f<i;f++)u[f]=arguments[f];return l=n=a(this,e.call.apply(e,[this].concat(u))),n.itemRenderer=function(e){return c.default.createElement(_.default,s({},e,{t:n.props.actions.translate,locale:n.props.locale}))},o=l,a(n,o)}return o(t,e),t.prototype.render=function(){var e=(this.props.actions.translate,this.props.locale,this.props.pathContext.data.items);return c.default.createElement(d.default,s({},this.state,this.props),c.default.createElement(g.default,{renderer:this.itemRenderer,items:e}))},t}(i.Component);t.default=(0,p.connectComponent)(v),e.exports=t.default}});
//# sourceMappingURL=component---src-templates-gallery-index-js-53427087dadd1089c83e.js.map