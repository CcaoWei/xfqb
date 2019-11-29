<template>
  <div>
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      class="navigation w-nav"
    >
      <div class="navigation-wrap">
        <router-link to="/" id="logo" class="logo-link w-nav-brand w--current"
          ><img :src="logo" width="108" alt="" class="logo-image"
        /></router-link>
        <div id="menu" class="menu">
          <nav role="navigation" class="navigation-items w-nav-menu">
            <router-link
              :to="'/' + item.link"
              @click.native="$store.commit('setTabNum', 0)"
              class="navigation-item w-nav-link"
              :class="{ current: item.link == routeValue }"
              v-for="(item, index) in $t('message.nav')"
              :key="index"
              v-html="item.name"
            ></router-link>
          </nav>
          <div class="menu-button w-nav-button">
            <img
              :src="`${$publicPath}images/menu_1menu.png`"
              width="22"
              alt=""
              class="menu-icon"
            />
          </div>
        </div>

        <!-- <div class="div-block-3">
          <form action="/search" class="search w-form">
            <input
              type="search"
              class="search-input w-input"
              maxlength="256"
              name="query"
              placeholder="Search…"
              id="search"
              required=""
            /><img
              :src="`${$publicPath}images/search_1search.png`"
              alt=""
            /><input type="submit" value="Search" class="search-btn w-button" />
            <div class="div-block-19"></div>
          </form>
          <div id="head" class="div-block-13">
            <img
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Image/assets/placeholder.60f9b1840c.svg"
              alt=""
              class="image-10"
            />
          </div>
          <div id="name" class="text-block-15">Clayton Long</div>
        </div> -->
        <div class="div-block-3">
          <form action="/search" class="search w-form">
            <input
              type="search"
              class="search-input w-input"
              maxlength="256"
              name="query"
              placeholder="Search…"
              id="search"
              required=""
            />
            <img :src="`${$publicPath}images/search_1search.png`" alt="" />
            <!-- <input type="submit" value="搜索" class="search-btn w-button" /> -->
            <div class="div-block-19"></div>
            <div class="language">
              <el-select
                v-model="languageValue"
                placeholder="请选择"
                @change="changeLanguage"
              >
                <template slot="prefix">
                  <img
                    :src="`${$publicPath}images/` + languageValue + `.png`"
                    class="flag"
                  />
                </template>
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                  <div class="language-item">
                    <span>
                      <img
                        :src="`${$publicPath}images/` + item.value + `.png`"
                      />
                    </span>
                    <span>{{ item.label }}</span>
                  </div>
                  <!-- <span style="float: left; color: #8492a6; font-size: 13px">
                    <img :src="`${$publicPath}images/zh.png`">
                  </span>
                  <span style="float: right">{{ item.label }}</span> -->
                </el-option>
              </el-select>
            </div>
          </form>
          <!-- <div id="head" class="div-block-13">
            <img
              :src="`${$publicPath}images/head.png`"
              alt=""
              class="image-10"
            />
          </div>
          <div id="name" class="text-block-15">Clayton Long</div> -->
        </div>
      </div>
      <!-- <div class="c-language">
        <el-select v-model="value" @change="changeLanguage">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div> -->
    </div>
    <div class="s-bg about-top-bg" v-if="$route.name !== 'home'"></div>
  </div>
</template>
<style lang="less" scoped>
.c-language {
  position: absolute;
  right: 20px;
}
.el-input--suffix .el-input__inner {
  padding-right: 0;
  background: rgba(0, 0, 0, 0);
  border: none;
  height: auto;
  padding: 0;
  width: 85px;
  color: #fff;
}
.el-select .el-input .el-select__caret {
  color: #fff !important;
}
.head-line {
  height: 5px;
  background-color: #28b2a5;
  position: relative;
  z-index: 222;
}
.language {
  display: flex;
  /deep/ .el-select {
    max-width: 110px;
    .el-input__inner {
      border: 1px solid rgba(248, 248, 248, 0.46);
      border-radius: 10.5px;
      height: 21px;
      line-height: 21px;
      font-size: 12px;
      padding-left: 35px;
      padding-right: 0;
      background-color: transparent;
      color: #fff;
    }
    .el-input__prefix {
      left: 9px;
      top: 50%;
      margin-top: -6px;
    }
    .el-icon-arrow-up:before {
      content: "\e78f";
    }
    .el-input {
      overflow: hidden;
      .el-select__caret {
        color: #fff;
        line-height: 21px;
        font-size: 12px;
        height: 21px;
      }
    }
    .el-input.is-focus {
      .el-input__inner {
        border-color: #fff;
      }
    }
  }
}
.language-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-select-dropdown__item {
  padding-left: 16px;
  padding-right: 16px;
  &.selected {
    color: #27b2a5;
  }
}
.el-scrollbar__wrap {
  width: 100%;
}
.search {
  margin-right: 0;
}
.div-block-19 {
  margin-left: 16px;
  margin-right: 16px;
}
@media (max-width: 991px) {
  .search {
    margin-right: 20px;
  }
}
</style>
<script>
import { log } from "util";
import axios from "axios";

