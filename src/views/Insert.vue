<template>
  <!-- 템플릿안에 컨테이너가 있어야함 -->

  <v-container style="max-width:1300px"  fill-height>
    <v-layout align-center row wrap>
      <v-row justify="center" align="cener">
          <v-col cols="4">
            <v-card elevation="12" width="350" height="100%"
            style="border-radius:25px; border: 1px solid #008037">
            <v-img :src="require('../../images/WhatSuWhite.png')" max-height="110" max-width="110"
                style="margin: 1em auto;"></v-img>
                <div style="text-align: center; color:#008037; font-size:xx-large; font-family: 'KOTRA_BOLD';" class="mt-0">상품등록</div>
                  <v-card-text>
                      <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp" prepend-icon="mdi-camera" label="사진등록"></v-file-input>
                      <v-text-field label="상품명" single-line></v-text-field>
                      <v-text-field label="가격" single-line></v-text-field>
                      <v-textarea name="input-7-1" label="상세설명" value="" hint=""></v-textarea>
                  </v-card-text>
                  <v-card-actions class="mx-2 mb-5">
                    <v-spacer></v-spacer>
                        <v-btn dark color="#008037" style="border-radius: 30px;" width="50%">확인</v-btn>
                        <v-btn dark color="#6B8A78" style="border-radius: 30px;" width="50%">취소</v-btn>
                        <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
          </v-col>
      </v-row>
    </v-layout>   
  </v-container>
</template>
<script>
export default {
  name: "Insert",


  beforeCreate() {
      console.log('beforeCreate')
  },
  created() {
      console.log('created')
  },
  beforeMount() {
      console.log('beforeMount')
  },
  mounted() {
      console.log('mounted')
  },
  beforeDestroyed() {
      console.log('beforeDestroyed')
  },
  destroyed() {
      console.log('destroyed')
  },
}
</script>
     
<style>

</style>