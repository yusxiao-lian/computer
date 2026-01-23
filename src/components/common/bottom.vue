<template>
    <div class="bottom_box">
        <img class="logo" src="../../assets/img/home/logo.png" alt="">
        <div class="menu">
            <div @click="toHome" class="pointer">Home</div>
            <div @click="toInvitation" class="contact pointer">INVITATIONS</div>
            <div @click="toContact" class="pointer">COMTACT US</div>
        </div>
        <div class="products">
            <div @click="toAcrylic(1)" class="pointer">Acrylic invitation</div>
            <div @click="toAcrylic(2)" class="pointer mr_five">Hardcover invitation</div>
            <div @click="toAcrylic(3)" class="pointer">Box invitation</div>
            <div @click="toAcrylic(4)" class="pointer mr_five">Letterpress</div>
            <div @click="toAcrylic(5)" class="pointer">Luxury invitation</div>    
        </div>
        <div class="contact">
            <div class="gmail">contant us: ellafff001@gmail.com</div>
            <div>
                <span @click="toFacebook" class="myfont_3"><i class="el-icon-thumb"></i>f</span>
                <span @click="toInstagram" class="myfont_3 Instagram"><i class="el-icon-thumb"></i>ins</span>
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
        toAcrylic(val) {
            this.$router.push({
                path: "/Products",
                query: {
                    type: val
                }
            })
            this.$bus.$emit("toMenu", "/Products");
        },
        toHome() {
            this.$router.push({
                path: "/Home"
            })
            this.$bus.$emit("toMenu", "/Home");
        },
        toInvitation() {
            this.$router.push({
                path: "/Products",
            })
            this.$bus.$emit("toMenu", "/Products");
        },
        toContact() {
            this.$router.push({
                path: "/Contact"
            })
            this.$bus.$emit("toMenu", "/Contact");
        }
    },
}
</script>
<style lang="less" scoped>
.bottom_box {
    background-color: #fff;
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
            margin: 0 10px 0 0;
            // 让图标顺时针旋转90度
            .el-icon-thumb {
                margin-right: 5px;
                display: inline-block;
                transform: rotate(90deg);
            }
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