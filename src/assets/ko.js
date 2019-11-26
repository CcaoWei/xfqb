const Const = require("./Const");
const message = {
    nav: [{
            name: "业务分类ko",
            link: "service"
        },
        {
            name: "铁岭优选ko",
            link: "best"
        },
        {
            name: "银行分行ko",
            link: "branch"
        },
        {
            name: "产品采购ko",
            link: "purchase"
        },
        {
            name: "政策法规ko",
            link: "statute"
        },
        {
            name: "通知公告ko",
            link: "notice"
        },
        {
            name: "关于我们ko",
            link: "about"
        }
    ],
    businessDataTab: [{
            title: "账户管理k",
            type: Const.BUSINESS_DATA.ACCOUNT_MANAGEMENT
        },
        {
            title: "转账汇款k",
            type: Const.BUSINESS_DATA.TRANSFER_REMITTANCE
        },
        {
            title: "定活互转k",
            type: Const.BUSINESS_DATA.CONSTANT_ROTATION
        },
        {
            title: "代理缴费k",
            type: Const.BUSINESS_DATA.AGENCY_PAYMENT
        },
        {
            title: "特色业务k",
            type: Const.BUSINESS_DATA.CHARACTERISTIC_BUSINESS
        },
        {
            title: "信用卡k",
            type: Const.BUSINESS_DATA.CREDIT_CARD
        }
    ],
    purchaseDataTab: [{
        title: "集团采购k",
        type: Const.PURCHASE_DATA.GROUP_PURCHASING
    }, ],
    regulationsDataTab: [{
            title: "行业法规K",
            type: Const.REGULATIONS_DATA.INDUSTY_REGULATIONS
        },
        {
            title: "政策解读K",
            type: Const.REGULATIONS_DATA.POLICY_INTERPRETATION
        },
    ],

    noticeDataTab: [{
            title: "国内咨询K",
            type: Const.NOTICE_DATA.DOMESTIC_CONSULATION
        },
        {
            title: "国际咨询K",
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
//                 name: "业务分类ko",
//                 link: "service"
//             },
//             {
//                 name: "铁岭优选ko",
//                 link: "best"
//             },
//             {
//                 name: "银行分行ko",
//                 link: "branch"
//             },
//             {
//                 name: "产品采购ko",
//                 link: "purchase"
//             },
//             {
//                 name: "政策法规ko",
//                 link: "statute"
//             },
//             {
//                 name: "通知公告ko",
//                 link: "notice"
//             },
//             {
//                 name: "关于我们ko",
//                 link: "about"
//             }
//         ],
//         businessDataTab: [{
//                 title: "账户管理k",
//                 type: Const.BUSINESS_DATA.ACCOUNT_MANAGEMENT,
//             },
//             {
//                 title: "转账汇款k",
//                 type: Const.BUSINESS_DATA.TRANSFER_REMITTANCE,
//             },
//             {
//                 title: "定活互转k",
//                 type: Const.BUSINESS_DATA.CONSTANT_ROTATION,
//             },
//             {
//                 title: "代理缴费k",
//                 type: Const.BUSINESS_DATA.AGENCY_PAYMENT,
//             },
//             {
//                 title: "特色业务k",
//                 type: Const.BUSINESS_DATA.CHARACTERISTIC_BUSINESS,
//             },
//             {
//                 title: "信用卡k",
//                 type: Const.BUSINESS_DATA.CREDIT_CARD,
//             }
//         ],
//         welcome: "환영하다"
//     }
// }