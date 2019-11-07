<template>
    <div class="allEl">
        <h1 class="text-center my-5" style="font-family: Microsoft JhengHei;">點數紀錄</h1>
        <hr>
        <!-- th: 日期 | 交易描述 | 此次交易點數 | 交易後點數 -->
        <table class="table table-bordered table-hover">
            <thead>
                <tr class="title">
                    <th scope="col">編號</th>
                    <th scope="col">日期</th>
                    <th scope="col">交易描述</th>
                    <th scope="col">此次交易點數</th>
                    <th scope="col">交易後點數</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in result" :key="index">
                    <td>{{ arrLength - index }}</td>
                    <td>{{ item.update_time }}</td>
                    <td>{{ item.desc }}</td>
                    <td>{{ item.update_point }}</td>
                    <td>{{ item.current_point }}</td>
                </tr>
            </tbody>
            
        </table>
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
        this.showPoint();
    },
    methods: {
        showPoint() {
            var _this = this;
            var targetAcc = sessionStorage.getItem('nowAcc');
            var formData = new FormData();
            formData.append('account', targetAcc);
            this.axios.post(`${this.$api}/members/showPoint`, formData)
                .then(function (response) {
                    _this.result = response.data;
                    console.log(_this.result);
                    _this.arrLength = _this.result.length;
                    // Math.max(...arr)
                }).catch(function (error) {
                    _this.$toasted.error(error, {
                        theme: 'bubble',
                        duration: 3000
                    });
                });
        }
    }
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