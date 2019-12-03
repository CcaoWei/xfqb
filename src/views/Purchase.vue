<template>
  <div class="section-4 s-bg-color page">
    <Tabs :data="$t('message.PurchaseNav')"></Tabs>
    <div class="container w-container">
      <div class="page-main">
        <div class="pur-top">
          <div data-delay="0" class="dropdown down1 w-dropdown">
            <el-select v-model="cityValue" placeholder="选择地区">
              <el-option
                v-for="item in cityData"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
            <!-- <nav class="dropdown-list w-dropdown-list">
              <a href="#" class="dropdown-link w-dropdown-link">Link 1</a
              ><a href="#" class="dropdown-link w-dropdown-link">Link 2</a
              ><a href="#" class="dropdown-link w-dropdown-link">Link 3</a>
            </nav> -->
          </div>
          <div data-delay="0" class="dropdown down2 w-dropdown">
            <el-select v-model="infoTypeValue" placeholder="信息类型">
              <el-option
                v-for="item in infoType"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
            <!-- <nav class="dropdown-list w-dropdown-list">
              <a href="#" class="dropdown-link w-dropdown-link">Link 1</a
              ><a href="#" class="dropdown-link w-dropdown-link">Link 2</a
              ><a href="#" class="dropdown-link w-dropdown-link">Link 3</a>
            </nav> -->
          </div>
          <div data-delay="0" class="dropdown down3 w-dropdown">
            <div class="block">
              <el-date-picker
                v-model="dataValue"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择时间"
              >
              </el-date-picker>
            </div>
            <!-- <nav class="dropdown-list w-dropdown-list">
              <a href="#" class="dropdown-link w-dropdown-link">Link 1</a
              ><a href="#" class="dropdown-link w-dropdown-link">Link 2</a
              ><a href="#" class="dropdown-link w-dropdown-link">Link 3</a>
            </nav> -->
          </div>
          <div @click="searchPurchase" class="button-2 w-button">搜索</div>
        </div>
        <div class="two-list w-clearfix">
          <div class="two-left">
            <div class="pur-box">
              <div class="pur-table pur-table-title">
                <div class="pur-item1 pur-title">日期</div>
                <div class="pur-item2 pur-title">地区</div>
                <div class="pur-item3 pur-title">项目类型</div>
                <div class="pur-item4 pur-title">招标采购标题</div>
              </div>
              <div
                class="pur-table pur-con pointer"
                @click="handleDetail(item.id)"
                v-for="item in purchaseInfo.records"
                :key="item.id"
              >
                <div class="pur-item1 pur-text">
                  {{ item.time.substr(0, 10) }}
                </div>
                <div class="pur-item2 pur-text">{{ item.regionName }}</div>
                <div class="pur-item3 pur-text">{{ item.typeName }}</div>
                <div class="pur-item4 pur-text">
                  {{ item.subject }}
                </div>
              </div>
              <div class="div-block-32">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  :page-size="purchaseInfo.size"
                  layout="prev, pager, next, jumper"
                  background
                  :total="purchaseInfo.total"
                >
                </el-pagination>
              </div>
            </div>
          </div>
          <div class="two-right">
            <RightList
              :data="list"
              @handleDetail="handleDetail"
              rightNum
            ></RightList>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.el-date-editor .el-input__inner {
  width: 100%;
  background: #fff;
  color: #8b8b8b;
}
.pur-top .el-input__inner {
  width: 100%;
  background: #fff;
  color: #8b8b8b;
  padding-top: 5px;
  padding-bottom: 5px;
}
.dropdown .el-select {
  width: 95%;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 95%;
}
.pur-top .down1 .el-input__inner,
.pur-top .down2 .el-input__inner {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
}
</style>
<script>
import Tabs from "@/components/Tabs.vue";
import RightList from "@/components/RightList.vue";
import axios from "axios";

export default {
  name: "Purchase",
  components: {
    Tabs,
    RightList
  },
  data() {
    return {
      infoTypeValue: "",
      cityValue: "",
      infoType: [],
      cityData: [],
      purchaseInfo: [],
      dataValue: "",
      currentPage: 1,

      paging: {
        current: 1,
        size: 10
      },
      list: [
        {
          title: "建筑材料招标",
          link: ""
        },
        {
          title: "装饰材料招标  ",
          link: ""
        },
        {
          title: "建筑电气设备招标  ",
          link: ""
        },
        {
          title: "建筑给排水设备招标  ",
          link: ""
        },
        {
          title: "建筑暖通设备招标  ",
          link: ""
        },
        {
          title: "智能建筑招标  ",
          link: ""
        },
        {
          title: "建筑材料招标",
          link: ""
        },
        {
          title: "装饰材料招标  ",
          link: ""
        },
        {
          title: "建筑电气设备招标  ",
          link: ""
        },
        {
          title: "建筑给排水设备招标  ",
          link: ""
        },
        {
          title: "建筑暖通设备招标  ",
          link: ""
        },
        {
          title: "智能建筑招标  ",
          link: ""
        }
      ]
    };
  },
  created() {
    this.getCityData();
    this.getInfoType();
    this.getPurchaseInfo(this.paging);
  },
  methods: {
    //搜索
    searchPurchase: function() {
      this.paging = {
        current: 1,
        size: 10
      };
      let argPaging = this.paging;
      let region = this.cityValue;
      let time = this.dataValue;
      let typeId = this.infoTypeValue;
      this.getPurchaseInfo(argPaging, region, time, typeId);
    },
    getPurchaseInfo(argPaging, region, time, type) {
      const url = this.$store.state.url;
      const paging = argPaging ? argPaging : this.paging;
      axios
        .get(`${url}/purchase/list`, {
          params: {
            region: region,
            time: time,
            type: type,
            current: paging.current,
            size: paging.size
          }
        })
        .then(response => {
          console.log(response);
          if (response.status == 200) {
            this.purchaseInfo = response.data.data;
          }
          console.log(this);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    getCityData: function() {
      const url = this.$store.state.url;
      axios
        .get(`${url}/region/all`)
        .then(response => {
          console.log(response);
          if (response.status == 200) {
            this.cityData = response.data.data;
          }
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    getInfoType: function() {
      const url = this.$store.state.url;
      axios
        .get(`${url}/puType/all`)
        .then(response => {
          console.log(response);
          if (response.status == 200) {
            this.infoType = response.data.data;
          }
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    handleDetail: function(id) {
      this.$router.push({
        name: "detail",
        query: { page: "purchase", tab: this.$store.state.tabNum,id: id}
      });
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      const nextPaging = {
        current: val,
        size: 10
      };
      let region = this.cityValue;
      let time = this.dataValue;
      let typeId = this.infoTypeValue;
      this.getPurchaseInfo(nextPaging, region, time, typeId);
    }
  }
};
</script>
