<template>
  <div
    class="section-4 s-bg-color page"
    :class="{ pb0: $route.name != 'best3' }"
  >
    <Tabs :data="nav"></Tabs>
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
        <form action="/search" class="search-2 w-form">
          <input
            type="search"
            class="search-input-2 w-input"
            maxlength="256"
            name="query"
            placeholder="请输入企业名称"
            id="search-2"
            required=""
          /><input type="submit" value="搜索" class="search-button w-button" />
        </form>
      </div>
      <div class="container w-container">
        <div class="page-main">
          <div class="w-layout-grid grid-2">
            <div class="en-box card-shadow pointer" @click="handleDetail">
              <div class="en-img">
                <img
                  :src="`${$publicPath}images/you1.png`"
                  alt=""
                  class="wh100"
                />
              </div>
              <div class="en-bot">
                <h4 class="heading-9">景区名称</h4>
                <div class="text-block-28">
                  景区简单介绍，林木叠翠、适合避暑
                </div>
                <div class="text-block-29">浏览人数：120</div>
              </div>
            </div>
            <div class="en-box card-shadow pointer" @click="handleDetail">
              <div class="en-img">
                <img
                  :src="`${$publicPath}images/you5.png`"
                  alt=""
                  class="wh100"
                />
              </div>
              <div class="en-bot">
                <h4 class="heading-9">景区名称</h4>
                <div class="text-block-28">
                  景区简单介绍，林木叠翠、适合避暑
                </div>
                <div class="text-block-29">浏览人数：120</div>
              </div>
            </div>
            <div class="en-box card-shadow pointer" @click="handleDetail">
              <div class="en-img">
                <img
                  :src="`${$publicPath}images/you3.png`"
                  alt=""
                  class="wh100"
                />
              </div>
              <div class="en-bot">
                <h4 class="heading-9">餐饮名称</h4>
                <div class="text-block-28">
                  餐饮简单介绍，林木叠翠、适合避暑
                </div>
                <div class="text-block-29">浏览人数：120</div>
              </div>
            </div>
            <div class="en-box card-shadow pointer" @click="handleDetail">
              <div class="en-img">
                <img
                  :src="`${$publicPath}images/you4.png`"
                  alt=""
                  class="wh100"
                />
              </div>
              <div class="en-bot">
                <h4 class="heading-9">餐饮名称</h4>
                <div class="text-block-28">
                  餐饮简单介绍，林木叠翠、适合避暑
                </div>
                <div class="text-block-29">浏览人数：120</div>
              </div>
            </div>
            <div class="en-box card-shadow pointer" @click="handleDetail">
              <div class="en-img">
                <img
                  :src="`${$publicPath}images/you5.png`"
                  alt=""
                  class="wh100"
                />
              </div>
              <div class="en-bot">
                <h4 class="heading-9">酒店名称</h4>
                <div class="text-block-28">
                  酒店简单介绍，林木叠翠、适合避暑
                </div>
                <div class="text-block-29">浏览人数：120</div>
              </div>
            </div>
            <div class="en-box card-shadow pointer" @click="handleDetail">
              <div class="en-img">
                <img
                  :src="`${$publicPath}images/you6.png`"
                  alt=""
                  class="wh100"
                />
              </div>
              <div class="en-bot">
                <h4 class="heading-9">酒店名称</h4>
                <div class="text-block-28">
                  酒店简单介绍，林木叠翠、适合避暑
                </div>
                <div class="text-block-29">浏览人数：120</div>
              </div>
            </div>
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
export default {
  name: "Best",
  components: {
    Tabs
  },
  data() {
    return {
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
      }
    };
  },
  methods: {
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
