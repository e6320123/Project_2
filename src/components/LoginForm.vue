<template>
  <div>
    <!-- login -->
    <div
      class="modal fade"
      id="login"
      tabindex="-1"
      role="dialog"
      aria-labelledby="login"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">登入</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @keydown.enter="setCookie()">
              <div class="form-group">
              <label for>帳號 :</label>
              <input type="text" class="form-control" v-model="account" />
            </div>
            <div class="form-group">
              <label for>密碼 :</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
            </form>
            <button type="button" class="btn btn-primary btn-sm" data-target="#forget" data-toggle="modal" data-dismiss="modal">忘記密碼</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="clearText()">取消</button>
            <button type="button" class="btn btn-primary" @click="setCookie()">登入</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 忘記密碼model -->
    <div class="modal fade" data-backdrop="static" data-keyboard="false" id="forget">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">忘記密碼</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="resetClr()">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        輸入帳號與Email驗證，來重設密碼
                        <br>
                        <form>
                            <div class="form-group">
                                <label>帳號 :</label>
                                <input type="text" class="form-control" maxlength="20" v-model="resetAcc">
                                <!-- <div class="text-center" :class="isValidMsg[0]">{{ nameResult }}</div> -->
                            </div>
                            <div class="form-group">
                                <label>Email :</label>
                                <input type="text" class="form-control" v-model="resetEmail">
                                <!-- <div class="text-center" :class="isValidMsg[1]">{{ emailResult }}</div> -->
                            </div>
                            <hr>
                            <div class="form-group">
                                <label>設定新密碼 :</label>
                                <input type="password" class="form-control" maxlength="20" v-model="resetPwd" :class="pwdIsValid">
                                <div class="text-center" :class="pwdIsValidMsg">{{ pwdResult }}</div>
                            </div>
                            <div class="form-group">
                                <label>確認新密碼 :</label>
                                <input type="password" class="form-control" maxlength="20" v-model="checkResetPwd" :class="renewPwdIsValid">
                                <div class="text-center" :class="renewPwdIsValidMsg">{{ renewPwdResult }}</div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="resetClr()">取消</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" v-bind:disabled="resetDisabled" @click="sendReset()">
                          送出
                        </button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      account: '',
      password: '',
      resetAcc: '',
      resetEmail: '',
      resetPwd: '',
      checkResetPwd: '',
      pwdIsValid: '',
      renewPwdIsValid: '',
      pwdIsValidMsg: '',
      renewPwdIsValidMsg: '',
      pwdResult: '',
      renewPwdResult: '',
      result: '',
      pwdReady: false,
      rePwdReady: false,
      resetDisabled: true,
    }
  },
  watch: {
    resetPwd: function (val) {
      let pwdTest = /^[A-Za-z0-9]{5,}$/gm.test(val);
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
    checkResetPwd: function (val) {
      if (val == this.resetPwd) {
        this.renewPwdResult = "";
        this.rePwdReady = true;
        this.renewPwdIsValid = "is-valid";
        this.renewPwdIsValidMsg = "valid-feedback";
        this.checkPwd();
      } else {
        this.renewPwdResult = "與新密碼不符";
        this.rePwdReady = false;
        this.renewPwdIsValid = "is-invalid";
        this.renewPwdIsValidMsg = "invalid-feedback";
        this.checkPwd();
      }
    }
  },
  methods: {
    checkPwd() {
      if (this.pwdReady == false || this.rePwdReady == false) {
        this.resetDisabled = true;
      } else {
        this.resetDisabled = false;
      }
    },
    clearText() {
      this.account = '';
      this.password = '';
    },
    resetClr() {
      this.resetAcc = '';
      this.resetEmail = '';
      this.resetPwd = '';
      this.checkResetPwd = '';
    },
    sendReset() {
      console.log('send reset');
      let _this = this;
      let formData = new FormData();
      formData.append('resetAcc', this.resetAcc);
      formData.append('resetEmail', this.resetEmail);
      formData.append('resetPwd', this.resetPwd);
      this.axios.post(`${this.$api}/members/resetPwd`, formData)
        .then(function (response) {
          _this.result = response.data;
          _this.$toasted.success(_this.result, {
              theme: 'bubble',
              duration: 3000
          });
          _this.resetAcc = '';
          _this.resetEmail = '';
          _this.resetPwd = '';
          _this.checkResetPwd = '';
        }).catch(function (error) {
          _this.$toasted.error(error, {
              theme: 'bubble',
              duration: 3000
          });
        });
    },
    setCookie() {
      // 取得登入的帳密 做登入比對
      sessionStorage.setItem('logAccount', this.account);
      sessionStorage.setItem('logPassword', this.password);
      this.$emit('setcookie');
      this.account = '';
      this.password = '';
      $('#login').modal('hide');
    }
  }
}
</script>