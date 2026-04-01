<template>
  <div class="content-box">
    <div class="menu-box">
      <img class="logo" src="@/assets/img/home/logo.png" alt="" />
      <span class="home_title">Your Big Day Starts Right Here</span>
    </div>
    <div>
      <van-swipe
        class="my-swipe"
        :height="260"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item v-for="value in swipeItems" :key="value.image">
          <img class="swipeImg" :src="value.image" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
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
        traditional print applications. Let us create completely unique
        <strong>wedding invitation cards</strong> that will become
        the perfect depiction for your special day to come</span
      >
    </div>
    <div class="about_invitation">
      <div class="">
        <img
          style="width: 100%; height: 350px"
          src="@/assets/img/home/acrylic.png"
          alt=""
        />
      </div>
      <div class="">
        <img
          style="width: 100%; height: 350px"
          src="@/assets/img/home/velvetbox.png"
          alt=""
        />
      </div>
      <div class="descript">
        <span class="font_myfont">Showcase | Bespoke Stories</span>
        <p class="descript_text">
          Destiny's Compass
              For the couple who journeyed to find each other. Craft your prologue.
A bespoke invitation is more than paper—it’s a tangible piece of your narrative, designed uniquely for your “I do.”
        </p>
      </div>
    </div>
    <div class="video_box">
      <div class="video_v">
        <video
          width="100%"
          autoplay
          muted
          playsinline
          loop
          preload="auto"
          webkit-playsinline
          x5-playsinline
          x5-video-player-type="h5"
          x5-video-player-fullscreen="false"
          x5-video-orientation="portraint"
          style="object-fit: cover; background: black"
        >
          <source :src="video_1" type="video/mp4" />
          您的浏览器不支持视频播放
        </video>
      </div>
    </div>
    <div class="video_box">
      <div class="video_img">
        <img :src="home_2" alt="" />
      </div>
    </div>
    <div class="materials">
      <div class="title">
        <span>MATERIALS & CRAFT</span>
      </div>
      <div class="content">
        <img style="margin: 0 0 15px 0" :src="craft_1" alt="" />
        <img style="margin: 0 0 15px 0" :src="craft_2" alt="" />
        <!-- <img style="margin: 0 0 15px 0" :src="craft_3" alt="" /> -->
        <!-- <img style="margin: 0 0 15px 0" :src="craft_4" alt="" /> -->
      </div>
    </div>
    <div class="about_invitations">
      <div class="descript_two">
        <span class="font_myfont">Never run out of stationery ideas</span>
        <p class="descript_text">
          At <strong>EL design Wedding Invitations</strong>,, we offer custom-designed invitations for any event, featuring an extensive selection of stunning, one-of-a-kind designs to choose from. Check out our collections of cards for every occasion including birthdays, weddings, baby showers and more
        </p>
      </div>
    </div>
    <div class="about_invitations">
      <img style="width: 100%; height: 360px" :src="home_3" alt="" />
    </div>
    <div class="materials">
      <div class="title">
        <span>MORE FROME US</span>
      </div>
      <div class="content-more">
        <div v-for="(item, index) in moreList" @click="toAcrylic(item.type)">
          <img :src="item.image" alt="" />
          <div class="more-text">{{ item.text }}</div>
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
    <hFiveBottom />
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
import hFiveBottom from "@/components/common/hFiveBottom.vue";
import banner_1 from "@/assets/img/banner/banner_1.jpg";
import banner_2 from "@/assets/img/banner/banner_2.jpg";
import banner_3 from "@/assets/img/banner/banner_3.jpg";
import banner_4 from "@/assets/img/banner/banner_4.jpg";
import banner_5 from "@/assets/img/banner/banner_5.jpg";
import banner_6 from "@/assets/img/banner/banner_6.jpg";
import video_1 from "@/assets/img/home/video.mp4";
import home_2 from "@/assets/img/home/letterpress.jpg";
import craft_1 from "@/assets/img/home/craft_1.jpg";
import craft_2 from "@/assets/img/home/craft_2.jpg";
// import craft_3 from "@/assets/img/home/craft_3.jpg";
// import craft_4 from "@/assets/img/home/craft_4.jpg";
import home_3 from "@/assets/img/home/Hardcover.png";
import more_1 from "@/assets/img/home/home_producttwo.jpg";
import more_2 from "@/assets/img/home/home_productfour.jpg";
import more_3 from "@/assets/img/home/home_productone.jpg";
import more_4 from "@/assets/img/home/home_productthree.jpg";
import more_5 from "@/assets/img/home/home_productfive.jpg";

