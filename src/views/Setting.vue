<template>
    <v-container style="max-width:1300px" fill-height>
        <v-layout align-center row wrap>
            <v-row>
                <v-col cols="4"></v-col>
                <v-col cols="4">
                    <v-card elevation="12" width="350" height="100%"
                        style="border-radius:25px; border: 1px solid #008037">
                        <v-img :src="require('../../images/WhatSuWhite.png')" max-height="110" max-width="110"
                            style="margin: 1em auto;"></v-img>
                            <div style="text-align: center; color:#008037; font-size:xx-large; font-family: 'KOTRA_BOLD';" class="mt-0">설&nbsp;정</div>
                        <v-card-text class="pt-6 pb-0 mb-0">
                            <v-text-field label="ID" prepend-inner-icon="mdi-account" color="#008037">
                            </v-text-field>
                            <v-text-field label="비밀번호" type="password" prepend-inner-icon="mdi-lock"
                                color="#008037">
                            </v-text-field>
                            <v-text-field label="비밀번호 재확인" type="password" prepend-inner-icon="mdi-lock"
                                color="#008037">
                            </v-text-field>
                            <v-text-field label="전화번호" prepend-inner-icon="fa-solid fa-mobile-screen-button" color="#008037">
                            </v-text-field>
                            <v-text-field label="e-mail" prepend-inner-icon="fa-reqular fa-envelope" color="#008037">
                            </v-text-field>
                            <v-text-field label="주소" prepend-inner-icon="fa-sharp fa-solid fa-location-dot" color="#008037">
                            </v-text-field>
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
    name: "Setting",
}
</script>