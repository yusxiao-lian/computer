<template>
  <div class="detail-box">
    <div>
      <van-swipe
        class="my-swipe"
        :height="300"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item v-for="value in proChildrens" :key="value.image">
          <img class="swipeImg" :src="value.imgUrl" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <h2 class="detail-name">
      {{ productName }}
    </h2>
    <div class="desc_content">
      <div class="desc_top">{{ currentDesc.detail_desc }}</div>
      <div class="desc_center">This suite includes: </div>
      <div class="desc_bottom" v-for="item in currentDesc.detail_descItem">
        <span class="desc_bottom_rice"></span>
        <span>{{ item }}</span>
      </div>
      <div class="desc_bottom" v-for="item in  currentDesc.detail_descItemTwo">
          <span>{{  item }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  computed: {
    currentDesc() {
      let current = JSON.parse(localStorage.getItem("proChildrens"));
      if (current.type == 3) {
        return this.boxDesc;
      }
      return {
        detail_desc: this.detail_desc,
        detail_descItem: this.detail_descItem,
        detail_descItemTwo: this.detail_descItemTwo,
      };
    },
  },
  data() {
    return {
      proChildrens: [],
      productName: "",
      detail_desc: "",
      detail_descItem: [],
      detail_descItemTwo: [],
      boxDesc: {
        detail_desc:
          "This invitation is very luxurious which is made by hardcover+high quality suede with gold foiling and creative acrylic which is really elegant and will make you day",
        detail_descItem: [
          "1 main suede box foil logo(color & logo can be customized)",
          "1 customized shape acrylic with foil/printing",
          "Any additional cards are accepted",
        ],
        detail_descItemTwo: [
          "Minimum Quantity for this product is 50. If an order is placed for below 50 qty the unit price will be higher. Thank you so much for your understanding!",
        ],
      },
    };
  },
  created() {
    let list = JSON.parse(localStorage.getItem("proChildrens"));
    this.proChildrens = list.childrens || [];
    this.productName = list.desc || "";
    this.detail_desc = list.detail_desc || '';
    this.detail_descItem = list.detail_descItem || [];
    this.detail_descItemTwo = list.detail_descItemTwo || [];
  },
};
</script>
<style lang="less" scoped>
@import "../../../common/font/font.css";
.my-swipe {
  .swipeImg {
    width: 100%;
    height: 100%;
  }
}
.detail-box {
  padding-bottom: 10px;
}
.detail-name {
  text-align: center;
  font-family: "myfont_protitle";
  font-size: 20px;
  margin: 10px 0 0 0;
  padding: 0 10px;
}
.desc_content {
  padding: 10px 15px 0 15px;
  .desc_center {
    margin: 10px 0;
  }
  .desc_bottom {
    margin-bottom: 5px;
  }
  .desc_bottom_rice {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgb(77, 140, 221);
    margin: 0 4px 2px 0;
  }
}
</style>
