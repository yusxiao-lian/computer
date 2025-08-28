<template>
  <div class="products_box">
    <div class="top_img">
      <img src="@/assets/img/home/product_top.jpg" alt="" />
      <h1>Invitations</h1>
    </div>
    <div class="content">
      <div class="menu">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <span slot="title">Acrylic invitation</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">Hardcover invitation</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">Box invitation</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">Letterpress</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">Luxury invitation</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="product_list">
        <div>
          <span class="title_text_one">The invitations have creative shapes luxury and highly customized
          invitations are made from a variety of match <strong>cardstock, hardcover,
          suede , mirror/clear acrylic...</strong> Elevate your wedding with carefully
          curated wedding stationery that will be sure to wow your guests.</span>
          <p class="title_text_two">Let's create your perfect day!</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../../../assets/css/home.less";

.products_box {
  padding: 8px 0 0 0;
}
.top_img {
  position: relative;
  img {
    width: 100%;
    height: 400px;
  }
  h1 {
    position: absolute;
    top: 15%;
    color: #fff;
    font-family: myfont;
    font-size: 100px;
    left: 37%;
    font-weight: normal;
  }
}
.content {
  display: flex;
  justify-content: start;
  padding: 10px 0 30px 0;
}

.product_list {
    padding: 0 0 0 15px;
    .title_text_one {
        font-size: 20px;
    }
    .title_text_two {
        margin: 0;
        font-size: 22px;
        font-family: myfont;
    }
}


</style>
