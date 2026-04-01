<template>
  <div class="bottom">
    <div class="logo-box">
      <img class="logo" src="@/assets/img/home/logo.png" alt="" />
    </div>
    <div class="product-menu">
        <div @click="toAcrylic(1)" class="pointer">Acrylic & Envelope</div>
            <div @click="toAcrylic(2)" class="pointer mr_five">Hardcover & Sude Booklet</div>
            <div @click="toAcrylic(3)" class="pointer">Suede Box</div>
            <div @click="toAcrylic(4)" class="pointer mr_five">Letterpress & 3D Embossed</div>
            <div @click="toAcrylic(5)" class="pointer">Save The Date & Vows</div>
    </div>
     <div class="contact">
            <div>
                <div class="gmail cursorPointer" @click="toPhone">
                    <img style="width: 22px; height: 22px;" class="logo" src="../../assets/img/home/contanctOne.png" alt=""></img>
                    &nbsp; wa.me
                </div>
                <div class="gmail">
                    <img style="width: 22px; height: 22px;" class="logo" src="../../assets/img/home/contanctFour.png" alt=""></img>
                    &nbsp; ellafff001@gmail.com
                </div>
                <div class="gmail cursorPointer" @click="toInstagram">
                    <img style="width: 22px; height: 22px;" class="logo" src="../../assets/img/home/contanctThree.png" alt=""></img>
                    &nbsp; EL Design Wedding Invitation
                </div>
                <div class="gmail cursorPointer" @click="toFacebook">
                    <img style="width: 22px; height: 22px;" class="logo" src="../../assets/img/home/contanctTwo.png" alt=""></img>
                    &nbsp;  EL Design Wedding Invitation
                </div>
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
      localStorage.setItem("currentItemMenu", index);
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
    toPhone() {
        window.open("https://wa.me/8618814109741");
    },
    toFacebook() {
        window.open("https://www.facebook.com/people/El-Design-Wedding-Invitation/61580327604321/");
    },
    toInstagram() {
        window.open("https://www.instagram.com/eldesignweddinginvitation/");
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