<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="3" sm="3" xs="6" md="3" class="mt-15">
                <v-card flat class="px-6" style="border-radius:25px; border: 1px solid #008037;">
                        <v-card-actions class="px-10">
                        <span style="float:left; align-items: center;">10,980냥</span>
                        <v-spacer></v-spacer>
                        <v-btn dark color="#008037" style="border-radius: 30px; float: right;" width="30%">충전</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-row justify="center" align="center">
            <v-col cols="6">
            <v-simple-table style="align-items: center;" class="text-center">
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
                        <tr v-for="item, index in desserts" :key="index+1">
                            <td>{{ item.point }}</td>
                            <td>{{ item.date }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "Point",
    data() {
        return {
            desserts: [
                {
                    point: "+200냥",
                    date: "2023-01-30",
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