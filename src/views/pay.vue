<template>
    <v-container style="max-width:1300px" fill-height>
        <v-layout align-center row wrap>
            <v-row>
                <v-col cols="4"></v-col>
                <v-col cols="4">
                    <v-card elevation="12" width="500" height="450"
                        style="border-radius:25px; border: 1px solid #008037">
                        <v-img :src="require('../../images/WhatSuWhite.png')" max-height="85" max-width="190"
                            style="margin: 1em auto;"></v-img>
                        <v-card width="500" height="250"
                            style="border-radius:0px; border-top: 1px solid #008037; border-bottom: 1px solid #008037;">
                            <div>
                                <!-- <v-spacer></v-spacer><v-spacer>옆으로 밀기. -->
                                <v-img :src="require('../../images/iphone.png')" class="mt-3 ml-3" max-height="200"
                                    max-width="190" style="float:left;"></v-img>
                                <span style="font-size: 20px;" class="font-weight-bold body-3 pb-10 ml-7">아이폰 14pro
                                    판매~</span>
                                <!-- <v-spacer></v-spacer> -->
                            </div>
                        </v-card>
                        <v-card-actions>
                            <v-btn style="border-radius: 30px; margin: 9.5em" class="mt-4 py-18" width="120"
                                elevation="2" type="submit" color="#008037" dark>
                                결제하기
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-layout>
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