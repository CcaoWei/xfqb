<template>
  <div class="section foot">
    <div class="container">
      <div class="columns-7 w-row">
        <div class="column-12 w-col w-col-9">
          <router-link to="/about/1" class="foot-link">关于我们</router-link
          ><a href="#" class="foot-link">加入我们</a
          ><a href="#" class="foot-link">用户协议</a
          ><a href="#" class="foot-link">隐私策略</a
          ><a href="#" class="foot-link">企业服务</a
          ><a href="#" class="foot-link">帮助中心</a
          ><a href="#" class="foot-link">联系我们</a>
        </div>
        <div class="column-13 w-col w-col-3">
          <div class="div-block-10">
            <a href="#" class="foot-btn w-inline-block"
              ><img
                :src="`${$publicPath}images/Icon-3.svg`"
                alt=""
                class="foot-img"/></a
            ><a href="#" class="foot-btn w-inline-block"
              ><img src="images/Icon-3.svg" alt="" class="foot-img"/></a
            ><a href="#" class="foot-btn w-inline-block"
              ><img src="images/Icon-3.svg" alt="" class="foot-img"/></a
            ><a href="#" class="foot-btn w-inline-block"
              ><img src="images/Icon-3.svg" alt="" class="foot-img"
            /></a>
          </div>
        </div>
      </div>
      <div class="div-block-11"></div>
      <div class="div-block-12">
        <a href="#" class="foot-link">Mobile Edition</a
        ><a href="#" class="foot-link">About Us</a
        ><a href="#" class="foot-link">Join Travel Investment</a
        ><a href="#" class="foot-link">User Agreement</a
        ><a href="#" class="foot-link">Privacy Policy</a
        ><a href="#" class="foot-link">Enterprise Service</a
        ><a href="#" class="foot-link">Help Center</a
        ><a href="#" class="foot-link">Contact Us</a>
      </div>
      <div class="text-block-14">
        Copyright © 2018. The is not responsible for the content of external
        sites. Read about our approach to external linking.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Foot"
  // props: {
  //   msg: String
  // },
  // data () {
  //   return {
  //     // publicPath: process.env.BASE_URL
  //   }
  // }
};
</script>
