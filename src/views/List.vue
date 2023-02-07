<template>
  <v-container style="height=100%; width: 100%;" class="px-16">
    <h1 class="py-12"
        style="display: flex; justify-content: center; font-weight:bold; color:#008037; font-family:'KOTRA_BOLD';">사던지
      말던지</h1> <br>
    <v-data-iterator :items="products" :items-per-page="24" hide-default-footer>
      <template v-slot:default="props">
        <v-row>
          <v-col cols="4" v-for="(product, index) in props.items" :key="index" class="mb-3">
            <v-hover v-slot="{ hover }">
              <v-card @click="detail" :elevation="hover ? 16 : 2" class="mx-auto rounded-lg" width="300" height="320" max-height="320" style="border-radius:25px; border: 1px solid #008037">
                <v-img height="200" :src="product.img"></v-img>

                <v-card-title class="pb-1">{{ product.title }}</v-card-title>

                <v-card-text class="pb-1">
                  <div class="black--text" style="font-weight: bold;">
                    {{product.price.toLocaleString()}}원
                  </div>

                  <div class="pt-3" style="color:#008037">관심 {{ product.favorite }} &nbsp;| &nbsp; 채팅 {{ product.chat }}</div>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import sample from '../utils/samplePrdouct.json'

export default {
  name: "List",
  data: () => ({
    itemPerPage: 6,
    products: []
  }),
  methods: {
    detail: function () {
      this.$router.push('/detail');
    }
  },

  created() {
    this.products = sample.map(s => ({
      title: s.title,
      price: s.price,
      chat: s.chat,
      favorite: s.like,
      img: s.images[0]['url']
    }))
  }
}
</script>

<style scoped>

</style>