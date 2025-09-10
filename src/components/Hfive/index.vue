<template>
    <div class="content-box">
        <div class="menu-box">
            <img class="logo" src="@/assets/img/home/logo.png" alt="">
        </div>
        <div class="content_main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>

</script>
<style lang="less" scoped>
.content-box {
    .menu-box {
        .logo {
            width: 80px;
            height: 50px;
        }
    }
}
</style>