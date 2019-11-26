<template>
  <div class="section-4 s-bg-color page" style="padding-bottom:0">
    <Tabs :data="nav"></Tabs>
    <div class="container w-container">
      <h3>填写认证信息</h3>
    </div>
    <div class="container w-container">
      <div class="apply-box">
        <el-form
          label-position="top"
          ref="form"
          :rules="rules"
          :model="form"
          label-width="80px"
          class="apply-form"
        >
          <h5 class="apply-title">企业信息</h5>
          <el-form-item label="企业名称" prop="name">
            <el-input
              v-model="form.name"
              placeholder="请填写企业名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="企业（机构）类型" prop="type">
            <el-select v-model="form.type" placeholder="请选择企业（机构）类型">
              <el-option
                label="有限责任公司（自然人投资或控股）"
                value="1"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="法定代表人" prop="name1">
            <el-input
              v-model="form.name1"
              placeholder="请填写法定代表人"
            ></el-input>
          </el-form-item>
          <el-form-item label="证照代码类型" prop="type1">
            <el-select v-model="form.type1" placeholder="请选择证照代码类型">
              <el-option label="工商营业执照" value="1"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="证照代码" prop="name1">
            <el-input
              v-model="form.name1"
              placeholder="请填写证照代码"
            ></el-input>
          </el-form-item>
          <el-form-item label="注册资金（万元）" prop="type1">
            <el-select
              v-model="form.type1"
              placeholder="请选择注册资金（万元）"
            >
              <el-option label="100万元整" value="1"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="经营起始日期" prop="start">
            <el-date-picker
              v-model="form.start"
              type="date"
              placeholder="选择经营起始日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="经营截止日期" prop="end">
            <el-date-picker
              v-model="form.end"
              type="date"
              placeholder="选择经营截止日期"
            >
            </el-date-picker>
          </el-form-item>

          <el-form-item label="经营状态" prop="state">
            <el-select v-model="form.state" placeholder="请选择经营状态">
              <el-option label="在营" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="注册地址" prop="address">
            <el-input
              v-model="form.address"
              placeholder="请填写注册地址"
            ></el-input>
          </el-form-item>

          <el-form-item label="经营范围" prop="range">
            <el-input
              v-model="form.range"
              placeholder="请填写经营范围"
            ></el-input>
          </el-form-item>
          <el-form-item></el-form-item>

          <el-form-item label="上传营业执照" prop="imageUrl">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
              <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
              <div class="avatar-uploader-icon" v-else>
                <img :src="`${$publicPath}images/plus-circle.png`" />
                <p>上传照片</p>
              </div>
            </el-upload>
            <p class="upload-text">
              1.请上传清晰、完整、无遮挡物的证件图片<br />
              2.要求原件红章清晰，如为复印件需加盖公司公章<br />
              3.图片大小不能超过2M，图片格式为jpg、jpeg、png
            </p>
          </el-form-item>

          <h5 class="apply-title" style="padding-top: 40px;">办理人信息</h5>

          <el-form-item label="办理人姓名" prop="myname">
            <el-input
              v-model="form.myname"
              placeholder="请填写经营范围"
            ></el-input>
          </el-form-item>
          <el-form-item label="办理人身份证号" prop="mynum">
            <el-input
              v-model="form.mynum"
              placeholder="请填写经营范围"
            ></el-input>
          </el-form-item>
          <el-form-item label="办理人手机号码" prop="myphone">
            <el-input
              v-model="form.myphone"
              placeholder="请填写经营范围"
            ></el-input>
          </el-form-item>
          <el-form-item label="办理人邮箱" prop="myemail">
            <el-input
              v-model="form.myemail"
              placeholder="请填写经营范围"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="myvc">
            <el-input
              v-model="form.myvc"
              placeholder="请填写经营范围"
            ></el-input>
          </el-form-item>
          <el-form-item></el-form-item>

          <el-form-item label="上传身份证" prop="imageUrl1" style="width: 100%">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess1"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="form.imageUrl1" :src="form.imageUrl1" class="avatar" />
              <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
              <div
                v-else
                class="avatar-uploader-icon avatar-bg"
                :style="
                  'background-image: url(' +
                    `${$publicPath}images/zheng.png` +
                    ')'
                "
              >
                <img :src="`${$publicPath}images/plus-circle.png`" />
                <p>点击上传人像面</p>
                <!-- <img :src="`${$publicPath}images/zheng.png`"> -->
              </div>
            </el-upload>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess1"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="form.imageUrl12"
                :src="form.imageUrl12"
                class="avatar"
              />
              <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
              <div
                v-else
                class="avatar-uploader-icon avatar-bg"
                :style="
                  'background-image: url(' +
                    `${$publicPath}images/fan.png` +
                    ')'
                "
              >
                <img :src="`${$publicPath}images/plus-circle.png`" />
                <p>点击上传国徽面</p>
                <!-- <img :src="`${$publicPath}images/fan.png`"> -->
              </div>
            </el-upload>
            <p class="upload-text">
              1.请上传清晰、完整、无遮挡物的证件图片<br />
              2.要求原件红章清晰，如为复印件需加盖公司公章<br />
              3.图片大小不能超过2M，图片格式为jpg、jpeg、png
            </p>
          </el-form-item>

          <el-form-item
            style="width: 100%;text-align: center;margin-top: 80px;"
          >
            <el-button type="primary" class="form-btn" @click="onSubmit"
              >提交信息</el-button
            >
            <div class="submit-info">
              提交即代表同意<a href="#">《用户协议》</a>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import RightList from "@/components/RightList.vue";
