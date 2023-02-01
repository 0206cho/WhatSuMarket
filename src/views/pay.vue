<template>
    <v-container style="max-width:1300px" fill-height>
        <div class="container-fluid">
            <v-layout align-center row wrap>
                <v-row>
                    <v-col cols="4"></v-col>
                    <v-col cols="4">
                        <v-img :src="require('../../images/WhatSuWhite.png')" max-height="80" max-width="85"
                            style="margin: 1em auto; position: relative; top: 1em;"></v-img>
                        <div style="text-align: center; color:#008037; position: relative; top: 1px; font-size:xx-large; font-family: 'KOTRA_BOLD';">결제</div>

                        <v-card width="400" height="140" style="border-radius:1em; border: 1px solid #008037">
                            <v-app-bar height="40" dark color="#008037">
                                <v-icon>mdi-account-circle</v-icon>
                                <v-toolbar-title class=" font-weight-bold subtitle-1 mt-1 ml-0 pl-0">&nbsp;주문 상품
                                    정보</v-toolbar-title>
                            </v-app-bar>
                            <v-img :src="require('../../images/iphone.png')" max-height="150" max-width="100"
                                style="float:left; position: relative; left: 1em; top: 11px;"></v-img>

                            <p style="position: relative; left:28px; top:1em;" class="subtitle-1 font-weight-bold"> 상품 :
                                아이폰
                                14 pro 미개봉</p>
                            <p style="position: relative; left:2.5em; bottom:2px;" class="caption font-weight-bold"> 가격
                                :
                                2,000,000원</p>
                            <p style="position: relative; left:10.765em; bottom:1.5em;" class="caption font-weight-bold">
                                수량 : 총 1개</p>


                        </v-card>
                    </v-col>
                    <v-col cols="4"></v-col>
                    <v-col cols="4"></v-col>
                    <v-col>



                        <v-card width="400" height="420" style="border-radius:1em; border: 1px solid #008037">
                            <v-app-bar height="40" dark color="#008037">
                                <v-icon>mdi-magnify</v-icon>

                                <v-toolbar-title prepend-inner-icon="fa-light fa-coin"
                                    class=" font-weight-bold subtitle-1 mt-1 ml-0 pl-0">&nbsp;주문/배송 정보</v-toolbar-title>
                            </v-app-bar>
                            <p></p>

                            <v-form>
                                <p style="position: relative; left: 2px; "
                                    class=" font-weight-bold caption mt-1 ml-4 pl-0">1. 주문자 정보</p>


                                <v-text-field style="max-width: 10.5em; bottom: 5px;" class="shrink mx-4" dense
                                    label="name" color="#008037" outlined clearable></v-text-field>

                                <v-text-field style="max-width: 10.5em; bottom: 4.39em; left: 12em;" class="shrink mx-4"
                                    dense label="number" color="#008037" outlined clearable></v-text-field>
                                <v-text-field style="max-width: 22.55em; bottom:5em" class="shrink mx-4" dense
                                    label="email" color="#008037" outlined clearable></v-text-field>
                                <p style="position: relative; left: 2px; bottom: 2.55cm;"
                                    class="font-weight-bold caption mt-1 ml-4 pl-0">2. 배송지 정보</p>
                                <v-text-field style="max-width: 22.55em; bottom:2.7cm" class="shrink mx-4" dense
                                    label="address" color="#008037" outlined clearable></v-text-field>
                                <v-text-field style="max-width: 22.55em; bottom:2.95cm" class="shrink mx-4" dense
                                    label="detail" color="#008037" outlined clearable></v-text-field>
                                <!-- <v-text-field style="max-width: 22.55em; bottom:3.2cm" class="shrink mx-4" dense
                                    label="request" color="#008037" outlined clearable></v-text-field> -->
                                <v-card-text class="shrink mx-4" dense style="position: relative; right: 18.25px; bottom: 3.6cm;">
                                    <v-select outlined color="#008037" :items="['부재 시 경비실에 맡겨주세요.',
                                    '부재 시 경비실에 맡겨주세요.',
                                    '부재 시 택배함에 맡겨주세요.',
                                    '부재 시 집 앞에 맡겨주세요.',
                                    '배송 전 연락 바랍니다.',
                                    '파손의 위험이 있는 상품입니다. 배송 시 주의해 주세요.',
                                    '직접 입력']"
                                    label="직접 입력">

                                    </v-select>
                                </v-card-text>
                            </v-form>
                        </v-card>
                    </v-col>
                    <v-col cols="4"></v-col>
                    <v-col cols="4"></v-col>
                    <v-col>
                        <v-card width="400" height="240" style="border-radius:1em; border: 1px solid #008037">

                            <v-app-bar height="40" dark color="#008037">
                                <v-icon>mdi-star</v-icon>

                                <v-toolbar-title prepend-inner-icon="fa-light fa-coin"
                                    class=" font-weight-bold subtitle-1 mt-1 ml-0 pl-0">&nbsp;캐쉬/포인트</v-toolbar-title>
                            </v-app-bar>

                            <p></p>
                            <p style="position: relative; left: 7px;" class=" font-weight-bold caption mt-1 ml-3 pl-0">
                                1. 캐쉬</p>
                            <v-text-field style="max-width: 17em; bottom: 5px;" class="shrink mx-4" dense label="cash"
                                color="#008037" outlined clearable></v-text-field>
                            <v-card-actions>
                                <v-btn color="#008037" dark style="left: 22em; bottom:5.5em">
                                    <v-icon>mdi-checkbox-marked-circle</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <p style="position: relative; left: 7px; bottom: 6.2em;"
                                class=" font-weight-bold caption mt-1 ml-3 pl-0">2. 포인트</p>
                            <v-text-field style="max-width: 17em; bottom: 5em;" class="shrink mx-4" dense label="point"
                                color="#008037" outlined clearable></v-text-field>
                            <v-card-actions>
                                <v-btn color="#008037" dark style="left: 22em; bottom:10.8em">
                                    <v-icon>mdi-checkbox-marked-circle</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="4"></v-col>
                    <v-col cols="4"></v-col>
                    <v-col>
                    </v-col>
                </v-row>
            </v-layout>
        </div>
    </v-container>

</template>
<script>
export default {
    name: "pay",
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
    beforeDestroy() {
        console.log('beforeDestroy')
    },
    destroyed() {
        console.log('destroyed')
    }
}
</script>