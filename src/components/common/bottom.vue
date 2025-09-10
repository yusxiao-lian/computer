<template>
    <div class="bottom_box">
        <img class="logo" src="../../assets/img/home/logo.png" alt="">
        <div class="menu">
            <div class="pointer">Home</div>
            <div class="contact pointer">INVITATIONS</div>
            <div class="pointer">COMTACT US</div>
        </div>
        <div class="products">
            <div @click="toAcrylic" class="pointer">Acrylic invitation</div>
            <div class="pointer mr_five">Hardcover invitation</div>
            <div class="pointer">Box invitation</div>
            <div class="pointer mr_five">Letterpress</div>
            <div class="pointer">Luxury invitation</div>    
        </div>
        <div class="contact">
            <div class="gmail">contant us: ellafff001@gmail.com</div>
            <div>
                <span @click="toFacebook" class="myfont_3"><i class="el-icon-caret-right"></i>f</span>
                <span @click="toInstagram" class="myfont_3 Instagram"><i class="el-icon-caret-right"></i>ins</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "bottom",
    data() {
        return {};
    },
    methods: {
        toFacebook() {
            window.open("https://www.facebook.com/people/El-Design-Wedding-Invitation/61580327604321/");
        },
        toInstagram() {
            window.open("https://www.instagram.com/eldesignweddinginvitation/");
        },
        toAcrylic() {
            this.$router.push({
                path: "/Products",
                params: {
                    type: "Acrylic"
                }
            })
        }
    },
}
</script>
<style lang="less" scoped>
.bottom_box {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    padding: 30px 20px 20px 20px;
    .logo {
        width: 180px;
        height: 110px;
    }
    .contact {
        margin: 10px 0;
    }
    .pointer {
        cursor: pointer;
        &:hover {
            color: #7ab6dd;
            text-decoration: underline;
        }
    }
    .mr_five {
        margin: 5px 0;
    }
    .menu  {
        margin: 0 15% 0 20%;
    }
    .products {
        margin: 0 20% 0 0;
    }
    .contact {
        .myfont_3 {
            font-size: 24px;
            cursor: pointer;
            font-weight: 700;
        }
        .gmail {
            margin: 0 0 10px 0;
        }
        .Instagram {
            margin: 0 0 0 20px;
        }
    }
    
}
</style>