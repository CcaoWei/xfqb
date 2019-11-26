<template>
  <div class="section-4 s-bg-color page">
    <Tabs :data="nav"></Tabs>
    <div class="container w-container">
      <div class="page-main">
        <div class="w-layout-grid grid-2">
          <div class="en-box card-shadow pointer" @click="handleDetail">
            <div class="en-img">
              <img
                :src="`${$publicPath}images/fen1.png`"
                alt=""
                class="wh100"
              />
            </div>
            <div class="en-bot fen">
              <h4 class="heading-9">分行名称</h4>
              <div class="text-block-28">分行简介文字简介</div>
            </div>
          </div>
          <div class="en-box card-shadow pointer" @click="handleDetail">
            <div class="en-img">
              <img
                :src="`${$publicPath}images/fen2.png`"
                alt=""
                class="wh100"
              />
            </div>
            <div class="en-bot fen">
              <h4 class="heading-9">分行名称</h4>
              <div class="text-block-28">分行简介文字简介</div>
            </div>
          </div>
          <div class="en-box card-shadow pointer" @click="handleDetail">
            <div class="en-img">
              <img
                :src="`${$publicPath}images/fen3.png`"
                alt=""
                class="wh100"
              />
            </div>
            <div class="en-bot fen">
              <h4 class="heading-9">分行名称</h4>
              <div class="text-block-28">分行简介文字简介</div>
            </div>
          </div>
          <div class="en-box card-shadow pointer" @click="handleDetail">
            <div class="en-img">
              <img
                :src="`${$publicPath}images/fen1.png`"
                alt=""
                class="wh100"
              />
            </div>
            <div class="en-bot">
              <h4 class="heading-9">分行名称</h4>
              <div class="text-block-28">分行简介文字简介</div>
            </div>
          </div>
          <div class="en-box card-shadow pointer" @click="handleDetail">
            <div class="en-img">
              <img
                :src="`${$publicPath}images/fen2.png`"
                alt=""
                class="wh100"
              />
            </div>
            <div class="en-bot fen">
              <h4 class="heading-9">分行名称</h4>
              <div class="text-block-28">分行简介文字简介</div>
            </div>
          </div>
          <div class="en-box card-shadow pointer" @click="handleDetail">
            <div class="en-img">
              <img
                :src="`${$publicPath}images/fen3.png`"
                alt=""
                class="wh100"
              />
            </div>
            <div class="en-bot fen">
              <h4 class="heading-9">分行名称</h4>
              <div class="text-block-28">分行简介文字简介</div>
            </div>
          </div>
          <div class="en-box card-shadow pointer" @click="handleDetail">
            <div class="en-img">
              <img
                :src="`${$publicPath}images/fen1.png`"
                alt=""
                class="wh100"
              />
            </div>
            <div class="en-bot fen">
              <h4 class="heading-9">分行名称</h4>
              <div class="text-block-28">分行简介文字简介</div>
            </div>
          </div>
          <div class="en-box card-shadow pointer" @click="handleDetail">
            <div class="en-img">
              <img
                :src="`${$publicPath}images/fen2.png`"
                alt=""
                class="wh100"
              />
            </div>
            <div class="en-bot fen">
              <h4 class="heading-9">分行名称</h4>
              <div class="text-block-28">分行简介文字简介</div>
            </div>
          </div>
          <div class="en-box card-shadow pointer" @click="handleDetail">
            <div class="en-img">
              <img
                :src="`${$publicPath}images/fen3.png`"
                alt=""
                class="wh100"
              />
            </div>
            <div class="en-bot fen">
              <h4 class="heading-9">分行名称</h4>
              <div class="text-block-28">分行简介文字简介</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
export default {
  name: "Branch",
  components: {
    Tabs
  },
  data() {
    return {
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
  methods: {
    handleDetail: function() {
      this.$router.push({
        name: "detail",
        query: { page: "branch", tab: this.$store.state.tabNum }
      });
    }
  }
};
</script>
