<template>
  <div class="detail">
    <div class="top">
      <div class="img_list">
        <div class="img_box"  v-for="(item, index) in proChildrens" :key="item.imgUrl">
            <img
            @click="changeImg(index)"
            :style="{border: index === currentIndex ? '2px solid #333' : ''}"
            class="img_item"
            :src="item.imgUrl"
            alt=""
          />
        </div>
      </div>
      <div class="img_main">
        <img :src="currentImg" alt="">
      </div>
      <div class="img_desc">
        <h2 class="font_myfont_protitle">{{ productName }}</h2>
        <div class="desc_content">
            <p>adsadassdada adsadassdadaadsadassda daadsadassdadaadsadassdadaadsa dassdadaads adassdadaadsadassdad aadsadassdadaad sadassdadaadsadas sdadaadsadassdadaads</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            productName: '',
            proChildrens: [],
            currentIndex: 0,
            currentImg: ''
        }
    },
    created() {
        let list = JSON.parse(localStorage.getItem("proChildrens"))
        this.proChildrens = list.childrens || []
        this.currentImg = this.proChildrens[0].imgUrl;
        this.productName = list.desc || '';
    },
    methods: {
        changeImg(index) {
            this.currentImg = this.proChildrens[index].imgUrl
            this.currentIndex = index;
        }
    }
}
</script>
<style lang="less" scoped>
@import "../../../assets/css/home.less";
.detail {
    width: 100%;
    margin: 40px 0 0 0;
    border-top: 1px solid #dad5d5;
    padding: 30px 0 0 0;
}
.top {
    display: flex;
}
.img_list {
    width: 84px;
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
       height: 750px;
       padding: 0 50px 0 80px;
       img {
        width: 700px;
        height: 700px;
       }
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
    }
    .desc_content p {
        margin: 0;
        padding: 0;
        font-size: 20px;
    }
}
@media screen  and (max-width: 1200px) {
    .img_main {
        width: 500px;
        padding: 0 30px 0 50px;
        img {
        width: 500px;
        height: 500px;
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
            height: 600px;
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
            height: 600px;
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
            height: 700px;
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