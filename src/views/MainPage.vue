<template>
    <v-container style="height=100%; width: 100%;" class="px-16">
        <h1 style="display: flex; justify-content: center; font-weight: bold;">중고거래 인기매물</h1> <br>
        <v-row style="display: flex; justify-content: center;" class="pb-8">
            <v-col cols="12" class="py-3">
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green" outlined to="/signup">
                        회원가입페이지
                    </v-btn>
                    <v-btn color="green" outlined to="/login">
                        로그인페이지
                    </v-btn>
                    <v-btn color="green" outlined to="/insert">
                        상품 등록페이지
                    </v-btn>
                    <v-btn color="green" outlined to="/detail">
                        상품 상세페이지
                    </v-btn>
                    <v-btn to="/pay" color="green" outlined>
                        결제페이지
                    </v-btn>
                    <v-btn color="green" outlined to="/mypage/setting">
                        마이페이지 - 설정
                    </v-btn>
                    <v-btn color="green" outlined to="/mypage/point">
                        마이페이지 - 충전
                    </v-btn>
                    <v-btn color="green" outlined to="/mypage/history">
                        마이페이지 - 내역
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-col>
            <v-col cols="3" class="mx-4" v-for="(product, index) in products" :key="index" >
              <v-hover v-slot="{ hover }">
                <v-card @click="detail" :elevation="hover ? 16 : 2" class="mx-auto rounded-lg" width="300" height="320" style="border-radius:25px; border: 1px solid #008037">
                  <v-img height="200" :src="`https://picsum.photos/${index}00/300`"></v-img>

                  <v-card-title class="pb-1">{{ product.title }}</v-card-title>

                  <v-card-text class="pb-1">
                    <div class="black--text" style="font-weight: bold;">
                        {{product.price.toLocaleString()}}원
                    </div>

                    <div class="pt-3" style="color:#008037">관심 {{ product.favorite }} &nbsp;| &nbsp; 채팅 {{ product.chat }}</div>
                </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
        </v-row>
    
    </v-container>
</template>

<script>
export default {
    name: "MainPage",
    data: () => ({
        products: [{
                title: 'eu pede',
                price: 99712,
                chat: 19,
                favorite: 89,
                img: 'https://picsum.photos/200/300'
            },
            {
                title: 'vestibulum quam sapien',
                price: 16948,
                chat: 70,
                favorite: 45,
                img: 'https://picsum.photos/200/300'
            },
            {
                title: 'vestibulum ante',
                price: 11341,
                chat: 59,
                favorite: 18,
                img: 'https://picsum.photos/200/300'
            },
            {
                title: 'justo',
                price: 23911,
                chat: 70,
                favorite: 48,
                img: 'https://picsum.photos/200/300'
            },
            {
                title: 'duis at',
                price: 60951,
                chat: 92,
                favorite: 51,
                img: 'https://picsum.photos/200/300'
            },
            {
                title: 'felis',
                price: 77534,
                chat: 92,
                favorite: 54,
                img: 'https://picsum.photos/200/300'
            },
            {
                title: 'sapien non mi',
                price: 98596,
                chat: 51,
                favorite: 5,
                img: 'https://picsum.photos/200/300'
            },
            {
                title: 'donec ut dolor',
                price: 63871,
                chat: 86,
                favorite: 60,
                img: 'https://picsum.photos/200/300'
            },
            {
                title: 'integer ac',
                price: 37983,
                chat: 82,
                favorite: 13,
                img: 'https://picsum.photos/200/300'
            },
            {
                title: 'justo sit',
                price: 29244,
                chat: 98,
                favorite: 19,
                img: 'https://picsum.photos/200/300'
            },
            {
                title: 'cum sociis natoque',
                price: 80831,
                chat: 11,
                favorite: 21,
                img: 'https://picsum.photos/200/300'
            },
            {
                title: 'arcu sed augue',
                price: 76980,
                chat: 15,
                favorite: 35,
                img: 'https://picsum.photos/200/300'
            }
        ]
    }),
    methods: {
        detail :function(){
            this.$router.push('/detail');
        }
    }
}
</script>

<style scoped>

</style>