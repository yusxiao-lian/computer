<template>
    <div class="content-box">
        
        <div class="content_main">
            <router-view></router-view>
        </div>
        <div>
            <van-tabbar v-model="active" fixed safe-area-inset-bottom	>
                <van-tabbar-item name="home" @click="toHome" icon="home-o">HOME</van-tabbar-item>
                <van-tabbar-item name="search" @click="toInvitions" icon="gift-card-o">INVITATIONS</van-tabbar-item>
                <van-tabbar-item name="friends" @click="toContact" icon="phone-circle-o">COMTACT US</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>
<script>

import {
  Tabbar,
  TabbarItem,
 
} from 'vant';

export default {
    components: {
        VanTabbar: Tabbar,
        VanTabbarItem: TabbarItem
    },
    data () {
        return {
            active: 'home'
        }
    },
    mounted() {
        this.$router.push("/HFiveHome")
        this.$bus.$on("toMenu",(index)=>{
            this.active = index;
        })
    },
    methods: {
        toHome() {
            this.$router.push("/HFiveHome")
        },
        toInvitions() {
            this.$router.push("/HFiveProducts")
        },
        toContact() {
            this.$router.push("/HFiveContact")
        }
    }
}
</script>
<style lang="less" scoped>
.content-box {
    overflow-y: auto;
    padding-bottom: 20px;
    background-color: #fff;
    .menu-box {
        .logo {
            width: 80px;
            height: 50px;
        }
    }
}
</style>