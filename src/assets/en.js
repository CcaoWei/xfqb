const Const = require("./Const");
const message = {
    nav: [{
            name: "业务分类en",
            link: "service"
        },
        {
            name: "铁岭优选en",
            link: "best"
        },
        {
            name: "银行分行en",
            link: "branch"
        },
        {
            name: "产品采购en",
            link: "purchase"
        },
        {
            name: "政策法规en",
            link: "statute"
        },
        {
            name: "通知公告en",
            link: "notice"
        },
        {
            name: "关于我们en",
            link: "about"
        }
    ],
    businessDataTab: [{
            title: "账户管理e",
            type: Const.BUSINESS_DATA.ACCOUNT_MANAGEMENT
        },
        {
            title: "转账汇款e",
            type: Const.BUSINESS_DATA.TRANSFER_REMITTANCE
        },
        {
            title: "定活互转e",
            type: Const.BUSINESS_DATA.CONSTANT_ROTATION
        },
        {
            title: "代理缴费e",
            type: Const.BUSINESS_DATA.AGENCY_PAYMENT
        },
        {
            title: "特色业务e",
            type: Const.BUSINESS_DATA.CHARACTERISTIC_BUSINESS
        },
        {
            title: "信用卡e",
            type: Const.BUSINESS_DATA.CREDIT_CARD
        }
    ],
    purchaseDataTab: [{
        title: "集团采购e",
        type: Const.PURCHASE_DATA.GROUP_PURCHASING
    }, ],
    regulationsDataTab: [{
            title: "行业法规e",
            type: Const.REGULATIONS_DATA.INDUSTY_REGULATIONS
        },
        {
            title: "政策解读e",
            type: Const.REGULATIONS_DATA.POLICY_INTERPRETATION
        },
    ],

    noticeDataTab: [{
            title: "国内咨询e",
            type: Const.NOTICE_DATA.DOMESTIC_CONSULATION
        },
        {
            title: "国际咨询e",
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
//             name: "业务分类en",
//             link: "service"
//         },
//         {
//             name: "铁岭优选en",
//             link: "best"
//         },
//         {
//             name: "银行分行en",
//             link: "branch"
//         },
//         {
//             name: "产品采购en",
//             link: "purchase"
//         },
//         {
//             name: "政策法规en",
//             link: "statute"
//         },
//         {
//             name: "通知公告en",
//             link: "notice"
//         },
//         {
//             name: "关于我们en",
//             link: "about"
//         }
//         ],
//         businessDataTab: [{
//             title: "账户管理e",
//             type: Const.BUSINESS_DATA.ACCOUNT_MANAGEMENT,
//         },
//         {
//             title: "转账汇款e",
//             type: Const.BUSINESS_DATA.TRANSFER_REMITTANCE,
//         },
//         {
//             title: "定活互转e",
//             type: Const.BUSINESS_DATA.CONSTANT_ROTATION,
//         },
//         {
//             title: "代理缴费e",
//             type: Const.BUSINESS_DATA.AGENCY_PAYMENT,
//         },
//         {
//             title: "特色业务e",
//             type: Const.BUSINESS_DATA.CHARACTERISTIC_BUSINESS,
//         },
//         {
//             title: "信用卡e",
//             type: Const.BUSINESS_DATA.CREDIT_CARD,
//         }
//         ],
//         welcome: "Welcome"
//     }
// }