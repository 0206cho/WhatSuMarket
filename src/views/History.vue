<template>
  <!-- 템플릿안에 컨테이너가 있어야함 -->
  <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-col cols="6">
        <v-card>
          <v-card-title>
            <v-tabs color="#008037" v-model="tab">
              <v-tab v-for="title in titles" :key="title.title">
                {{title.title}}
              </v-tab>
            </v-tabs>
          </v-card-title>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="col in cols" :key="col.col_list">
              
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        {{col.col_list}}
                      </th>
                      <th class="text-left">
                        {{col.col_date}}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <!-- <td>{{ item.date }}</td>
                      <td>{{ item.tab }}</td> -->
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>

              <!-- <v-card-text>
                {{item.title}}<br/>
                Here, You can see Something!
              </v-card-text> -->
            </v-tab-item>
          </v-tabs-items>
          <!-- <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    신청내역
                  </th>
                  <th class="text-left">
                    신청날짜
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "History",

  data() {
    return {
      desserts: [
        {
          name: '오래된 소주',
          calories: "2023-01-31",
        },
        {
          name: '아이폰 14 PRO',
          calories: "2023-01-31",
        },
      ],
      
      tab : null,

      cols:[
          {
            col_list : '신청내역',
            col_date : '신청날짜'
          },
          {
            col_list : '결제내역',
            col_date : '결제날짜'
          },
          {
            col_list : '충전내역',
            col_date : '충전날짜'
          },
        ],
        titles:[
          {title:'신청내역'}, {title:'결제내역'}, {title:'충전내역'}
        ]
    }
  },

};
</script>

<style>

</style>
