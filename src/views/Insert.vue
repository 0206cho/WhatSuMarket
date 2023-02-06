<template>
  <!-- 템플릿안에 컨테이너가 있어야함 -->

  <v-container fluid fill-height style="height: 100%;">
    <v-row justify="center" align="center">
      <v-col cols="3" md="3" xs="12" sm="12">
        <v-card elevation="12" height="100%"
                style="border-radius:25px; border: 1px solid #008037">
          <v-img :src="require('../../images/WhatSuWhite.png')" max-height="110" max-width="110"
                 style="margin: 1em auto;"></v-img>
          <div style="text-align: center; color:#008037; font-size:xx-large; font-family: 'KOTRA_BOLD';" class="mt-0">판매 신청</div>
          <v-card-text>
            <v-file-input v-model="files" chips multiple accept="image/png, image/jpeg, image/bmp" color="#008037" prepend-icon="mdi-camera" label="사진등록"></v-file-input>
            <v-text-field v-model="sell_product.title" color="#008037" label="상품명" single-line></v-text-field>
            <v-text-field v-model="sell_product.price" type="number" color="#008037" label="가격" single-line></v-text-field>
            <v-textarea  v-model="sell_product.description" color="#008037" name="input-7-1" label="상세설명" value="" hint=""></v-textarea>
          </v-card-text>
          <v-card-actions class="mx-2 mb-5">
            <v-spacer></v-spacer>
            <v-btn dark color="#008037" style="border-radius: 30px;" width="50%" @click="onClickSend">확인</v-btn>
            <v-btn dark color="#6B8A78" style="border-radius: 30px;" width="50%" @click="onClickCancel">취소</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Insert",
  data: () => ({
    sell_product: {
      title: '',
      description: '',
      price: 0
    },
    files: null
  }),
  methods: {
    onClickSend: function () {
      // const formData = new FormData()
      // for (let i = 0; i < this.files.length; i++) {
      //   formData.append('files', this.files[i])
      // }
      // formData.append('request', new Blob([JSON.stringify(this.sell_product)]))
      console.dir(this.sell_product)
    },
    onClickCancel: function () {
      this.sell_product = {
        title: '',
        description: '',
        price: 0
      }
      this.files = null
    }
  }
}
</script>
     
<style>

</style>