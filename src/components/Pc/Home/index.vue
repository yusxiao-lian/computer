<template>
  <div class="home_box">
    <div class="home_title">Your Big Day Starts Right Here</div>
    <Carousel :autoplay="true" :interval="4000" :loop="true" />
    <div class="title_box">
      <h2>
        Delivering invitations designs that go above and beyond your
        expectations.
      </h2>
    </div>
    <div class="about_ours">
      <span
        >Welcome to <strong>EL Design wedding invitations</strong> showroom and
        admire our giant range of meticulously crafted wedding invitations,
        spanning over a 6years of depicting beautiful love stories by stylishly
        combining art, tactile papers, materials and the best of modern and
        traditional print applications. We can mix and match elements of
        designs, combine papers, stocks, and embellishments and tailor your
        wedding invites to your heart’s content until you are totally satisfied.
        Let us create completely unique and
        <strong>customized wedding invitation cards</strong> that will become
        the perfect depiction for your special day to come, and remain a
        beautiful memory to be treasured for years</span
      >
    </div>
    <!-- 参差不齐区 -->
    <div class="about_invitation_one">
      <div class="descript">
        <div class="descript_top">
          <div class="descript_top_text">
            <span class="font_myfont font_myfont_title">Showcase | Bespoke Stories</span>
            <p class="descript_text">
              Destiny's Compass
              For the couple who journeyed to find each other. Craft your prologue.
A bespoke invitation is more than paper—it’s a tangible piece of your narrative, designed uniquely for your “I do.”
            </p>
          </div>
          <div>
            <img
              style="width: 588px; height: 580px"
              src="@/assets/img/home/acrylic.png"
              alt=""
            />
            
          </div>
        </div>
      </div>
      <div class="descript_top_two">
        <video width="346" height="659" autoplay muted playsinline loop>
              <source src="@/assets/img/home/video.mp4" type="video/mp4" />
            </video>
        <img
          style="width: 346px; height: 326px;position: relative; top: -16px;"
          src="@/assets/img/home/Hardcover.png"
          alt=""
        />
      </div>
      <div class="descript_top_three">
        <img
          style="margin-bottom: 5px;"
          src="@/assets/img/home/letterpress.jpg"
          alt=""
        />
         <img
          src="@/assets/img/home/velvetbox.png"
          alt=""
        />
      </div>
    </div>
    <!-- 透明区 -->
     <div class="transparent_box"></div>
    <!-- 视频图片 -->
    <!-- <div class="video_box">
      <div class="video_v">
        <video width="550" autoplay muted playsinline loop>
          <source src="@/assets/video/video_1.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="video_img">
        <img src="@/assets/img/home/home_2.jpg" alt="" />
        <div class="img_text">
          <p class="font_myfont">Unique & Custom Designs</p>
          <p>
            At EL design Wedding Invitations, creativity knows no bounds! If you
            can dream it, we can bring it to life. Each design is
            custom-tailored to your unique style and vision, blending
            sophistication and timeless elegance to create invitations that
            leave a lasting impression on your special day.
          </p>
        </div>
      </div>
    </div> -->
    <!-- 产品图 -->
    <div class="materials">
      <div @click="toProducrs" class="title cursor_title">
        <span>PRODUCTS</span>
      </div>
      <div class="about_invitation_one">
      <div class="descript">
        <div class="descript_top">
          <div class="descript_top_text">
            <div>
            <img
              @click="toAcrylic(3)"
              style="width: 588px; height: 580px;cursor: pointer;"
              src="@/assets/img/home/home_producttwo.jpg"
              alt=""
            />
            
          </div>
            <span class="font_myfont font_myfont_title">Showcase | Bespoke Stories</span>
            <p class="descript_text">
              Destiny's Compass
              For the couple who journeyed to find each other. Craft your prologue.
