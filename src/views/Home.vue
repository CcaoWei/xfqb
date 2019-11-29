<template>
  <div class="home">
    <!-- 轮播 -->
    <div class="section cc-store-home-wrap">
      <div
        data-animation="slide"
        data-duration="500"
        data-infinite="1"
        class="slider-2 w-slider"
      >
        <div class="w-slider-mask">
          <div
            :class="'slide-' + (index + 1) + ' w-slide'"
            v-for="(item, index) in slideList"
            :key="index"
          >
            <div class="top-num">
              <div class="text-block-3">{{ index + 1 }}</div>
              <div class="text-block-2">
                /{{
                  slideList.length > 9
                    ? slideList.length
                    : "0" + slideList.length.toString()
                }}
              </div>
            </div>
            <div class="top-info">
              <h2 class="top-title" v-html="item.title"></h2>
              <!-- <div class="top-text" v-html="item.subject"></div> -->
            </div>
            <div class="top-nav">
              <div
                v-for="(info, i) in 3"
                :key="i"
                class="top-nav-dot"
                :class="{ 'nav-active': i == index }"
              ></div>
              <div class="columns-8 w-row">
                <div
                  class="nav-normal w-col w-col-4 w-col-tiny-4"
                  v-for="(info, i) in info"
                  :key="i"
                  :class="{ 'nav-active': i == index }"
                >
                  <!-- <div class="text-block-4">{{ info.text }}</div> -->
                  <h3 class="heading">{{ info.title }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="left-arrow w-slider-arrow-left">
          <img :src="`${$publicPath}images/left_1left.png`" alt="" />
        </div>
        <div class="right-arrow w-slider-arrow-right">
          <img :src="`${$publicPath}images/right.png`" alt="" />
        </div>
        <div class="slide-nav w-slider-nav w-round"></div>
      </div>
    </div>

    <!-- 业务分类 -->
    <div id="enterprise" class="section-2 tab-box">
      <div class="container w-container">
        <div class="title-box">
          <h2
            class="main-title"
            v-html="$t('message.businessClassification')"
          ></h2>
          <div class="text-block-7">。</div>
          <!-- <div class="main-text">Enterprise classification</div> -->
        </div>
        <div
          data-duration-in="300"
          data-duration-out="100"
          class="tabs-2 w-tabs"
        >
          <div class="tabs-menu w-tab-menu">
            <a
              :data-w-tab="item.link"
              class="notice-tab w-inline-block w-tab-link"
              :class="{ 'w--current': index == 0 }"
              v-for="(item, index) in $t('message.buNav.tabs')"
              :key="index"
            >
              <div class="text-block-6">{{ item.name }}</div>
            </a>
          </div>
          <div class="tabs-content-2 w-tab-content">
            <div
              :data-w-tab="item.type"
              class="w-tab-pane"
              :class="{ 'w--tab-active': index == 0 }"
              v-for="(item, index) in businessData"
              :key="index"
            >
              <div
                data-animation="slide"
                data-duration="500"
                data-infinite="1"
                class="slider-4 w-slider"
              >
                <div class="w-slider-mask">
                  <div
                    class="slide-4 w-slide"
                    v-for="(slide, i) in item.data"
                    :key="i"
                  >
                    <!-- v-for="(slide, i) in item.data"
                    :key="i"-->
                    <div class="columns-4 w-row">
                      <div class="column-14 w-col w-col-3">
                        <h3 class="tab-title">{{ slide.info.title }}</h3>
                        <div class="text-block-11">
                          {{ slide.info.subject }}
                        </div>
                        <div
                          class="more-btn w-inline-block"
                          @click="handleLink('service', index)"
                        >
                          <div
                            class="text-block-45"
                            v-html="$t('message.moreData')"
                          ></div>
                          <img
                            :src="`${$publicPath}images/icon10_1icon10.png`"
                            alt
                          />
                        </div>
                      </div>
                      <div class="column-10 w-col w-col-9">
                        <div class="columns-5 w-row">
                          <div
                            class="tab-card-box w-col w-col-4 w-col-small-4"
                            v-for="(card, j) in slide.list"
                            :key="j"
                          >
                            <div class="div-block-7">
                              <div class="tab-card">
                                <div
                                  class="tab-imgbox pointer"
                                  @click="handleDetail('service', index)"
                                >
                                  <img
                                    :src="
                                      `${$publicPath}images/y` +
                                        (j + 1) +
                                        `.png`
                                    "
                                    alt
                                    class="image tab-img"
                                  />
                                </div>
                                <div class="tab-textbox">
                                  <h4
                                    class="heading-5 pointer"
                                    @click="handleDetail('service', index)"
                                  >
                                    {{ card.title }}
                                  </h4>
                                  <div class="tab-text">{{ card.subject }}</div>
                                </div>
                                <a href="#" class="more-link w-inline-block">
                                  <div
                                    class="text-block-12"
                                    @click="handleLink('service', index)"
                                    v-html="$t('message.moreData')"
                                  ></div>
                                  <img
                                    :src="
                                      `${$publicPath}images/icon12_1icon12.png`
                                    "
                                    alt
                                    class="more-img"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="left-arrow-2 w-slider-arrow-left">
                  <img :src="`${$publicPath}images/left1_1left1.png`" alt />
                </div>
                <div class="right-arrow-2 w-slider-arrow-right">
                  <img :src="`${$publicPath}images/right1.png`" alt />
                </div>
                <div class="slide-nav-2 w-slider-nav w-round"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 优选 -->
    <div id="better" class="better">
      <div class="container w-container">
        <div class="title-box">
          <h2 class="main-title">
            <strong
              class="main-title"
              v-html="$t('message.optimization')"
            ></strong>
          </h2>
          <div class="text-block-7">。</div>
          <!-- <div class="main-text">Tieling optimization</div> -->
        </div>
        <div data-duration-in="300" data-duration-out="100" class="tabs w-tabs">
          <div class="tabs-menu-4 w-tab-menu">
            <a
              data-w-tab="Tab 1"
              class="notice-tab w-inline-block w-tab-link w--current"
            >
              <div
                class="text-block-6"
                @click="handleLink('best')"
                v-html="$t('message.moreData')"
              ></div>
            </a>
          </div>
          <div class="tabs-content-3 w-tab-content">
            <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active">
              <div class="w-layout-grid grid-2">
                <div
                  class="en-box card-shadow pointer"
                  @click="handleDetail('best', 2)"
                  v-for="(opt, o) in optimization"
                  :key="o"
                >
                  <div class="en-img">
                    <img :src="opt.file" alt class="wh100" />
                  </div>
                  <div class="en-bot">
                    <h4 class="heading-9">{{ opt.title }}</h4>
                    <div class="text-block-28">{{ opt.subject }}</div>
                    <div class="text-block-29">
                      浏览人数：{{ opt.clickNum }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 加入 -->
    <div class="div-block join">
      <div class="columns-2 w-row">
        <div
          class="column-9 w-col w-col-4 w-col-small-small-stack w-col-medium-4 w-col-tiny-tiny-stack"
        >
          <h4 class="heading-3">携手企业 合作共赢</h4>
        </div>
        <div
          class="column-15 w-col w-col-4 w-col-small-small-stack w-col-medium-4 w-col-tiny-tiny-stack"
        >
          <div class="div-block-4">
            <div class="text-block-8">
              超过100万客户，享受我们的产品与服务100+合作伙伴，100+项目案例
            </div>
          </div>
        </div>
        <div
          class="column-8 w-col w-col-4 w-col-small-small-stack w-col-medium-4 w-col-tiny-tiny-stack"
        >
          <a href="contact.html" class="button join-btn w-inline-block">
            <div class="text-block">加入我们</div>
            <img
              :src="`${$publicPath}images/join_1join.png`"
              alt
              class="image-8"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- 分行 -->
    <div id="partner" class="better">
      <div class="container w-container">
        <div class="title-box">
          <h2 class="main-title">
            <strong class="main-title" v-html="$t('message.branch')"></strong>
          </h2>
          <div class="text-block-7">。</div>
          <!-- <div class="main-text">Branch/enterprise</div> -->
        </div>
        <div data-duration-in="300" data-duration-out="100" class="tabs w-tabs">
          <div class="tabs-menu-4 w-tab-menu">
            <a
              data-w-tab="Tab 1"
              class="notice-tab w-inline-block w-tab-link w--current"
            >
              <div
                class="text-block-6"
                @click="handleLink('branch')"
                v-html="$t('message.moreData')"
              ></div>
            </a>
          </div>
          <div class="tabs-content-3 w-tab-content">
            <div data-w-tab="Tab 1" class="w-tab-pane my-map w--tab-active">
              <!-- 地图 -->
              <el-amap
                vid="amap"
                :plugin="plugin"
                class="amap-demo"
                :center="center"
                :zoom="zoom"
              >
                <el-amap-marker
                  v-for="(marker, index) in markers"
                  :key="index"
                  :position="marker.position"
                  :events="marker.events"
                  :visible="marker.visible"
                  :draggable="marker.draggable"
                  :vid="index"
                ></el-amap-marker>
                <el-amap-info-window
                  v-if="window"
                  :position="window.position"
                  :visible="window.visible"
                  :content="window.content"
                ></el-amap-info-window>
              </el-amap>
              <!-- <div
                class="my-map"
                :style="
                  'background-image: url(' +
                    `${$publicPath}images/map.png` +
                    ');background-repeat: no-repeat;background-position: center;'
                "
              >
                <img :src="`${$publicPath}images/map.png`" alt="" class="">
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 采购 -->
    <div id="product" class="section-2 product">
      <div class="container w-container">
        <div class="title-box">
          <h2 class="main-title" v-html="$t('message.purchase')"></h2>
          <div class="text-block-7">。</div>
          <!-- <div class="main-text">Product purchase</div> -->
        </div>
        <div
          data-duration-in="300"
          data-duration-out="100"
          class="tabs-3 w-tabs"
        >
          <div class="tabs-menu-5 w-tab-menu">
            <a
              data-w-tab="Tab 1"
              class="notice-tab w-inline-block w-tab-link w--current"
            >
              <div
                class="text-block-6"
                v-for="(mpItem, index) in $t('message.purchaseDataTab')"
                :key="index"
              >
                {{ mpItem.title }}
              </div>
            </a>
          </div>
          <div class="w-tab-content">
            <div
              data-w-tab="Tab 1"
              class="tab-pane-tab-1 w-tab-pane w--tab-active"
            >
              <div class="columns-6 w-row">
                <div
                  class="column-11 w-col w-col-3 w-col-small-6"
                  v-for="(puItem, p) in purchase"
                  :key="p"
                >
                  <div class="div-block-9">
                    <div
                      class="div-block-8 pointer"
                      @click="handleDetail('purchase')"
                    >
                      <img
                        :src="`${$publicPath}images/38.png`"
                        alt
                        class="image-9"
                      />
                    </div>
                    <h4
                      class="heading-6 pointer"
                      @click="handleDetail('purchase')"
                      v-html="puItem.title"
                    ></h4>
                    <div class="text-block-13" v-html="puItem.subject"></div>
                    <div
                      class="product-btn w-button"
                      @click="handleDetail('purchase')"
                    >
                      查看详情
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 政策 -->
    <div id="policies" class="policies">
      <div class="container w-container">
        <div class="title-box">
          <h2 class="main-title" v-html="$t('message.statute')"></h2>
          <div class="text-block-7">。</div>
          <!-- <div class="main-text">Policies and regulations</div> -->
        </div>
        <div data-duration-in="300" data-duration-out="100" class="w-tabs">
          <div class="tabs-menu-3 w-tab-menu">
            <a
              :data-w-tab="prItem.type"
              class="notice-tab w-inline-block w-tab-link"
              :class="{ 'w--current': index == 0 }"
              v-for="(prItem, index) in $t('message.regulationsDataTab')"
              :key="index"
            >
              <div class="text-block-6">{{ prItem.title }}</div>
            </a>
          </div>
          <div class="w-tab-content">
            <div
              :data-w-tab="pItem.type"
              class="w-tab-pane"
              :class="{ 'w--tab-active': y == 0 }"
              v-for="(pItem, y) in policiesData"
              :key="y"
            >
              <div class="columns w-row">
                <div class="column-4 w-col w-col-7">
                  <div class="div-block-18">
                    <!-- <div data-animation="slide" data-duration="500" data-infinite="1" class="slider-3 w-slider">
                      <div class="w-slider-mask">
                        <div class="w-slide"><img src="images/tz1.png" srcset="images/tz1-p-500.png 500w, images/tz1.png 653w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, 100vw" alt="" class="image-13"></div>
                        <div class="w-slide"><img src="images/tz1.png" srcset="images/tz1-p-500.png 500w, images/tz1.png 653w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, 100vw" alt="" class="image-13"></div>
                      </div>
                      <div class="left-arrow-3 w-slider-arrow-left"><img src="images/left_1left.png" alt="">
                        <div class="icon w-icon-slider-left"></div>
                      </div>
                      <div class="right-arrow-3 w-slider-arrow-right"><img src="images/right.png" alt="">
                        <div class="icon-2 w-icon-slider-right"></div>
                      </div>
                      <div class="w-slider-nav w-round"></div>
                    </div>-->
                    <div class="div-block-14">
                      <div
                        class="div-block-15 pointer"
                        @click="handleDetail('statute', index)"
                      >
                        <!-- <img src="images/fb.png" srcset="images/fb-p-500.png 500w, images/fb.png 653w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 53vw, 48vw" alt="" class="image-11"> -->
                        <img
                          :src="imgItem.file"
                          alt
                          class="image-11"
                          v-for="(imgItem, n) in pItem.images"
                          :key="n"
                          v-show="imgIndex == n"
                        />
                      </div>
                      <div class="div-block-17">
                        <div
                          class="div-block-16"
                          v-for="(img, j) in pItem.images"
                          :key="j"
                          :class="{ active: j == imgIndex }"
                          @click="handleImg(j)"
                        >
                          <img :src="img.file" alt class="image-12" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column-3 w-col w-col-5">
                  <ul class="list w-list-unstyled">
                    <li
                      class="list-item"
                      v-for="(list, i) in pItem.list"
                      :key="i"
                      :class="{ 'list-last': i + 1 == pItem.list.length }"
                    >
                      <div class="policies-time">{{ list.createTime }}</div>
                      <h3
                        class="policies-title ellipsis-1"
                        @click="handleDetail('statute', index)"
                      >
                        {{ list.title }}
                      </h3>
                      <p class="policies-text ellipsis-2">{{ list.subject }}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 通知 -->
    <div id="notice" class="section-2 notice">
      <div class="container notice-box w-container">
        <div class="title-box">
          <h2 class="main-title" v-html="$t('message.notice')"></h2>
          <div class="text-block-7">。</div>
          <!-- <div class="main-text">Notice announcement</div> -->
        </div>
        <div
          data-duration-in="300"
          data-duration-out="100"
          class="notice-tabs w-tabs"
        >
          <div class="tabs-menu-2 w-tab-menu">
            <a
              :data-w-tab="item.type"
              class="notice-tab w-inline-block w-tab-link"
              :class="{ 'w--current': index == 0 }"
              v-for="(item, index) in $t('message.noticeDataTab')"
              :key="index"
            >
              <div class="text-block-6">{{ item.title }}</div>
            </a>
          </div>
          <div class="tabs-content w-tab-content">
            <div
              :data-w-tab="item.type"
              class="w-tab-pane"
              :class="{ 'w--tab-active': index == 0 }"
              v-for="(item, index) in noticeData"
              :key="index"
            >
              <ul class="list-2 w-list-unstyled">
                <li
                  class="list-item-2"
                  v-for="(list, i) in item"
                  :key="i"
                  @click="handleDetail('notice', index)"
                >
                  <div class="columns-3 notice-col w-row">
                    <div
                      class="column-5 w-col w-col-2 w-col-medium-2 w-col-small-small-stack"
                    >
                      <div class="div-block-5">
                        <img :src="list.file" alt class="image-4" />
                      </div>
                    </div>
                    <div
                      class="column-6 w-col w-col-9 w-col-medium-9 w-col-small-small-stack"
                    >
                      <div class="div-block-6">
                        <h3 class="heading-4 ellipsis-1">{{ list.title }}</h3>
                        <p class="paragraph ellipsis-2">{{ list.subject }}</p>
                      </div>
                    </div>
                    <div
                      class="column-7 w-col w-col-1 w-col-medium-1 w-col-small-small-stack"
                    >
                      <div class="text-block-9">{{ list.day }}</div>
                      <div class="text-block-10">{{ list.date }}</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.tabs-content-3 {
  padding-top: 30px;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

const exampleComponents = {
  props: ["text"],
  template: `<div>text from  parent: {{text}}</div>`
};

export default {
  name: "amap-page",
  components: {
    HelloWorld
  },
  data() {
    let self = this;
    return {
      zoom: 8,
      center: [116.458, 39.42],
      windows: [],
      markers: [
        {
          position: [116.458, 39.42],
          events: {
            click: e => {
              this.windows.forEach(window => {
                window.visible = false;
              });
              this.window = this.windows[i];
              this.$nextTick(() => {
                this.window.visible = true;
              });
            }
          },
          visible: true,
          draggable: false
        }
      ],
      loaded: false,
      window: {},
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            }
          }
        }
      ],
      slideList: [
        {
          title: "银行“微时贷”助力<br>您的事业梦 。",
          text: "Changbai Mountain<br>Forest hot spring health resort.",
          info: [
            {
              title: "银行",
              text: "Latest information"
            },
            {
              title: "热门业务",
              text: "Latest information"
            },
            {
              title: "最新资讯",
              text: "Latest information"
            }
          ]
        },
        {
          title: "银行“微时贷”助力<br>您的事业梦 。",
          text: "Changbai Mountain<br>Forest hot spring health resort.",
          info: [
            {
              title: "银行",
              text: "Latest information"
            },
            {
              title: "热门业务",
              text: "Latest information"
            },
            {
              title: "最新资讯",
              text: "Latest information"
            }
          ]
        },
        {
          title: "银行“微时贷”助力<br>您的事业梦 。",
          text: "Changbai Mountain<br>Forest hot spring health resort.",
          info: [
            {
              title: "银行",
              text: "Latest information"
            },
            {
              title: "热门业务",
              text: "Latest information"
            },
            {
              title: "最新资讯",
              text: "Latest information"
            }
          ]
        }
      ],
      info: [
        {
          title: "铁岭银行",
          text: "Latest information"
        },
        {
          title: "热门业务",
          text: "Latest information"
        },
        {
          title: "最新资讯",
          text: "Latest information"
        }
      ],
      businessData: [],
      optimization: [],
      imgIndex: 0,
      policiesDataTab: [
        {
          title: "行业法规"
        },
        {
          title: "政策解读"
        }
      ],
      policiesData: [],
      purchase: [],
      noticeDataTab: [{ title: "国内资讯" }, { title: "国际资讯" }],
      noticeData: []
    };
  },
  mounted() {
    this.getHomeInfo();
  },

  methods: {
    //处理banner图数据
    setBanner(msg) {
      for (let item of msg) {
        item.img = `background-image:url(${item.file});`;
        let info = [];
        item.info = info;
      }
      console.log(msg);
      this.slideList = msg;
    },
    //处理通知公告数据
    setNotice(msg) {
      console.log(msg);
      msg.forEach((element, idx) => {
        element.title = element[0].categoryName;
        element.type = idx;
        for (let iterator of element) {
          iterator.day = iterator.createTime.substr(8, 2);
          iterator.date = iterator.createTime.substr(0, 7);
        }
      });
      this.noticeData = msg;
    },
    //处理铁岭优选数据
    setTieling(msg) {
      this.optimization = msg;
    },
    //处理产品采购数据
    setPurchase(msg) {
      this.purchase = msg;
    },
    //处理政策法规数据
    setRegulations(msg) {
      msg.forEach((element, idx) => {
        element.type = idx;
        element.title = element.list[0].categoryName;
        console.log(element);
      });
      this.policiesData = msg;
    },
    //处理业务分类数据
    setClassification(buType) {
      buType.forEach((item, idx) => {
        item.data = [];
        item.type = idx + 1;
        let all = {};
        let info = {};
        info.title = item.title;
        info.subject = item.subject;
        all.info = info;
        all.list = item.buList;
        item.data.push(all);
      });
      this.businessData = buType;
    },
    setAmap(bkList) {
      bkList.forEach((item, i) => {
        if (i == 0) {
          this.center = [item.lng, item.lat];
        }
        let marker = {
          position: [item.lng, item.lat],
          events: {
            click: e => {
              this.windows.forEach(window => {
                window.visible = false;
              });
              this.window = this.windows[i];
              this.$nextTick(() => {
                this.window.visible = true;
              });
            }
          },
          visible: true,
          draggable: false
        };
        let currentWindow = {
          position: [item.lng, item.lat],
          content: item.title,
          visible: true,
          events: {
            close() {
              console.log("close infowindow1");
            }
          }
        };
        this.windows.push(currentWindow);
        this.window = this.windows[0];
        this.markers.push(marker);
      });
      console.log(this);
      console.log(this.markers);
      console.log(this.windows);
    },
    //获取主页需要的信息
    getHomeInfo() {
      const url = this.$store.state.url;
      axios
        .get(`${url}/bu/main`)
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            let banner = response.data.data.banner;
            this.setBanner(banner);
            let noList = response.data.data.noList;
            this.setNotice(noList);
            let opList = response.data.data.opList;
            this.setTieling(opList);
            let puList = response.data.data.puList;
            this.setPurchase(puList);
            let stList = response.data.data.stList;
            this.setRegulations(stList);
            let buType = response.data.data.buType;
            this.setClassification(buType);

            // this.$store.commit("logoUrl", response.data.data.logo);
            let bkList = response.data.data.bkList;
            this.setAmap(bkList);
          }
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    handleImg(index) {
      this.imgIndex = index;
    },
    // handleApply: function(name) {
    //   this.$router.push({ name: 'apply', query: { page: name,tab: this.$store.state.tabNum }});
    // },
    handleDetail: function(page, index = 0) {
      this.$router.push({ name: "detail", query: { page: page, tab: index } });
    },
    handleLink(page, index = 0) {
      this.$router.push("/" + page + "/" + (index + 1));
    }
  }
};
</script>
