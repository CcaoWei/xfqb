<template>
  <div class="section-4 s-bg-color page">
    <Tabs :data="nav"></Tabs>
    <div class="container w-container">
      <div class="page-main">
        <div class="pur-top">
          <div data-delay="0" class="dropdown down1 w-dropdown">
            <div class="down w-dropdown-toggle">
              <div class="w-icon-dropdown-toggle"></div>
              <div class="text-block-31">选择地区</div>
            </div>
            <nav class="dropdown-list w-dropdown-list">
              <a href="#" class="dropdown-link w-dropdown-link">Link 1</a
              ><a href="#" class="dropdown-link w-dropdown-link">Link 2</a
              ><a href="#" class="dropdown-link w-dropdown-link">Link 3</a>
            </nav>
          </div>
          <div data-delay="0" class="dropdown down2 w-dropdown">
            <div class="down w-dropdown-toggle">
              <div class="w-icon-dropdown-toggle"></div>
              <div class="text-block-31">信息类型</div>
            </div>
            <nav class="dropdown-list w-dropdown-list">
              <a href="#" class="dropdown-link w-dropdown-link">Link 1</a
              ><a href="#" class="dropdown-link w-dropdown-link">Link 2</a
              ><a href="#" class="dropdown-link w-dropdown-link">Link 3</a>
            </nav>
          </div>
          <div data-delay="0" class="dropdown down3 w-dropdown">
            <div class="down w-dropdown-toggle">
              <div class="w-icon-dropdown-toggle"></div>
              <div class="text-block-31">选择时间</div>
            </div>
            <nav class="dropdown-list w-dropdown-list">
              <a href="#" class="dropdown-link w-dropdown-link">Link 1</a
              ><a href="#" class="dropdown-link w-dropdown-link">Link 2</a
              ><a href="#" class="dropdown-link w-dropdown-link">Link 3</a>
            </nav>
          </div>
          <a href="#" class="button-2 w-button">搜索</a>
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
              <div class="pur-table pur-con pointer" @click="handleDetail">
                <div class="pur-item1 pur-text">2019-10-15</div>
                <div class="pur-item2 pur-text">广东</div>
                <div class="pur-item3 pur-text">招标</div>
                <div class="pur-item4 pur-text">
                  需求公示[2019]黑龙江建筑职业技术学院_信息系微课录制
                </div>
              </div>
              <div class="pur-table pur-con pointer" @click="handleDetail">
                <div class="pur-item1 pur-text">2019-10-15</div>
                <div class="pur-item2 pur-text">云南</div>
                <div class="pur-item3 pur-text">预告</div>
                <div class="pur-item4 pur-text">
                  中国烟草总公司深圳市公司税务审计服务项目
                </div>
              </div>
              <div class="pur-table pur-con pointer" @click="handleDetail">
                <div class="pur-item1 pur-text">2019-10-15</div>
                <div class="pur-item2 pur-text">广东</div>
                <div class="pur-item3 pur-text">预告</div>
                <div class="pur-item4 pur-text">
                  [采购公告]安宁公司线材厂用电动蝶阀（10190925计划）
                </div>
              </div>
              <div class="pur-table pur-con pointer" @click="handleDetail">
                <div class="pur-item1 pur-text">2019-10-15</div>
                <div class="pur-item2 pur-text">北京</div>
                <div class="pur-item3 pur-text">招标</div>
                <div class="pur-item4 pur-text">
                  [采购公告]玉钢公司炼钢厂用气动O型球阀等（10190423计划）
                </div>
              </div>
              <div class="pur-table pur-con pointer" @click="handleDetail">
                <div class="pur-item1 pur-text">2019-10-15</div>
                <div class="pur-item2 pur-text">广东</div>
                <div class="pur-item3 pur-text">招标</div>
                <div class="pur-item4 pur-text">
                  需求公示[2019]黑龙江建筑职业技术学院_信息系微课录制
                </div>
              </div>
              <div class="pur-table pur-con pointer" @click="handleDetail">
                <div class="pur-item1 pur-text">2019-10-15</div>
                <div class="pur-item2 pur-text">云南</div>
                <div class="pur-item3 pur-text">预告</div>
                <div class="pur-item4 pur-text">
                  中国烟草总公司深圳市公司税务审计服务项目
                </div>
              </div>
              <div class="pur-table pur-con pointer" @click="handleDetail">
                <div class="pur-item1 pur-text">2019-10-15</div>
                <div class="pur-item2 pur-text">广东</div>
                <div class="pur-item3 pur-text">预告</div>
                <div class="pur-item4 pur-text">
                  [采购公告]安宁公司线材厂用电动蝶阀（10190925计划）
                </div>
              </div>
              <div class="pur-table pur-con pointer" @click="handleDetail">
                <div class="pur-item1 pur-text">2019-10-15</div>
                <div class="pur-item2 pur-text">北京</div>
                <div class="pur-item3 pur-text">招标</div>
                <div class="pur-item4 pur-text">
                  [采购公告]玉钢公司炼钢厂用气动O型球阀等（10190423计划）
                </div>
              </div>
              <div class="pur-table pur-con pointer" @click="handleDetail">
                <div class="pur-item1 pur-text">2019-10-15</div>
                <div class="pur-item2 pur-text">广东</div>
                <div class="pur-item3 pur-text">招标</div>
                <div class="pur-item4 pur-text">
                  需求公示[2019]黑龙江建筑职业技术学院_信息系微课录制
                </div>
              </div>
              <div class="pur-table pur-con pointer" @click="handleDetail">
                <div class="pur-item1 pur-text">2019-10-15</div>
                <div class="pur-item2 pur-text">云南</div>
                <div class="pur-item3 pur-text">预告</div>
                <div class="pur-item4 pur-text">
                  中国烟草总公司深圳市公司税务审计服务项目
                </div>
              </div>
              <div class="div-block-32">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  :page-size="10"
                  layout="prev, pager, next, jumper"
                  background
                  :total="30"
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

<script>
import Tabs from "@/components/Tabs.vue";
import RightList from "@/components/RightList.vue";
export default {
  name: "Purchase",
  components: {
    Tabs,
    RightList
  },
  data() {
    return {
      currentPage: 1,
      nav: {
        title: "产品采购",
        name: "purchase",
        tabs: [
          {
            name: "集团采购",
            link: "1"
          }
        ]
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
  methods: {
    handleDetail: function() {
      this.$router.push({
        name: "detail",
        query: { page: "purchase", tab: this.$store.state.tabNum }
      });
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
    }
  }
};
</script>