import detailTabs from "@/mock/detailTabs.js";
export default {
  name: "Detail",
  components: {
    Tabs,
    RightList
  },
  computed: {
    nav: function() {
      return detailTabs[this.page];
    }
  },
  data() {
    return {
      page: "",
      form: {
        name: "",
        type: "",
        name1: "",
        type1: "",
        name2: "",
        type2: "",
        start: "",
        end: "",
        state: "",
        address: "",
        range: "",
        imageUrl: "",
        imageUrl1: "",
        imageUrl2: "",
        myname: "",
        mynum: "",
        myphone: "",
        myemail: "",
        myvc: ""
      },
      rules: {
        name: [{ required: true, message: "请填写企业名称" }],
        type: [{ required: true, message: "请选择企业（机构）类型" }],
        name1: [{ required: true, message: "请填写法定代表人" }],
        type1: [{ required: true, message: "请选择证照代码类型" }],
        name2: [{ required: true, message: "请填写证照代码" }],
        type2: [{ required: true, message: "请选择注册资金（万元）" }],
        start: [{ required: true, message: "请选择经营起始日期" }],
        end: [{ required: true, message: "请选择经营截止日期" }],
        state: [{ required: true, message: "请选择经营状态" }],
        address: [{ required: true, message: "请填写注册地址" }],
        range: [{ required: true, message: "请填写经营范围" }],
        imageUrl: [{ required: true, message: "请上传营业执照" }],
        imageUrl1: [{ required: true, message: "请上传身份证" }],
        imageUrl2: [{ required: true, message: "请上传身份证" }],
        myname: [{ required: true, message: "请填写办理人姓名" }],
        mynum: [{ required: true, message: "请填写办理人身份证号" }],
        myphone: [{ required: true, message: "请填写办理人手机号码" }],
        myemail: [{ required: true, message: "请填写办理人邮箱" }],
        myvc: [{ required: true, message: "请填写验证码" }]
      }
    };
  },
  created() {
    // this.page = this.$route.query.page;
    // // console.log(this.page)
    // // this.$emit('getActiveNav',this.page);
    // this.$store.commit('setActiveNav', 0);
  },
  watch: {
    $route: {
      handler: function(to, from) {
        // console.log('new: %s, old: %s', to, from)
        if (to.name == "apply") {
          this.page = to.query.page;
          // console.log(this.page);
          // this.$emit('getActiveNav',this.page);
          this.$store.commit("setActiveNav", this.page);
        }
      },
      immediate: true
    }
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccess1(res, file) {
      this.imageUrl1 = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isPNG) {
        // this.$message.error("上传图片只能是 JPG 格式!");
        this.$message.error("上传图片格式错误!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  font-size: 40px;
  color: #000000;
  margin-top: 60px;
  margin-bottom: 32px;
}
.apply-title {
  font-size: 24px;
  color: #000000;
  width: 100%;
  padding-left: 60px;
  padding-bottom: 20px;
}
.apply-box {
  background-color: #fff;
  padding-top: 56px;
  // padding-left: 60px;
  // padding-right: 60px;
  padding-bottom: 104px;
}
.w50 {
  width: 50%;
}
.apply-form {
  display: flex;
  flex-wrap: wrap;
  .el-form-item {
    width: 50%;
    padding: 0 60px;
    margin-bottom: 32px;
    /deep/ .el-form-item__label {
      // color: #8b8b8b;
      color: #666;
      font-size: 16px;
      margin-bottom: 6px;
    }
    /deep/ .el-select {
      width: 100%;
    }
    /deep/ .el-date-editor.el-input {
      width: 100%;
    }
  }
  .form-btn {
    width: 426px;
    background: #337af9;
    font-size: 20px;
    padding: 13px 20px;
    border-color: #337af9;
  }
  .submit-info {
    font-size: 16px;
    color: #2d2d2d;
    text-align: center;
    margin-top: 10px;
    a {
      display: inline;
      font-size: 16px;
      color: #2672ff;
      text-decoration: none;
    }
  }
}
.upload-text {
  font-size: 16px;
  color: #f15245;
  line-height: 24px;
}
@media (max-width: 767px) {
  .apply-form {
    .el-form-item {
      width: 100%;
      text-align: left;
    }
    .form-btn {
      width: 100%;
    }
  }
  .apply-title {
    padding-left: 0;
  }
}

.avatar-uploader {
  margin-bottom: 10px;
  margin-right: 40px;
  display: inline-block;
  /deep/ .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: border-color 200ms ease;
    &:hover {
      border-color: #409eff;
    }
  }
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 262px;
  height: 176px;
  // line-height: 176px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 16px;
    color: #8b8b8b;
    line-height: 31px;
    margin-top: 6px;
    margin-bottom: 0;
  }
}
.avatar {
  width: 262px;
  height: 176px;
  display: block;
}
.avatar-bg {
  background-repeat: no-repeat;
  background-position: center;
}
@media (max-width: 991px) {
  .avatar-uploader-icon,
  .avatar,
  .avatar-uploader {
    width: 100%;
  }
  .avatar-uploader {
    /deep/ .el-upload {
      width: 100%;
    }
  }
}
</style>
