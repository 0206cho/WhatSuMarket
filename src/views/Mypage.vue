<template>
    <v-container>
        <v-row justify="center" align="center">
            <!--여기서 작업-->
            <v-col cols="3" style="line-height: 200%;">
                <div @click="setting">▶&nbsp;&nbsp;설정</div>
                <v-divider></v-divider>
                <div @click="history">▶&nbsp;&nbsp;내역</div>
                <v-divider></v-divider>
                <div @click="point">▶&nbsp;&nbsp;충전</div>
                <v-divider></v-divider>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default{
        name : "Mypage",
        methods:{
            setting :function() {
                this.$router.push('/mypage/setting');
            },
            point :function() {
                this.$router.push('/mypage/point');
            },
            history :function() {
                this.$router.push('/mypage/history');
            }
        }
    }
</script>