A bespoke invitation is more than paper—it’s a tangible piece of your narrative, designed uniquely for your “I do.”
            </p>
          </div>
          
        </div>
      </div>
      <div class="descript_top_two">
        <img @click="toAcrylic(2)" class="img_top_two" style="cursor: pointer;" src="@/assets/img/home/home_productfour.jpg" />
           
        <img
          @click="toAcrylic(5)"
          style="cursor: pointer;margin-top: 5px;"
          src="@/assets/img/home/home_productone.jpg"
          alt=""
        />
      </div>
      <div class="descript_top_three">
        <img
          @click="toAcrylic(1)"
          style="cursor: pointer;"
          src="@/assets/img/home/home_productthree.jpg"
          alt=""
        />
         <img
          @click="toAcrylic(4)"
          style="cursor: pointer;margin-top: 5px;"
          src="@/assets/img/home/home_productfive.jpg"
          alt=""
        />
      </div>
    </div>
    </div>
    <!-- 流程图 -->
     <div class="materials">
      <div @click="toProducrs" class="title cursor_title">
        <span>FLOW DIAGRAM</span>
      </div>
      <div>
        <img
          style="width: 100%;height: 800px;"
          src="@/assets/img/home/customized SOP .jpg"
          alt=""
        />
      </div>
    </div>
    <!-- VIEW ALL -->
    <div class="materials">
      <div @click="toProducrs" class="title cursor_title">
        <span>VIEW ALL</span>
      </div>
      <div class="about_invitation">
        <div class="">
          <img
            style="width: 500px; height: 750px"
            src="@/assets/img/home/home_3.jpg"
            alt=""
          />
        </div>
        <div class="descript_two">
          <span class="font_myfont">Never run out of stationery ideas</span>
          <p class="descript_text">
            At <strong>EL design Wedding Invitations</strong>, we offer
            custom-designed invitations for any event, featuring an extensive
            selection of stunning, one-of-a-kind designs to choose from.
            Personalize your invitations by selecting custom colors, elegant
            fonts, and unique die-cut shapes for both invitations and envelopes.
            Bring your vision to life with our bespoke invitation designs that
            leave a lasting impression. Start customizing today!
          </p>
        </div>
      </div>
    </div>
    <div class="home_bottom">
      <p>
        With the freedom to choose your colors, personalize every detail, and
        craft your wording, your wedding invitations will be a true reflection
        of your love story. We're here to make your wedding dreams come true
        with our dedication to customization and personalization.
      </p>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Carousel from "../Carousel/index.vue";
import Bottom from "../../common/bottom.vue";

export default {
  name: "home",
  components: {
    Carousel,
    Bottom,
  },
  data() {
    return {};
  },
  methods: {
    toProducrs() {
      // this.$router.push("/Products")
      this.$bus.$emit("toProduct");
    },
    toAcrylic(val) {
            this.$router.push({
                path: "/Products",
                query: {
                    type: val
                }
            })
            this.$bus.$emit("toMenu", "/Products");
        },
  },
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/home.less";
.font_myfont_title {
  padding-top: 20px;
}
.home_title {
  background-color: #fff;
  font-family: "myfont";
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  color: #c7b5b5;
  padding: 15px 0 10px 0;
  // position: relative;
  // top: -1px;
  // border-top: 1px solid #ccc;
}
.title_box {
  background-color: #fff;
  h2 {
    font-family: "myfont";
  }
  padding: 20px 0 0 0;
  display: flex;
  justify-content: center;
  font-size: 28px;
}
.about_ours {
  background-color: #fff;
  text-align: center;
  font-size: 24px;
}
.about_invitation_one {
  background-color: #fff;
  width: 55;
  padding: 50px 0 50px 0;
  display: flex;
  justify-content: center;
  .descript {
    width: 588px;
    margin-right: 5px;
    .descript_top_text {
      display: flex;
      flex-wrap: wrap;
      justify-content: end;
      width: 580px;
      height: 391px;
      span {
        width: 350px;
      }
      p {
        width: 350px;
      }
    }
    .descript_text {
      font-size: 20px;
      line-height: 32px;
    }
  }
  .descript_top_two {
    display: flex;
    flex-direction: column;
    .video_top_two {
      position: relative;
      top: -23px;
    }
  }
  .descript_top_three {
    margin-left: 5px;
    padding-top: 5px;
    width: 392px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.about_invitation {
  padding: 50px 0 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .descript {
    width: 550px;
    padding-right: 80px;
    .descript_text {
      font-size: 20px;
      line-height: 32px;
    }
  }
  .descript_two {
    width: 550px;
    padding-left: 80px;
    .descript_text {
      font-size: 20px;
      line-height: 32px;
    }
  }
}
.video_box {
  background-color: #fff;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .video_v,
  .video_img {
    img {
      width: 700px;
      height: 650px;
    }
    video {
      width: 700px;
      height: 650px;
    }
  }
  .video_v {
    margin-right: 40px;
  }
  .video_img {
    position: relative;
    .img_text {
      position: absolute;
      top: 140px;
      width: 540px;
      margin: 0 0 0 80px;
      :last-child {
        font-size: 22px;
        line-height: 34px;
      }
      p {
        text-align: center;
        color: #bbaeae;
      }
    }
  }
}
.materials {
  background-color: #fff;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 74px;
    padding-bottom: 30px;
    font-size: 34px;
    span {
      display: inline-block;
      color: #fff;
      background-color: black;
      padding: 5px 20px;
    }
  }
  .cursor_title {
    background-color: #fff;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    img {
      width: 680px;
      height: 900px;
    }
  }
}
.home_bottom {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 70px 10px 70px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  p {
    font-size: 26px;
    text-align: center;
  }
}
.transparent_box {
  height: 300px;
  width: 100%;
}
.home_box {
   padding-top: 86px;
    background-image: url("../../../assets/img/home/background.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: 1600px auto;
}
</style>
