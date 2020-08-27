let moduleMap = {
'assets/internal/index.js' () { return require('assets/internal/index.js') },
'assets/img/index.js' () { return require('assets/img/index.js') },
// tail
};

window.__cocos_require__ = function (moduleName) {
    let func = moduleMap[moduleName];
    if (!func) {
        throw new Error(`cannot find module ${moduleName}`);
    }
    return func();
};