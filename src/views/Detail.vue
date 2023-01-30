<!--상세페이지-->
<template>
    <v-container style="height=100%; width: 100%; padding-left: 500px; padding-right: 500px;" class="pt-10">
        <!--이미지 캐러셀-->
        <div class="pb-4">
            <v-carousel style="border-radius: 20px;" hide-delimiter-background show-arrows-on-hover>
                <!--show-arrows-on-hover : 마우스 가져가면 버튼 활성화, hide-delimiter-background : 하단바x-->
                <v-carousel-item v-for="(img,i) in imgs" :key="i" :src="img.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
            </v-carousel>
        </div>
    
        <!--내용-->
        <v-card flat class="mx-auto rounded-lg" width="100%" height="100%" style="border:none;">
            <!--flat대신 elevation="0"도 가능-->
            <v-card-title class="pb-1" style="font-weight: bold;">소주</v-card-title>
            <v-card-text class="pb-6">
                <p class="black--text pb-4" style="font-weight: bold;">10,000원</p>
                <!-- <hr style="border: 0; height: 1px; background: #cccccc"> -->
                <v-divider></v-divider>
                <p class="black--text pt-4" style="font-weight: bold; line-height: 35px;">10년 묵은 소주임다<br>상해서 배탈나도 책임 안져유~</p>
                <p class="pt-6 pb-4">관심 88 &nbsp;| &nbsp; 채팅 172</p>
                <v-divider></v-divider>
                <!-- <hr style="border: 0; height: 1px; background: #cccccc"> -->
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer><!--<v-spacer>옆으로 밀기.-->
                <v-btn dark color="#008037">채팅하기</v-btn> <!--block : 꽉채우게~-->
                <v-btn dark color="#008037">구매하기</v-btn> <!--block : 꽉채우게~-->
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            imgs: [{
                    src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMjNfMTY1%2FMDAxNjM0OTQ4MDE5MzYz.wUG2Ol8UPYF27r_zhZE3Gzl3IkUnzvcaQkgcltP7Cckg.n7YeHtutEQnpM1IbE3p86LXnA9hsVXc78BqkAU8TvKcg.JPEG.2su0_%2FIMG_4087.jpg&type=a340',
                },
                {
                    src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160429_120%2Fensign94_146191450882152wHy_JPEG%2F20160429_065639.jpg&type=sc960_832',
                },
                {
                    src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODAyMDdfNTYg%2FMDAxNTE3OTc1NDAzNzAy.AqD5opPwDo-HL3BTsZubpWTiSuyXUHdWC87naMhLasEg.0Yp15Kn_djgdSoTf3S2l3NxnJLBhbF5kEXbPU99Ipnsg.JPEG.boss4325%2FexternalFile.jpg&type=a340'
                },
            ],
        }
    },
}
</script>
