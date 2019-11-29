import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "../public/js/webflow.js";
import VueAMap from "vue-amap";
import VueI18n from "vue-i18n";
import LangEn from "./assets/en";
import LangZh from "./assets/zh";
import LangKo from "./assets/ko";

Vue.use(VueI18n);
Vue.use(VueAMap);
const i18n = new VueI18n({
  locale: "zh",
  messages: {
    en: LangEn,
    zh: LangZh,
    ko: LangKo
  }
});

VueAMap.initAMapApiLoader({
  key: "df42d34f6acaa293889f667a3e61005a",
  plugin: [
    "AMap.Autocomplete",

    "AMap.PlaceSearch",

    "AMap.Scale",

    "AMap.OverView",

    "AMap.ToolBar",

    "AMap.MapType",

    "AMap.PolyEditor",

    "AMap.CircleEditor",

    "AMap.Geolocation"
  ],
  v: "1.4.4"
});

Vue.config.productionTip = false;
Vue.prototype.$publicPath = process.env.BASE_URL;
// router.beforeEach((to,from,next) => {
//         window.location.reload();
//         next()
//     })

// Webflow.redraw.on()
// console.log(Webflow.redraw)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
