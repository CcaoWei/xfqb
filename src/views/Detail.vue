<template>
  <div class="section-4 s-bg-color page">
    <Tabs :data="nav"></Tabs>

    <!-- 业务分类 -->
    <template v-if="page == 'service'">
      <img
        :src="`${$publicPath}images/yewu-top.png`"
        :srcset="
          `${$publicPath}images/yewu-top-p-500.png 500w, ${$publicPath}images/yewu-top-p-800.png 800w, ${$publicPath}images/yewu-top-p-1080.png 1080w, ${$publicPath}images/yewu-top.png 1440w`
        "
        sizes="100vw"
        alt=""
        class="img100"
      />
      <div class="container w-container">
        <div class="page-main">
          <div class="project-detail">
            <div class="project-info w-clearfix">
              <div class="project-info-left">
                <div class="text-block-26">业务简介</div>
                <div class="text-block-27">(拟建)</div>
              </div>
              <div class="project-info-right">
                <p class="paragraph-7">
                  铁岭银行个人业务主要包括储蓄业务、贷款业务、中间业务以及其他个人业务。储蓄业务主要包括活期储蓄存款、整存整取储蓄存款、零存整取储蓄存款、定活两便储蓄存款、整存零取储蓄存款、存本取息储蓄存款、教育储蓄存款、通知存款以及特色储蓄产品。个人贷款业务主要包括个人经营创业贷款、个人权利质押贷款、个人住房按揭贷款、个人商用房贷款、白领通消费贷款、工资贷消费贷款、宅易贷、个人二手房屋按揭贷款、个人经营性贷款、养老保险贴息贷款。中间业务主要包括代发工资业务、代收代缴业务、代收社会保险业务、个人汇款业务、“城诚通-柜面通”业务。其他个人业务主要办理个人存款证明书。
                </p>
              </div>
            </div>
          </div>
          <div class="share-box">
            <div class="share-item pointer">
              <img
                :src="`${$publicPath}images/fenxiang.png`"
                alt=""
                class="image-16"
              />
              <div class="text-block-38">分享</div>
            </div>
            <div class="share-item sc-item pointer">
              <img
                :src="`${$publicPath}images/dianzan.png`"
                alt=""
                class="image-16"
              />
              <div class="text-block-38 sc">收藏</div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <div
      class="container w-container"
      v-if="
        page == 'notice' ||
          page == 'statute' ||
          page == 'branch' ||
          page == 'best'
      "
    >
      <div class="page-main">
        <div class="two-list w-clearfix">
          <div class="two-left">
            <div class="news-detail">
              <h3 class="heading-7" v-if="page == 'branch' || page == 'best'">
                名称名称
              </h3>
              <h3 class="heading-7" v-else>2019年网约车管理规定政策解读</h3>
              <div
                class="div-block-53"
                v-if="page == 'branch' || page == 'best'"
              >
                <img
                  :src="`${$publicPath}images/zb_1zb.png`"
                  alt=""
                  class="image-19"
                />
                <div class="text-block-43">铁岭市某某区某某路518号</div>
              </div>
              <div class="text-block-25" v-else>
                发布者：中国经济网 | 时间：2019-10-14
              </div>
              <div class="div-block-29">
                <a href="#" class="link-block-3 w-inline-block"
                  ><img :src="`${$publicPath}images/wx_1wx.png`" alt=""
                /></a>
                <a href="#" class="link-block-3 w-inline-block"
                  ><img :src="`${$publicPath}images/wb_1wb.png`" alt=""
                /></a>
                <a href="#" class="link-block-3 w-inline-block"
                  ><img :src="`${$publicPath}images/qq_1qq.png`" alt=""
                /></a>
                <a href="#" class="link-block-3 w-inline-block"
                  ><img :src="`${$publicPath}images/kj_1kj.png`" alt=""
                /></a>
                <a
                  href="#"
                  class="link-block-4 w-inline-block"
                  v-if="page == 'branch' || page == 'best'"
                  ><img
                    :src="`${$publicPath}images/dh_1dh.png`"
                    alt=""
                    class="image-20"
                  />
                  <div class="text-block-44">电话咨询</div></a
                >
              </div>
              <div v-if="page == 'branch' || page == 'best'">
                <h5 class="artitle">简介</h5>
                <p class="paragraph-5">
                  杭州国家西溪湿地公园占地面积约10.08平方公里，目前开放区域3.46平方公里。环园游步道长约8公里，步行一圈需3.5个小时以上。西溪国家湿地公园位于杭州市区西部，距西湖不到5公里，是罕见的城中次生湿地。这里生态资源丰富、自然景观质朴、文化积淀深厚，曾与西湖、西泠并称杭州“三西”，是集城市湿地、农耕湿地、文化湿地于一体的国家湿地公园。西溪被称为“杭州之肾”。西溪国家湿地公园东起紫金港路西侧，西至绕城公路东侧，南起沿山河，北至文二路延伸段，主要包括生态保护区1.71平方公里，生态恢复区1.54平方公里，历史遗存保护0.074平方公里，服务设施区0.136平方公里。
                </p>
              </div>
              <div v-else>
                <img
                  :src="`${$publicPath}images/new-right.png`"
                  :srcset="
                    `${$publicPath}images/new-right-p-500.png 500w, ${$publicPath}images/new-right-p-800.png 800w, ${$publicPath}images/new-right.png 805w`
                  "
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 52vw, 61vw"
                  alt=""
                  class="img100 news-dtetail-img"
                />
                <p class="paragraph-5">
                  第一条
                  为更好地满足社会公众多样化出行需求，促进出租汽车行业和互联网融合发展，规范网络预约出租汽车经营服务行为，保障运营安全和乘客合法权益，根据国家有关法律、行政法规，制定本办法。
                  第二条
                  从事网络预约出租汽车(以下简称网约车)经营服务，应当遵守本办法。本办法所称网约车经营服务，是指以互联网技术为依托构建服务平台，整合供需信息，使用符合条件的车辆和驾驶员，提供非巡游的预约出租汽车服务的经营活动。
                  本办法所称网络预约出租汽车经营者(以下称网约车平台公司)，是指构建网络服务平台，从事网约车经营服务的企业法人。
                  第三条
                  坚持优先发展城市公共交通、适度发展出租汽车，按照高品质服务、差异化经营的原则，有序发展网约车。网约车运价实行市场调节价，城市人民政府认为有必要实行政府指导价的除外。
                  第四条
                  国务院交通运输主管部门负责指导全国网约车管理工作。各省、自治区人民政府交通运输主管部门在本级人民政府领导下，负责指导本行政区域内网约车管理工作。
                  直辖市、设区的市级或者县级交通运输主管部门或人民政府指定的其他出租汽车行政主管部门(以下称出租汽车行政主管部门)在本级人民政府领导下，负责具体实施网约车管理。其他有关部门依据法定职责，对网约车实施相关监督管理。
                </p>
                <div class="div-block-30"></div>
              </div>
            </div>
          </div>
          <div class="two-right">
            <RightList :data="list1"></RightList>
            <RightList :data="list2" listType="2"></RightList>
            <a href="#" class="two-right-ad w-inline-block"
              ><img
                :src="`${$publicPath}images/new-ad.png`"
                alt=""
                class="img100"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <!-- 招标 -->
    <div class="container w-container" v-if="page == 'purchase'">
      <div class="page-main">
        <div class="two-list w-clearfix">
          <div class="two-left">
            <div class="news-detail">
              <h3 class="heading-7">
                火场图传无人机设备采购项目（第二次）公开招标公告
              </h3>
              <div class="text-block-25">
                2019年10月15日 20:52 来源：中国政府采购网
              </div>
              <div class="div-block-29">
                <a href="#" class="link-block-3 w-inline-block"
                  ><img :src="`${$publicPath}images/wx_1wx.png`" alt=""/></a
                ><a href="#" class="link-block-3 w-inline-block"
                  ><img :src="`${$publicPath}images/wb_1wb.png`" alt=""/></a
                ><a href="#" class="link-block-3 w-inline-block"
                  ><img :src="`${$publicPath}images/qq_1qq.png`" alt=""/></a
                ><a href="#" class="link-block-3 w-inline-block"
                  ><img :src="`${$publicPath}images/kj_1kj.png`" alt=""
                /></a>
              </div>
              <div>
                <h5 class="artitle">公告概要</h5>
                <img
                  :src="`${$publicPath}images/zhao.png`"
                  alt=""
                  class="img100 news-dtetail-img"
                />

                <!-- <div class="div-block-30"></div> -->
              </div>
            </div>
          </div>
          <div class="two-right">
            <RightList :data="list3" rightNum></RightList>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import RightList from "@/components/RightList.vue";
