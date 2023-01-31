<template>
  <!-- <v-app-bar absolute app light style="background-color: #008037;">
    <v-toolbar-title>
      <v-img :src="require('../../images/WhatSuLogo2.png')" class="ms-8"  style="width: 100px;"></v-img>
    </v-toolbar-title>
  </v-app-bar> -->
  <v-app-bar absolute app light style="background-color: white;">
    <v-toolbar-title>
      <v-img :src="require('../../images/WhatSuLogo.png')" class="ms-12" style="width: 110px;" @click="main"></v-img>
    </v-toolbar-title>
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
  }

}
</script>

<style scoped>

</style>