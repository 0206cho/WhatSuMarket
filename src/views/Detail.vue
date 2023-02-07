<!--상세페이지-->
<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-col cols="4" class="py-10">
        <!--이미지 캐러셀-->
        <v-carousel color="primary" style="border-radius: 20px;" hide-delimiter-background show-arrows-on-hover>
          <!--show-arrows-on-hover : 마우스 가져가면 버튼 활성화, hide-delimiter-background : 하단바x-->
          <v-carousel-item v-for="(img, i) in product.imgs" :key="i" :lazy-src="img.url"
                           reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
        </v-carousel>

        <!--내용-->
        <v-card flat class="mx-auto rounded-lg pt-5">
          <!--flat대신 elevation="0"도 가능-->
          <v-card-title class="pb-1 font-weight-black display-1">{{ product.title }}</v-card-title>
          <v-card-text class="pb-6">
            <p class="black--text pb-4 font-weight-medium title">{{ product.price.toString().toLocaleString() }}원</p>
            <!-- <hr style="border: 0; height: 1px; background: #cccccc"> -->
            <v-divider style="border-color:#008037;"></v-divider>
            <p v-html="product.description" class="black--text pt-4 font-weight-bold" style="font-weight: bold; line-height: 35px;"></p>
            <p class="pb-4" style="color: #008037;"><v-icon small>fa fa-heart</v-icon> <span class="font-weight-medium">{{ product.favorite }}</span> &nbsp;| &nbsp; <v-icon small>fa fa-message</v-icon> <span class="font-weight-medium">{{ product.chat }}</span> </p>
            <v-divider style="border-color:#008037;"></v-divider>
            <!-- <hr style="border: 0; height: 1px; background: #cccccc"> -->
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer><!--<v-spacer>옆으로 밀기.-->
            <v-btn dark color="#008037" style="border-radius: 30px;" class="px-5">채팅하기</v-btn>
            <!--block : 꽉채우게~-->
            <v-btn dark color="#6B8A78" style="border-radius: 30px;" class="px-5">구매하기</v-btn>
            <!--block : 꽉채우게~-->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import * as appx from '../store/modules/app'
export default {
  name: "Detail",
  // data() {
  //     return {
  //         imgs: [{
  //             src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMjNfMTY1%2FMDAxNjM0OTQ4MDE5MzYz.wUG2Ol8UPYF27r_zhZE3Gzl3IkUnzvcaQkgcltP7Cckg.n7YeHtutEQnpM1IbE3p86LXnA9hsVXc78BqkAU8TvKcg.JPEG.2su0_%2FIMG_4087.jpg&type=a340',
  //         },
  //         {
  //             src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160429_120%2Fensign94_146191450882152wHy_JPEG%2F20160429_065639.jpg&type=sc960_832',
  //         },
  //         {
  //             src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODAyMDdfNTYg%2FMDAxNTE3OTc1NDAzNzAy.AqD5opPwDo-HL3BTsZubpWTiSuyXUHdWC87naMhLasEg.0Yp15Kn_djgdSoTf3S2l3NxnJLBhbF5kEXbPU99Ipnsg.JPEG.boss4325%2FexternalFile.jpg&type=a340'
  //         },
  //         ],
  //     }
  // }
  data: () => ({
    product: {
      title: '소주',
      price: 10000,
      context: '10년 묵은 소주임다. <br> 상해서 배탈나도 책임 안져유~',
      chat: 172,
      favorite: 88,
      imgs: [{
        src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMjNfMTY1%2FMDAxNjM0OTQ4MDE5MzYz.wUG2Ol8UPYF27r_zhZE3Gzl3IkUnzvcaQkgcltP7Cckg.n7YeHtutEQnpM1IbE3p86LXnA9hsVXc78BqkAU8TvKcg.JPEG.2su0_%2FIMG_4087.jpg&type=a340',
      },
        {
          src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160429_120%2Fensign94_146191450882152wHy_JPEG%2F20160429_065639.jpg&type=sc960_832',
        },
        {
          src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODAyMDdfNTYg%2FMDAxNTE3OTc1NDAzNzAy.AqD5opPwDo-HL3BTsZubpWTiSuyXUHdWC87naMhLasEg.0Yp15Kn_djgdSoTf3S2l3NxnJLBhbF5kEXbPU99Ipnsg.JPEG.boss4325%2FexternalFile.jpg&type=a340'
        }],
    }
  }),

  computed: {
    ...appx.mapState(['current_product'])
  },

  beforeMount() {
    this.product = this.current_product
  }
}
</script>