import detailTabs from "@/mock/detailTabs.js";
export default {
  name: "Detail",
  components: {
    Tabs,
    RightList
  },
  computed: {
    nav: function() {
      return detailTabs[this.page];
    }
  },
  data() {
    return {
      page: "",
      list1: [
        {
          title: "广泰支行七一扶贫帮困活动",
          link: ""
        },
        {
          title: "西丰支行高考爱心十年  ",
          link: ""
        },
        {
          title: "行领导深入企业调研服务  ",
          link: ""
        }
      ],
      list2: [
        {
          title: "党委书记王希军深入帮扶村调研脱贫攻坚工作",
          link: ""
        },
        {
          title: "开原支行积极应对灾情  ",
          link: ""
        },
        {
          title: "西丰支行驻村工作座谈会、资助贫困生    ",
          link: ""
        },
        {
          title: "爱心助考暖人心    ",
          link: ""
        },
        {
          title: "关爱老弱病残孕，延伸服务现真情    ",
          link: ""
        },
        {
          title: "传承五四精神、舞动青春力量    ",
          link: ""
        },
        {
          title: "雷锋精神薪火相传    ",
          link: ""
        },
        {
          title: "西丰支行春节走访贫困户    ",
          link: ""
        },
        {
          title: "涓滴之水灌注希望之花    ",
          link: ""
        }
      ],
      list3: [
        {
          title: "建筑材料招标",
          link: ""
        },
        {
          title: "装饰材料招标  ",
          link: ""
        },
        {
          title: "建筑电气设备招标  ",
          link: ""
        },
        {
          title: "建筑给排水设备招标  ",
          link: ""
        },
        {
          title: "建筑暖通设备招标  ",
          link: ""
        },
        {
          title: "智能建筑招标  ",
          link: ""
        },
        {
          title: "建筑材料招标",
          link: ""
        },
        {
          title: "装饰材料招标  ",
          link: ""
        },
        {
          title: "建筑电气设备招标  ",
          link: ""
        },
        {
          title: "建筑给排水设备招标  ",
          link: ""
        },
        {
          title: "建筑暖通设备招标  ",
          link: ""
        },
        {
          title: "智能建筑招标  ",
          link: ""
        }
      ]
    };
  },
  // created() {
  //   this.page = this.$route.query.page;
  //   // console.log(this.page)
  //   // this.$emit('getActiveNav',this.page);
  //   this.$store.commit('setActiveNav', this.page);
  // },
  watch: {
    $route: {
      handler: function(to, from) {
        // console.log('new: %s, old: %s', to, from)
        if (to.name == "detail") {
          this.page = to.query.page;
          // console.log(this.page);
          // this.$emit('getActiveNav',this.page);
          this.$store.commit("setActiveNav", this.page);
        }
      },
      immediate: true
    }
  }
};
</script>
