<template>
  <div class="detail">
    <div class="top">
      <div class="img_list">
        <div
          class="img_box"
          v-for="(item, index) in proChildrens"
          :key="item.imgUrl"
        >
          <img
            @click="changeImg(index)"
            :style="{ border: index === currentIndex ? '2px solid #333' : '' }"
            class="img_item"
            :src="item.imgUrl"
            alt=""
          />
        </div>
      </div>
      <div>
        <div class="detail_box">
          <div class="img_main">
            <img :src="currentImg" alt="" />
          </div>
          <div class="img_desc">
            <h2 class="font_myfont_protitle">{{ productName }}</h2>
            <div class="desc_content">
              <div class="desc_top">{{ currentDesc.detail_desc }}</div>
              <div v-show="currentType !== '5'" class="desc_center">This suite includes: </div>
              <div v-show="currentType == '5'" style="margin-top: 25px;"></div>
              <div
                class="desc_bottom"
                v-for="item in currentDesc.detail_descItem"
              >
                <span class="desc_bottom_rice"></span>
                <span>{{ item }}</span>
              </div>
              <div
                class="desc_bottom"
                v-for="item in currentDesc.detail_descItemTwo"
              >
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <DetainOne />
        </div>
      </div>
    </div>
    <Bottom />
  </div>
</template>
<script>
import DetainOne from "./compoments/detainOne.vue";
import Bottom from "../../common/bottom.vue";

export default {
  components: {
    DetainOne,
    Bottom,
  },
  data() {
    return {
      productName: "",
      proChildrens: [],
      currentIndex: 0,
      currentImg: "",
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
  computed: {
    currentDesc() {
      let current = JSON.parse(localStorage.getItem("currentItemMenu"));
      // if (current == 3) {
      //   return this.boxDesc;
      // }
      return {
        detail_desc: this.detail_desc,
        detail_descItem: this.detail_descItem,
        detail_descItemTwo: this.detail_descItemTwo,
      };
    },
    currentType() {
      return JSON.parse(localStorage.getItem("currentItemMenu"));
    }
  },
  created() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let list = JSON.parse(localStorage.getItem("proChildrens"));
    this.proChildrens = list.childrens || [];
    this.currentImg = this.proChildrens[0].imgUrl;
    this.productName = list.desc || "";
    this.detail_desc = list.detail_desc || "";
    this.detail_descItem = list.detail_descItem || [];
    this.detail_descItemTwo = list.detail_descItemTwo || [];
  },
  methods: {
    changeImg(index) {
      this.currentImg = this.proChildrens[index].imgUrl;
      this.currentIndex = index;
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/home.less";
.detail {
  width: 100%;
  margin: 85px 0 0 0;
  border-top: 1px solid #dad5d5;
  padding: 30px 0 0 0;
}
.top {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}
.img_list {
  width: 700px;
  max-height: 700px;
  overflow: hidden;
  overflow-y: auto;
  .img_box {
    width: 80px;
  }
  img {
    height: 76px;
    width: 76px;
    margin: 0 0 10px 0;
    padding: 3px;
  }
  .img_item {
    cursor: pointer;
  }
}
.img_main {
  width: 750px;
  // height: 750px;
  padding: 0 50px 0 80px;
  img {
    width: 700px;
    // height: 700px;
  }
}
.detail_box {
  display: flex;
  justify-content: space-between;
}
.active {
  border: 1px solid #333;
}
.img_desc {
  width: 550px;
  .desc_content {
    width: 550px;
    display: flex;
    flex-direction: column;
    white-space: normal;
    word-wrap: break-word; /* 允许长单词或URL地址换行 */
    word-break: break-all; /* 允许在单词内换行 */
    .price {
      font-size: 22px;
    }
    .desc_center {
      margin: 20px 0 20px 0;
      font-size: 20px;
    }
    .desc_top {
      font-size: 20px;
    }
    .desc_bottom {
      margin-bottom: 6px;
      .desc_bottom_rice {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgb(77, 140, 221);
        margin: 0 4px 2px 0;
      }
    }
  }
  .desc_content p {
    font-size: 20px;
  }
}
@media screen and (max-width: 1200px) {
  .img_main {
    width: 500px;
    padding: 0 30px 0 50px;
    img {
      width: 500px;
      // height: 500px;
    }
  }
  .img_desc {
    width: 340px;
    .desc_content {
      width: 340px;
    }
  }
}
@media screen and (min-width: 1200px) and (max-width: 1365px) {
  .img_main {
    width: 600px;
    padding: 0 30px 0 50px;
    img {
      width: 600px;
      // height: 600px;
    }
  }
  .img_desc {
    width: 400px;
    .desc_content {
      width: 400px;
    }
  }
}
@media screen and (min-width: 1366px) and (max-width: 1679px) {
  .img_main {
    width: 600px;
    padding: 0 50px 0 80px;
    img {
      width: 600px;
      // height: 600px;
    }
  }
  .img_desc {
    width: 500px;
    .desc_content {
      width: 500px;
    }
  }
}
@media screen and (min-width: 1680px) and (max-width: 1919px) {
  .img_main {
    width: 700px;
    padding: 0 60px 0 80px;
    img {
      width: 700px;
      // height: 700px;
    }
  }
  .img_desc {
    width: 500px;
    .desc_content {
      width: 500px;
    }
  }
}
</style>
