<template>
  <v-container style="height: 100%;" class="py-16">
    <v-row justify="center" align="center">
      <v-col cols="12" class="py-12">
        <p class="display-1 text-center" style="font-weight:bold; color:#008037; font-family:'KOTRA_BOLD';">
          판매 신청 목록
        </p>
      </v-col>
      <v-col cols="8">
        <v-card flat>
          <v-data-table :headers="headers" :items="products" height="530" class="row_pointer">
            <template v-slot:item.price="{ item }">
              <td class="font-weight-light">{{item.price.toLocaleString()}}</td>
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip dark :color="getColor(item.status)" class="font-weight-light">
                {{ item.status }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const sell_product_schema = {
  id: -1,
  title: '',
  description: '',
  price: -1,
  reason: '',
  status: '',
  user: {},
  images: [{
    'url': '',
    'created_at': '',
    'updated_at': ''
  }]
}

export default {
  name: "SellProducts",
  data: () => ({
    products: [
      {'id': 1, 'title': '아이폰 14', 'price': 1000, 'seller': 'lee', 'status': 'PENDING', 'created_at': '2023-01-08'},
    ],
    headers: [
      {text: '번호', value: 'id', cellClass: 'font-weight-light'},
      {text: '물품 이름', value: 'title', cellClass: 'font-weight-light'},
      {text: '물품 가격', value: 'price', cellClass: 'font-weight-light'},
      {text: '판매자', value: 'seller', cellClass: 'font-weight-light'},
      {text: '상태', value: 'status', cellClass: 'font-weight-light'},
      {text: '등록일', value: 'created_at', cellClass: 'font-weight-light'}
    ]
  }),
  methods: {
    getColor: function (status) {
      if (status === 'PENDING') return 'green'
      else if (status === 'REJECT') return 'red'
      return 'primary'
    }
  }
}
</script>

<style lang="css" scoped>
.row_pointer:hover {
  cursor: pointer;
}
</style>