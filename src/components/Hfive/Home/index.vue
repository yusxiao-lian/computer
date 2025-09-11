<template>
    <div class="content-box">
       <div class="menu-box">
            <img class="logo" src="@/assets/img/home/logo.png" alt="">
            <span class="home_title">Your Big Day Starts Right Here</span>
        </div>
        <div>
            <van-swipe class="my-swipe" :height="220" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="value in swipeItems" :key="value.image">
                    <img class="swipeImg" :src="value.image" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
import banner_1 from '../../../assets/img/banner/banner_1.jpg';
import banner_2 from '../../../assets/img/banner/banner_2.jpg';
import banner_3 from '../../../assets/img/banner/banner_3.jpg';
import banner_4 from '../../../assets/img/banner/banner_4.jpg';
import banner_5 from '../../../assets/img/banner/banner_5.jpg';
import banner_6 from '../../../assets/img/banner/banner_6.jpg';
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
                },{
                image: banner_5,
                },{
                image: banner_6,
                },
            ]
        }
    },
    components: {
        'van-swipe': Swipe,
        'van-swipe-item': SwipeItem,
    },
}
</script>
<style lang="less" scoped>
@import "../../../assets/css/hFive.less";
.content-box {
    .menu-box {
        display: flex;
        align-items: center;
        // background-color: #ccc;
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
}
</style>
