"use strict";
(() => {
var exports = {};
exports.id = 488;
exports.ids = [488];
exports.modules = {

/***/ 488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "db": () => (/* binding */ db),
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "serverless-mysql"
const external_serverless_mysql_namespaceObject = require("serverless-mysql");
var external_serverless_mysql_default = /*#__PURE__*/__webpack_require__.n(external_serverless_mysql_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/mysql.js

const db = external_serverless_mysql_default()({
    config: {
        host: 'localhost',
        database: 'angularjs',
        user: 'root',
        password: ''
    }
});
async function handler(req, res) {
    try {
        const results = await db.query('select * from login');
        await db.end();
        res.json({
            data: results
        });
    } catch (e) {
        res.json({
            error: e.message
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(488));
module.exports = __webpack_exports__;

})();