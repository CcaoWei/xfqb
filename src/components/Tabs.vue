<template>
  <div class="page-nav">
    <div class="container w-container" v-if="data && data.tabs">
      <div class="div-block-54">
        <div class="page-title">
          <div class="s-t-first">{{ data.title }}</div>
          <div class="s-t-s">• {{ name }}</div>
        </div>

        <div class="page-nav-box noshow991">
          <div
            class="page-nav-item pointer"
            v-for="(item, index) in data.tabs"
            :key="index"
            :class="{ active: tabActive(index) }"
          >
            <div class="text-block-17" @click="handleLink(item.link, index)">
              {{ item.name }}
            </div>
          </div>
        </div>

        <el-dropdown trigger="click" class="show991" style="line-height:78px;">
          <span class="el-dropdown-link">
            <i class="el-icon-menu"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item, index) in data.tabs"
              :key="index"
              @click.native="handleLink(item.link, index)"
              >{{ item.name }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      active: 0
    };
  },
  computed: {
    name: function() {
      let name = "";
      if (this.$route != "detail" && this.$route != "apply") {
        const num = this.$route.name.substr(this.$route.name.length - 1, 1) - 1;
        console.log(num)
        if (this.data && this.data.tabs[num]) {
          name = this.data.tabs[num].name;
        } else {
          name = this.data.tabs[this.$store.state.tabNum].name;
        }
      }
      return name;
    }
  },
  created() {
    if (this.$route.name == "detail" || this.$route.name == "apply") {
      this.$store.commit("setTabNum", this.$route.query.tab);
    }
  },
  methods: {
    handleLink(link, index) {
      // this.active = index;
      if (
        this.$route.name &&
        this.$route.name != this.data.name + (index + 1)
      ) {
        this.$store.commit("setTabNum", index);
        if (this.$route.name == "detail" || this.$route.name == "apply") {
          this.$router.push(this.$route.query.page + "/" + link);
        } else {
          this.$router.push(link);
        }
      }
    },
    tabActive(index) {
      if (this.$route.name !== "detail" && this.$route.name !== "apply") {
        if (this.data.name + (index + 1) == this.$route.name) {
          // this.active = index;
          return true;
        } else {
          return false;
        }
      } else {
        if (this.$route.query.tab == index) {
          // this.active = index;
          return true;
        } else {
          return false;
        }
      }
    }
    // handleCommand(command) {
    //   // this.$message(command);
    //   // console.log(command)
    //   const self = this;
    //   setTimeout(function(){ self.handleLink(command.link,command.num)}, 500);

    // }
  }
};
</script>

<style lang="less" scoped>
.el-dropdown {
  &:focus {
    outline: 0;
  }
  .el-dropdown-link {
    i {
      font-size: 24px;
      color: #707070;
      vertical-align: middle;
      &:focus {
        outline: 0;
      }
    }
  }
}
</style>
