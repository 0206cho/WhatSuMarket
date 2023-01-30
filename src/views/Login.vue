<template>
    <v-container style="max-width:1300px" fill-height>
    
        <v-layout align-center row wrap>
    
            <v-row>
    
                <v-col cols="4"></v-col>
    
                <v-col cols="4">
                    <v-card elevation="12" width="350" height="450" style="border-radius:25px; border: 1px solid #008037">
                        <v-img :src="require('../../images/WhatSuWhite.png')" max-height="85" max-width="190" style="margin: 1em auto;"></v-img>
                        <!-- <h1 style="text-align: center;" class="pt-6">왓슈</h1> -->
                        <v-card-text class="pt-6 pb-0 mb-0">
                            <v-text-field  label="ID" prepend-inner-icon="mdi-account" color="#008037">
    
                            </v-text-field>
    
                            <v-text-field label="PASSWORD" type="password" prepend-inner-icon="mdi-lock" color="#008037">
    
                            </v-text-field>
                        </v-card-text>
                        
                        <v-card-actions class="py-0 mt-0">
                            <v-spacer></v-spacer>
                            <v-btn class="font-weight-bold body-2" plain>아이디 찾기</v-btn>
                            <v-btn class="font-weight-bold body-2" plain>비밀번호 찾기</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>

                        <v-card-actions>
                            <v-btn style="border-radius: 30px;" elevation="2" type="submit" color="#008037" text-capitalize depressed block dark>
                                login
                            </v-btn>
                        </v-card-actions>
                        <v-card-actions>
                            <v-btn style="border-radius: 30px;" elevation="2" type="submit" color="#008037" text-capitalize depressed block dark>
                                sign up
                            </v-btn>
                        </v-card-actions>
                            
    
                        
    
                    </v-card>
                </v-col>
    
            </v-row>
    
        </v-layout>
    
    </v-container>
</template>
<script>
export default {
    name: "login",
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
    beforeDestroy() {
        console.log('beforeDestroy')
    },
    destroyed() {
        console.log('destroyed')
    }
}
</script>