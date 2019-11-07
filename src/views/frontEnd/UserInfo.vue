<template>
    <div class="allEl">
        <h1 class="text-center my-5" style="font-family: Microsoft JhengHei;">會員資料</h1>
        <hr>
        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#changePwd">修改密碼</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#edit" @click="editData">修改會員資料</button>
        <br><br>
        <table class="table table-bordered table-hover">
            <tbody>
                <tr>
                    <th scope="row">姓名</th>
                    <td>{{ name }}</td>
                </tr>
                <tr>
                    <th scope="row">帳號</th>
                    <td>{{ account }}</td>
                </tr>
                <tr>
                    <th scope="row">密碼</th>
                    <td>••••••••••</td>
                </tr>
                <tr>
                    <th scope="row">Email</th>
                    <td>{{ email }}</td>
                </tr>
                <tr>
                    <th scope="row">電話</th>
                    <td>{{ phone }}</td>
                </tr>
            </tbody>
        </table>
        

        <!-- 會員資料修改視窗 -->
        <div class="modal fade" data-backdrop="static" data-keyboard="false" id="edit">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle" style="font-family: Microsoft JhengHei;">修改會員資料</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- 可修改: 姓名/Email/電話 -->
                        <form>
                            <div class="form-group">
                                <label>姓名:</label>
                                <input type="text" class="form-control" maxlength="20" v-model="changeName" :class="isValid[0]">
                                <div class="text-center" :class="isValidMsg[0]">{{ nameResult }}</div>
                            </div>
                            <div class="form-group">
                                <label>Email:</label>
                                <input type="text" class="form-control" v-model="changeEmail" :class="isValid[1]">
                                <div class="text-center" :class="isValidMsg[1]">{{ emailResult }}</div>
                            </div>
                            <div class="form-group">
                                <label>電話:</label>
                                <input type="text" class="form-control" v-model="changePhone" :class="isValid[2]">
                                <div class="text-center" :class="isValidMsg[2]">{{ phoneResult }}</div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" v-bind:disabled="editDisabled" @click="saveEditData">
                            送出
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 密碼修改視窗 -->
        <div class="modal fade" data-backdrop="static" data-keyboard="false" id="changePwd">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle" style="font-family: Microsoft JhengHei;">修改密碼</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="clearPwd">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- 輸入舊密碼/輸入新密碼/確認新密碼 -->
                        <form>
                            <div class="form-group">
                                <label>舊密碼:</label>
                                <input type="password" class="form-control" maxlength="20" v-model="oldPwd">
                            </div>
                            <div class="form-group">
                                <label>新密碼:</label>
                                <input type="password" class="form-control" maxlength="20" v-model="newPwd" :class="pwdIsValid">
                                <div class="text-center" :class="pwdIsValidMsg">{{ pwdResult }}</div>
                            </div>
                            <div class="form-group">
                                <label>確認新密碼:</label>
                                <input type="password" class="form-control" maxlength="20" v-model="renewPwd" :class="renewPwdIsValid">
                                <div class="text-center" :class="renewPwdIsValidMsg">{{ renewPwdResult }}</div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="clearPwd">取消</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" v-bind:disabled="pwdCDisabled" @click="saveNewPwd">
                            送出
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    
</template>

