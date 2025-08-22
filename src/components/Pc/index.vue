<template>
    <div class="content-box">
        <div class="menu-box">
            <img class="logo" src="" alt="">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  router>
                <el-menu-item index="/Home">Home</el-menu-item>
                <el-menu-item index="/Products">INVITATIONS</el-menu-item>
                <el-menu-item index="/Contact">COMTACT US</el-menu-item>
            </el-menu>
        </div>
        <div>
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
    display: flex;
    align-items: center;
    .logo {
        width: 50px;
        height: 50px;
        margin-right: 100px;
    }
}


</style>