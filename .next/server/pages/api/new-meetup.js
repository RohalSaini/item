"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ hanlder)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: external "regenerator-runtime"
const external_regenerator_runtime_namespaceObject = require("regenerator-runtime");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js


const uri = "mongodb+srv://rohal:rohal@cluster0.2l7kq.mongodb.net/meetups?retryWrites=true&w=majority";
async function hanlder(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        //const { title,image,address,description} = data;
        console.log(data);
        const client = await external_mongodb_namespaceObject.MongoClient.connect(uri);
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        client.close();
        res.status(201).json({
            message: 'Meet up inserted',
            data: result
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
var __webpack_exports__ = (__webpack_exec__(690));
module.exports = __webpack_exports__;

})();