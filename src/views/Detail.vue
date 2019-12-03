<template>
  <div class="section-4 s-bg-color page">
    <Tabs :data="nav"></Tabs>

    <!-- 业务分类 -->
    <template v-if="page == 'service'">
      <img :src="detailInfo.img" sizes="100vw" alt class="img100" />
      <div class="container w-container">
        <div class="page-main">
          <div class="project-detail">
            <div class="project-info w-clearfix">
              <div class="project-info-left">
                <div class="text-block-26">业务简介</div>
                <div class="text-block-27">(拟建)</div>
              </div>
              <div class="project-info-right">
                <p class="paragraph-7">{{detailInfo.content}}</p>
              </div>
            </div>
          </div>
          <div class="share-box">
            <div class="share-item pointer">
              <img :src="`${$publicPath}images/fenxiang.png`" alt class="image-16" />
              <div class="text-block-38">分享</div>
            </div>
            <div class="share-item sc-item pointer">
              <img :src="`${$publicPath}images/dianzan.png`" alt class="image-16" />
              <div class="text-block-38 sc">收藏</div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- 铁岭优选 -->
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
              <h3 class="heading-7" v-if="page == 'branch' || page == 'best'">{{detailInfo.title}}1</h3>
              <h3 class="heading-7" v-else>{{detailInfo.title}}</h3>
              <div class="div-block-53" v-if="page == 'branch' || page == 'best'">
                <img :src="`${$publicPath}images/zb_1zb.png`" alt class="image-19" />
                <div class="text-block-43">{{detailInfo.address}}</div>
              </div>
              <div class="text-block-25" v-else>发布者：{{detailInfo.createUserName}} | 时间：{{detailInfo.createTime}}</div>
              <div class="div-block-29">
                <a href="#" class="link-block-3 w-inline-block">
                  <img :src="`${$publicPath}images/wx_1wx.png`" alt />
                </a>
                <a href="#" class="link-block-3 w-inline-block">
                  <img :src="`${$publicPath}images/wb_1wb.png`" alt />
                </a>
                <a href="#" class="link-block-3 w-inline-block">
                  <img :src="`${$publicPath}images/qq_1qq.png`" alt />
                </a>
                <a href="#" class="link-block-3 w-inline-block">
                  <img :src="`${$publicPath}images/kj_1kj.png`" alt />
                </a>
                <a
                  href="#"
                  class="link-block-4 w-inline-block"
                  v-if="page == 'branch' || page == 'best'"
                >
                  <img :src="detailInfo.file" alt class="image-20" />
                  <div class="text-block-44">电话咨询</div>
                </a>
              </div>
              <div v-if="page == 'branch' || page == 'best'">
                <h5 class="artitle">简介</h5>
                <p
                  class="paragraph-5"
                >{{detailInfo.content}}1</p>
              </div>
              <div v-else>
                <img
                  :src="detailInfo.file"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 52vw, 61vw"
                  alt
                  class="img100 news-dtetail-img"
                />
                <p class="paragraph-5">
                  {{detailInfo.content}}
                </p>
                <div class="div-block-30"></div>
              </div>
            </div>
          </div>
          <div class="two-right">
            <RightList :data="list1"></RightList>
            <RightList :data="list2" listType="2"></RightList>
            <a href="#" class="two-right-ad w-inline-block">
              <img :src="`${$publicPath}images/new-ad.png`" alt class="img100" />
            </a>
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
              <h3 class="heading-7">{{detailInfo.title}}</h3>
              <div class="text-block-25">{{detailInfo.createTime}} 来源：中国政府采购网</div>
              <div class="div-block-29">
                <a href="#" class="link-block-3 w-inline-block">
                  <img :src="`${$publicPath}images/wx_1wx.png`" alt />
                </a>
                <a href="#" class="link-block-3 w-inline-block">
                  <img :src="`${$publicPath}images/wb_1wb.png`" alt />
                </a>
                <a href="#" class="link-block-3 w-inline-block">
                  <img :src="`${$publicPath}images/qq_1qq.png`" alt />
                </a>
                <a href="#" class="link-block-3 w-inline-block">
                  <img :src="`${$publicPath}images/kj_1kj.png`" alt />
                </a>
              </div>
              <div>
                <h5 class="artitle">公告概要</h5>
                <!-- <img :src="`${$publicPath}images/zhao.png`" alt class="img100 news-dtetail-img" /> -->
                <div v-html="detailInfo.content">

                </div>
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
import axios from "axios";

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
      detailInfo: "",
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
  methods: {
    matchingUrl(type,tab){
      switch (type) {
        case "service":
          return "/business/detail";
        case "best":
          if(tab == 2){
            return "/op/detail";
          }
        case "branch":
          return "/banner/detail";
        case "purchase":
          return "/purchase/detail";
        case "statute":
          return "/statute/detail";
        case "notice":
          return "/notice/detail";
        default:
          return "";
      }
    },
    getDetailInfo() {
      let type = this.$route.query.page;
      let tab = this.$route.query.tab;
      const url = this.$store.state.url;
      let id = this.$route.query.id;
      let urlDetail = this.matchingUrl(type,tab);
      axios
        .get(url+urlDetail, {
          params: {
            id: id
          }
        })
        .then(response => {
          console.log(response);
          if (response.status == 200) {
            this.detailInfo = response.data.data;
          }
          console.log(this)
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
  },
  mounted(){
     console.log(this.$route)
      this.getDetailInfo();
  },
  created() {
    
    // this.$emit('getActiveNav',this.page);
    // this.$store.commit('setActiveNav', this.page);
    
  },
  watch: {
    $route: {
      handler: function(to, from) {
        console.log(to, from);
        this.getDetailInfo();
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
