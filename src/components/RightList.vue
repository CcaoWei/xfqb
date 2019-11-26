<template>
  <div class="right-list">
    <div class="two-right-item">
      <div class="two-right-top">
        <h5 class="two-right-title">专栏位一</h5>
        <a href="#" class="two-right-more">更多 &gt;</a>
      </div>
      <ul class="list-3 w-list-unstyled">
        <li v-if="listType == '1'" @click="handleDetail">
          <img
            :src="`${$publicPath}images/new-right-top.png`"
            alt=""
            class="img100 pointer"
          />
        </li>
        <li v-else-if="listType == '2'">
          <div class="two-right-top2 w-clearfix">
            <div class="div-block-27 pointer" @click="handleDetail">
              <img
                :src="`${$publicPath}images/new-right-2_1new-right-2.png`"
                alt=""
                class="wh100 list-img"
              />
            </div>

            <div class="div-block-28">
              <div href="#" class="link-block-2 w-inline-block pointer">
                <div class="text-block-20 ellipsis-2" @click="handleDetail">
                  {{ data[0].title }}
                </div>
              </div>
              <div class="text-block-21">19-10-10</div>
            </div>
          </div>
        </li>
        <li
          class="two-right-link"
          v-for="(item, index) in data"
          :key="index"
          v-if="(index !== 0 && listType == '2') || listType == '1'"
        >
          <div class="link-block w-inline-block pointer" @click="handleDetail">
            <div class="text-block-19 ellipsis-1">{{ item.title }}</div>
            <div class="div-block-26"></div>
          </div>
          <div class="text-block-30" v-if="rightNum">123条</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightList",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    listType: {
      type: String,
      default: () => "1"
    },
    rightNum: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    name: function() {
      let name = "";
      return name;
    }
  },
  methods: {
    handleDetail(link, index) {
      this.$emit("handleDetail");
    }
  }
};
</script>
