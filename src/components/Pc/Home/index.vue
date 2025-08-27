<template>
  <div>
    <dov class="home_title"> Your Big Day Starts Right Here </dov>
    <Carousel :autoplay="true" :interval="4000" :loop="true" />
    <div class="title_box">
      <h2>
        Delivering invitations designs that go above and beyond your
        expectations.
      </h2>
    </div>
    <div class="about_ours">
      <span>Welcome to EL Design wedidng invitations showroom and admire our giant
        range of meticulously crafted wedding invitations, spanning over a
        6years of depicting beautiful love stories by stylishly combining art,
        tactile papers, materials and the best of modern and traditional print
        applications. We can mix and match elements of designs, combine papers,
        stocks, and embellishments and tailor your wedding invites to your
        heart’s content until you are totally satisfied. Let us create
        completely unique and customized wedding invitation cards that will
        become the perfect depiction for your special day to come, and remain a
        beautiful memory to be treasured for years</span>
    </div>
    <div class="about_invitation">
        <div class="descript">
            <span class="font_myfont">Search for your perfect invitation</span>
            <p>
                <p><strong>Boxed Wedding Invitations</strong> is your ultimate destination for <strong>luxury, custom-designed invitations</strong> that set the tone for your special day. Explore our curated collection by <strong>category, occasion, or event</strong> and discover exquisitely crafted designs tailored to your unique celebration. We specialize in <strong>personalized, high-end stationery</strong> to make your event truly unforgettable.</p>
            </p>
        </div>
        <div class="">
            <img style="width: 500px;height: 750px;" src="" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../Carousel/index.vue";

export default {
  name: "Home",
  components: {
    Carousel,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/home.less";
.home_title {
  font-family: "myfont";
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  color: #c7b5b5;
  margin-bottom: 10px;
}
.title_box {
  h2 {
    font-family: "myfont";
  }
  margin: 20px 0 0 0;
  display: flex;
  justify-content: center;
  font-size: 28px;
}
.about_ours {
    text-align: center;
    font-size: 24px;
}
.about_invitation {
    margin: 50px 0 50px 0;
    padding: 0 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    .descript {
        width: 600px;
    }
}
</style>
