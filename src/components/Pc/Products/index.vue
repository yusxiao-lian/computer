<template>
  <div class="products_box">
    <div ref="top_img" class="top_img">
      <img src="@/assets/img/home/product_top.jpg" alt="" />
      <h1>Invitations</h1>
    </div>
    <div class="menu" ref="menu">
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
    <div class="content">
      <div class="product_list">
        <div>
          <span class="title_text_one"
            >The invitations have creative shapes luxury and highly customized
            invitations are made from a variety of match
            <strong
              >cardstock, hardcover, suede , mirror/clear acrylic...</strong
            >
            Elevate your wedding with carefully curated wedding stationery that
            will be sure to wow your guests.</span
          >
          <p class="title_text_two">Let's create your perfect day!</p>
        </div>
        <div class="products_imgs">
          <div v-for="(item, index) in productLists" :key="item.imgUrl">
              <img
              @click="toDetail(item.childrens)"
              :src="item.imgUrl"
              alt=""
            />
            <p>{{item.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { productList } from "./products.js";
export default {
  data() {
    return {
      productLists: [],
    };
  },
  created() {
    this.productLists = productList() || []
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toDetail(childrens) {
      localStorage.setItem("proChildrens", JSON.stringify(childrens))
      this.$router.push({
        path: "/Detail",
      });
    },
    handleScroll() {
      const menuRect = this.$refs.top_img.getBoundingClientRect();
      if (menuRect.top < -10 && menuRect.top > -420) {
        this.$refs.menu.style.top = 500 + menuRect.top + "px";
      }
      if (menuRect.top > 78) {
        this.$refs.menu.style.top = "500px";
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/home.less";

.products_box {
  padding: 20px 0 0 0;
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
  justify-content: end;
  padding: 10px 0 30px 0;
}
.menu {
  position: fixed;
  top: 500px;
}
.product_list {
  width: calc(100% - 200px);
  padding: 0 0 0 15px;
  .title_text_one {
    font-size: 20px;
  }
  .title_text_two {
    margin: 0;
    font-size: 28px;
    font-family: myfont;
    font-weight: 600;
  }
  .products_imgs {
    display: flex;
    flex-wrap: wrap;
   
    div {
       padding: 20px 0 0 0;
       margin: 0 25px 25px 0;
      p {
        margin: 10px 0 0 0;
        width: 250px;
        text-align: center;
      }
    }
    img {
      width: 250px;
      height: 250px;
      
      cursor: pointer;
    }
  }
}
</style>
