<template>
  <div class="materials">
      <div class="title">
        <span>MATERIALS & CRAFT</span>
      </div>
      <div class="content">
        <img
          src="@/assets/img/home/craft_1.jpg"
          alt=""
        />
        <img src="@/assets/img/home/craft_2.jpg" alt="" />
        <img
          src="@/assets/img/home/craft_3.jpg"
          alt=""
        />
        <img src="@/assets/img/home/craft_4.jpg" alt="" />
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
}
</style>