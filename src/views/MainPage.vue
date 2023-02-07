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
                        <v-card @click="detail(product)" :elevation="hover ? 16 : 2" class="mx-auto rounded-lg" width="300" height="320" max-height="320" style="border-radius:25px; border: 1px solid #008037">
                          <v-img height="200" :lazy-src="product.img"></v-img>

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
import * as appx from '../store/modules/app'
import * as app_type from '../store/modules/app/types'
import _ from 'lodash'
import sample from '../utils/samplePrdouct.json'

(function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.")}var ch=function(){ch.c(arguments)};ch.q=[];ch.c=function(args){ch.q.push(args)};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x)}}if(document.readyState==="complete"){l()}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l)}})();

  ChannelIO('boot', {
    "pluginKey": "a7995c55-0012-40ed-a6d7-f2e3945d6a90"
  });

export default {
    name: "MainPage",
    data: () => ({
        products: []
    }),
    methods: {
      ...appx.mapMutations([
          app_type.SET_CURRENT_PRODUCT
      ]),
      detail :function(product) {
        this.SET_CURRENT_PRODUCT(product)
        this.$router.push('/detail');
      }
    },
  created() {
      const shuffled = _.shuffle(sample).slice(0, 12)
      this.products = shuffled.map(s => ({
        title: s.title,
        price: s.price,
        description: s.description,
        chat: s.chat,
        favorite: s.like,
        img: s.images[0]['url'],
        imgs: s.images
      }))
  }
  
}

</script>

<style scoped>

</style>

  
