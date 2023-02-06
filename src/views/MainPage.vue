<template>
    <v-container style="width: 100%;" fluid fill-height class="pb-12">
        <v-row style="display: flex; justify-content: center;" class="pb-8">
            <v-col cols="12" style="background-color: #D2E9DC; height: 600px;" class="pb-12 mb-12">
                <v-row justify="center" align="center" style="height: 100%;">
                    <v-col cols="2"></v-col>
                    <v-col cols="4">
                        <v-card flat style="background-color: #D2E9DC;">
                            <v-card-text  style="font-family: 'KOTRA_BOLD'; color:#008037; font-size: 35px;  height: 100%;">
                            
                                <p class="py-2">이번 달,</p>
                                <p class="pb-12" style="line-height: 40px;">당신이 사용하지 않은 물건은 몇 개?</p>
        
                                <p class="">물건을 맡기는 것만으로도</p>
                                <p class="pb-8">수익을 낼 수 있다면?</p>
        
                                <p>왓슈로 와유~</p>
                                
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-img :src="require('../../images/WhatSuWhite.png')" max-height="300" max-width="300"
                            ></v-img>
                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="py-12">
                <p class="text-center" style="font-family: 'KOTRA_BOLD'; color:#008037; font-size: 55px;">잘 나가유~</p>
            </v-col>
          <v-col cols="12">
            <v-container>
              <v-data-iterator :items="products" :items-per-page="6" hide-default-footer>
                <template v-slot:default="props">
                  <v-row>
                    <v-col cols="4" v-for="(product, index) in props.items" :key="index" class="mb-3">
                      <v-hover v-slot="{ hover }">
                        <v-card @click="detail" :elevation="hover ? 16 : 2" class="mx-auto rounded-lg" width="300" height="320" max-height="320" style="border-radius:25px; border: 1px solid #008037">
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
                </template>
              </v-data-iterator>
            </v-container>
          </v-col>
        </v-row> 
        <v-row>
        <v-spacer></v-spacer>
        <v-btn to="/list" color="#008037" outlined rounded class="pa-7" style="font-family:'KOTRA_BOLD'; font-size: x-large;">더 볼래유?</v-btn>
        <v-spacer></v-spacer>
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