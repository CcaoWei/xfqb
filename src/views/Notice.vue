<template>
  <div class="section-4 s-bg-color page">
    <Tabs :data="$t('message.noticeNav')" @getTabIndex="getTabIndex"></Tabs>
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
                        英国女王：10月wss31日前脱欧是政府首要任务
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
                <li
                  class="notice-item w-clearfix"
                  v-for="item in noticeInfo"
                  :key="item.id"
                >
                  <div class="div-block-46 pointer" @click="handleDetail">
                    <img :src="item.file" alt="" class="wh100" />
                  </div>
                  <div class="div-block-47">
                    <h3
                      class="heading-11 ellipsis-2 pointer"
                      @click="handleDetail"
                    >
                      {{ item.title }}
                    </h3>
                    <p class="paragraph-9 ellipsis-2">
                      {{ item.subject }}
                    </p>
                    <div class="div-block-48">
                      <div class="text-block-40">
                        发布者：{{ item.createName }} | 时间：{{ item.data }}
                      </div>
                      <div class="div-block-49 pointer">
                        <img
                          :src="`${$publicPath}images/zan_1zan.png`"
                          alt=""
                          class="image-17"
                        />
                        <div class="text-block-39">{{ item.clickNum }}</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div
                class="div-block-50 pointer"
                @click="moreData"
                v-if="hasMore"
              >
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
import axios from "axios";

export default {
  name: "Notice",
  components: {
    Tabs,
    RightList
  },
  data() {
    return {
      loadMore: false,
      hasMore: true,
      tabNum: 1,
      noticeInfo: [],
      paging: {
        current: 1,
        size: 6
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
  created() {
    this.getNoticeInfo(this.paging, 1);
  },
  methods: {
    moreData() {
      if (!this.loadMore) {
        const paging = this.paging;
        const nextPaging = {
          current: paging.current + 1,
          size: 6
        };
        this.getNoticeInfo(nextPaging, this.tabNum);
      }
    },
    getTabIndex(idx) {
      console.log(idx);
      let category = idx + 1;
      this.tabNum = category;
      this.paging = {
        current: 1,
        size: 6
      };
      this.noticeInfo = [];
      this.hasMore = true;
      this.loadMore = false;
      this.getNoticeInfo(this.paging, category);
    },
    getNoticeInfo(argPaging, category) {
      console.log(argPaging);
      console.log(category);
      const url = this.$store.state.url;
      const paging = argPaging ? argPaging : this.paging;
      axios
        .get(`${url}/notice/list`, {
          params: {
            category: category,
            current: paging.current,
            size: paging.size
          }
        })
        .then(response => {
          console.log(response);
          if (response.status == 200) {
            let records = JSON.parse(
              JSON.stringify(response.data.data.records)
            );
            for (let iterator of records) {
              iterator.data = iterator.createTime.substr(0, 10);
            }
            this.noticeInfo = [...this.noticeInfo, ...records];
            if (response.data.data.total === this.noticeInfo.length) {
              this.hasMore = false;
              this.loadMore = true;
            }
          }
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    handleDetail: function() {
      this.$router.push({
        name: "detail",
        query: { page: "notice", tab: this.$store.state.tabNum }
      });
    }
  }
};
</script>
