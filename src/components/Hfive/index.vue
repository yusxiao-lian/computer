<template>
    <div class="content-box">
        
        <div class="content_main">
            <router-view></router-view>
        </div>
        <div>
            <van-tabbar v-model="active" fixed safe-area-inset-bottom	>
                <van-tabbar-item name="/HFiveHome" @click="toHome" icon="home-o">HOME</van-tabbar-item>
                <van-tabbar-item name="/HFiveProducts" @click="toInvitions" icon="gift-card-o">INVITATIONS</van-tabbar-item>
                <van-tabbar-item name="/HFiveContact" @click="toContact" icon="phone-circle-o">CONTACT US</van-tabbar-item>
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
    watch: {
        $route(to, from) {
            if(to.path == "/") {
                this.$router.push("/HFiveHome")
                this.active = '/HFiveHome'
            } else {
                this.active = to.path
            }
        }
    },
    data () {
        return {
            active: '/HFiveHome'
        }
    },
    mounted() {
        this.$router.push("/HFiveHome")
        this.$bus.$on("toHfiveMenu",(index)=>{
            this.active = index;
        })
    },
    methods: {
        toHome() {
            localStorage.removeItem("currentItemMenu")
            this.$router.push("/HFiveHome")
        },
        toInvitions() {
            this.$router.push("/HFiveProducts")
        },
        toContact() {
            localStorage.removeItem("currentItemMenu")
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