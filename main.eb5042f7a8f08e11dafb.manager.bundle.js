(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{448:function(module){module.exports=JSON.parse('{"name":"react-use-query-param-string","version":"1.0.5","author":"Justin Mahar <contact@justinmahar.com>","description":"React hook for easily getting and setting query param strings.","homepage":"https://justinmahar.github.io/react-kindling/","main":"./dist/index.js","types":"./dist/index.d.ts","scripts":{"build":"rm -rf ./dist && tsc","watch":"tsc --watch","test":"echo Tests","lint":"eslint \'*/**/*.{js,jsx,ts,tsx}\' --quiet --fix","start":"npm run storybook","storybook":"start-storybook -p 6006","build-storybook":"build-storybook","preship":"npm run build && git add dist && git diff-index --quiet HEAD || git commit -m \\"Build, version, and publish.\\" && npm version patch -m \\"Build, version, and publish.\\"","ship":"npm publish --access public","postship":"git push","update":"rm -rf .lockblocks && git clone -q git@github.com:justinmahar/react-kindling.git ./.lockblocks && lockblocks ./.lockblocks . --verbose && rm -rf .lockblocks"},"license":"MIT","repository":{"type":"git","url":"git+https://github.com/justinmahar/react-use-query-param-string.git"},"bugs":{"url":"https://github.com/justinmahar/react-use-query-param-string/issues"},"keywords":["use query param","use query params","use-query-param","use-query-params","query","string","param","params","react","hook","hooks"],"peerDependencies":{"react":">=16","react-dom":">=16"},"devDependencies":{"@babel/core":"^7.17.2","@storybook/addon-actions":"^6.4.18","@storybook/addon-essentials":"^6.4.18","@storybook/addon-links":"^6.4.18","@storybook/react":"^6.4.18","@typescript-eslint/eslint-plugin":"^5.11.0","@typescript-eslint/parser":"^5.11.0","babel-loader":"^8.2.3","eslint":"^8.8.0","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-react":"^7.28.0","eslint-plugin-react-hooks":"^4.3.0","html-webpack-plugin":"^5.5.0","lockblocks":"^1.0.9","prettier":"^2.5.1","react-html-props":"^1.0.32","react-markdown":"^8.0.0","typescript":"^4.5.5","webpack":"^4.46.0"},"dependencies":{"query-string":"^7.1.1"}}')},475:function(module,exports,__webpack_require__){__webpack_require__(476),__webpack_require__(868),__webpack_require__(860),__webpack_require__(869),__webpack_require__(861),__webpack_require__(864),__webpack_require__(863),__webpack_require__(865),__webpack_require__(862),__webpack_require__(866),__webpack_require__(867),module.exports=__webpack_require__(870)},542:function(module,exports){},868:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var esm=__webpack_require__(123),create=__webpack_require__(218),brandUrl=__webpack_require__(448).homepage,theme=Object(create.a)({base:"light",brandTitle:"useQueryParamString",brandUrl:brandUrl,brandImage:undefined});esm.a.setConfig({theme:theme})}},[[475,2,3]]]);