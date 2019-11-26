const Const = require("./Const");
const message = {
    nav: [{
            name: "业务分类",
            link: "service"
        },
        {
            name: "铁岭优选",
            link: "best"
        },
        {
            name: "银行分行",
            link: "branch"
        },
        {
            name: "产品采购",
            link: "purchase"
        },
        {
            name: "政策法规",
            link: "statute"
        },
        {
            name: "通知公告",
            link: "notice"
        },
        {
            name: "关于我们",
            link: "about"
        }
    ],
    businessDataTab: [{
            title: "账户管理",
            type: Const.BUSINESS_DATA.ACCOUNT_MANAGEMENT
        },
        {
            title: "转账汇款",
            type: Const.BUSINESS_DATA.TRANSFER_REMITTANCE
        },
        {
            title: "定活互转",
            type: Const.BUSINESS_DATA.CONSTANT_ROTATION
        },
        {
            title: "代理缴费",
            type: Const.BUSINESS_DATA.AGENCY_PAYMENT
        },
        {
            title: "特色业务",
            type: Const.BUSINESS_DATA.CHARACTERISTIC_BUSINESS
        },
        {
            title: "信用卡",
            type: Const.BUSINESS_DATA.CREDIT_CARD
        }
    ],
    purchaseDataTab: [{
        title: "集团采购",
        type: Const.PURCHASE_DATA.GROUP_PURCHASING
    }, ],
    regulationsDataTab: [{
            title: "行业法规",
            type: Const.REGULATIONS_DATA.INDUSTY_REGULATIONS
        },
        {
            title: "政策解读",
            type: Const.REGULATIONS_DATA.POLICY_INTERPRETATION
        },
    ],

    noticeDataTab: [{
            title: "国内咨询",
            type: Const.NOTICE_DATA.DOMESTIC_CONSULATION
        },
        {
            title: "国际咨询",
            type: Const.NOTICE_DATA.OVERSEAS_CONSULATION
        },
    ]
};
module.exports = {
    Const,
    message
};
// module.exports = {
//     message: {
//         nav: [{
//                 name: "业务分类",
//                 link: "service"
//             },
//             {
//                 name: "铁岭优选",
//                 link: "best"
//             },
//             {
//                 name: "银行分行",
//                 link: "branch"
//             },
//             {
//                 name: "产品采购",
//                 link: "purchase"
//             },
//             {
//                 name: "政策法规",
//                 link: "statute"
//             },
//             {
//                 name: "通知公告",
//                 link: "notice"
//             },
//             {
//                 name: "关于我们",
//                 link: "about"
//             }
//         ],
//         businessDataTab: [{
//                 title: "账户管理",
//                 type: Const.BUSINESS_DATA.ACCOUNT_MANAGEMENT,
//             },
//             {
//                 title: "转账汇款",
//                 type: Const.BUSINESS_DATA.TRANSFER_REMITTANCE,
//             },
//             {
//                 title: "定活互转",
//                 type: Const.BUSINESS_DATA.CONSTANT_ROTATION,
//             },
//             {
//                 title: "代理缴费",
//                 type: Const.BUSINESS_DATA.AGENCY_PAYMENT,
//             },
//             {
//                 title: "特色业务",
//                 type: Const.BUSINESS_DATA.CHARACTERISTIC_BUSINESS,
//             },
//             {
//                 title: "信用卡",
//                 type: Const.BUSINESS_DATA.CREDIT_CARD,
//             }
//         ],
//         welcome: "欢迎"
//     }
// }