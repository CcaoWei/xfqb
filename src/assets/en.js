const Const = require("./Const");
const message = {
  nav: [
    {
      name: "Enterprose<br /> Classifcation",
      link: "service"
    },
    {
      name: "Tieling <br/> Optimization",
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
  buNav: {
    title: "业务分类",
    name: "service",
    tabs: [
      {
        name: "账户管理",
        link: "1"
      },
      {
        name: "转账汇款",
        link: "2"
      },
      {
        name: "定活互转",
        link: "3"
      },
      {
        name: "代理缴费",
        link: "4"
      },
      {
        name: "特色业务",
        link: "5"
      },
      {
        name: "信用卡",
        link: "6"
      }
    ]
  },
  purchaseDataTab: [
    {
      title: "集团采购e",
      type: Const.PURCHASE_DATA.GROUP_PURCHASING
    }
  ],
  regulationsDataTab: [
    {
      title: "行业法规e",
      type: Const.REGULATIONS_DATA.INDUSTY_REGULATIONS
    },
    {
      title: "政策解读e",
      type: Const.REGULATIONS_DATA.POLICY_INTERPRETATION
    }
  ],

  noticeDataTab: [
    {
      title: "国内咨询e",
      type: Const.NOTICE_DATA.DOMESTIC_CONSULATION
    },
    {
      title: "国际咨询e",
      type: Const.NOTICE_DATA.OVERSEAS_CONSULATION
    }
  ],
  moreData: "更多e",
  businessClassification: "业务分类E",
  optimization: "铁岭优选E",
  branch: "银行分行e",
  purchase: "产品采购e",
  statute: "政策法规e",
  notice: "通知公告e",
  about: "About Us",

  footNav: [
    {
      title: "About Us",
      type: Const.FOOT_NAV.ABOUT_US,
      link: "/about/1"
    },
    {
      title: "Join Travel Investment",
      type: Const.FOOT_NAV.JOIN_US,
      link: "#"
    },
    {
      title: "User Agreement",
      type: Const.FOOT_NAV.USER_AGREEMENT,
      link: "#"
    },
    {
      title: "Privacy Policy",
      type: Const.FOOT_NAV.PRIVACY_POLICY,
      link: "#"
    },
    {
      title: "Enterprise Service",
      type: Const.FOOT_NAV.ENTERPRISE_SERVICE,
      link: "#"
    },
    {
      title: "Help Center",
      type: Const.FOOT_NAV.HELP_CENTER,
      link: "#"
    },
    {
      title: "Contact Us",
      type: Const.FOOT_NAV.CONTACT_US,
      link: "#"
    }
  ],
  bestNav: {
    title: "铁岭优选e",
    name: "best",
    tabs: [
      {
        name: "申请入驻",
        link: "1"
      },
      {
        name: "查询关注",
        link: "2"
      },
      {
        name: "服务展示",
        link: "3"
      },
      {
        name: "需求展示",
        link: "4"
      },
      {
        name: "贫困县",
        link: "5"
      }
    ]
  },
  Branchav: {
    title: "银行分行e",
    name: "branch",
    tabs: [
      {
        name: "分行",
        link: "1"
      }
    ]
  },
  statuteNav: {
    title: "政策法规e",
    name: "statute",
    tabs: [
      {
        name: "行业法规",
        link: "1"
      },
      {
        name: "政策解读",
        link: "2"
      }
    ]
  },
  PurchaseNav: {
    title: "产品采购e",
    name: "purchase",
    tabs: [
      {
        name: "集团采购",
        link: "1"
      }
    ]
  },
  noticeNav: {
    title: "通知公告e",
    name: "notice",
    tabs: [
      {
        name: "国际",
        link: "1"
      },
      {
        name: "国内",
        link: "2"
      }
    ]
  }
};
module.exports = {
  Const,
  message
};
