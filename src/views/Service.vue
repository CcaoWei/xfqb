<template>
  <div class="section-4 s-bg-color page">
    <Tabs :data="$t('message.buNav')" @getTabIndex="getTabIndex"></Tabs>
    <div class="container w-container">
      <div class="page-main">
        <ul class="project-list w-list-unstyled">
          <li
            class="list-item-3 w-clearfix"
            v-for="(item, index) in serviceList"
            :key="index"
          >
            <div class="project-list-left pointer" @click="handleDetail">
              <img :src="item.file" alt class="wh100 list-img" />
            </div>
            <div class="div-block-31">
              <h3 class="heading-8 pointer ellipsis-1" @click="handleDetail">
                {{ item.title }}
              </h3>
              <p class="paragraph-6 ellipsis-4">{{ item.subject }}</p>
              <div class="more-box">
                <div class="more-btn w-inline-block"  @click="handleDetail(item.id)">
                  <div class="text-block-45" v-html="$t('message.moreData')"></div>
                  <img :src="`${$publicPath}images/icon10_1icon10.png`" alt />
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="div-block-50 pointer" @click="moreData" v-if="hasMore">
          <img
            :src="`${$publicPath}images/more_1more.png`"
            alt
            class="image-18"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import axios from "axios";
import Const from "../assets/Const";

export default {
  name: "Service",
  components: {
    Tabs
  },
  data() {
    return {
      loadMore: false,
      hasMore: true,
      tabNum: 1,
      activeName: "1",
      paging: {
        current: 1,
        size: 4
      },
      serviceList: [],
      nav: {
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
      }
    };
  },
  created() {
    console.log( this.$router)
    this.getServiceData(1);
  },
  methods: {
    moreData() {
      if (!this.loadMore) {
        const paging = this.paging;
        const nextPaging = {
          current: paging.current + 1,
          size: 4
        };
        this.getServiceData(this.tabNum, nextPaging);
      }
    },
    getTabIndex(idx) {
      let category = idx +1;
      console.log(category);
      let paging = {
        current: 1,
        size: 4
      };
      this.tabNum = category;
      this.serviceList = [];
      this.hasMore = true;
      this.loadMore = false;
      this.getServiceData(this.tabNum, paging);
    },
    //获取业务分类数据  默认获取账户管理
    getServiceData(category, argPaging) {
      console.log(category)
      const url = this.$store.state.url;
      const paging = argPaging ? argPaging : this.paging;
      axios
        .get(`${url}/business/list`, {
          params: {
            category: category ,
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
            this.serviceList = [...this.serviceList, ...records];
            console.log(this);
            if (response.data.data.total === this.serviceList.length) {
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
    handleDetail: function(id) {
      console.log(id)
      // this.$store.commit('setTabs', this.nav);
      this.$router.push({
        name: "detail",
        query: { page: "service", tab: this.$store.state.tabNum, id: id },
      });
    }
  }
};
</script>
