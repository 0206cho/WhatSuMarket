<template>
  <!-- 템플릿안에 컨테이너가 있어야함 -->

  <v-container fluid fill-height>
    <v-row justify="center" align="cener">
      <v-col cols="6">
        <v-card>
          <v-card-title>
            <v-tabs>
                <v-tab>신청내역</v-tab>
                <v-tab>구매내역</v-tab>
              </v-tabs>
          </v-card-title>
          <v-simple-table>
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
                <tr
                  v-for="item in desserts"
                  :key="item.name"
                >
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "History",

  data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
        ],
      }
    },

  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeDestroyed() {
    console.log("beforeDestroyed");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style></style>
