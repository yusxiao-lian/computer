<template>
  <div>
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
        >Welcome to EL Design wedidng invitations showroom and admire our giant
        range of meticulously crafted wedding invitations, spanning over a
        6years of depicting beautiful love stories by stylishly combining art,
        tactile papers, materials and the best of modern and traditional print
        applications. We can mix and match elements of designs, combine papers,
        stocks, and embellishments and tailor your wedding invites to your
        heart’s content until you are totally satisfied. Let us create
        completely unique and customized wedding invitation cards that will
        become the perfect depiction for your special day to come, and remain a
        beautiful memory to be treasured for years</span
      >
    </div>
    <div class="about_invitation">
      <div class="descript">
        <span class="font_myfont">Search for your perfect invitation</span>
        <p class="descript_text">
          Your <strong>wedding</strong> will be such a momentous and special
          day, and we understand your <strong>invitations</strong> should be
          personal and represent your style, wedding theme, vision and love
          story. Work with us to create your very own couture wedding stationery
          that reflects your fabulous style. We will put together the
          possibilities to make the magic happen and get back to you with a
          custom quote within 1 business day. The journey to perfect stationery
          starts here!
        </p>
      </div>
      <div class="">
        <img
          style="width: 500px; height: 750px"
          src="@/assets/img/home/home_1.jpg"
          alt=""
        />
      </div>
    </div>

    <div class="video_box">
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
            At EL design Wedding Invitations, creativity knows no bounds! If you can
            dream it, we can bring it to life. Each design is custom-tailored to
            your unique style and vision, blending sophistication and timeless
            elegance to create invitations that leave a lasting impression on
            your special day.
          </p>
        </div>
      </div>
    </div>

    <div class="materials">
      <div class="title">
        <span>MATERIALS & CRAFT</span>
      </div>
      <div class="content">
        <img
          style="margin: 0 60px 50px 0"
          src="@/assets/img/home/craft_1.jpg"
          alt=""
        />
        <img src="@/assets/img/home/craft_2.jpg" alt="" />
        <img
          style="margin: 0 60px 50px 0"
          src="@/assets/img/home/craft_3.jpg"
          alt=""
        />
        <img src="@/assets/img/home/craft_4.jpg" alt="" />
      </div>
    </div>
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
            At <strong>EL design Wedding Invitations</strong>, we offer custom-designed
            invitations for any event, featuring an extensive selection of
            stunning, one-of-a-kind designs to choose from. Personalize your
            invitations by selecting custom colors, elegant fonts, and unique
            die-cut shapes for both invitations and envelopes. Bring your vision
            to life with our bespoke invitation designs that leave a lasting
            impression. Start customizing today!
          </p>
        </div>
      </div>
    </div>
    <div class="home_bottom">
      <p>With the freedom to choose your colors, personalize every detail, and craft your wording, your wedding invitations will be a true reflection of your love story. We're here to make your wedding dreams come true with our dedication to customization and personalization.</p>
    </div>
  </div>
</template>

<script>
import Carousel from "../Carousel/index.vue";

export default {
  name: "home",
  components: {
    Carousel,
  },
  data() {
    return {};
  },
  methods: {
    toProducrs() {
      // this.$router.push("/Products")
      this.$bus.$emit("toProduct");
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/home.less";
.home_title {
  font-family: "myfont";
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  color: #c7b5b5;
  margin-bottom: 10px;
}
.title_box {
  h2 {
    font-family: "myfont";
  }
  margin: 20px 0 0 0;
  display: flex;
  justify-content: center;
  font-size: 28px;
}
.about_ours {
  text-align: center;
  font-size: 24px;
}
.about_invitation {
  margin: 50px 0 50px 0;
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
  margin: 20px 0;
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
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 74px;
    margin-bottom: 30px;
    font-size: 34px;
    span {
      display: inline-block;
      color: #fff;
      background-color: black;
      padding: 5px 20px;
    }
  }
  .cursor_title {
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
  padding: 10px 70px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  p {
    font-size: 26px;
    text-align: center;
  }
}
</style>
