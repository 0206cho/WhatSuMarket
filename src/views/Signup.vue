<template>
    <!-- 템플릿안에 컨테이너가 있어야함 -->
    <v-container fluid  fill-height>
        <v-row justify="center">
            <v-col
              cols="10"
              sm="8"
              md="6"
              lg="4"
            > 회원가입
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
                    ref="password"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.range]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="비밀번호"
                    
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>

                  <v-text-field
                    ref="password"
                    v-model="password2"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.range, rules.check]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="비밀번호 재확인"
                    
                    counter
                    @click:append="show1 = !show1"
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
                    <v-tooltip
                      v-if="formHasErrors"
                      left
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          icon
                          class="my-0"
                          v-bind="attrs"
                          @click="resetForm"
                          v-on="on"
                        >
                          <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                      </template>
                      <span>지우기</span>
                    </v-tooltip>
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
    name: "Signup",
    data () {
      return {
        show1: false,
       
        password: '',
        password2: '',
        rules: {
          required: value => !!value || '비밀번호를 입력하세요',
          range: v => /^[a-zA-Z0-9]{8,12}$/.test(v) || '8자리 이상 12자리까지 입력하세요',
          check: v => v==this.password || '비밀번호가 일치하지 않습니다'
        },
      errorMessages: '',
      
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