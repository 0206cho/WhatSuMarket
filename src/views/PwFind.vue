<template>
    <!-- 템플릿안에 컨테이너가 있어야함 -->
    <v-container fluid  fill-height>
        <v-row justify="center">
            <v-col
              cols="10"
              sm="8"
              md="6"
              lg="4"
            > 비밀번호찾기
              <v-card ref="form">
                <v-card-text>
                  <v-text-field
                    ref="name"
                    v-model="name"
                    :rules="[() => !!name || '아이디를 입력하세요']"
                    :error-messages="errorMessages"
                    label="아이디"
                    placeholder="ex)WhatSu"
                    required
                  ></v-text-field>

                  <v-text-field
                    ref="phone"
                    v-model="phone"
                    :rules="[() => !!phone || '전화번호를 입력하세요']"
                    :error-messages="errorMessages"
                    label="전화번호"
                    placeholder="ex)010-1234-5678"
                    required
                  ></v-text-field>

                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                  <v-btn text>
                    취소
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-slide-x-reverse-transition>
                    
                  </v-slide-x-reverse-transition>
                  <v-btn
                    color="primary"
                    text
                    @click="submit"
                  >
                    확인
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
    </v-container>

</template>
<script>
export default {
    name: "PwFind",
    data () {
      return {
        show1: false,
      name: null,
      phone: null,
    
      formHasErrors: false,
      }
    },
    computed: {
      form () {
        return {
          name: this.name,
          phone: this.phone,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      }
     
    },

    methods: {

      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
    },


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
    beforeDestroyed() {
        console.log('beforeDestroyed')
    },
    destroyed() {
        console.log('destroyed')
    },
    
}
</script>
       
<style>

</style>