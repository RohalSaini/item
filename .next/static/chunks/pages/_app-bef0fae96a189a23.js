(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(7057)}])},8549:function(e,n,t){"use strict";var r=t(5893),o=t(9008),i=function(e){var n=e.title,t=e.keywords,i=e.description;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width-width, intial-scale=1"}),(0,r.jsx)("meta",{name:"keywords",content:t}),(0,r.jsx)("meta",{name:"description",content:i}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("title",{children:n})]})};i.defaultProps={title:"WebDev Newz",keywords:"web development,programming",description:"Get to the lastest news we dev"},n.Z=i},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},a=t(6273),c=t(387),l=t(7190);var u={};function s(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var n=r(a.resolveHref(o,e.href,!0),2),t=n[0],i=n[1];return{href:t,as:e.as?a.resolveHref(o,e.as):i||t}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,_=e.scroll,y=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,x=r(l.useIntersection({rootMargin:"200px"}),2),j=x[0],w=x[1],g=i.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);i.default.useEffect((function(){var e=w&&t&&a.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,r=u[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,w,y,t,o]);var E={ref:g,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:i,locale:l,scroll:c}))}(e,o,d,p,h,m,_,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),a.isLocalURL(d)&&s(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof y?y:o&&o.locale,N=o&&o.isLocaleDomain&&a.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);E.href=N||a.addBasePath(a.addLocale(p,k,o&&o.defaultLocale))}return i.default.cloneElement(n,E)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,l=o.useRef(),u=r(o.useState(!1),2),s=u[0],f=u[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||s||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!a&&!s){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=t(7294),i=t(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},7057:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(5893),o=(t(906),t(6440)),i=t.n(o),a=t(1664),c=t(9278),l=t.n(c),u=function(){return(0,r.jsx)("nav",{className:l().nav,children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/about",children:"About"})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/",children:"Contact"})})]})})},s=t(2736),f=t.n(s),d=function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{className:f().title,children:[(0,r.jsx)("span",{children:"WebDev"})," News"]}),(0,r.jsx)("p",{className:f().description,children:"Keep up to date"})]})},p=t(8549),v=function(e){var n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{}),(0,r.jsx)(u,{}),(0,r.jsx)("div",{className:i().container,children:(0,r.jsxs)("main",{className:i().main,children:[(0,r.jsx)(d,{}),n]})})]})};function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}var _=function(e){var n=e.Component,t=e.pageProps;return(0,r.jsxs)(v,{children:[(0,r.jsx)("h1",{children:"Hello"}),(0,r.jsx)(n,m({},t))]})}},2736:function(e){e.exports={title:"Header_title__duTZ8",description:"Header_description__NtTnp"}},6440:function(e){e.exports={container:"Home_container__97eC3",main:"Home_main__OVLM4",footer:"Home_footer__zed0_",title:"Home_title__q0Qg4",description:"Home_description__JhekB",code:"Home_code__2i1pD"}},9278:function(e){e.exports={nav:"Nav_nav__bbBcN"}},906:function(){},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(387)}));var t=e.O();_N_E=t}]);