export default {
  data() {
    return {
      swipeItems: [
        {
          image: banner_2,
        },
        {
          image: banner_1,
        },
        {
          image: banner_3,
        },
        {
          image: banner_4,
        },
        {
          image: banner_5,
        },
        {
          image: banner_6,
        },
      ],
      video_1: video_1,
      home_2: home_2,
      craft_1: craft_1,
      craft_2: craft_2,
      // craft_3: craft_3,
      // craft_4: craft_4,
      home_3: home_3,
      moreList: [
        {
          image: more_1,
          text: "Suede Box", 
          type: 3,
        },
        {
          image: more_2,
          text: "Hardcover & Sude Booklet",
          type: 2,
        },
        {
          image: more_3,
          text: "Save The Date & Vows",
          type: 5,
        },
        {
          image: more_4,
          text: "Acrylic & Envelope",
          type: 1,
        },
        {
          image: more_5,
          text: "Letterpress & 3D Embossed",
          type: 4,
        },
      ],
    };
  },
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    hFiveBottom
  },
  created() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  mounted() {
    // 改进的视频自动播放逻辑
    const videoElement = document.querySelector("video");
    if (videoElement) {
      // 确保视频已加载元数据
      videoElement.addEventListener("loadedmetadata", () => {
        this.attemptVideoPlay(videoElement);
      });

      // 添加视频容器的点击事件，提高用户交互触发率
      const videoContainer = document.querySelector(".video_v");
      if (videoContainer) {
        videoContainer.style.cursor = "pointer";
        const handleContainerClick = () => {
          videoElement.play();
          videoContainer.removeEventListener("click", handleContainerClick);
          videoContainer.removeEventListener(
            "touchstart",
            handleContainerClick
          );
        };
        videoContainer.addEventListener("click", handleContainerClick);
        videoContainer.addEventListener("touchstart", handleContainerClick);
      }

      // 立即尝试播放，处理已缓存的视频
      this.attemptVideoPlay(videoElement);
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
    attemptVideoPlay(videoElement) {
      // 移动设备自动播放策略
      videoElement.play().catch((error) => {
        console.log("自动播放失败，需要用户交互:", error);

        // 添加全局点击和触摸事件监听
        const handleUserInteraction = () => {
          // 再次尝试播放
          videoElement
            .play()
            .then(() => {
              console.log("用户交互后视频播放成功");
            })
            .catch((err) => {
              console.error("用户交互后播放仍失败:", err);
            });

          // 移除事件监听器
          document.removeEventListener("click", handleUserInteraction);
          document.removeEventListener("touchstart", handleUserInteraction);
          document.removeEventListener("scroll", handleUserInteraction);
        };

        // 添加多种用户交互事件，提高触发几率
        document.addEventListener("click", handleUserInteraction);
        document.addEventListener("touchstart", handleUserInteraction);
        document.addEventListener("scroll", handleUserInteraction);

        // 设置超时移除监听器，避免内存泄漏
        setTimeout(() => {
          document.removeEventListener("click", handleUserInteraction);
          document.removeEventListener("touchstart", handleUserInteraction);
          document.removeEventListener("scroll", handleUserInteraction);
        }, 30000); // 30秒后移除
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/hFive.less";
.content-box {
  .menu-box {
    display: flex;
    align-items: center;
    padding: 8px 0 8px 12px;
    background-color: rgb(248, 244, 246);
    .logo {
      width: 80px;
      height: 50px;
      margin-right: 20px;
    }
    .home_title {
      font-size: 22px;
      font-weight: 600;
      font-family: "myfont";
      color: #c2a2a2;
    }
  }
  .my-swipe {
    .swipeImg {
      width: 100%;
      height: 100%;
    }
  }
  .title_box {
    h2 {
      font-family: "myfont";
    }
    display: flex;
    justify-content: center;
    font-size: 22px;
    text-align: center;
  }
  .about_ours {
    padding: 0 15px;
    text-align: center;
    font-size: 1.3em;
  }
  .about_invitation {
    padding: 0 20px;
    margin: 22px 0;
    text-align: center;
    .descript {
      margin: 22px 0 0 0;
      .descript_text {
        font-size: 1.3em;
        line-height: 28px;
      }
      .font_myfont {
        font-size: 32px;
      }
    }
  }
  .video_box {
    margin: 20px 0;
    padding: 0 15px;
    .video_v,
    .video_img {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      img {
        width: 100%;
        height: 450px;
        object-fit: cover;
      }
      video {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
    }
    .video_img {
      position: relative;
      .img_text {
        position: absolute;
        // top: 80px;
        width: 90%;
        :last-child {
          font-size: 22px;
          line-height: 28px;
        }
        p {
          text-align: center;
          color: #bbaeae;
        }
      }
    }
  }
  .materials {
    padding: 0 15px;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 24px;
      margin-bottom: 30px;
      font-size: 24px;

      span {
        display: inline-block;
        color: #fff;
        background-color: black;
        padding: 5px 20px;
        border-radius: 17px;
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
        width: 100%;
        height: 550px;
      }
    }
    .content-more {
      overflow-x: scroll;
      overflow-y: hidden;
      display: flex;
      justify-content: start;
      flex-wrap: nowrap;
      padding: 0 0 15px 0;
      .more-text {
        text-align: center;
        padding: 5px 0;
        font-size: 14px;
      }
      img {
        width: 300px !important;
        height: 300px !important;
        margin-right: 15px;
        flex-shrink: 0; /* 防止图片在flex容器中被压缩 */
      }
      // 自定义滚动条样式，提高用户体验
      &::-webkit-scrollbar {
        height: 6px;
      }
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
      }
      &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 3px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: #ccc;
      }
    }
  }
  .about_invitations {
    margin: 20px 0 20px 0;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .font_myfont {
      font-size: 32px;
    }
    .descript {
      width: 100%;
      padding-right: 15px;
      .descript_text {
        font-size: 1.3em;
        line-height: 28px;
      }
    }
    .descript_two {
      width: 100%;
      .descript_text {
        font-size: 1.3em;
        line-height: 28px;
      }
    }
  }
  .home_bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 10px 15px;
    border-top: 1px solid #ccc;
    p {
      font-size: 20px;
      text-align: center;
    }
  }
}
</style>
