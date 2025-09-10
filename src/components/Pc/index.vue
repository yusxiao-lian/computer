<template>
    <div class="content-box">
        <div class="menu-box">
            <img class="logo" src="@/assets/img/home/logo.png" alt="">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#ffffff" active-text-color="#409eff" @select="menuSelect">
                <el-menu-item index="/Home">Home</el-menu-item>
                <el-menu-item index="/Products">INVITATIONS</el-menu-item>
                <el-menu-item index="/Contact">COMTACT US</el-menu-item>
            </el-menu>
        </div>
        <div class="content_main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            activeIndex: "/Home"
        }
    },
    mounted() {
        this.$bus.$on("toMenu",(index)=>{
            this.activeIndex = index;
        })
        this.$router.push("/Home")
         this.$bus.$on("toProduct",()=>{
            this.$router.replace("/Products")
            this.activeIndex = "/Products"
         })
    },
    methods: {
        menuSelect(index) {
            this.activeIndex = index;
            console.log(index, "indexindex")
            this.$router.push(index)
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/home.less";

.menu-box {
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: #ffffff;
    width: 100%;
    display: flex;
    align-items: center;
    .logo {
        margin: 15px 90px 0 25px;
        width: 150px;
        height: 70px;
    }
}
.content_main {
    padding-top: 62px;
}

</style>