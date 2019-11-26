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
          ><img
            :src="`${$publicPath}images/logo_name_white.png`"
            width="108"
            alt=""
            class="logo-image"
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
              >{{ item.name }}</router-link
            >
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
      </div>
      <div class="c-language">
        <el-select v-model="value" @change="changeLanguage">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="s-bg about-top-bg" v-if="$route.name !== 'home'"></div>
  </div>
</template>
<style>
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
</style>
<script>
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
  },
  methods: {
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
