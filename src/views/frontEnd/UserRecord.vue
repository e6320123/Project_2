<template>
    <div class="allEl">
        <h1 class="text-center my-5" style="font-family: Microsoft JhengHei;">消費紀錄</h1>
        <hr>
        <!-- 列出所有紀錄 -->
        <div class="accordion" id="head">
            <!-- 一筆訂單 -->
            <div class="card" v-for="(item, key) in result" :key="key">
                <!-- 訂單標題 -->
                <div class="card-header">
                    <h2 class="mb-0">
                        <button class="btn btn-link" style="font-family: Microsoft JhengHei;" type="button" data-toggle="collapse" :data-target="`#hd-${item.id}`">
                            {{ arrLength - key }} - 消費時間: {{ item.datetime }} , 訂單編號: {{ item.serial_number }}
                        </button>
                    </h2>
                </div>
                <!-- 訂單詳細 -->
                <div v-bind:id="`hd-${item.id}`" class="collapse"  data-parent="#head">
                    <div class="card-body">
                        <table class="table table-bordered">
                            <tr>
                                <th scope="row">姓名</th>
                                <td>{{ item.name }}</td>
                            </tr>
                            <tr>
                                <th scope="row">電話</th>
                                <td>{{ item.phone }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>{{ item.email }}</td>
                            </tr>
                            <tr>
                                <th scope="row">訂單金額</th>
                                <td>{{ item.total_price }}</td>
                            </tr>
                            <tr>
                                <th scope="row">折扣後金額(實際金額)</th>
                                <td>{{ item.discounted_price }}</td>
                            </tr>
                            <tr>
                                <th scope="row">廳</th>
                                <td>第 {{ item.courts_id }} 廳</td>
                            </tr>
                            <tr>
                                <th scope="row">票種</th>
                                <td>{{ item.tickets_num }}</td>
                            </tr>
                            <tr>
                                <th scope="row">餐飲</th>
                                <td>{{ item.meals_num }}</td>
                            </tr>
                            <tr>
                                <th scope="row">座位號碼</th>
                                <td>{{ item.seat }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result: [],
            arrLength: '',
        }
    },
    mounted() {
        this.showDetail();
    },
    methods: {
        showDetail() {
            var _this = this;
            var targetAcc = sessionStorage.getItem('nowAcc');
            var formData = new FormData();
            formData.append('account', targetAcc);
            this.axios.post(`${this.$api}/members/showDetail`, formData)
                .then(function (response) {
                    _this.result = response.data;
                    // _this.$toasted.success("OK", {
                    //     theme: 'bubble',
                    //     duration: 3000
                    // });
                    console.log(_this.result);
                    _this.arrLength = _this.result.length;
                    _this.result.forEach(function (e) {
                        // console.log(e.tickets_num);
                        var temp = e.tickets_num;
                        temp = temp.replace(/[{}"]/gm, "");
                        temp = temp.replace(/,/gm, ", ");
                        temp = temp.replace(/:/gm, ": ");
                        e.tickets_num = temp;
                        var temp2 = e.meals_num;
                        temp2 = temp2.replace(/[{}"]/gm, "");
                        temp2 = temp2.replace(/,/gm, ", ");
                        temp2 = temp2.replace(/:/gm, ": ");
                        temp2 = temp2.replace(/_/gm, " ");
                        e.meals_num = temp2;
                    });
                }).catch(function (error) {
                    _this.$toasted.error(error, {
                        theme: 'bubble',
                        duration: 3000
                    });
                });
        }
    },
}
</script>

<style lang="scss" scoped>
    .allEl {
        font-family: Microsoft JhengHei;
    }
    th {
        background-color: khaki;
    }
</style>