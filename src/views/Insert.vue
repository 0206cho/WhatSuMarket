<template>
    <!-- 템플릿안에 컨테이너가 있어야함 -->

    <v-container fluid  fill-height>
        <v-row justify="center" align="cener">
            <v-col cols="6">
                <v-card>
                    <v-card-title>
                        상품등록
                    </v-card-title>
                    <v-card-text>
                        <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp" prepend-icon="mdi-camera" label="사진등록"></v-file-input>
                        <v-text-field label="상품명" single-line></v-text-field>
                        <v-text-field label="가격" single-line></v-text-field>
                        <v-textarea name="input-7-1" label="상세설명" value="" hint=""></v-textarea>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn>등록</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    
    </v-container>
</template>
<script>
export default {
    name: "product",


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