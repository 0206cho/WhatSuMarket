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

(function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.")}var ch=function(){ch.c(arguments)};ch.q=[];ch.c=function(args){ch.q.push(args)};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x)}}if(document.readyState==="complete"){l()}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l)}})();

  ChannelIO('boot', {
    "pluginKey": "a7995c55-0012-40ed-a6d7-f2e3945d6a90"
  });

export default{
    name : "ErrorPage"
}
</script>