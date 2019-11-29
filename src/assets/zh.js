const Const = require("./Const");
const message = {
  nav: [
    {
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
      title: "集团采购",
      type: Const.PURCHASE_DATA.GROUP_PURCHASING
    }
  ],
  regulationsDataTab: [
    {
      title: "行业法规",
      type: Const.REGULATIONS_DATA.INDUSTY_REGULATIONS
    },
    {
      title: "政策解读",
      type: Const.REGULATIONS_DATA.POLICY_INTERPRETATION
    }
  ],

  noticeDataTab: [
    {
      title: "国内咨询",
      type: Const.NOTICE_DATA.DOMESTIC_CONSULATION
    },
    {
      title: "国际咨询",
      type: Const.NOTICE_DATA.OVERSEAS_CONSULATION
    }
  ],
  moreData: "更多",
  businessClassification: "业务分类",
  optimization: "铁岭优选",
  branch: "银行分行",
  purchase: "产品采购",
  statute: "政策法规",
  notice: "通知公告",
  about: "关于我们",
  footNav: [
    {
      title: "关于我们",
      type: Const.FOOT_NAV.ABOUT_US,
      link: "/about/1"
    },
    {
      title: "加入我们",
      type: Const.FOOT_NAV.JOIN_US,
      link: "#"
    },
    {
      title: "用户协议",
      type: Const.FOOT_NAV.USER_AGREEMENT,
      link: "#"
    },
    {
      title: "隐私策略",
      type: Const.FOOT_NAV.PRIVACY_POLICY,
      link: "#"
    },
    {
      title: "企业服务",
      type: Const.FOOT_NAV.ENTERPRISE_SERVICE,
      link: "#"
    },
    {
      title: "帮助中心",
      type: Const.FOOT_NAV.HELP_CENTER,
      link: "#"
    },
    {
      title: "联系我们",
      type: Const.FOOT_NAV.CONTACT_US,
      link: "#"
    }
  ],
  bestNav: {
    title: "铁岭优选",
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
    title: "银行分行",
    name: "branch",
    tabs: [
      {
        name: "分行",
        link: "1"
      }
    ]
  },
  statuteNav: {
    title: "政策法规",
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
    title: "产品采购",
    name: "purchase",
    tabs: [
      {
        name: "集团采购",
        link: "1"
      }
    ]
  },
  noticeNav: {
    title: "通知公告",
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
