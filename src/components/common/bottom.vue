<template>
    <div>
        <div class="home_bottom">
            <p>
                With the freedom to choose your colors, personalize every detail, and
                craft your wording, your wedding invitations will be a true reflection
                of your love story. We're here to make your wedding dreams come true
                with our dedication to customization and personalization.
            </p>
        </div>
        <div class="bottom_box">
        
            <img class="logo" src="../../assets/img/home/logo.png" alt="">
            <div class="menu">
                <div @click="toHome" class="pointer">Home</div>
                <div @click="toInvitation" class="contact pointer">INVITATIONS</div>
                <div @click="toContact" class="pointer">COMTACT US</div>
            </div>
            <div class="products">
                <div @click="toAcrylic(1)" class="pointer">Acrylic & Envelope</div>
                <div @click="toAcrylic(2)" class="pointer mr_five">Hardcover & Sude Booklet</div>
                <div @click="toAcrylic(3)" class="pointer">Suede Box</div>
                <div @click="toAcrylic(4)" class="pointer mr_five">Letterpress & 3D Embossed</div>
                <div @click="toAcrylic(5)" class="pointer">Save The Date & Vows</div>    
            </div>
            <div class="contact">
                <div class="gmail cursorPointer" @click="toPhone">
                    <img style="width: 22px; height: 22px;" class="logo" src="../../assets/img/home/contanctOne.png" alt=""></img>
                    &nbsp; wa.me
                </div>
                <div class="gmail">
                    <img style="width: 22px; height: 22px;" class="logo" src="../../assets/img/home/contanctFour.png" alt=""></img>
                    &nbsp; ellafff001@gmail.com
                </div>
                <div class="gmail cursorPointer" @click="toInstagram">
                    <img style="width: 22px; height: 22px;" class="logo" src="../../assets/img/home/contanctThree.png" alt=""></img>
                    &nbsp; EL Design Wedding Invitation
                </div>
                <div class="gmail cursorPointer" @click="toFacebook">
                    <img style="width: 22px; height: 22px;" class="logo" src="../../assets/img/home/contanctTwo.png" alt=""></img>
                    &nbsp;  EL Design Wedding Invitation
                </div>
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
        toPhone() {
            window.open("https://wa.me/8618814109741");
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
.cursorPointer {
    cursor: pointer;
     &:hover {
            color: #3734e9;
            text-decoration: underline;
        }
}
.bottom_box {
    background-color: #fff;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    padding: 30px 20px 20px 20px;
    font-size: 20px;
    .logo {
        width: 180px;
        height: 110px;
    }
    .contact {
        margin: 10px 0;
        font-size: 20px;
    }
    .pointer {
        cursor: pointer;
        &:hover {
            color: #3734e9;
            text-decoration: underline;
        }
    }
    .mr_five {
        margin: 5px 0;
    }
    .menu  {
        margin: 0 14% 0 14%;
        
    }
    .products {
        margin: 0 13% 0 0;
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
            display: flex;
            align-items: center;
        }
        .Instagram {
            margin: 0 0 0 20px;
        }
    }
    
}
.home_bottom {
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 70px 10px 70px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        p {
            font-size: 26px;
            text-align: center;
        }
    }
</style>