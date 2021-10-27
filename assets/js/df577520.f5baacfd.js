(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),s=a,m=p["".concat(i,".").concat(s)]||p[s]||u[s]||l;return n?r.a.createElement(m,b(b({ref:t},c),{},{components:n})):r.a.createElement(m,b({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),l=(n(0),n(104)),i={title:"Global Variables"},b={unversionedId:"developer-environment/global-variables",id:"developer-environment/global-variables",isDocsHomePage:!1,title:"Global Variables",description:"These JavaScript variables can be used anywhere because these variables are defined in the window scope.",source:"@site/docs/developer-environment/global-variables.md",slug:"/developer-environment/global-variables",permalink:"/docs/developer-environment/global-variables",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/developer-environment/global-variables.md",version:"current",sidebar:"docs",previous:{title:"Modes",permalink:"/docs/configuration/modes"},next:{title:"Distribution Overview",permalink:"/docs/distribution/overview"}},o=[{value:"Predefined global variables",id:"predefined-global-variables",children:[]},{value:"Custom global variables",id:"custom-global-variables",children:[]}],c={toc:o};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"These JavaScript variables can be used anywhere because these variables are defined in the window scope."),Object(l.b)("h2",{id:"predefined-global-variables"},"Predefined global variables"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_OS")),Object(l.b)("td",{parentName:"tr",align:null},"Operating system name: ",Object(l.b)("inlineCode",{parentName:"td"},"Linux"),", ",Object(l.b)("inlineCode",{parentName:"td"},"Windows"),", or ",Object(l.b)("inlineCode",{parentName:"td"},"Darwin"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_APPID")),Object(l.b)("td",{parentName:"tr",align:null},"Application identifier")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_PORT")),Object(l.b)("td",{parentName:"tr",align:null},"Application port")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_MODE")),Object(l.b)("td",{parentName:"tr",align:null},"Mode of the application: ",Object(l.b)("inlineCode",{parentName:"td"},"window"),", ",Object(l.b)("inlineCode",{parentName:"td"},"browser"),", or ",Object(l.b)("inlineCode",{parentName:"td"},"cloud"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_VERSION")),Object(l.b)("td",{parentName:"tr",align:null},"Neutralinojs server version")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_CVERSION")),Object(l.b)("td",{parentName:"tr",align:null},"Neutralinojs client version")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_CWD")),Object(l.b)("td",{parentName:"tr",align:null},"Current working directory")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_PATH")),Object(l.b)("td",{parentName:"tr",align:null},"Application path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_ARGS")),Object(l.b)("td",{parentName:"tr",align:null},"Command-line arguments")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_PID")),Object(l.b)("td",{parentName:"tr",align:null},"Identifier of the current process")))),Object(l.b)("h2",{id:"custom-global-variables"},"Custom global variables"),Object(l.b)("p",null,"You make custom global variables too via ",Object(l.b)("inlineCode",{parentName:"p"},"neutralino.config.json"),", as shown\nbelow."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'....\n"globalVariables": {\n    "TEST": "Test Value"\n},\n....\n')),Object(l.b)("p",null,"The above custom global variable's value can be accessed with ",Object(l.b)("inlineCode",{parentName:"p"},"NL_TEST"),"."))}d.isMDXComponent=!0}}]);