export default {
  name: "Head",
  // props: {
  //   active: {
  //     type: String,
  //     default: ()=> ''
  //   }
  // },
  computed: {
    activeNav: function() {
      // let name = this.;
      return this.$route.query.page;
    }
  },
  data() {
    return {
      languageValue: "zh",
      logo: "",
      value: "中文",
      // publicPath: process.env.BASE_URL
      nav: [
        {
          name: "业务分类",
          link: "service"
        },
        {
          name: "铁岭优选",
          link: "best"
        },
        {
          name: "银行分行",
          link: "branch"
        },
        {
          name: "产品采购",
          link: "purchase"
        },
        {
          name: "政策法规",
          link: "statute"
        },
        {
          name: "通知公告",
          link: "notice"
        },
        {
          name: "关于我们",
          link: "about"
        }
      ],
      options: [
        {
          value: "zh",
          label: "中文",
          uiClick: "changezh"
        },
        {
          value: "en",
          label: "English",
          uiClick: "changeen"
        },
        {
          value: "ko",
          label: "한국어",
          uiClick: "changeko"
        }
      ],
      routeValue: ""
    };
  },
  created() {
    this.changeLanguage(this.$i18n.locale);
    this.getlogo();
  },
  methods: {
    getlogo() {
      const url = this.$store.state.url;
      axios
        .get(`${url}/bu/main`)
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            this.logo = response.data.data.logo;
          }
          console.log(this.logo);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    //语言问题   语言切换
    changeLanguage(val) {
      switch (val) {
        case "zh":
          this.value = "中文";
          this.$i18n.locale = "zh";
          break;
        case "en":
          this.value = "English";
          this.$i18n.locale = "en";
          break;
        case "ko":
          this.value = "한국어";
          this.$i18n.locale = "ko";
          break;
        default:
          break;
      }
    }
  },
  watch: {
    $route: {
      handler: function(to) {
        // console.log('new: %s, old: %s', to, from)
        // console.log(to);
        if (to && to.redirectedFrom) {
          this.routeValue = to.redirectedFrom.replace("/", "");
        } else if (to.name) {
          this.routeValue = to.name.slice(0, to.name.length - 1);
        }
        // console.log(this.routeValue)
        if (this.routeValue == "detai" || this.routeValue == "appl") {
          this.routeValue = this.activeNav;
        }
        Webflow.require("ix2").init({
          events: {
            e: {
              id: "e",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "FADE_EFFECT",
                config: { actionListId: "fadeIn", autoStopEventId: "e-2" },
                instant: false
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id:
                  "5dbf7ac45ad64f2772898b6f|7c45e740-61b8-30b3-85a2-a38e0d5726b9"
              },
              config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: 0,
                direction: null,
                effectIn: true
              },
              createdOn: 1570695089161
            }
          },
          actionLists: {
            fadeIn: {
              id: "fadeIn",
              useFirstGroupAsInitialState: true,
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        duration: 0,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: true
                        },
                        value: 0
                      }
                    }
                  ]
                },
                {
                  actionItems: [
                    {
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "outQuart",
                        duration: 1000,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: true
                        },
                        value: 1
                      }
                    }
                  ]
                }
              ]
            }
          },
          site: {
            mediaQueries: [
              { key: "main", min: 992, max: 10000 },
              { key: "medium", min: 768, max: 991 },
              { key: "small", min: 480, max: 767 },
              { key: "tiny", min: 0, max: 479 }
            ]
          }
        });
      },
      immediate: true
    }
  }
};
</script>
