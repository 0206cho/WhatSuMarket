<template>
    <v-container>
        <!--템플릿 안에 무조건 감싸주는 루트 태그가 있어야 함-->
    
        Vue 재미있는듯,,희희 <br> 반갑습니다 {{ name }}님
    
        <!--data의 name 출력-->
        <v-col cols="12" sm="6">
            <v-text-field v-model="name" label="name 입력" outlined clearable></v-text-field>
        </v-col>
    
        <!--i = 변수 forr-each문-->
        <div v-for="i in age">
            {{i}}
            <!--age를 하나씩 뽑아서 i에 저장하고 출력-->
        </div>
    
        <!--boolean 확인-->
        <v-checkbox label="후엥"></v-checkbox> 

        <v-checkbox :label="'후엥 ' + show" v-model="show">
        </v-checkbox>
        
        <!--if문-->
        <div v-if="show"> <!--show가 true일 때만 메시지 출력 -> 체크박스 체크하면 true-->
            {{ message }}
        </div>

        <!-- <div v-else-if="show">  else로 해도 됨
            우아앙ㅇ
        </div> -->
        
        <div v-else> <!--show가 flase일 때-->
            우아앙ㅇ
        </div>

        <!--삼행연산으로 show가 true이면 후엥으로 보여주고 false이면 호엥을 보여줌-->
        <v-checkbox :label="show ? '후엥' : '호엥'" v-model="show">
        </v-checkbox>

        <!--바인딩 작업-->
        <v-card  class="mx-auto rounded-lg" width="300" height="320">
            <v-img height="200" :src="product.img"> <!--이미지 넣을 때는 체크박스의 :label처럼 :src로-->
            </v-img>
            <v-card-title class="pb-1">
                {{product.title}}
            </v-card-title>
            <v-card-text class="pb-1">
              <div class="black--text" style="font-weight: bold;">
                  {{ product.price }}원
              </div>

              <div class="pt-3">관심 {{ product.like }} &nbsp;| &nbsp; 채팅{{ product.chat }} </div>
          </v-card-text>
          </v-card>

        <!--메소드-->
        <v-btn @click="hello()"> <!--@click="메소드명()" : html의 onclick과 유사-->
            메소드 호출 버튼!
        </v-btn>
    
    </v-container>
</template>
<script>
export default {
    name: "Test", // name : 파일명

    data: () => ({
        name: 'minisol',
        age: [23, 20, 28], // 배열
        show: false,
        message: "체리콕 먹고 시퍼",

        product : { // product 객체
            title: "아이폰14pro",
            price: 20000000,
            chat : 15,
            like : 83,
            img : 'https://picsum.photos/200/300'
        } 
    }),

    // 보편적인 메서드 위치 -> data 밑. 메서드는 data에 안들어감 ㅜ
    methods:{
        // 메서드 생성
        hello: function(){
            console.log('Hello~');
            this.name = "snoppy"; // data의 name변경
            this.buy(); // hello안에서 buy() 호출
        },
        buy: function(){
            console.log('buy~');
        }

    },

    // 생명주기 확인
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() { // html 뿌리기 전
        console.log('beforeMount');
    },
    mounted() { // html 뿌리고 나서 
        console.log('mounted');
    },
    beforeDestroy() {
        console.log('beforeDestroy')
    },
    destroyed() {
        console.log('destroyed');
    }
}
</script>