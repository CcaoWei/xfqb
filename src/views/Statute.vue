<template>
  <div class="section-4 s-bg-color page">
    <Tabs :data="nav"></Tabs>
    <div class="container w-container">
      <div class="page-main">
        <div class="two-list w-clearfix">
          <div class="two-left">
            <div class="news-box">
              <div class="pointer">
                <img
                  :src="`${$publicPath}images/new-top_1new-top.png`"
                  :srcset="
                    `${$publicPath}images/new-top_1-p-500.png 500w, ${$publicPath}images/new-top_1-p-800.png 800w, ${$publicPath}images/new-top_1new-top.png 844w`
                  "
                  sizes="(max-width: 479px) 87vw, (max-width: 767px) 48vw, 58vw"
                  alt=""
                  class="img100"
                />
              </div>
              <ul class="new-list w-list-unstyled">
                <li class="new-list-item w-clearfix">
                  <div class="new-list-img">
                    <div class="text-block-22">10</div>
                    <div class="text-block-23">Oct</div>
                    <div class="text-block-24">2019</div>
                  </div>
                  <div class="new-list-right">
                    <h3
                      class="new-list-title ellipsis-1 pointer"
                      @click="handleDetail"
                    >
                      叙政府军已进入叙北库尔德武装控制区
                    </h3>
                    <div class="text-block-18">
                      发布者：中国新闻网 | 浏览次数：1274
                    </div>
                    <p class="paragraph-4 ellipsis-2">
                      【环球网快讯】“今日俄罗斯”(RT)14日援引阿拉伯叙利亚通讯社(SANA)消息称，在土耳其与叙利亚库尔德武装交火之际，当地时间14日，叙利亚政府军部队进入叙北部库尔德人实际控制的泰勒塔米尔市。报道称，该市规模较小，但位于几条主干道交汇处，具有重大战略意义。
                    </p>
                  </div>
                </li>
                <li class="new-list-item w-clearfix">
                  <div class="new-list-img">
                    <div class="text-block-22">8</div>
                    <div class="text-block-23">Oct</div>
                    <div class="text-block-24">2019</div>
                  </div>
                  <div class="new-list-right">
                    <h3
                      class="new-list-title ellipsis-1 pointer"
                      @click="handleDetail"
                    >
                      油轮被炸后，伊朗称发现可创收400亿美元新气田
                    </h3>
                    <div class="text-block-18">
                      发布者：中国新闻网 | 浏览次数：1274
                    </div>
                    <p class="paragraph-4 ellipsis-2">
                      伊朗方面于10月13日宣布发现新天然气储备，称将给该国创收400亿美元。伊朗还表示，有能力在未来勘探出新的天然气和石油储备。
                    </p>
                  </div>
                </li>
                <li class="new-list-item w-clearfix">
                  <div class="new-list-img">
                    <div class="text-block-22">7</div>
                    <div class="text-block-23">Oct</div>
                    <div class="text-block-24">2019</div>
                  </div>
                  <div class="new-list-right">
                    <h3
                      class="new-list-title ellipsis-1 pointer"
                      @click="handleDetail"
                    >
                      西班牙严惩加泰罗尼亚分裂分子，9名领导人入狱
                    </h3>
                    <div class="text-block-18">
                      发布者：中国新闻网 | 浏览次数：1274
                    </div>
                    <p class="paragraph-4 ellipsis-2">
                      当地时间10月14日，西班牙最高法院宣布，9名分裂分子煽动叛乱罪成立，对他们判处9到13年有期徒刑。
                      中国日报网10月14日电（严玉洁）
                      2017年10月，西班牙加泰罗尼亚自治区（加区）举行“独立公投”，随后单方面宣布“独立”。对于分裂势力领导人，西班牙政府进行了严惩。
                      据路透社报道，当地时间10月14日，西班牙最高法院宣布，9名分裂分子煽动叛乱罪成立，对他们判处9到13年有期徒刑。
                      另有3名被告只犯下违抗罪，没有被判处入狱。
                    </p>
                  </div>
                </li>
                <li class="new-list-item w-clearfix">
                  <div class="new-list-img">
                    <div class="text-block-22">5</div>
                    <div class="text-block-23">Oct</div>
                    <div class="text-block-24">2019</div>
                  </div>
                  <div class="new-list-right">
                    <h3
                      class="new-list-title ellipsis-1 pointer"
                      @click="handleDetail"
                    >
                      英国女王：10月31日前脱欧是政府首要任务
                    </h3>
                    <div class="text-block-18">
                      发布者：中国新闻网 | 浏览次数：1274
                    </div>
                    <p class="paragraph-4 ellipsis-2">
                      【环球网快讯】“今日俄罗斯”(RT)14日援引阿拉伯叙利亚通讯社(SANA)消息称，在土耳其与叙利亚库尔德武装交火之际，当地时间14日，叙利亚政府军部队进入叙北部库尔德人实际控制的泰勒塔米尔市。报道称，该市规模较小，但位于几条主干道交汇处，具有重大战略意义。
                    </p>
                  </div>
                </li>
                <li class="new-list-item w-clearfix">
                  <div class="new-list-img">
                    <div class="text-block-22">3</div>
                    <div class="text-block-23">Oct</div>
                    <div class="text-block-24">2019</div>
                  </div>
                  <div class="new-list-right">
                    <h3
                      class="new-list-title ellipsis-1 pointer"
                      @click="handleDetail"
                    >
                      台风登陆日本近4万人无法回家，5名中国籍船员遇难
                    </h3>
                    <div class="text-block-18">
                      发布者：中国新闻网 | 浏览次数：1274
                    </div>
                    <p class="paragraph-4 ellipsis-2">
                      台风“海贝思”12日登陆日本，随之而来的狂风暴雨天气导致日本大范围地区发生洪水灾害和沙土灾害，近日来死亡人数不断上升。
                    </p>
                  </div>
                </li>
                <li class="new-list-item w-clearfix">
                  <div class="new-list-img">
                    <div class="text-block-22">3</div>
                    <div class="text-block-23">Oct</div>
                    <div class="text-block-24">2019</div>
                  </div>
                  <div class="new-list-right">
                    <h3
                      class="new-list-title ellipsis-1 pointer"
                      @click="handleDetail"
                    >
                      拜登暗讽特朗普：如果我当选总统，不会有家人在白宫上班
                    </h3>
                    <div class="text-block-18">
                      发布者：中国新闻网 | 浏览次数：1274
                    </div>
                    <p class="paragraph-4 ellipsis-2">
                      当地时间13日，美国前副总统拜登在爱荷华州的一次劳工会议上发表讲话时说，如果他当选总统，他的家人将不会在白宫上班，也不会与外国公司或外国政府有业务关系。
                    </p>
                  </div>
                </li>
                <li class="new-list-item w-clearfix">
                  <div class="new-list-img">
                    <div class="text-block-22">3</div>
                    <div class="text-block-23">Oct</div>
                    <div class="text-block-24">2019</div>
                  </div>
                  <div class="new-list-right">
                    <h3
                      class="new-list-title ellipsis-1 pointer"
                      @click="handleDetail"
                    >
                      英国女王：10月31日前脱欧是政府首要任务
                    </h3>
                    <div class="text-block-18">
                      发布者：中国新闻网 | 浏览次数：1274
                    </div>
                    <p class="paragraph-4 ellipsis-2">
                      【环球网快讯】“今日俄罗斯”(RT)14日援引阿拉伯叙利亚通讯社(SANA)消息称，在土耳其与叙利亚库尔德武装交火之际，当地时间14日，叙利亚政府军部队进入叙北部库尔德人实际控制的泰勒塔米尔市。报道称，该市规模较小，但位于几条主干道交汇处，具有重大战略意义。
                    </p>
                  </div>
                </li>
                <li class="new-list-item w-clearfix">
                  <div class="new-list-img">
                    <div class="text-block-22">3</div>
                    <div class="text-block-23">Oct</div>
                    <div class="text-block-24">2019</div>
                  </div>
                  <div class="new-list-right">
                    <h3
                      class="new-list-title ellipsis-1 pointer"
                      @click="handleDetail"
                    >
                      油轮被炸后，伊朗称发现可创收400亿美元新气田
                    </h3>
                    <div class="text-block-18">
                      发布者：中国新闻网 | 浏览次数：1274
                    </div>
                    <p class="paragraph-4 ellipsis-2">
                      当地时间10月14日，西班牙最高法院宣布，9名分裂分子煽动叛乱罪成立，对他们判处9到13年有期徒刑。
                      中国日报网10月14日电（严玉洁）
                      2017年10月，西班牙加泰罗尼亚自治区（加区）举行“独立公投”，随后单方面宣布“独立”。对于分裂势力领导人，西班牙政府进行了严惩。
                      据路透社报道，当地时间10月14日，西班牙最高法院宣布，9名分裂分子煽动叛乱罪成立，对他们判处9到13年有期徒刑。
                      另有3名被告只犯下违抗罪，没有被判处入狱。
                    </p>
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
  name: "Statute",
  components: {
    Tabs,
    RightList
  },
  data() {
    return {
      nav: {
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
        query: { page: "statute", tab: this.$store.state.tabNum }
      });
    }
  }
};
</script>
