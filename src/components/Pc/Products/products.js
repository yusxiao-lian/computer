let products = [
  {
    imgUrl: require('@/assets/img/mainProduct/pro_one.jpg'),
    desc: '1',
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

]
export function productList () {
    return products;
};