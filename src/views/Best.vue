<template>
  <div
    class="section-4 s-bg-color page"
    :class="{ pb0: $route.name != 'best3' }"
  >
    <Tabs :data="$t('message.bestNav')" @getTabIndex="getTabIndex"></Tabs>
    <!-- 服务展示 -->
    <template v-if="$route.name == 'best3'">
      <div>
        <img
          :src="`${$publicPath}images/sq-top.png`"
          :srcset="
            `${$publicPath}images/sq-top-p-500.png 500w, ${$publicPath}images/sq-top-p-800.png 800w, ${$publicPath}images/sq-top-p-1080.png 1080w, ${$publicPath}images/sq-top.png 1440w`
          "
          sizes="100vw"
          alt=""
          class="img100"
        />
      </div>
      <div class="div-block-36">
        <form
          action="/search"
          class="search-2 w-form"
          @submit.prevent="onSubmit"
        >
          <input
            type="search"
            class="search-input-2 w-input"
            maxlength="256"
            name="query"
            placeholder="请输入企业名称"
            id="search-2"
            required=""
            v-model="enterpriseName"
          /><input type="submit" value="搜索" class="search-button w-button" />
        </form>
      </div>
      <div class="container w-container">
        <div class="page-main">
          <div class="w-layout-grid grid-2">
            <div
              class="en-box card-shadow pointer"
              @click="handleDetail"
              v-for="(item, idx) in optimizationList"
              :key="idx"
            >
              <div class="en-img">
                <img :src="item.file" alt="" class="wh100" />
              </div>
              <div class="en-bot">
                <h4 class="heading-9">{{ item.title }}</h4>
                <div class="text-block-28">
                  {{ item.subject }}
                </div>
                <div class="text-block-29">浏览人数：{{ item.clickNum }}</div>
              </div>
            </div>
          </div>
          <div class="div-block-50 pointer" @click="moreData" v-if="hasMore">
            <img
              :src="`${$publicPath}images/more_1more.png`"
              alt
              class="image-18"
            />
          </div>
        </div>
      </div>
    </template>

    <div v-else>
      <img
        :src="`${$publicPath}images/sq-top.png`"
        :srcset="
          `${$publicPath}images/sq-top-p-500.png 500w, ${$publicPath}images/sq-top-p-800.png 800w, .${$publicPath}images/sq-top-p-1080.png 1080w, ${$publicPath}images/sq-top.png 1440w`
        "
        sizes="100vw"
        alt=""
        class="img100"
      />
      <div class="div-block-33">
        <div class="button-3 w-button" @click="handleApply">填写认证信息</div>
      </div>
      <div class="div-block-34">
        <div class="text-block-32">商家如何入驻平台</div>
        <div class="div-block-38">
          <div class="div-block-39">
            <img
              :src="`${$publicPath}images/sq1_1sq1.png`"
              alt=""
              class="image-15"
            />
            <div class="text-block-33">填写认证信息</div>
            <div class="text-block-34">
              公司营业执照<br />管理者手机号、验证码
            </div>
          </div>
          <div class="div-block-39">
            <img
              :src="`${$publicPath}images/sq2_1sq2.png`"
              alt=""
              class="image-15"
            />
            <div class="text-block-33">等待平台审核</div>
            <div class="text-block-34">平台客服<br />人工审核</div>
          </div>
          <div class="div-block-39">
            <img
              :src="`${$publicPath}images/sq3_1sq3.png`"
              alt=""
              class="image-15"
            />
            <div class="text-block-33">管理公司</div>
            <div class="text-block-34">
              审核通过后可在个人中心<br />管理公司信息
            </div>
          </div>
          <div class="div-block-40"></div>
        </div>
      </div>
      <div class="div-block-35">
        <div class="text-block-32">入驻常见问题</div>
        <div class="div-block-41">
          <div class="div-block-42">
            <div class="text-block-35">入驻流程类</div>
            <ul class="list-4 w-list-unstyled">
              <li class="list-item-4">
                <div class="text-block-36">商家如何入驻？</div>
                <div class="div-block-43"></div>
              </li>
              <li class="list-item-4">
                <div class="text-block-36">一个公司可以认证多个分类吗？</div>
                <div class="div-block-43"></div>
              </li>
              <li class="list-item-4">
                <div class="text-block-36">选择错了分类，该怎么办</div>
                <div class="div-block-43"></div>
              </li>
              <li class="list-item-4">
                <div class="text-block-36">
                  为什么审核通过后，没有搜索到自己的企业？
                </div>
                <div class="div-block-43"></div>
              </li>
              <li class="list-item-4">
                <div class="text-block-36">登录账户被锁定了怎么办</div>
                <div class="div-block-43"></div>
              </li>
            </ul>
          </div>
          <div class="div-block-42">
            <div class="text-block-35">资质规则类</div>
            <ul class="list-4 w-list-unstyled">
              <li class="list-item-4">
                <div class="text-block-36">商家如何入驻？</div>
                <div class="div-block-43"></div>
              </li>
              <li class="list-item-4">
                <div class="text-block-36">一个公司可以认证多个分类吗？</div>
                <div class="div-block-43"></div>
              </li>
              <li class="list-item-4">
                <div class="text-block-36">选择错了分类，该怎么办</div>
                <div class="div-block-43"></div>
              </li>
              <li class="list-item-4">
                <div class="text-block-36">
                  为什么审核通过后，没有搜索到自己的企业？
                </div>
                <div class="div-block-43"></div>
              </li>
              <li class="list-item-4">
                <div class="text-block-36">登录账户被锁定了怎么办</div>
                <div class="div-block-43"></div>
              </li>
            </ul>
          </div>
          <div class="div-block-42">
            <div class="text-block-35">企业管理类</div>
            <ul class="list-4 w-list-unstyled">
              <li class="list-item-4">
                <div class="text-block-36">商家如何入驻？</div>
                <div class="div-block-43"></div>
              </li>
              <li class="list-item-4">
                <div class="text-block-36">一个公司可以认证多个分类吗？</div>
                <div class="div-block-43"></div>
              </li>
              <li class="list-item-4">
                <div class="text-block-36">选择错了分类，该怎么办</div>
                <div class="div-block-43"></div>
              </li>
              <li class="list-item-4">
                <div class="text-block-36">
                  为什么审核通过后，没有搜索到自己的企业？
                </div>
                <div class="div-block-43"></div>
              </li>
              <li class="list-item-4">
                <div class="text-block-36">登录账户被锁定了怎么办</div>
                <div class="div-block-43"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import axios from "axios";

