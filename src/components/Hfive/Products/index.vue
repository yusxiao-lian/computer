<template>
  <div class="product-box">
    <div class="menu-box">
      <img class="logo" src="@/assets/img/home/logo.png" alt="" />
      <div class="menu-button">
        <van-icon name="list-switch" />
        <span @click="filterClick">
          Filter
          <span v-show="activeFilterName">(1)</span>
        </span>
      </div>
    </div>
    <div class="product-conent">
      <div class="top_img">
        <img :src="top_img" alt="" />
        <h1>Invitations</h1>
      </div>
      <div class="content-box">
        <div class="product_list">
          <div>
            <span class="title_text_one"
              >The invitations have creative shapes luxury and highly customized
              invitations are made from a variety of match
              <strong
                >cardstock, hardcover, suede , mirror/clear acrylic...</strong
              >
              Elevate your wedding with carefully curated wedding stationery
              that will be sure to wow your guests.</span
            >
            <div class="title_text_two">Let's create your perfect day!</div>
          </div>
          <div class="products_imgs">
            <div v-for="(item, index) in showProductList" :key="item.imgUrl">
              <img @click="toDetail(item)" :src="item.imgUrl" alt="" />
              <p>{{ item.desc }}</p>
            </div>
          </div>
          <van-pagination @change="pageChange" :items-per-page="showNumber" v-model="currentPage"  :total-items="pageLength">
            <template #prev-text>
              <van-icon name="arrow-left" />
            </template>
            <template #next-text>
              <van-icon name="arrow" />
            </template>
            <template #page="{ text }">{{ text }}</template>
          </van-pagination>
        </div>
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
      <div class="filter-title">
        Filter
        <span v-show="activeFilterName">(1)</span>
      </div>
      <div v-show="activeFilterName" class="filter-name">
        <span>{{ activeFilterName }}</span>
        <span @click="clearFilter"><van-icon name="close" /></span>
      </div>
      <div class="popup-content">
        <div @click="handleSelect(3)" class="popup-item">Suede Box</div>
        <div @click="handleSelect(2)" class="popup-item">
          Hardcover & Sude Booklet
        </div>
        <div @click="handleSelect(1)" class="popup-item">
          Acrylic & Envelope
        </div>
        <div @click="handleSelect(5)" class="popup-item">Save The Date & Vows</div>
        <div @click="handleSelect(4)" class="popup-item">Letterpress & 3D Embossed</div>
        
      </div>
    </van-popup>
    <hFiveBottom></hFiveBottom>
  </div>
</template>
<script>
import { Icon, Button, Popup } from "vant";
import top_img from "@/assets/img/home/product_top.jpg";
import { productList } from "@/common/js/products.js";
import hFiveBottom from "@/components/common/hFiveBottom.vue";
import { Pagination } from 'vant';

