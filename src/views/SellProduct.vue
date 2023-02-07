<template>
<v-container style="height: 100%;" class="py-16">
  <v-row align="center" justify="center">
    <v-col cols="12" class="py-12">
      <p class="display-1 text-center" style="font-weight:bold; color:#008037; font-family:'KOTRA_BOLD';">
        판매 신청 목록
      </p>
    </v-col>
  </v-row>
</v-container>
</template>

<script>

(function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.")}var ch=function(){ch.c(arguments)};ch.q=[];ch.c=function(args){ch.q.push(args)};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x)}}if(document.readyState==="complete"){l()}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l)}})();

  ChannelIO('boot', {
    "pluginKey": "a7995c55-0012-40ed-a6d7-f2e3945d6a90"
  });

export default {
  name: "SellProduct"
}
</script>

<style scoped>

</style>