<script>
// import func from '../../../vue-temp/vue-editor-bridge';
export default {
    data() {
        return {
            name: '',
            account: '',
            password: '',
            email: '',
            phone: '',
            changeName: '',
            changeEmail: '',
            changePhone: '',
            nameResult: '',
            emailResult: '',
            phoneResult: '',
            nameReady: true, // 預設將資料帶入 此時即為可儲存狀態
            emailReady: true,
            phoneReady: true,
            isValid: ["", "", ""],
            isValidMsg: ["", "", ""],
            editDisabled: false,
            oldPwd: '', // 舊密碼 
            newPwd: '',
            renewPwd: '',
            pwdCDisabled: true,
            pwdResult: '',
            renewPwdResult: '',
            pwdReady: false,
            renewPwdReady: false,
            pwdIsValid: '',
            pwdIsValidMsg: '',
            renewPwdIsValid: '',
            renewPwdIsValidMsg: ''
        }
    },
    mounted() {
        this.checkMember();
    },
    watch: {
        changeName: function (val) {
            console.log("change name");
            var nameTest = /^[^.,\/#!$%\^&\*;:{}=\-_`~()@<>\s]{1,}$/.test(val);
            if (nameTest) {
                this.nameResult = "OK";
                this.nameReady = true;
                this.isValid[0] = "is-valid";
                this.isValidMsg[0] = "valid-feedback";
                this.checkInput();
            } else {
                this.nameResult = "姓名不能有特殊符號 數字 空白";
                this.nameReady = false;
                this.isValid[0] = "is-invalid";
                this.isValidMsg[0] = "invalid-feedback";
                this.checkInput();
            }
        },
        changeEmail: function (val) { 
            console.log("change email");
            var emailTest = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(val);
            if (emailTest) {
                this.emailResult = "OK";
                this.emailReady = true;
                this.isValid[1] = "is-valid";
                this.isValidMsg[1] = "valid-feedback";
                this.checkInput();
            } else {
                this.emailResult = "無效的Email";
                this.emailReady = false;
                this.isValid[1] = "is-invalid";
                this.isValidMsg[1] = "invalid-feedback";
                this.checkInput();
            }
        },
        changePhone: function (val) {
            console.log("change phone");
            var phoneTest = /^09\d{2}-?\d{3}-?\d{3}$/.test(val);
            if (phoneTest) {
                this.phoneResult = "OK";
                this.phoneReady = true;
                this.isValid[2] = "is-valid";
                this.isValidMsg[2] = "valid-feedback";
                this.checkInput();
            } else {
                this.phoneResult = "電話格式為手機 且不能有特殊符號連接 (例 0912345678)";
                this.phoneReady = false;
                this.isValid[2] = "is-invalid";
                this.isValidMsg[2] = "invalid-feedback";
                this.checkInput();
            }
        },
        newPwd: function (val) {
            var pwdTest = /^[A-Za-z0-9]{5,}$/gm.test(val);
            if (pwdTest) {
                this.pwdResult = "";
                this.pwdReady = true;
                this.pwdIsValid = "is-valid";
                this.pwdIsValidMsg = "valid-feedback";
                this.checkPwd();
            } else {
                this.pwdResult = "密碼必須為任意英數字組合 且大於五碼";
                this.pwdReady = false;
                this.pwdIsValid = "is-invalid";
                this.pwdIsValidMsg = "invalid-feedback";
                this.checkPwd();
            }
        },
        renewPwd: function (val) {
            if (val == this.newPwd) {
                this.renewPwdResult = "";
                this.renewPwdReady = true;
                this.renewPwdIsValid = "is-valid";
                this.renewPwdIsValidMsg = "valid-feedback";
                this.checkPwd();
            } else {
                this.renewPwdResult = "與新密碼不符";
                this.renewPwdReady = false;
                this.renewPwdIsValid = "is-invalid";
                this.renewPwdIsValidMsg = "invalid-feedback";
                this.checkPwd();
            }
        }
    },
    methods: {
        clearPwd() {
            this.oldPwd = '';
            this.newPwd = '';
            this.renewPwd = '';
        },
        checkInput() {
            if (this.nameReady == false || this.emailReady == false || this.phoneReady == false) {
                this.editDisabled = true;
            } else {
                this.editDisabled = false;
            }
        },
        checkPwd() {
            if (this.pwdReady == false || this.renewPwdReady == false) {
                this.pwdCDisabled = true;
            } else {
                this.pwdCDisabled = false;
            }
        },
        editData() {
            console.log("EDIT!");
            this.changeName = this.name;
            this.changeEmail = this.email;
            this.changePhone = this.phone;
        },
        saveEditData () {
            // 儲存此筆修改(跳出修改成功訊息) -> 若儲存成功 再次呼叫checkMember() 更新頁面資料
            console.log("save edit data");
            var _this = this;
            var saveData = new FormData();
            var nowAcc = sessionStorage.getItem('nowAcc');
            saveData.append('nowAcc', nowAcc);
            saveData.append('newName', this.changeName);
            saveData.append('newEmail', this.changeEmail);
            saveData.append('newPhone', this.changePhone);
            this.axios.post(`${this.$api}/members/saveEditData`, saveData)
                .then(function (response) {
                    var result = response.data;
                    if (result == 'success') {
                        _this.$toasted.success("會員資料修改成功", {
                            theme: 'bubble',
                            duration: 3000
                        });
                        // 修改原本在session的name email phone
                        sessionStorage.setItem("nowName", _this.changeName); 
                        sessionStorage.setItem("nowEmail", _this.changeEmail);
                        sessionStorage.setItem("nowPhone", _this.changePhone);
                        location.reload(true); // 頁面刷新(為了更新navbar上的名字)
                    } else {
                        _this.$toasted.error("會員資料修改失敗", {
                            theme: 'bubble',
                            duration: 3000
                        });
                    }
                    _this.checkMember();
                }).catch(function (error) {
                    _this.$toasted.error(error, {
                        theme: 'bubble',
                        duration: 3000
                    });
                });
        },
        saveNewPwd() {
            var _this = this;
            var nowAcc = sessionStorage.getItem('nowAcc');
            var pwdData = new FormData();
            pwdData.append('nowAcc', nowAcc);
            pwdData.append('oldPwd', this.oldPwd);
            pwdData.append('newPwd', this.newPwd);
            this.axios.post(`${this.$api}/members/saveNewPwd`, pwdData)
                .then(function (response) {
                    var result = response.data;
                    if (result == 'success') {
                        _this.$toasted.success("會員密碼修改成功", {
                            theme: 'bubble',
                            duration: 3000
                        });
                    } else {
                        _this.$toasted.error("會員密碼修改失敗", {
                            theme: 'bubble',
                            duration: 3000
                        });
                    }
                    _this.oldPwd = '';
                    _this.newPwd = '';
                    _this.renewPwd = '';
                }).catch(function (error){
                    _this.$toasted.error(error, {
                            theme: 'bubble',
                            duration: 3000
                    });
                    _this.oldPwd = '';
                    _this.newPwd = '';
                    _this.renewPwd = '';
                });
        },
        checkMember() {
            if (sessionStorage.getItem('status') == 'login') {
                var nowAcc = sessionStorage.getItem('nowAcc');
                var _this = this;
                var formData = new FormData();
                formData.append('account', nowAcc);
                this.axios.post(`${this.$api}/members/showUserData`, formData)
                    .then(function (response) {
                        // 傳目前登入的帳號過去找 找回所有資料 顯示於頁面上
                        var result = response.data;
                        _this.name = result[0].name;
                        _this.account = result[0].account;
                        _this.password = result[0].password;
                        _this.email = result[0].email;
                        _this.phone = result[0].phone;
                    }).catch(function (error) {
                        _this.$toasted.error(error, {
                            theme: 'bubble',
                            duration: 3000
                        });
                    });
            }   
        }
    }
}
</script>

<style lang="scss" scoped>
    .allEl {
        font-family: Microsoft JhengHei;
    }
</style>