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
      <div class="img_desc"></div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            proChildrens: [],
            currentIndex: 0,
            currentImg: ''
        }
    },
    created() {
        this.proChildrens = JSON.parse(localStorage.getItem("proChildrens"))
        this.currentImg = this.proChildrens[0].imgUrl
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
</style>