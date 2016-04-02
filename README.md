# acorn-qml

Base on [eclipse/cdt/qt/org.eclipse.cdt.qt.core/acorn-qml/](https://github.com/eclipse/cdt/tree/master/qt/org.eclipse.cdt.qt.core/acorn-qml)

Add ES7 Mix compilation.
支持与ES7混合编译（PS：import关键字使用qml的语法解析）

## Install

```shell
# acorn module has been installed 
npm install acorn-qml --save
```

# Usage

正常ES5的QML-Parser
```js
const acorn  = require("acorn");
require("acorn-qml").install(acorn);

var code = `YOUR QML CODE.`

acorn.parse(code, {
    plugins: {
        qml: true
    },
    ecmaVersion: 5,
});
```

与ES7混编的QML-Parser
```js
const acorn  = require("acorn");
require("acorn-qml").install(acorn);

var code = `YOUR QML CODE.`

const res = acorn.parse(code, {
    plugins: {
        qml: true
    },
    ecmaVersion: 7,
    ignoreQmlEcmaVersion: true
});
```