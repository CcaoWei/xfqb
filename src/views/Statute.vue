<template>
  <div class="section-4 s-bg-color page">
    <Tabs :data="$t('message.statuteNav')" @getTabIndex="getTabIndex"></Tabs>
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
                <li
                  class="new-list-item w-clearfix"
                  v-for="item in statuteInfo"
                  :key="item.id"
                >
                  <div class="new-list-img">
                    <div class="text-block-22">{{ item.day }}</div>
                    <div class="text-block-23">{{ item.month }}</div>
                    <div class="text-block-24">{{ item.year }}</div>
                  </div>
                  <div class="new-list-right">
                    <h3
                      class="new-list-title ellipsis-1 pointer"
                      @click="handleDetail(item.id)"
                    >
                      {{ item.title }}
                    </h3>
                    <div class="text-block-18">
                      发布者：{{ item.createName }} | 浏览次数：{{
                        item.clickNum
                      }}
                    </div>
                    <p class="paragraph-4 ellipsis-2">
                      {{ item.subject }}
                    </p>
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
  name: "Statute",
  components: {
    Tabs,
    RightList
  },
  data() {
    return {
      loadMore: false,
      hasMore: true,

      paging: {
        current: 1,
        size: 8
      },
      tabNum: 1,
      statuteInfo: [],
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
    this.getStatuteInfo(this.paging, 1);
  },

  methods: {
    moreData() {
      if (!this.loadMore) {
        const paging = this.paging;
        const nextPaging = {
          current: paging.current + 1,
          size: 8
        };
        this.getStatuteInfo(nextPaging, this.tabNum);
      }
    },
    matchingMonth(key) {
      switch (key) {
        case "01":
          return "Jan";
        case "02":
          return "Feb";
        case "03":
          return "Mar";
        case "04":
          return "Apr";
        case "05":
          return "May";
        case "06":
          return "Jun";
        case "07":
          return "Jul";
        case "08":
          return "Aug";
        case "09":
          return "Sep";
        case "10":
          return "Oct";
        case "11":
          return "Nov";
        case "12":
          return "Dec";
        default:
          return "";
      }
    },
    getTabIndex(idx) {
      let category = idx + 1;
      this.paging = {
        current: 1,
        size: 8
      };
      this.tabNum = category;
      this.statuteInfo = [];
      this.hasMore = true;
      this.loadMore = false;
      this.getStatuteInfo(this.paging, category);
    },
    getStatuteInfo(argPaging, category) {
      const url = this.$store.state.url;
      const paging = argPaging ? argPaging : this.paging;
      axios
        .get(`${url}/statute/list`, {
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
              iterator.day = iterator.createTime.substr(8, 2);
              iterator.month = this.matchingMonth(
                iterator.createTime.substr(5, 2)
              );
              iterator.year = iterator.createTime.substr(0, 4);
            }
            this.statuteInfo = [...this.statuteInfo, ...records];
            if (response.data.data.total === this.statuteInfo.length) {
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
    handleDetail (id) {
      this.$router.push({
        name: "detail",
        query: { page: "statute", tab: this.$store.state.tabNum,id: id }
      });
    }
  }
};
</script>