export default {
  name: "Best",
  components: {
    Tabs
  },
  data() {
    return {
      loadMore: false,
      hasMore: true,
      nav: {
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
      enterpriseName: "",
      optimizationList: [],
      paging: {
        current: 1,
        size: 6
      }
    };
  },
  created() {
    this.getOptimizationData("", this.paging);
  },
  methods: {
    onSubmit() {
      //组织表单提交事件
      console.log(this.enterpriseName);
      this.getOptimizationData(this.enterpriseName, this.paging);
    },
    moreData() {
      if (!this.loadMore) {
        const paging = this.paging;
        const nextPaging = {
          current: paging.current + 1,
          size: 6
        };
        this.getOptimizationData(this.enterpriseName, nextPaging);
      }
    },
    getTabIndex(idx) {
      console.log(idx);
      this.paging = {
        current: 1,
        size: 6
      };
      this.optimizationList = [];
      this.hasMore = true;
      this.loadMore = false;
      if (idx == 2) {
        this.getOptimizationData(this.enterpriseName, this.paging);
      }
    },
    //获取铁岭优选数据  默认获取申请入住
    getOptimizationData(name, argPaging) {
      console.log(name, argPaging);
      const url = this.$store.state.url;
      const paging = argPaging ? argPaging : this.paging;
      axios
        .get(`${url}/op/list`, {
          params: {
            name: name,
            current: paging.current,
            size: paging.size
          }
        })
        .then(response => {
          if (response.status == 200) {
            let records = JSON.parse(
              JSON.stringify(response.data.data.records)
            );
            this.optimizationList = [...this.optimizationList, ...records];
            if (response.data.data.total === this.optimizationList.length) {
              this.hasMore = false;
              this.loadMore = true;
            }
          }
          console.log(this);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    handleApply: function() {
      this.$router.push({
        name: "apply",
        query: { page: "best", tab: this.$store.state.tabNum }
      });
    },
    handleDetail: function() {
      this.$router.push({
        name: "detail",
        query: { page: "best", tab: this.$store.state.tabNum }
      });
    }
  }
};
</script>
