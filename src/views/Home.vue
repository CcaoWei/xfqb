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
            ref="slide"
            :class="'slide-' + (index + 1) + ' w-slide'"
            v-for="(item, index) in slideList"
            :key="index"
            :style="item.img"
          >
            <!-- <img :src="item.file" class="c-banner" alt=""> -->
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
              <div class="top-text" v-html="item.subject"></div>
            </div>
            <div class="top-nav">
              <div class="columns-8 w-row">
                <div
                  class="nav-normal w-col w-col-4 w-col-tiny-4"
                  v-for="(info, i) in info"
                  :key="i"
                  :class="{ 'nav-active': i == index }"
                >
                  <div class="text-block-4">{{ info.text }}</div>
                  <h3 class="heading">{{ info.title }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="left-arrow w-slider-arrow-left">
          <img :src="`${$publicPath}images/left_1left.png`" alt />
        </div>
        <div class="right-arrow w-slider-arrow-right">
          <img :src="`${$publicPath}images/right.png`" alt />
        </div>
        <div class="slide-nav w-slider-nav w-round"></div>
      </div>
    </div>

    <!-- 业务分类 -->
    <div id="enterprise" class="section-2 tab-box">
      <div class="container w-container">
        <div class="title-box">
          <h2 class="main-title">业务分类</h2>
          <div class="text-block-7">。</div>
          <div class="main-text">Enterprise classification</div>
        </div>
        <div
          data-duration-in="300"
          data-duration-out="100"
          class="tabs-2 w-tabs"
        >
          <div class="tabs-menu w-tab-menu">
            <a
              :data-w-tab="item.type"
              class="notice-tab w-inline-block w-tab-link"
              :class="{ 'w--current': index == 0 }"
              v-for="(item, index) in $t('message.businessDataTab')"
              :key="index"
            >
              <div class="text-block-6">{{ item.title }}</div>
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
                          <div class="text-block-45">MORE</div>
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
                                  >
                                    MORE
                                  </div>
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
            <strong class="main-title">铁岭优选</strong>
          </h2>
          <div class="text-block-7">。</div>
          <div class="main-text">Tieling optimization</div>
        </div>
        <div data-duration-in="300" data-duration-out="100" class="tabs w-tabs">
          <div class="tabs-menu-4 w-tab-menu">
            <a
              data-w-tab="Tab 1"
              class="notice-tab w-inline-block w-tab-link w--current"
            >
              <div class="text-block-6">更多</div>
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
            <strong class="main-title">银行分行</strong>
          </h2>
          <div class="text-block-7">。</div>
          <div class="main-text">Branch/enterprise</div>
        </div>
        <div data-duration-in="300" data-duration-out="100" class="tabs w-tabs">
          <div class="tabs-menu-4 w-tab-menu">
            <a
              data-w-tab="Tab 1"
              class="notice-tab w-inline-block w-tab-link w--current"
            >
              <div class="text-block-6">更多</div>
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
              ></el-amap>
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
          <h2 class="main-title">产品采购</h2>
          <div class="text-block-7">。</div>
          <div class="main-text">Product purchase</div>
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
                {{mpItem.title}}
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
          <h2 class="main-title">政策法规</h2>
          <div class="text-block-7">。</div>
          <div class="main-text">Policies and regulations</div>
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
                          :src="imgItem"
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
                          <img :src="img" alt class="image-12" />
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
          <h2 class="main-title">通知公告</h2>
          <div class="text-block-7">。</div>
          <div class="main-text">Notice announcement</div>
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
              v-for="(item, index) in  $t('message.noticeDataTab')"
              :key="index"
            >
              <div class="text-block-6" >{{ item.title }}</div>
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

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    let self = this;
    return {
      center: [121.59996, 31.197646],
      zoom: 18,
      lng: 0,
      lat: 0,
      loaded: false,
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
          title: "铁岭银行“微时贷”助力<br>您的事业梦 。",
          text: "Changbai Mountain<br>Forest hot spring health resort.",
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
          ]
        },
        {
          title: "铁岭银行“微时贷”助力<br>您的事业梦 。",
          text: "Changbai Mountain<br>Forest hot spring health resort.",
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
          ]
        },
        {
          title: "铁岭银行“微时贷”助力<br>您的事业梦 。",
          text: "Changbai Mountain<br>Forest hot spring health resort.",
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
      businessData: [
        {
          title: "账户管理",
          data: [
            {
              info: {
                title: "努力打造实力金融，不断铸就品质",
                text:
                  "铁岭银行个人业务主要包括储蓄业务、贷款业务、中间业务以及其他个人业务。",
                link: "#"
              },
              list: [
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                },
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                },
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                }
              ]
            }
          ]
        },
        {
          title: "转账汇款",
          data: [
            {
              info: {
                title: "的方法你能否烦烦烦反对，不断铸就品质",
                text:
                  "铁岭银行个人业务主要包括储蓄业务、贷款业务、中间业务以及其他个人业务。",
                link: "#"
              },
              list: [
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                },
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                },
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                }
              ]
            }
          ]
        },
        {
          title: "定活互转",
          data: [
            {
              info: {
                title: "电风扇发射点冯绍峰士大夫，不断铸就品质",
                text:
                  "铁岭银行个人业务主要包括储蓄业务、贷款业务、中间业务以及其他个人业务。",
                link: "#"
              },
              list: [
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                },
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                },
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                }
              ]
            }
          ]
        },
        {
          title: "代理缴费",
          data: [
            {
              info: {
                title: "的发生发生发射点发，不断铸就品质",
                text:
                  "铁岭银行个人业务主要包括储蓄业务、贷款业务、中间业务以及其他个人业务。",
                link: "#"
              },
              list: [
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                },
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                },
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                }
              ]
            }
          ]
        },
        {
          title: "特色业务",
          data: [
            {
              info: {
                title: "幅度萨芬撒旦飞洒地方，不断铸就品质",
                text:
                  "铁岭银行个人业务主要包括储蓄业务、贷款业务、中间业务以及其他个人业务。",
                link: "#"
              },
              list: [
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                },
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                },
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                }
              ]
            }
          ]
        },
        {
          title: "信用卡",
          data: [
            {
              info: {
                title: "大师傅士大夫撒旦发生融，不断铸就品质",
                text:
                  "铁岭银行个人业务主要包括储蓄业务、贷款业务、中间业务以及其他个人业务。",
                link: "#"
              },
              list: [
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                },
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                },
                {
                  title: "标题文字位置",
                  text: "统筹集团债务额度，融资模式等融资的关键条件。",
                  link: "#"
                  // img: `${$publicPath}images/y1.png`
                }
              ]
            }
          ]
        }
      ],
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
      policiesData: [
        {
          title: "行业法规",
          data: {
            preImg: [
              {
                small: "images/f1.png",
                big: "images/fb.png"
              },
              {
                small: "images/f2.png",
                big: "images/f2.png"
              },
              {
                small: "images/f3.png",
                big: "images/f3.png"
              },
              {
                small: "images/f4.png",
                big: "images/f4.png"
              }
            ],
            list: [
              {
                title: "学习雷锋好榜样，忠于革命忠于党",
                text:
                  " “学习雷锋好榜样，忠于革命忠于党，爱憎分明不忘本，立场坚定斗志强......”伴随着激情悠扬的歌声，我们迎来了3月5日第56个全国学雷锋纪念日，也是第20个中国青年志愿者服务日。为深入贯彻落实习近平总书记关于学习雷锋的重要论述和重要指示批示精神，结合团组织的号召，昌图支行联合团昌图县委、教育局团委、县中心医院、昌图县青年志愿者协会青年志愿者、铁北小学和北山小学学生等多家单位代表80余人来到昌图县社会福利院慰问老人，为福利院老人送去大米、白面、豆油、水果、糕点等多种生活所需慰问品。",
                time: "2019-10-10"
              },
              {
                title: "西丰支行获西丰县金融工作单位两项荣誉称号",
                text:
                  "2018年3月4日，西丰县人民政府金融工作办公室和中国人民银行西丰县支行联合召开金融工作会议。会上颁布了《关于表彰2018年西丰县金融工作先进单位的决定》。",
                time: "2019-10-10"
              },
              {
                title: "西丰支行春节走访贫困户",
                text:
                  "2019年1月30日，西丰支行马兵副行长一行五人来到明德乡居贤村，为十户困难家庭送去米、面、油等春节慰问品。走访中，行领导关心了贫困户的生活情况和家人身体状况，并鼓励他们要坚强面对生活，希望他们能够过一个快乐祥和的新年。",
                time: "2019-10-10"
              }
            ]
          }
        },
        {
          title: "政策解读",
          data: {
            preImg: [
              {
                small: "images/f1.png",
                big: "images/fb.png"
              },
              {
                small: "images/f2.png",
                big: "images/f2.png"
              },
              {
                small: "images/f3.png",
                big: "images/f3.png"
              },
              {
                small: "images/f4.png",
                big: "images/f4.png"
              }
            ],
            list: [
              {
                title: "学习雷锋好榜样，忠于革命忠于党",
                text:
                  " “学习雷锋好榜样，忠于革命忠于党，爱憎分明不忘本，立场坚定斗志强......”伴随着激情悠扬的歌声，我们迎来了3月5日第56个全国学雷锋纪念日，也是第20个中国青年志愿者服务日。为深入贯彻落实习近平总书记关于学习雷锋的重要论述和重要指示批示精神，结合团组织的号召，昌图支行联合团昌图县委、教育局团委、县中心医院、昌图县青年志愿者协会青年志愿者、铁北小学和北山小学学生等多家单位代表80余人来到昌图县社会福利院慰问老人，为福利院老人送去大米、白面、豆油、水果、糕点等多种生活所需慰问品。",
                time: "2019-10-10"
              },
              {
                title: "西丰支行获西丰县金融工作单位两项荣誉称号",
                text:
                  "2018年3月4日，西丰县人民政府金融工作办公室和中国人民银行西丰县支行联合召开金融工作会议。会上颁布了《关于表彰2018年西丰县金融工作先进单位的决定》。",
                time: "2019-10-10"
              },
              {
                title: "西丰支行春节走访贫困户",
                text:
                  "2019年1月30日，西丰支行马兵副行长一行五人来到明德乡居贤村，为十户困难家庭送去米、面、油等春节慰问品。走访中，行领导关心了贫困户的生活情况和家人身体状况，并鼓励他们要坚强面对生活，希望他们能够过一个快乐祥和的新年。",
                time: "2019-10-10"
              }
            ]
          }
        }
      ],
      purchase: [],
      noticeDataTab: [{ title: "国内资讯" }, { title: "国际资讯" }],
      noticeData: [
        {
          title: "国际资讯",
          data: [
            {
              title: "叙政府军已进入叙北库尔德武装控制区",
              text:
                "【环球网快讯】“今日俄罗斯”(RT)14日援引阿拉伯叙利亚通讯社(SANA)消息称，在土耳其与叙利亚库尔德武装交火之际，当地时间14日，叙利亚政府军部队进入叙北部库尔德人实际控制的泰勒塔米尔市。报道称，该市规模较小，但位于几条主干道交汇处，具有重大战略意义。",
              img: "images/news5.png",
              link: "#",
              time: "2019-09-29"
            },
            {
              title: "油轮被炸后，伊朗称发现可创收400亿美元新气田",
              text:
                "伊朗方面于10月13日宣布发现新天然气储备，称将给该国创收400亿美元。伊朗还表示，有能力在未来勘探出新的天然气和石油储备。",
              img: "images/news2.png",
              link: "#",
              time: "2019-09-28"
            },
            {
              title: "西班牙严惩加泰罗尼亚分裂分子，9名领导人入狱",
              text:
                "当地时间10月14日，西班牙最高法院宣布，9名分裂分子煽动叛乱罪成立，对他们判处9到13年有期徒刑。中国日报网10月14日电（严玉洁） 2017年10月，西班牙加泰罗尼亚自治区（加区）举行“独立公投”，随后单方面宣布“独立”。对于分裂势力领导人，西班牙政府进行了严惩。据路透社报道，当地时间10月14日，西班牙最高法院宣布，9名分裂分子煽动叛乱罪成立，对他们判处9到13年有期徒刑。另有3名被告只犯下违抗罪，没有被判处入狱。",
              img: "images/news3.png",
              link: "#",
              time: "2019-09-27"
            },
            {
              title: "韩媒称韩国艺人崔雪莉被发现死在家中 死因未明",
              text:
                "【环球网快讯】“今日俄罗斯”(RT)14日援引阿拉伯叙利亚通讯社(SANA)消息称，在土耳其与叙利亚库尔德武装交火之际，当地时间14日，叙利亚政府军部队进入叙北部库尔德人实际控制的泰勒塔米尔市。报道称，该市规模较小，但位于几条主干道交汇处，具有重大战略意义。",
              img: "images/news4.png",
              link: "#",
              time: "2019-09-26"
            },
            {
              title: "英国女王：10月31日前脱欧是政府首要任务",
              text:
                "【环球网快讯】“今日俄罗斯”(RT)14日援引阿拉伯叙利亚通讯社(SANA)消息称，在土耳其与叙利亚库尔德武装交火之际，当地时间14日，叙利亚政府军部队进入叙北部库尔德人实际控制的泰勒塔米尔市。报道称，该市规模较小，但位于几条主干道交汇处，具有重大战略意义。",
              img: "images/news5.png",
              link: "#",
              time: "2019-09-25"
            }
          ]
        },
        {
          title: "国内资讯",
          data: [
            {
              title: "叙政府军已进入叙北库尔德武装控制区",
              text:
                "【环球网快讯】“今日俄罗斯”(RT)14日援引阿拉伯叙利亚通讯社(SANA)消息称，在土耳其与叙利亚库尔德武装交火之际，当地时间14日，叙利亚政府军部队进入叙北部库尔德人实际控制的泰勒塔米尔市。报道称，该市规模较小，但位于几条主干道交汇处，具有重大战略意义。",
              img: "images/news5.png",
              link: "#",
              time: "2019-09-29"
            },
            {
              title: "油轮被炸后，伊朗称发现可创收400亿美元新气田",
              text:
                "伊朗方面于10月13日宣布发现新天然气储备，称将给该国创收400亿美元。伊朗还表示，有能力在未来勘探出新的天然气和石油储备。",
              img: "images/news2.png",
              link: "#",
              time: "2019-09-28"
            },
            {
              title: "西班牙严惩加泰罗尼亚分裂分子，9名领导人入狱",
              text:
                "当地时间10月14日，西班牙最高法院宣布，9名分裂分子煽动叛乱罪成立，对他们判处9到13年有期徒刑。中国日报网10月14日电（严玉洁） 2017年10月，西班牙加泰罗尼亚自治区（加区）举行“独立公投”，随后单方面宣布“独立”。对于分裂势力领导人，西班牙政府进行了严惩。据路透社报道，当地时间10月14日，西班牙最高法院宣布，9名分裂分子煽动叛乱罪成立，对他们判处9到13年有期徒刑。另有3名被告只犯下违抗罪，没有被判处入狱。",
              img: "images/news3.png",
              link: "#",
              time: "2019-09-27"
            },
            {
              title: "韩媒称韩国艺人崔雪莉被发现死在家中 死因未明",
              text:
                "【环球网快讯】“今日俄罗斯”(RT)14日援引阿拉伯叙利亚通讯社(SANA)消息称，在土耳其与叙利亚库尔德武装交火之际，当地时间14日，叙利亚政府军部队进入叙北部库尔德人实际控制的泰勒塔米尔市。报道称，该市规模较小，但位于几条主干道交汇处，具有重大战略意义。",
              img: "images/news4.png",
              link: "#",
              time: "2019-09-26"
            },
            {
              title: "英国女王：10月31日前脱欧是政府首要任务",
              text:
                "【环球网快讯】“今日俄罗斯”(RT)14日援引阿拉伯叙利亚通讯社(SANA)消息称，在土耳其与叙利亚库尔德武装交火之际，当地时间14日，叙利亚政府军部队进入叙北部库尔德人实际控制的泰勒塔米尔市。报道称，该市规模较小，但位于几条主干道交汇处，具有重大战略意义。",
              img: "images/news5.png",
              link: "#",
              time: "2019-09-25"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    //处理banner图数据
    setBanner(msg) {
      for (let item of msg) {
        item.img = `background-image:url(${item.file});background-repeat: no-repeat;`;
      }
      this.slideList = msg;
    },
    //处理通知公告数据
    setNotice(msg) {
      console.log(msg);
      msg.forEach((element,idx) => {
        element.title = element[0].categoryName;
        element.type = idx;
        for (let iterator of element) {
          iterator.day = iterator.createTime.substr(8, 2);
          iterator.date = iterator.createTime.substr(0, 7);
        }
      });
      this.noticeData = msg;
      console.log(this);
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
      msg.forEach((element,idx) => {
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
        item.type = idx;
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
          }
        })
        .catch(function(error) {
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
      // console.log(page)
      // this.$router.push();
      this.$router.push("/" + page + "/" + (index + 1));
    }
  }
};
</script>
