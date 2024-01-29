(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),l=(n(0),n(121)),b={title:"Error Codes"},i={unversionedId:"api/error-codes",id:"api/error-codes",isDocsHomePage:!1,title:"Error Codes",description:"If a particular native API call fails, Neutralinojs client library rejects the pending Promise with an error object.",source:"@site/docs/api/error-codes.md",slug:"/api/error-codes",permalink:"/docs/api/error-codes",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/error-codes.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.window",permalink:"/docs/api/window"},next:{title:"Global Variables",permalink:"/docs/api/global-variables"}},d=[{value:"Native API error codes",id:"native-api-error-codes",children:[]}],c={toc:d};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"If a particular native API call fails, Neutralinojs client library rejects the pending Promise with an error object."),Object(l.b)("p",null,"The error object has the following structure:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'{\n    code: "<code>",\n    message: "<message>"\n}\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"code")," String: Error code."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"message")," String: Error message")),Object(l.b)("h2",{id:"native-api-error-codes"},"Native API error codes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Error code"),Object(l.b)("th",{parentName:"tr",align:null},"Message"),Object(l.b)("th",{parentName:"tr",align:null},"Thrown by"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_FS_DIRCRER")),Object(l.b)("td",{parentName:"tr",align:null},"Unable to create directory."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"os.createDirectory"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_FS_REMVERR")),Object(l.b)("td",{parentName:"tr",align:null},"Unable to remove path."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"os.remove"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_OS_TRAYIER")),Object(l.b)("td",{parentName:"tr",align:null},"Unable to initialize the tray menu. This error is typically thrown when GNU/Linux systems don't contain an app indicator library."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"os.setTray"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_FS_FILRDER")),Object(l.b)("td",{parentName:"tr",align:null},"File read error."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"filesystem.readFile"),", ",Object(l.b)("inlineCode",{parentName:"td"},"filesystem.readBinaryFile"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_FS_FILWRER")),Object(l.b)("td",{parentName:"tr",align:null},"File write error."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"filesystem.writeFile"),", ",Object(l.b)("inlineCode",{parentName:"td"},"filesystem.writeBinaryFile"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_FS_FILOPER")),Object(l.b)("td",{parentName:"tr",align:null},"File open error."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"filesystem.openFile"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_FS_UNLTOUP")),Object(l.b)("td",{parentName:"tr",align:null},"Unable to update opened file id."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"filesystem.updateOpenedFile"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_FS_UNLTFOP")),Object(l.b)("td",{parentName:"tr",align:null},"Unable to find opened file id."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"filesystem.getOpenedFileInfo"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_FS_NOPATHE")),Object(l.b)("td",{parentName:"tr",align:null},"No file or directory."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"filesystem.getStats"),", ",Object(l.b)("inlineCode",{parentName:"td"},"filesystem.readDirectory"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_FS_COPYERR")),Object(l.b)("td",{parentName:"tr",align:null},"Copy error."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"filesystem.copy"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_FS_MOVEERR")),Object(l.b)("td",{parentName:"tr",align:null},"Move error."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"filesystem.move"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_FS_UNLCWAT")),Object(l.b)("td",{parentName:"tr",align:null},"Unable to create watcher."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"filesystem.createWatcher"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_FS_NOWATID")),Object(l.b)("td",{parentName:"tr",align:null},"Unable to find watcher."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"filesystem.removeWatcher"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_OS_UNLTOUP")),Object(l.b)("td",{parentName:"tr",align:null},"Unable to update the spawned process due to an invalid process identifier or action."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"os.updateSpawnedProcess"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_OS_INVMSGA")),Object(l.b)("td",{parentName:"tr",align:null},"Invalid message box arguments."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"os.showMessageBox"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_OS_INVKNPT")),Object(l.b)("td",{parentName:"tr",align:null},"Invalid platform path name."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"os.getPath"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_ST_INVSTKY")),Object(l.b)("td",{parentName:"tr",align:null},"Invalid storage key."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"storage.getData"),", ",Object(l.b)("inlineCode",{parentName:"td"},"storage.setData"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_ST_STKEYWE")),Object(l.b)("td",{parentName:"tr",align:null},"Storage write error."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"storage.setData"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_RT_INVTOKN")),Object(l.b)("td",{parentName:"tr",align:null},"Invalid access token."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"all"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_RT_NATPRME")),Object(l.b)("td",{parentName:"tr",align:null},"No permission to execute the provided native method."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"all"),",")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_RT_APIPRME")),Object(l.b)("td",{parentName:"tr",align:null},"No permission to use the native API."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"all"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_RT_NATRTER")),Object(l.b)("td",{parentName:"tr",align:null},"Native method runtime error. Mostly occured due to missing parameters."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"all"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_RT_NATNTIM")),Object(l.b)("td",{parentName:"tr",align:null},"Native method is not implemented."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"internal"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_CL_NSEROFF")),Object(l.b)("td",{parentName:"tr",align:null},"Neutralino server is not reachable."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"all"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_EX_EXTNOTC")),Object(l.b)("td",{parentName:"tr",align:null},"Extension is not connected yet"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"extensions.dispatch"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_UP_CUPDMER")),Object(l.b)("td",{parentName:"tr",align:null},"Invalid update manifest or mismatching applicationId"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"updater.checkForUpdates"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_UP_CUPDERR")),Object(l.b)("td",{parentName:"tr",align:null},"Unable to fetch update manifest"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"updater.checkForUpdates"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_UP_UPDNOUF")),Object(l.b)("td",{parentName:"tr",align:null},"No update manifest loaded"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"updater.install"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NE_UP_UPDINER")),Object(l.b)("td",{parentName:"tr",align:null},"Update installation error"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"updater.install"))))))}o.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},N=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=o(n),N=a,O=p["".concat(b,".").concat(N)]||p[N]||m[N]||l;return n?r.a.createElement(O,i(i({ref:t},c),{},{components:n})):r.a.createElement(O,i({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=N;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var c=2;c<l;c++)b[c]=n[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}N.displayName="MDXCreateElement"}}]);