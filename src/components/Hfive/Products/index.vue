<template>
  <div class="product-box">
    <div class="menu-box">
      <img class="logo" src="@/assets/img/home/logo.png" alt="" />
      <div class="menu-button">
        <van-icon name="list-switch" />
        <span @click="filterClick">Filter</span>
      </div>
    </div>
    <div class="product-conent">
      <div class="top_img">
        <img :src="top_img" alt="" />
        <h1>Invitations</h1>
      </div>
    </div>
    <van-popup
      overlay-class="popup-box"
      v-model="popupShow"
      closeable
      position="right"
      :style="{
        height: '100%',
      }"
    >
      <div class="popup-content">
        <div @click="handleSelect(1)" class="popup-item">
          Acrylic invitation
        </div>
        <div @click="handleSelect(2)" class="popup-item">
          Hardcover invitation
        </div>
        <div @click="handleSelect(3)" class="popup-item">Box invitation</div>
        <div @click="handleSelect(4)" class="popup-item">Letterpress</div>
        <div @click="handleSelect(5)" class="popup-item">Luxury invitation</div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { Icon, Button, Popup } from "vant";
import top_img from "@/assets/img/home/product_top.jpg";
import { productList } from "@/common/js/products.js";
export default {
  data() {
    return {
      popupShow: false,
      top_img: top_img,
      allProducts: [],
      productLists: [],
    };
  },
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Popup.name]: Popup,
  },
  methods: {
    filterClick() {
      this.popupShow = true;
    },
    handleSelect(index) {
      this.productLists = productList(index) || [];
      localStorage.setItem("currentItemMenu", JSON.stringify(index));
      this.popupShow = false;
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../../common/font/font.css";
.product-box {
  .menu-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 30px 8px 12px;
    background-color: #f8f4f6;
    .logo {
      width: 80px;
      height: 50px;
      margin-right: 20px;
    }
    .menu-button {
      display: flex;
      align-items: center;
      padding: 8px 20px;
      background-color: #fff;
      border-radius: 5px;
      //   background-color: #f1e0e0;
      border: 1px solid #ccc;
      span {
        font-size: 18px;
        margin-left: 5px;
      }
      .van-icon {
        font-size: 24px;
      }
    }
  }
  .product-conent {
    padding: 66px 0 20px 0;
    overflow-y: auto;
    .top_img {
      position: relative;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
        height: 160px;
      }
      h1 {
        position: absolute;
        top: 18%;
        color: #fff;
        font-family: myfont;
        font-size: 42px;
        left: 30%;
        font-weight: normal;
      }
    }
  }
  .popup-content {
    margin: 70px 0 0 0;
    :first-child {
      border-top: 1px solid #e6e6d9;
    }
  }
  .van-popup {
    background-color: #fff;
    .popup-item {
      font-size: 1.1em;
      border-bottom: 1px solid #e6e6d9;
      padding: 20px 20px 20px 20px;
      font-family: 'myfont_protitle';
    }
  }
}
</style>
