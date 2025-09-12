<template>
  <div class="bottom">
    <div class="logo-box">
      <img class="logo" src="@/assets/img/home/logo.png" alt="" />
    </div>
    <div class="product-menu">
        <div @click="toAcrylic(1)" class="pointer">Acrylic invitation</div>
            <div @click="toAcrylic(2)" class="pointer mr_five">Hardcover invitation</div>
            <div @click="toAcrylic(3)" class="pointer">Box invitation</div>
            <div @click="toAcrylic(4)" class="pointer mr_five">Letterpress</div>
            <div @click="toAcrylic(5)" class="pointer">Luxury invitation</div>
    </div>
     <div class="contact">
            <div class="gmail">contant us: ellafff001@gmail.com</div>
            <div>
                <a href="https://www.facebook.com/people/El-Design-Wedding-Invitation/61580327604321/" class="myfont_3" @click="handleSocialClick($event, 'https://www.facebook.com/people/El-Design-Wedding-Invitation/61580327604321/')"><i class="el-icon-thumb"></i>f</a>
                <a href="https://www.instagram.com/eldesignweddinginvitation/" class="myfont_3 Instagram" @click="handleSocialClick($event, 'https://www.instagram.com/eldesignweddinginvitation/')"><i class="el-icon-thumb"></i>ins</a>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    toAcrylic (index) {
      this.$router.push({
        path: '/HFiveProducts',
        query: {
          id: index
        }
      })
      this.$bus.$emit("toHfiveMenu", "/HFiveProducts");
    },
    handleSocialClick(event, url) {
      event.preventDefault();
      window.open(url, '_blank');
    },
  }
}
</script>
<style lang="less" scoped>
@import "../../common/font/font.css";

.bottom {
  margin-top: 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  p {
    font-size: 26px;
    text-align: center;
  }
  .logo-box {
    display: flex;
    justify-content: center;
    padding: 15px 10px;
    img {
        width: 60%;
        height: 100px;
    }
  }
  .product-menu {
    padding: 20px 0 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    div {
        font-size: 20px;
        margin-bottom: 15px;
        font-family: 'myfont_protitle';
    }
  }
  .contact {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 25px 0;
        .myfont_3 {
            font-size: 24px;
            cursor: pointer;
            font-weight: 700;
            margin: 0 10px 0 0;
            // 让图标顺时针旋转90度
            .el-icon-thumb {
                margin-right: 5px;
                display: inline-block;
                transform: rotate(90deg);
            }
        }
        .gmail {
            margin: 0 0 20px 0;
            font-size: 20px;
        }
        .Instagram {
            margin: 0 0 0 20px;
        }
    }
}
</style>