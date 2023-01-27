<!--상세페이지-->
<template>
    <v-container style="height=100%; width: 100%; padding-left: 500px; padding-right: 500px;" class="pt-10">
        <!--이미지 캐러셀-->
        <div class="pb-4">
            <v-carousel v-model="model">
                <v-carousel-item v-for="(color, i) in colors" :key="color">
                    <v-sheet :color="color" height="100%" tile>
                        <v-row class="fill-height" align="center" justify="center">
                            <div class="text-h2">
                                Slide {{ i + 1 }}
                            </div>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </div>
    
        <!--타이틀-->
        <v-card flat class="mx-auto rounded-lg" width="100%" height="100%" style="border:none">
            <v-card-title class="pb-1" style="font-weight: bold;">소주</v-card-title>
            <v-card-text class="pb-6" > 
                <div class="black--text pb-4" style="font-weight: bold;">10,000원</div><hr>
                <div class="black--text pt-4" style="font-weight: bold; line-height: 35px;">10년 묵은 소주임다<br>상해서 배탈나도 책임 안져유~</div>
                <div class="pt-6 pb-4">관심 88 &nbsp;| &nbsp; 채팅 172</div> <hr>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
            model: 0,
        }
    },
}
</script>
