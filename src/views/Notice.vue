<template>
  <div class="section-4 s-bg-color page">
    <Tabs :data="nav"></Tabs>
    <div class="container w-container">
      <div class="page-main">
        <div class="two-list w-clearfix">
          <div class="two-left">
            <div class="news-box">
              <div
                data-animation="slide"
                data-duration="500"
                data-infinite="1"
                class="slider-5 w-slider"
              >
                <div class="w-slider-mask">
                  <div class="slide-5 w-slide pointer" @click="handleDetail">
                    <div class="page-slide-title">
                      <div class="text-block-46">
                        英国女王：10月31日前脱欧是政府首要任务
                      </div>
                    </div>
                  </div>
                  <div class="slide-5 w-slide pointer" @click="handleDetail">
                    <div class="page-slide-title">
                      <div class="text-block-46">
                        英国女王：10月31日前脱欧是政府首要任务
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-slider-arrow-left">
                  <div class="w-icon-slider-left"></div>
                </div>
                <div class="w-slider-arrow-right">
                  <div class="w-icon-slider-right"></div>
                </div>
                <div class="w-slider-nav w-round"></div>
              </div>
              <ul class="notice-list w-list-unstyled">
                <li class="notice-item w-clearfix">
                  <div class="div-block-46 pointer" @click="handleDetail">
                    <img
                      :src="`${$publicPath}images/t1.png`"
                      alt=""
                      class="wh100"
                    />
                  </div>
                  <div class="div-block-47">
                    <h3
                      class="heading-11 ellipsis-2 pointer"
                      @click="handleDetail"
                    >
                      叙政府军已进入叙北库尔德武装控制区
                    </h3>
                    <p class="paragraph-9 ellipsis-2">
                      【环球网快讯】“今日俄罗斯”(RT)14日援引阿拉伯叙利亚通讯社(SANA)消息称，在土耳其与叙利亚库尔德武装交火之际，当地时间14日，叙利亚政府军部队进入叙北部库尔德人实际控制的泰勒塔米尔市。报道称，该市规模较小，但位于几条主干道交汇处，具有重大战略意义。
                    </p>
                    <div class="div-block-48">
                      <div class="text-block-40">
                        发布者：中国经济网 | 时间：2019-10-14
                      </div>
                      <div class="div-block-49 pointer">
                        <img
                          :src="`${$publicPath}images/zan_1zan.png`"
                          alt=""
                          class="image-17"
                        />
                        <div class="text-block-39">120</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="notice-item w-clearfix">
                  <div class="div-block-46 pointer" @click="handleDetail">
                    <img
                      :src="`${$publicPath}images/fb.png`"
                      alt=""
                      class="wh100"
                    />
                  </div>
                  <div class="div-block-47">
                    <h3
                      class="heading-11 ellipsis-2 pointer"
                      @click="handleDetail"
                    >
                      油轮被炸后，伊朗称发现可创收400亿美元新气田
                    </h3>
                    <p class="paragraph-9 ellipsis-2">
                      伊朗方面于10月13日宣布发现新天然气储备，称将给该国创收400亿美元。伊朗还表示，有能力在未来勘探出新的天然气和石油储备。
                    </p>
                    <div class="div-block-48">
                      <div class="text-block-40">
                        发布者：中国经济网 | 时间：2019-10-14
                      </div>
                      <div class="div-block-49 pointer">
                        <img
                          :src="`${$publicPath}images/zan_1zan.png`"
                          alt=""
                          class="image-17"
                        />
                        <div class="text-block-39">120</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="notice-item w-clearfix">
                  <div class="div-block-46 pointer" @click="handleDetail">
                    <img
                      :src="`${$publicPath}images/t1.png`"
                      alt=""
                      class="wh100"
                    />
                  </div>
                  <div class="div-block-47">
                    <h3
                      class="heading-11 ellipsis-2 pointer"
                      @click="handleDetail"
                    >
                      叙政府军已进入叙北库尔德武装控制区
                    </h3>
                    <p class="paragraph-9 ellipsis-2">
                      【环球网快讯】“今日俄罗斯”(RT)14日援引阿拉伯叙利亚通讯社(SANA)消息称，在土耳其与叙利亚库尔德武装交火之际，当地时间14日，叙利亚政府军部队进入叙北部库尔德人实际控制的泰勒塔米尔市。报道称，该市规模较小，但位于几条主干道交汇处，具有重大战略意义。
                    </p>
                    <div class="div-block-48">
                      <div class="text-block-40">
                        发布者：中国经济网 | 时间：2019-10-14
                      </div>
                      <div class="div-block-49 pointer">
                        <img
                          :src="`${$publicPath}images/zan_1zan.png`"
                          alt=""
                          class="image-17"
                        />
                        <div class="text-block-39">120</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="notice-item w-clearfix">
                  <div class="div-block-46 pointer" @click="handleDetail">
                    <img
                      :src="`${$publicPath}images/fb.png`"
                      alt=""
                      class="wh100"
                    />
                  </div>
                  <div class="div-block-47">
                    <h3
                      class="heading-11 ellipsis-2 pointer"
                      @click="handleDetail"
                    >
                      油轮被炸后，伊朗称发现可创收400亿美元新气田
                    </h3>
                    <p class="paragraph-9 ellipsis-2">
                      伊朗方面于10月13日宣布发现新天然气储备，称将给该国创收400亿美元。伊朗还表示，有能力在未来勘探出新的天然气和石油储备。
                    </p>
                    <div class="div-block-48">
                      <div class="text-block-40">
                        发布者：中国经济网 | 时间：2019-10-14
                      </div>
                      <div class="div-block-49 pointer">
                        <img
                          :src="`${$publicPath}images/zan_1zan.png`"
                          alt=""
                          class="image-17"
                        />
                        <div class="text-block-39">120</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="notice-item w-clearfix">
                  <div class="div-block-46 pointer" @click="handleDetail">
                    <img
                      :src="`${$publicPath}images/t1.png`"
                      alt=""
                      class="wh100"
                    />
                  </div>
                  <div class="div-block-47">
                    <h3
                      class="heading-11 ellipsis-2 pointer"
                      @click="handleDetail"
                    >
                      叙政府军已进入叙北库尔德武装控制区
                    </h3>
                    <p class="paragraph-9 ellipsis-2">
                      【环球网快讯】“今日俄罗斯”(RT)14日援引阿拉伯叙利亚通讯社(SANA)消息称，在土耳其与叙利亚库尔德武装交火之际，当地时间14日，叙利亚政府军部队进入叙北部库尔德人实际控制的泰勒塔米尔市。报道称，该市规模较小，但位于几条主干道交汇处，具有重大战略意义。
                    </p>
                    <div class="div-block-48">
                      <div class="text-block-40">
                        发布者：中国经济网 | 时间：2019-10-14
                      </div>
                      <div class="div-block-49 pointer">
                        <img
                          :src="`${$publicPath}images/zan_1zan.png`"
                          alt=""
                          class="image-17"
                        />
                        <div class="text-block-39">120</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="notice-item w-clearfix">
                  <div class="div-block-46 pointer" @click="handleDetail">
                    <img
                      :src="`${$publicPath}images/fb.png`"
                      alt=""
                      class="wh100"
                    />
                  </div>
                  <div class="div-block-47">
                    <h3
                      class="heading-11 ellipsis-2 pointer"
                      @click="handleDetail"
                    >
                      油轮被炸后，伊朗称发现可创收400亿美元新气田
                    </h3>
                    <p class="paragraph-9 ellipsis-2">
                      伊朗方面于10月13日宣布发现新天然气储备，称将给该国创收400亿美元。伊朗还表示，有能力在未来勘探出新的天然气和石油储备。
                    </p>
                    <div class="div-block-48">
                      <div class="text-block-40">
                        发布者：中国经济网 | 时间：2019-10-14
                      </div>
                      <div class="div-block-49 pointer">
                        <img
                          :src="`${$publicPath}images/zan_1zan.png`"
                          alt=""
                          class="image-17"
                        />
                        <div class="text-block-39">120</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="div-block-50 pointer">
                <img
                  :src="`${$publicPath}images/more_1more.png`"
                  alt=""
                  class="image-18"
                />
              </div>
            </div>
          </div>
          <div class="two-right">
            <RightList :data="list1" @handleDetail="handleDetail"></RightList>
            <RightList
              :data="list2"
              listType="2"
              @handleDetail="handleDetail"
            ></RightList>
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
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import RightList from "@/components/RightList.vue";
export default {
  name: "Notice",
  components: {
    Tabs,
    RightList
  },
  data() {
    return {
      nav: {
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
      },
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
      ]
    };
  },
  methods: {
    handleDetail: function() {
      this.$router.push({
        name: "detail",
        query: { page: "notice", tab: this.$store.state.tabNum }
      });
    }
  }
};
</script>
