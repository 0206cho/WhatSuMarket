<template>
  <!-- <v-app-bar absolute app light style="background-color: #008037;">
        <v-toolbar-title>
          <v-img :src="require('../../images/WhatSuLogo2.png')" class="ms-8"  style="width: 100px;"></v-img>
        </v-toolbar-title>
      </v-app-bar> -->
  <v-app-bar absolute app light style="background-color: white;">
    <v-toolbar-title class="pl-12 ml-12" style="cursor: pointer;">
      <v-img :src="require('../../images/WhatSuLogo.png')" class="ms-12" style="width: 110px;" @click="main"></v-img>
    </v-toolbar-title>
    <v-toolbar-items>
<v-btn to="/list" class="pr-6" text color="#008037" style="font-family:'KOTRA_BOLD';">사던지 말던지</v-btn>      
      <v-btn to="/insert" class="pr-6" text color="#008037" style="font-family:'KOTRA_BOLD';">팔던지 말던지</v-btn>
      <v-btn to="/" class="px-6" text color="#008037" style="font-family:'KOTRA_BOLD';">궁금해유?</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <v-avatar color="#008037" size="40" style="cursor: pointer;" v-bind="attrs" v-on="on" class="mr-12">
          <v-icon dark>fa-solid fa-paw</v-icon>
        </v-avatar>
      </template>
      <v-list rounded>
        <v-list-item v-for="link in links" :key="link.text" link :to="link.to" color="#008037">
          <v-list-item-title style="font-family:'KOTRA_BOLD';">{{link.text}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import router from '@/router';

export default {
  name: "AppBar",
  methods: {
    main: function () {
      router.to
      this.$router.push('/')
    }
  },
  // 데이터 객체를 넘겨줌
  data: () => ({
    // 객체들의 배열
    links: [{
      'text' : "설정",
       to : '/mypage/setting'
    },{
      'text' : "내역",
       to : '/mypage/history'
    },{
      'text' : "로그아웃",
       to : '/login'
    },]
  })

}
</script>

<style scoped>

</style>