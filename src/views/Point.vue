<template>
    <v-container style="height=100%; width: 100%;" class="px-16">
        <div style="display: flex; justify-content: center;" class="pt-10">
            <v-card flat class="px-6 pt-5 pb-5" width="350" style="border-radius:25px; border: 1px solid #008037">
                <div class="mx-10 pb-4">
                    <v-spacer></v-spacer>
                    <span class="pt-2" style="float:left; align-items: center;" width="200%">10,980냥</span>
                    <v-btn dark color="#008037" class="pb-1" style="border-radius: 30px; float: right;" width="30%"
                        height="40px">충전</v-btn>
                    <v-spacer></v-spacer>
                </div>
            </v-card>
        </div>
        <br>
        <div style="display: flex; justify-content: center;">
            <v-simple-table style="width:800px; align-items: center;" class="text-center">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-center">
                                금액
                            </th>
                            <th class="text-center">
                                날짜
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in desserts" :key="item.point">
                            <td>{{ item.point }}</td>
                            <td>{{ item.date }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            desserts: [
                {
                    point: '+200냥',
                    date: '2023-01-30',
                },
                {
                    point: '-200냥',
                    date: '2023-01-30',
                },
                {
                    point: '+2000냥',
                    date: '2022-12-29',
                },
                {
                    point: '-500냥',
                    date: '2022-12-28',
                },
                {
                    point: '-1200냥',
                    date: '2022-12-27',
                },
                {
                    point: '+200냥',
                    date: '2022-01-30',
                },
                {
                    point: '-200냥',
                    date: '2022-01-30',
                },
                {
                    point: '+2000냥',
                    date: '2021-12-29',
                },
                {
                    point: '-500냥',
                    date: '2021-12-28',
                },
                {
                    point: '-1200냥',
                    date: '2021-12-27',
                },
            ],
        }
    },
    name: "login",
}
</script>