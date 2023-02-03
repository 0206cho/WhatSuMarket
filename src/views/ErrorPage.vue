<template>
    <v-container style="width: 100%;" fluid fill-height class="pb-12">
        <v-row style="display: flex; justify-content: center;" class="pb-8">
            <v-col cols="12" style="background-color: #D2E9DC; height: 600px;" class="pb-12 mb-12">
                <v-row justify="center" align="center" style="height: 100%;">
                    <v-col cols="2"></v-col>
                    <v-col cols="4">
                        <v-card flat style="background-color: #D2E9DC;">
                            <v-card-text  style="font-family: 'KOTRA_BOLD'; color:#008037; font-size: 35px;  height: 100%;">
                            
                                <p class="py-12">잘못 왔어유~</p>
                                <p class="pb-12">검색 내용이나 URL 확인하슈</p>

                                <v-btn to="window.history.go（-1）" style="border-radius: 30px;" width="50%" elevation="2" type="submit" color="#008037" text-capitalize depressed block dark>
                                    돌아가기
                                </v-btn>
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
        </v-row>
    </v-container>
</template>
<script>
export default{
    name : "ErrorPage"
}
</script>