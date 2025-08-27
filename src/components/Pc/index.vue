<template>
    <div class="content-box">
        <div class="menu-box">
            <img class="logo" src="" alt="">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#ffffff" active-text-color="#409eff"  router>
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
        this.$router.push("/Home")
    },
    methods: {
        handleSelect(index) {
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
        width: 50px;
        height: 50px;
        margin-right: 100px;
    }
}
.content_main {
    padding-top: 62px;
}

</style>