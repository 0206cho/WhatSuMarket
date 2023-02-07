<template>
  <v-container style="max-width:1300px" fill-height>


    <v-row justify="center" align="center">


      <v-col cols="4">


        <v-card align="center" elevation="12" style="border-radius:25px; border: 1px solid #008037">


          <v-img :src="require('../../images/WhatSuWhite.png')" max-height="100" max-width="95"
                 style="margin: 1em auto; bottom: 2px;"></v-img>


          <div
              style="text-align: center; color:#008037; position: relative; bottom: 15px; font-size:xx-large; font-family: 'KOTRA_BOLD';">


            결제
          </div>


          <v-card height="140" style="border-radius:1em; border: 1px solid #008037" class="mx-2 mb-10">


            <v-app-bar height="40" color="#d2e9dc">


              <v-icon style="color: #008037;">mdi-account-circle</v-icon>


              <v-toolbar-title style="color: #008037;" class=" font-weight-bold subtitle-1 mt-1 ml-0 pl-0">&nbsp;주문 상품
                정보


              </v-toolbar-title>


            </v-app-bar>


            <v-img :src="require('../../images/iphone.png')" max-height="150" max-width="100"
                   style="float:left; left: 1em; top: 11px;"></v-img>


            <p style="position: relative; right:25px; top:13px;" class="subtitle-1 font-weight-bold"> 상품 : 아이폰 14 pro
              미개봉</p>


            <p style="position: relative; right:69px; bottom:2px;" class="caption font-weight-bold"> 가격 : 2,000,000원


            </p>


            <p style="position: relative; right:3em; bottom:1.3em;" class="caption font-weight-bold">


              수량 : 총 1개</p>


          </v-card>


          <v-card height="390" class="mx-2 mb-10" style="border-radius:1em; border: 1px solid #008037;">


            <v-app-bar height="40" color="#d2e9dc">


              <v-icon style="color: #008037;">mdi-magnify</v-icon>


              <v-toolbar-title prepend-inner-icon="fa-light fa-coin" style="color: #008037;"
                               class=" font-weight-bold subtitle-1 mt-1 ml-0 pl-0">&nbsp;주문/배송 정보


              </v-toolbar-title>


            </v-app-bar>


            <p></p>


            <v-form>


              <p style="position: relative; right:12em" class=" font-weight-bold caption mt-1 ml-4 pl-0">1. 주문자 정보</p>


              <v-card-text>


                <v-text-field v-model="pay.buyer.name" style=" max-width: 22.55em; bottom:3ex" class="shrink mx-4" dense
                              label="이름" color="#008037" outlined clearable></v-text-field>


                <v-text-field v-model="pay.buyer.phone" style=" max-width: 22.55em; bottom:2.5em" class="shrink mx-4"
                              dense label="전화번호" color="#008037" outlined clearable></v-text-field>


                <p style="position: relative; right:11em; bottom:4.5em" class="font-weight-bold caption">2. 배송지 정보</p>


                <v-text-field v-model="pay.addressInfo.address" style="max-width: 22.55em; bottom:4em"
                              class="shrink mx-4" dense label="주소" color="#008037" outlined clearable></v-text-field>


                <v-text-field v-model="pay.addressInfo.addressdetail" style="max-width: 22.55em; bottom:5em"
                              class="shrink mx-4" dense label="상세주소" color="#008037" outlined clearable></v-text-field>


              </v-card-text>


              <!-- <v-text-field style="max-width: 22.55em; bottom:3.2cm" class="shrink mx-4" dense



          label="request" color="#008037" outlined clearable></v-text-field> -->


              <v-card-text class="shrink mx-4" dense style="position: relative; bottom: 9em; max-width: 25.55em;">


                <v-select v-model="address_request" outlined color="#008037" :items="address_requests">


                </v-select>


              </v-card-text>


            </v-form>


          </v-card>


          <v-card height="110" class="mx-2 mb-5" style="border-radius:1em; border: 1px solid #008037;">


            <v-app-bar height="40" color="#d2e9dc">


              <v-icon style="color: #008037;">mdi-star</v-icon>


              <v-toolbar-title prepend-inner-icon="fa-light fa-coin" style="color: #008037;"
                               class="font-weight-bold subtitle-1 mt-1 ml-0 pl-0">&nbsp;포인트
              </v-toolbar-title>


            </v-app-bar>


            <p></p>


            <p style="position: relative; right: 12.5em;" class="font-weight-bold caption">


            </p>


            <v-text-field v-model="pay.point.insertpoint" style="max-width: 18em; bottom: 5px; right: 2em"
                          class="shrink mx-4" dense label="냥" color="#008037" outlined clearable></v-text-field>


            <v-card-actions>


              <v-btn style=" left: 22em; bottom:5.44em; border-radius:25px; border: 1px solid #008037;">


                <v-icon color="#008037">mdi-checkbox-marked-circle</v-icon>


              </v-btn>


            </v-card-actions>


          </v-card>


          <v-card-actions>


            <v-btn dark style="border-radius: 30px; " elevation="2" color="#008037" block @click="onclickpay">


              결제하기


            </v-btn>


          </v-card-actions>


        </v-card>


      </v-col>


    </v-row>


  </v-container>
</template>
<script>

export default {
  name: "Pay",
  data: () => ({
    address_request: null,
    address_requests: ['부재 시 경비실에 맡겨주세요.',
      '부재 시 경비실에 맡겨주세요.',
      '부재 시 택배함에 맡겨주세요.',
      '부재 시 집 앞에 맡겨주세요.',
      '배송 전 연락 바랍니다.',
      '파손의 위험이 있는 상품입니다. 배송 시 주의해 주세요.',
    ],
    pay: {
      buyer: {
        name: '',
        phone: ''
      },
      addressInfo: {
        address: '',
        addressdetail: ''
      },
      point: {
        insertpoint: ''
      }
    }
  }),
  methods: {
    onclickpay: function () {
      var nameisfill = false
      if (this.pay.buyer.name !== "") {
        nameisfill = true
      }
      var phoneisfill = false
      if (this.pay.buyer.phone !== "") {
        phoneisfill = true
      }
      var addressisfill = false
      if (this.pay.addressInfo.address !== "") {
        addressisfill = true
      }
      var addressdetailisfill = false
      if (this.pay.addressInfo.addressdetail !== "") {
        addressdetailisfill = true
      }
      var address_requestisfill = false
      if (this.address_request !== null) {
        address_requestisfill = true
      }

      console.dir(this.pay)
      console.log(this.address_request)
      console.log(nameisfill && phoneisfill)
      console.log(addressisfill && addressdetailisfill && address_requestisfill)
    }
  }
}
</script>