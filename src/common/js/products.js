// 盒子
let boxProducts = [
  {
    type: "3",
    imgUrl: require('@/assets/img/mainProduct/pro_one.jpg'),
    desc: 'Luxury suede/velvet box with customized gold mirror acrylic card invitation',
    childrens: [
        {
            imgUrl: require('@/assets/img/mainProduct/pro_detail_1.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_detail_2.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_detail_3.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_detail_4.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_detail_5.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_detail_6.jpg'),
        }
    ]
  },
  {
    type: "3",
    imgUrl: require('@/assets/img/mainProduct/pro_two.jpg'),
    desc: 'Dark green suede box invitation gold foil clear acrylic wedding invitation card',
    childrens: [
        {
            imgUrl: require('@/assets/img/mainProduct/pro_two_1.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_two_2.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_two_3.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_two_4.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_two_5.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_two_6.jpg'),
        }
    ]
  },
  {
    type: "3",
    imgUrl: require('@/assets/img/mainProduct/pro_three.jpg'),
    desc: 'Baby pink velvet hardcover box with creative shape acrylic invitation card',
    childrens: [
        {
            imgUrl: require('@/assets/img/mainProduct/pro_three_1.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_three_2.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_three_3.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_three_4.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_three_5.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_three_6.jpg'),
        }
    ]
  },
  {
    type: "3",
    imgUrl: require('@/assets/img/mainProduct/pro_four.jpg'),
    desc: 'Creative shape cleae acrylic invitations with ivory suede foiling logo box ',
    childrens: [
        {
            imgUrl: require('@/assets/img/mainProduct/pro_four_1.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_four_2.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_four_3.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_four_4.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_four_5.jpg'),
        },
        {
            imgUrl: require('@/assets/img/mainProduct/pro_four_6.jpg'),
        }
    ]
  },
]
// 亚克力
let acrylic = []
// 灰板
let Hardcover = []
// 信封
let Letterpress = []
let Luxury = []


export function productList (value) {
    if(value==1) {
        return acrylic;
    } else if(value==3) {
        return boxProducts;
    } else if(value==2) {
        return Hardcover;
    } else if(value==4) {
        return Letterpress;
    } else if(value==5) {
        return Luxury;
    }
    return acrylic;
};