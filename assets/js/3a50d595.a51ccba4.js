(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{121:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),i=t.n(o);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),u=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||s;return t?i.a.createElement(m,r(r({ref:n},c),{},{components:t})):i.a.createElement(m,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var c=2;c<s;c++)a[c]=t[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(3),i=t(8),s=(t(0),t(121)),a={title:"Extensions Overview"},r={unversionedId:"how-to/extensions-overview",id:"how-to/extensions-overview",isDocsHomePage:!1,title:"Extensions Overview",description:"The Neutralino framework provides a native API that allows users to perform various operating system-level operations such as accessing the filesystem, executing commands, and showing dialog boxes. While users may require additional native APIs like database connectors for building their applications, adding all of them to the core would make the framework bloated. Therefore, the framework offers a WebSocket-based extension system that enables users to extend the Neutralinojs API without having to build the framework from source.",source:"@site/docs/how-to/extensions-overview.md",slug:"/how-to/extensions-overview",permalink:"/docs/how-to/extensions-overview",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/how-to/extensions-overview.md",version:"current",sidebar:"docs",previous:{title:"Modes",permalink:"/docs/configuration/modes"},next:{title:"Auto Updater",permalink:"/docs/how-to/auto-updater"}},l=[{value:"Defining the extensions",id:"defining-the-extensions",children:[]},{value:"Enable the extensions feature",id:"enable-the-extensions-feature",children:[]},{value:"Connecting an extension with Neutralinojs",id:"connecting-an-extension-with-neutralinojs",children:[]},{value:"Sending a message from app to an extension",id:"sending-a-message-from-app-to-an-extension",children:[]},{value:"Sending a message from the extension to app",id:"sending-a-message-from-the-extension-to-app",children:[]},{value:"Terminating an extension instance",id:"terminating-an-extension-instance",children:[]},{value:"Using Neutralinojs from your source files",id:"using-neutralinojs-from-your-source-files",children:[]}],c={toc:l};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The Neutralino framework provides a native API that allows users to perform various operating system-level operations such as accessing the filesystem, executing commands, and showing dialog boxes. While users may require additional native APIs like database connectors for building their applications, adding all of them to the core would make the framework bloated. Therefore, the framework offers a WebSocket-based extension system that enables users to extend the Neutralinojs API without having to build the framework from source."),Object(s.b)("p",null,"The extensions API provides the flexibility to write custom backend code for your application using any programming language. Furthermore, the extensions API allows you to include the Neutralinojs process as a part of any source file."),Object(s.b)("h2",{id:"defining-the-extensions"},"Defining the extensions"),Object(s.b)("p",null,"First, you need to define extensions you use in ",Object(s.b)("inlineCode",{parentName:"p"},"neutralinojs.config.json")," with the following structure."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'"extensions": [\n    {\n        "id": "js.neutralino.sampleextension",\n        "commandLinux": "${NL_PATH}/extensions/binary/linux/ext_bin",\n        "commandDarwin": "${NL_PATH}/extensions/binary/mac/ext_bin",\n        "commandWindows": "${NL_PATH}/extensions/binary/win/ext_bin.exe"\n    },\n    {\n        "id": "js.neutralino.binaryextension",\n        "command": "node ${NL_PATH}/extensions/binary/main.js",\n    }\n]\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"id")," String: A unique key to identify each extension. This id cannot contain any characters except for letters, numbers, and periods."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"command")," String (optional): A cross-platform command to start the extension. Eg: ",Object(s.b)("inlineCode",{parentName:"li"},"node ${NL_PATH}/extensions/binary/main.js"),"\nwill work on every platform."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"commandLinux")," String (optional): Extension startup command for Linux."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"commandDarwin")," String (optional): Extension startup command for macOS."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"commandWindows")," String (optional): Extension startup command for Windows.")),Object(s.b)("h2",{id:"enable-the-extensions-feature"},"Enable the extensions feature"),Object(s.b)("p",null,"The extensions API is disabled by default. Enable extensions by adding the following setting to your app config."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'"enableExtensions": true\n')),Object(s.b)("h2",{id:"connecting-an-extension-with-neutralinojs"},"Connecting an extension with Neutralinojs"),Object(s.b)("p",null,"As you already noticed, an extension is just a separate process. Neutralinojs starts spawning extension instances\nduring the framework bootstrap process and initiates each extension process by sending the following JSON object via\nstandard input streams:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "nlPort": "",\n  "nlToken": "",\n  "nlConnectToken": "",\n  "nlExtensionId": ""\n}\n')),Object(s.b)("p",null,"The above JSON properties contains connectivity information as follows:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"nlPort"),": port of the Neutralinojs server."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"nlToken"),": Access token to use the native API."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"nlConnectToken"),": A token that extension should send during WebSocket connection initialization."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"nlExtensionId"),": Extension identifier.")),Object(s.b)("p",null,"Now, you can connect with the Neutralinojs server with the above details. Use the following WebSocket\nURL to initiate a new WebSocket connection."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"ws://localhost:{port}?extensionId={extensionId}&connectToken={connectToken}\n")),Object(s.b)("h2",{id:"sending-a-message-from-app-to-an-extension"},"Sending a message from app to an extension"),Object(s.b)("p",null,"The extensions API uses an event-based messaging protocol. Every message uses the following JSON structure."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "<event_name>",\n  "data": {}\n}\n')),Object(s.b)("p",null,"Use the built-in extensions API to send a message to any extension, as shown below."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"let extension = 'js.neutralino.sampleextension';\nlet event = 'helloExtension';\nlet data = {\n  testValue: 10,\n};\n\nawait Neutralino.extensions.dispatch(extension, event, data);\n")),Object(s.b)("p",null,"The above code snippet sends a message to the ",Object(s.b)("inlineCode",{parentName:"p"},"js.neutralino.sampleextension")," extension instance. You can send\nmessages to extensions with the ",Object(s.b)("inlineCode",{parentName:"p"},"dispatch")," function anytime. If you send a message before the extension connects\nwith the main process, the Neutralinojs client library queues and sends it when the target extension's connection is\nestablished. In other words, you don't need to worry about extensions' status when you send messages to\nextensions."),Object(s.b)("h2",{id:"sending-a-message-from-the-extension-to-app"},"Sending a message from the extension to app"),Object(s.b)("p",null,"When you connect your extensions with the Neutralinojs main process, you can call the native API by sending\nWebSocket messages to the Neutralinojs process directly. Neutralinojs server processes messages based on the\nfollowing format."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "<id>",\n  "method": "<method>",\n  "accessToken": "<token>",\n  "data": {}\n}\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"id")," String: A ",Object(s.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"UUID")," v4 string."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"method")," String: Native method name. Eg: ",Object(s.b)("inlineCode",{parentName:"li"},"window.setTitle"),"."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"accessToken")," String: Access token generated by the Neutralinojs server."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"data")," Object (optional): Parameters for the native method.")),Object(s.b)("p",null,"You can invoke the ",Object(s.b)("inlineCode",{parentName:"p"},"app.broadcast")," native method to send messages to all app instances. Register a callback\nwith the ",Object(s.b)("inlineCode",{parentName:"p"},"events.on")," in the application code to receive the message send by the extension process."),Object(s.b)("h2",{id:"terminating-an-extension-instance"},"Terminating an extension instance"),Object(s.b)("p",null,"When Neutralino exits, it does not send kill signals to all extension instances. Therefore, it is necessary to stop the extension process when the WebSocket-based IPC (Inter-Process Communication) closes. The following Node.js extension code shows how to do this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'const fs = require(\'fs\');\nconst process = require(\'process\');\nconst WS = require(\'websocket\').w3cwebsocket;\nconst { v4: uuidv4 } = require(\'uuid\');\nconst chalk = require(\'chalk\');\n\n// Obtain required params to start a WS connection from stdIn.\nconst processInput = JSON.parse(fs.readFileSync(process.stdin.fd, \'utf-8\'));\nconst NL_PORT = processInput.nlPort;\nconst NL_TOKEN = processInput.nlToken;\nconst NL_CTOKEN = processInput.nlConnectToken;\nconst NL_EXTID = processInput.nlExtensionId;\n\nconst client = new WS(\n  `ws://localhost:${NL_PORT}?extensionId=${NL_EXTID}&connectToken=${NL_CTOKEN}`\n);\n\nclient.onerror = () => log("Connection error!", "ERROR");\nclient.onopen = () => log("Connected");\nclient.onclose = () => process.exit();\n\nclient.onmessage = (e) => {\n  const { event, data } = JSON.parse(e.data);\n\n  if (event === "eventToExtension") {\n    log(data);\n\n    client.send(\n      JSON.stringify({\n        id: uuidv4(),\n        method: "app.broadcast",\n        accessToken: nl_token,\n        data: { event: "eventFromExtension", data: "Hello app!" },\n      })\n    );\n  }\n};\n\nfunction log(message, type = "INFO") {\n  const logLine = `[${nl_extension_id}]: ${chalk[\n    type === "INFO" ? "green" : "red"\n  ](type)} ${message}`;\n  console[type === "INFO" ? "log" : "error"](logLine);\n}\n')),Object(s.b)("p",null,"This code implements a simple Node.js extension for Neutralinojs, which establishes a\nWebSocket connection to the Neutralinojs server and handles incoming messages from the server.\nIt also sends a message to the server using the client.send method when it receives a specific event\nfrom the server."),Object(s.b)("p",null,"For more information on how to terminate an extension instance, you can refer to the sample extension source.\n",Object(s.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs/tree/main/bin/extensions/sampleextension"},"https://github.com/neutralinojs/neutralinojs/tree/main/bin/extensions/sampleextension")),Object(s.b)("h2",{id:"using-neutralinojs-from-your-source-files"},"Using Neutralinojs from your source files"),Object(s.b)("p",null,"The above approach helps you to extend Neutralinojs API with a custom backend code. Neutralinojs process can\nspawn multiple extensions as child processes and communicate with the internal messaging protocol. On the other\nhand, you can spawn Neutralinojs processes from your own processes and communicate with the same messaging\nprotocol. Using this approach, it's possible to write Neutralinojs apps with any backend language."),Object(s.b)("p",null,"You can obtain authentication details for the Neutralinojs process by setting your config as below."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'"exportAuthInfo": true\n')),Object(s.b)("p",null,"The above setting exports authentication details to ",Object(s.b)("inlineCode",{parentName:"p"},"${NL_PATH}/.tmp/auth_info.json")," with the following format."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "nlPort": "<port>",\n  "nlToken": "<token>",\n  "nlConnectToken": "<connect_token>"\n}\n')),Object(s.b)("p",null,"Connect with the Neutralinojs process by using the extension API as usual with the extension identifier\nyou used in the application configuratiol file."))}u.isMDXComponent=!0}}]);