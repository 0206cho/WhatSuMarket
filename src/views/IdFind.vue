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
                            <div style="text-align: center; color:#008037; font-size:xx-large; font-family: 'KOTRA_BOLD';" class="mt-0">아이디&nbsp;찾기</div>
                        <v-card-text class="pt-6 pb-0 mb-0">
                        
                            <v-text-field label="전화번호" prepend-inner-icon="fa-solid fa-mobile-screen-button" color="#008037">
                               
                            </v-text-field>
                            <v-card-actions class="mx-2 mb-5">
                                <v-spacer></v-spacer>
                                    <v-btn style="border-radius:25px; border: 1px solid #008037" width="100%">인증하기</v-btn>
                                     <v-spacer></v-spacer>
                            </v-card-actions>
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

(function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.")}var ch=function(){ch.c(arguments)};ch.q=[];ch.c=function(args){ch.q.push(args)};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x)}}if(document.readyState==="complete"){l()}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l)}})();

  ChannelIO('boot', {
    "pluginKey": "a7995c55-0012-40ed-a6d7-f2e3945d6a90"
  });

export default {
    name: "IdFind",
}
</script>