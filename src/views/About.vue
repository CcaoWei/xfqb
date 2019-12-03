<template>
  <div class="section-4 s-bg-color page">
    <Tabs :data="nav"></Tabs>
    <div class="container w-container">
      <div class="page-main">
        <h2 class="about-title1">{{ aboutInfo.title }}</h2>
        <!-- <div class="about-bg">TOURISM HOLDINGS</div> -->
        <p class="paragraph-3" v-html="aboutInfo.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import axios from "axios";

export default {
  name: "About",
  components: {
    Tabs
  },
  data() {
    return {
      nav: {
        title: "关于我们",
        name: "about",
        tabs: [
          {
            name: "集团简介",
            link: "1"
          }
        ]
      },
      aboutInfo: ""
    };
  },
  mounted() {
    this.getAboutInfo();
  },
  methods: {
    getAboutInfo() {
      console.log("?D?D?D");
      const url = this.$store.state.url;
      axios
        .get(`${url}/about/detail`)
        .then(response => {
          console.log(response);
          if (response.status == 200) {
            this.aboutInfo = response.data.data;
          }
          console.log(this);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    }
  }
};
</script>
