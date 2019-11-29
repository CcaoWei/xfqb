<template>
  <div class="section-4 s-bg-color page">
    <Tabs :data="$t('message.Branchav')"></Tabs>
    <div class="container w-container">
      <div class="page-main">
        <div class="w-layout-grid grid-2">
          <div
            class="en-box card-shadow pointer"
            @click="handleDetail"
            v-for="(item, idx) in branchList"
            :key="idx"
          >
            <div class="en-img">
              <img :src="item.file" alt="" class="wh100" />
            </div>
            <div class="en-bot fen">
              <h4 class="heading-9">{{ item.title }}</h4>
              <div class="text-block-28">{{ item.subject }}</div>
            </div>
          </div>
        </div>
        <div class="div-block-50 pointer" @click="moreData" v-if="hasMore">
          <img
            :src="`${$publicPath}images/more_1more.png`"
            alt=""
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

export default {
  name: "Branch",
  components: {
    Tabs
  },
  data() {
    return {
      loadMore: false,
      hasMore: true,
      branchList: [],
      paging: {
        current: 1,
        size: 9
      },
      nav: {
        title: "银行分行",
        name: "branch",
        tabs: [
          {
            name: "分行",
            link: "1"
          }
        ]
      }
    };
  },
  created() {
    this.getBranchData(this.paging);
  },
  methods: {
    moreData() {
      if (!this.loadMore) {
        const paging = this.paging;
        const nextPaging = {
          current: paging.current + 1,
          size: 9
        };
        this.getBranchData(nextPaging);
      }
    },
    //获取银行分行数据
    getBranchData(paging) {
      const url = this.$store.state.url;
      axios
        .get(`${url}/bank/list`, {
          params: {
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
            this.branchList = [...this.branchList, ...records];
            if (response.data.data.total === this.branchList.length) {
              this.hasMore = false;
              this.loadMore = true;
            }
          }
          console.log(this);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    handleDetail: function() {
      this.$router.push({
        name: "detail",
        query: { page: "branch", tab: this.$store.state.tabNum }
      });
    }
  }
};
</script>
