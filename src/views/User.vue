<template>
    <div>
        <h1 class="text-center my-5">會員資料</h1>

        <h3>姓名: {{ userName }}</h3>
        <br>
        <h3>帳號: {{ account }}</h3>
        <br>
        <h3>密碼: {{ password }}</h3>
        <br>
        <h3>EMAIL: {{ email }}</h3>
        <br>
        <h3>電話: {{ phone }}</h3>
        <br>
    </div>
    

</template>

<script>
export default {
    data() {
        return {
            userName: '',
            account: '',
            password: '',
            email: '',
            phone: ''
        }
    },
    mounted() {
        this.checkMember();
    },
    methods: {
        checkMember() {
            console.log("OK");
            var outerThis = this;
            if (localStorage.getItem('logAccount')) {
                outerThis.userName = localStorage.getItem('userName');
                outerThis.account = localStorage.getItem('account');
                outerThis.password = localStorage.getItem('password');
                outerThis.email = localStorage.getItem('email');
                outerThis.phone = localStorage.getItem('phone');
            }
        }
    }
}
</script>