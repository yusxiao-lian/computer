<template>
  <div class="materials">
      <div class="title">
        <span>MATERIALS & CRAFT</span>
      </div>
      <div class="content">
        <div class="content-top">
          <img
          src="@/assets/img/home/acrylicColor.jpg"
          alt=""
        />
        </div>
        <img
          src="@/assets/img/home/craft_1.jpg"
          alt=""
        />
        <img src="@/assets/img/home/craft_2.jpg" alt="" />
        <div class="content-bottom">
          <img
          src="@/assets/img/home/customized SOP .jpg"
          alt=""
        />
        </div>
      </div>
  </div>
</template>
<style lang="less" scoped>
.materials {
  margin-top: 50px;
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
 .content {
    display: flex;
    // flex-direction: column;
    // align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
    //   margin: 25px 0 0 30px;
      width: 47%;
    }
 }
 .content-top {
    width: 100%;
    margin: 0 0 10px 0;
    img {
      width: 100%;
    }
 }
 .content-bottom {
  width: 100%;
  margin: 20px 0 0 0;
  img {
    width: 100%;
  }
 }
}
</style>