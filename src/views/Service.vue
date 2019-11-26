<template>
  <div class="section-4 s-bg-color page">
    <Tabs :data="nav"></Tabs>
    <div class="container w-container">
      <div class="page-main">
        <ul class="project-list w-list-unstyled">
          <li 
            class="list-item-3 w-clearfix"
            v-for="(item, index) in serviceList"
            :key="index"
          >
            <div class="project-list-left pointer" @click="handleDetail">
              <img
                :src="item.file"
                alt=""
                class="wh100 list-img"
              />
            </div>
            <div class="div-block-31">
              <h3 class="heading-8 pointer ellipsis-1" @click="handleDetail">
               {{item.title}}
              </h3>
              <p class="paragraph-6 ellipsis-4">
                {{item.subject}}
              </p>
              <div class="more-box">
                <div class="more-btn w-inline-block" @click="handleDetail">
                  <div class="text-block-45">MORE</div>
                  <img
                    :src="`${$publicPath}images/icon10_1icon10.png`"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import axios from "axios"; 
import Const from "../assets/Const"

export default {
  name: "Service",
  components: {
    Tabs
  },
  data() {
    return {
      paging: {
        current: 1,
        size: 4,
      },
      serviceList:[],
      nav: {
        title: "业务分类",
        name: "service",
        tabs: [
          {
            name: "账户管理",
            link: "1"
          },
          {
            name: "转账汇款",
            link: "2"
          },
          {
            name: "定活互转",
            link: "3"
          },
          {
            name: "代理缴费",
            link: "4"
          },
          {
            name: "特色业务",
            link: "5"
          },
          {
            name: "信用卡",
            link: "6"
          }
        ],
        
      }
    };
  },
  computed: {
    name: function() {
      console.log("dkdkkddk")
    }
  },
  created(){
    this.getServiceData();
  },
  methods: {
    //获取业务分类数据  默认获取账户管理 
    getServiceData(){
      console.log(this)
      const url = this.$store.state.url;
      let paging = this.paging;
      axios.get(`${url}/business/list`, {
          params: {
            category: Const.BUSINESS_DATA.ACCOUNT_MANAGEMENT+1,
            current: paging.current,
            size:paging.size,
          }
        }).then(response => {
          console.log(response);
          if(response.status == 200){
             this.serviceList = response.data.data.records
          }
          console.log(this)
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    
    },
    handleDetail: function() {
      // this.$store.commit('setTabs', this.nav);
      console.log("????")
      this.$router.push({
        name: "detail",
        query: { page: "service", tab: this.$store.state.tabNum }
      });
    }
  }
};
</script>