export default {
  data() {
    return {
      currentPage: 1,
      popupShow: false,
      top_img: top_img,
      activeFilterName: "",
      pageLength: 0, //当前展示产品长度
      showNumber: 20, //每页展示数量
      allProducts: [], //全部产品
      showProductList: [], //展示产品
      // 分类
      acrylicList: [],
      hardcoverList: [],
      boxtList: [],
      letterpressList: [],
      luxuryList: [],
    };
  },
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Pagination.name]: Pagination,
    hFiveBottom
  },
  created() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.acrylicList = productList(1) || [];
    this.hardcoverList = productList(2) || [];
    this.boxtList = productList(3) || [];
    this.letterpressList = productList(4) || [];
    this.luxuryList = productList(5) || [];
    this.allProducts = [
      ...this.acrylicList,
      ...this.hardcoverList,
      ...this.boxtList,
      ...this.letterpressList,
      ...this.luxuryList,
    ];
    this.pageLength = this.allProducts.length;
    let currentItemMenu =JSON.parse(localStorage.getItem("currentItemMenu"))
    if(!currentItemMenu){
      this.showProductList = this.allProducts.slice(0, this.showNumber);
    } else if(currentItemMenu == 1){
      this.showProductList = this.acrylicList.slice(0, this.showNumber);
      this.activeFilterName = "Acrylic";
      this.pageLength = this.acrylicList.length;
    } else if(currentItemMenu == 2){
      this.showProductList = this.hardcoverList.slice(0, this.showNumber);
      this.activeFilterName = "Hardcover";
      this.pageLength = this.hardcoverList.length;
    } else if(currentItemMenu == 3){
      this.showProductList = this.boxtList.slice(0, this.showNumber);
      this.activeFilterName = "Box";
      this.pageLength = this.boxtList.length;
    } else if(currentItemMenu == 4){
      this.showProductList = this.letterpressList.slice(0, this.showNumber);
      this.activeFilterName = "Letterpress";
      this.pageLength = this.letterpressList.length;
    } else if(currentItemMenu == 5){
      this.activeFilterName = "Luxury";
      this.showProductList = this.luxuryList.slice(0, this.showNumber);
      this.pageLength = this.luxuryList.length;
    }
  },
  beforeDestroy() {
    localStorage.removeItem("currentItemMenu");
  },
  methods: {
    filterClick() {
      this.popupShow = true;
    },
    handleSelect(index) {
      this.currentPage = 1;
      localStorage.setItem("currentItemMenu", JSON.stringify(index))
      this.showProductList = productList(index).slice(0, this.showNumber) || [];
      this.pageLength = productList(index).length;
      this.popupShow = false;
      this.activeFilterName = index == 1 ? "Acrylic & Envelope" : index == 2 ? "Hardcover & Sude Booklet" : index == 3 ? "Suede Box" : index == 4 ? "Letterpress & 3D Embossed" : "Save The Date & Vows";
    },
    toDetail(childrens) {
      localStorage.setItem("proChildrens", JSON.stringify(childrens))
      this.$router.push({
        path: "/HFiveDetail",
      });
    },
    clearFilter() {
      localStorage.removeItem("currentItemMenu");
      this.currentPage = 1;
      this.showProductList = this.allProducts.slice(0, this.showNumber);
      this.activeFilterName = "";
      this.popupShow = false;
      this.pageLength = this.allProducts.length;
    },
    pageChange(page) {
      this.currentPage = page;
      let currentItemMenu =JSON.parse(localStorage.getItem("currentItemMenu"))
      if(currentItemMenu == 1){
        this.showProductList = this.acrylicList.slice((page - 1) * this.showNumber, page * this.showNumber);
      } else if(currentItemMenu == 2){
        this.showProductList = this.hardcoverList.slice((page - 1) * this.showNumber, page * this.showNumber);
      } else if(currentItemMenu == 3){
        this.showProductList = this.boxtList.slice((page - 1) * this.showNumber, page * this.showNumber);
      } else if(currentItemMenu == 4){
        this.showProductList = this.letterpressList.slice((page - 1) * this.showNumber, page * this.showNumber);
      } else if(currentItemMenu == 5){
        this.showProductList = this.luxuryList.slice((page - 1) * this.showNumber, page * this.showNumber);
      } else {
        this.showProductList = this.allProducts.slice((page - 1) * this.showNumber, page * this.showNumber);
      }
      console.log(this.showProductList, "xxxxxxxxxxx")
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
      font-family: "myfont_protitle";
    }
  }
  .content-box {
    padding: 10px 15px 0 15px;
    .product_list {
      text-align: center;
      .title_text_one {
        font-size: 14px;
      }
      .title_text_two {
        margin: 0;
        font-size: 22px;
        font-family: myfont;
        font-weight: 600;
      }
      .products_imgs {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 10px;
        div:nth-child(2n+1) {
          padding: 20px 0 0 0;
          margin: 0 25px 20px 0;
        }
        div {
          padding-top: 20px;
          p {
            margin: 10px 0 0 0;
            width: 150px;
            text-align: center;
          }
        }
        img {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
  .filter-title {
    padding: 20px 0 15px 15px;
    font-size: 24px;
    border-bottom: 1px solid #e6e6d9;
  }
  .filter-name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 10px 0 10px;
    padding: 15px;
    font-size: 20px;
    background-color: black;
    color: #fff;
  }
}
</style>
