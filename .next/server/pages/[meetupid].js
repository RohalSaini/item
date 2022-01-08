(() => {
var exports = {};
exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 172:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__ATwpR"
};


/***/ }),

/***/ 718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetupid_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.scss
var MeetupDetail_module = __webpack_require__(172);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetUpDetail.js



function MeetUpDetail(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MeetupDetail_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    " ",
                    props.title
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.description
            })
        ]
    }));
}
/* harmony default export */ const meetups_MeetUpDetail = (MeetUpDetail);

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(13);
;// CONCATENATED MODULE: external "regenerator-runtime"
const external_regenerator_runtime_namespaceObject = require("regenerator-runtime");
;// CONCATENATED MODULE: ./pages/[meetupid]/index.js




const uri = "mongodb+srv://rohal:rohal@cluster0.2l7kq.mongodb.net/meetups?retryWrites=true&w=majority";
function MeetUpDetails(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetUpDetail, {
        image: props.meetupData.image,
        title: props.meetupData.title,
        description: props.meetupData.description,
        address: props.meetupData.address
    }));
}
async function getServerSideProps(context) {
    const meetupId = context.params.meetupid;
    const client = await external_mongodb_.MongoClient.connect(uri);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetup = await meetupsCollection.findOne({
        _id: (0,external_mongodb_.ObjectId)(meetupId)
    });
    client.close();
    //console.log(meetupId)
    return {
        props: {
            meetupData: {
                id: meetup._id.toString(),
                title: meetup.title,
                description: meetup.description,
                address: meetup.address,
                image: meetup.image
            }
        }
    };
}
// export async function getStaticPaths() {
//     const client = await MongoClient.connect(uri);
//     const db = client.db();
//     const meetupsCollection = db.collection('meetups');
//     const meetups = await meetupsCollection.find({}).toArray()
//     client.close();
//     console.log("meetups up path ");
//     console.log("++++++++++++++")
//     console.log(meetups)
//     console.log("++++++++++++++++++++")
//     return {
//         paths: meetups.map(meetup => ({params: {
//             meetupid: meetup._id.toString()
//         }})),
//         fallback: true
//     }
// }
/* harmony default export */ const _meetupid_ = (MeetUpDetails);


/***/ }),

/***/ 13:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(718));
module.exports = __webpack_exports__;

})();