<template>
  <!-- 템플릿안에 컨테이너가 있어야함 -->
  <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-col cols="6">
        <v-card elevation="12" style="border-radius:25px; border: 1px solid #008037">
          <v-img :src="require('../../images/WhatSuWhite.png')" max-height="170" max-width="170" style="margin: 1em auto;" class="mb-0"></v-img>
          <div style="text-align: center; color:#008037; font-size:xxx-large; font-family:'KOTRA_BOLD';" class="mt-0">내역</div>
          <v-card flat class="ma-6 mt-0">
            <v-tabs v-model="tab" color="#008037">
              <v-tab v-for="item in tab_items" :key="item">
                {{ table[item].title }}
              </v-tab>
            </v-tabs>
            <v-card-text justify="center" align="center">
              <v-tabs-items v-model="tab" class="text-center" >
                <v-tab-item v-for="item in tab_items" :key="item">
                  <v-row v-if="item === 'charge'" justify="center" align="center">
                    <v-col cols="6"> <!--item이 charge인 경우-->
                      <v-card flat class="px-6" style="border-radius:25px; border: 1px solid #008037;">
                        <v-card-actions>
                          <span class="ml-13" style="align-items: center; font-weight: bold; font-size:medium">10,980냥</span>
                          <v-spacer></v-spacer>
                          <v-btn dark color="#008037" style="border-radius: 30px; float: right;">충전</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-data-table :headers="table[item].headers" :items="table[item].values" class="text-center" 
                  :footer-props="{
                    'items-per-page-text': '페이지 당 보일 개수',
                  }">
                    <template v-if="item === 'apply'" v-slot:item.status="{ item }">
                      <v-chip dark :color="getColor(item.status)" class="font-weight-black">
                        {{ item.status }}
                      </v-chip>
                    </template>
                  </v-data-table>
                </v-tab-item>
              </v-tabs-items>
            </v-card-text>
          </v-card>
        
      </v-card>
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
  name: "History",

  data() {
    return {
      table: {
        'apply': {
          'title': '신청내역',
          'headers': [{
            text: '신청내역',
            value: 'log'
          }, {
            text: '가격',
            value: 'price'
          }, {
            text: '현황',
            value: 'status'
          }, {
            text: '신청날짜',
            value: 'date'
          }],
          'values': [
            { log: 'sample', price: 900, date: '2021-33-21', status: 'PENDING'},
            { log: 'sample', price: 900, date: '2021-33-21', status: 'ACCEPT'},
            { log: 'sample', price: 900, date: '2021-33-21', status: 'REJECT'},
            { log: 'sample', price: 900, date: '2021-33-21', status: 'REJECT'},
            { log: 'sample', price: 900, date: '2021-33-21', status: 'ACCEPT'},
            { log: 'sample', price: 900, date: '2021-33-21', status: 'PENDING' },
          ]
        },
        'payment': {
          'title': '결제내역',
          'headers': [{
            text: '결제내역',
            value: 'log'
          }, {
            text: '결제날짜',
            value: 'date'
          }],
          'values': [
            { log: '오래된 소주', date: '2021-33-21' },
            { log: '아이폰 14 PRO', date: '2021-33-21' },
            { log: '오래된 아이폰', date: '2021-33-21' },
            { log: '아이폰 소주', date: '2021-33-21' },
            { log: '오래된 14 PRO', date: '2021-33-21' },
          ]
        },
        'charge': {
          'title': '충전내역',
          'headers': [{
            text: '결제내역',
            value: 'log'
          }, {
            text: '결제날짜',
            value: 'date'
          }],
          'values': [
            { log: '오래전 충전', date: '2021-33-21' },
            { log: '14냥', date: '2021-33-21' },
            { log: '2020ㅋㅋ', date: '2021-33-21' },
            { log: '아이폰 소주', date: '2021-33-21' },
            { log: '오래된 14 PRO', date: '2021-33-21' },
          ]
        }
      },
      tab_items: ['apply', 'payment', 'charge'],
      tab: null,
    }
  },
  methods: {
    getColor: function (status) {
      if (status === 'PENDING') return 'green'
      else if (status === 'REJECT') return 'red'
      return 'primary'
    }
  }
};
</script>

<style>

</style>