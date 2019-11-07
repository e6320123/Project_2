<template>
  <div>
    <div
      class="modal fade"
      id="register"
      tabindex="-1"
      role="dialog"
      aria-labelledby="register"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">註冊</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="clearText">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- 表單主體 -->
          <div class="modal-body" >
            <div class="form-group">
              <label for>姓名 :</label>
              <input type="text" class="form-control" maxlength="20" v-model="name" :class="isValid[0]"/>
              <div class="text-center" :class="isValidMsg[0]">{{ nameResult }}</div>
            </div>
            <div class="form-group">
              <label for>帳號 :</label>
              <input type="text" class="form-control" maxlength="20" v-model="account" :class="isValid[1]"/>
              <div class="text-center" :class="isValidMsg[1]">{{ accResult }}</div>
            </div>
            <div class="form-group">
              <label for>密碼 :</label>
              <input type="password" class="form-control" maxlength="20" v-model="password" :class="isValid[2]"/>
              <div class="text-center" :class="isValidMsg[2]">{{ pwdResult }}</div>
            </div>
            <div class="form-group">
              <label for>確認密碼 :</label>
              <input type="password" class="form-control" maxlength="20" v-model="repassword" :class="isValid[5]"/>
              <div class="text-center" :class="isValidMsg[5]">{{ repwdResult }}</div>
            </div>
            <div class="form-group">
              <label for>信箱 :</label>
              <input type="text" class="form-control" v-model="email" :class="isValid[3]"/>
              <div class="text-center" :class="isValidMsg[3]">{{ emailResult }}</div>
            </div>
            <div class="form-group">
              <label for>手機號碼 :</label>
              <input type="text" class="form-control" v-model="phone" :class="isValid[4]"/>
              <div class="text-center" :class="isValidMsg[4]">{{ phoneResult }}</div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="clearText">取消</button>
            <button
              type="button"
              class="btn btn-primary"
              v-bind:disabled="isDisabled"
              @click="registered"
              data-dismiss="modal"
            >送出</button>
            
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
      name: '',
      account: '',
      password: '',
      repassword: '',
      email: '',
      phone: '',
      result: "",
      isDisabled: true,
      nameResult: "",
      accResult: "",
      pwdResult: "",
      repwdResult: "",
      emailResult: "",
      phoneResult: "",
      nameReady: false,
      accReady: false,
      pwdReady: false,
      repwdReady: false,
      emailReady: false,
      phoneReady: false,
      isValid: ["", "", "", "", "", ""],
      isValidMsg: ["", "", "", "", "", ""],
    }
  },
  mounted() {
  },
  // 監看各輸入欄位資料正確性 (是否空值 密碼長度 規則等是否正確)
  watch: {
    // 姓名: 長度不限 (但不含特殊符號 空白 與 數字)
    // ^[\u4e00-\u9fa5a-zA-Z0-9]+$
    name: function (val) {
      var nameTest = /^[^.,\/#!$%\^&\*;:{}=\-_`~()@<>\s]{1,}$/.test(val);
      // if (val != '') {
        if(nameTest == false) {
          this.nameResult = "姓名不能有特殊符號 數字 空白";
          this.nameReady = false;
          this.isValid[0] = "is-invalid";
          this.isValidMsg[0] = "invalid-feedback";
          this.checkInput();
        } else {
          this.nameResult = "";
          this.nameReady = true;
          this.isValid[0] = "is-valid";
          this.isValidMsg[0] = "valid-feedback";
          this.checkInput();
        }
      // }
    },
    // 帳號: 至少五碼 且為任意英數字組合 (不含特殊符號) 
    // 並同時比對資料庫是否有相同帳號
    account: function (val) {
      var accTest = /^[A-Za-z0-9]{5,}$/gm.test(val);
      // if (val != '') {
        if (accTest) {
          // 通過正規表示式 => 檢查帳號是否存在
          var _this = this;
          var account = val;
          var num_rows = 0;
          this.axios.get(`${this.$api}/members/` + account)
            .then(function (response) {
              num_rows = response.data;
              if(num_rows > 0) {
                _this.accResult = "此帳號有人使用 換一個吧";
                _this.accReady = false;
                _this.isValid[1] = "is-invalid";
                _this.isValidMsg[1] = "invalid-feedback";
                _this.checkInput();
              } else {
                _this.accResult = "";
                _this.accReady = true;
                _this.isValid[1] = "is-valid";
                _this.isValidMsg[1] = "valid-feedback";
                _this.checkInput();
              }
            }).catch(function (error) {
             _this.accResult = error;
            });
        }else {
          // 未通過正規表示式 => 報錯
          this.accResult = "帳號必須為任意英數字組合 且大於五碼";
          this.accReady = false;
          this.isValid[1] = "is-invalid";
          this.isValidMsg[1] = "invalid-feedback";
          this.checkInput();
        }
      // }
    },
    // 密碼: 至少五碼 且為任意英數字組合 (不含特殊符號)
    password: function (val) {
      var pwdTest = /^[A-Za-z0-9]{5,}$/.test(val);
      // if (val != '') {
        if (pwdTest) {
          this.pwdResult = "";
          this.pwdReady = true;
          this.isValid[2] = "is-valid";
          this.isValidMsg[2] = "valid-feedback";
          this.checkInput();
        } else {
          this.pwdResult = "密碼必須為任意英數字組合 且大於五碼";
          this.pwdReady = false;
          this.isValid[2] = "is-invalid";
          this.isValidMsg[2] = "invalid-feedback";
          this.checkInput();
        }
      // }
    },
    // 確認密碼: 需與密碼欄位輸入相同
    repassword: function (val) {
      if (val == this.password) {
        this.repwdResult = "";
        this.repwdReady = true;
        this.isValid[5] = "is-valid";
        this.isValidMsg[5] = "valid-feedback";
        this.checkInput();
      } else {
        this.repwdResult = "與密碼不符";
        this.repwdReady = false;
        this.isValid[5] = "is-invalid";
        this.isValidMsg[5] = "invalid-feedback";
        this.checkInput();
      }
    },
    // Email
    email: function (val) {
      var emailTest = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(val);
      // if (val != '') {
        if (emailTest) {
          this.emailResult = "";
          this.emailReady = true;
          this.isValid[3] = "is-valid";
          this.isValidMsg[3] = "valid-feedback";
          this.checkInput();
        } else {
          this.emailResult = "無效的Email";
          this.emailReady = false;
          this.isValid[3] = "is-invalid";
          this.isValidMsg[3] = "invalid-feedback";
          this.checkInput();
        }
      // }
    },
    // phone: 只能輸入手機
    phone: function (val) {
      var phoneTest = /^09\d{2}-?\d{3}-?\d{3}$/.test(val);
      // if (val != '') {
        if (phoneTest) {
          this.phoneResult = "";
          this.phoneReady = true;
          this.isValid[4] = "is-valid";
          this.isValidMsg[4] = "valid-feedback";
          this.checkInput();
        } else {
          this.phoneResult = "電話格式為手機 且不能有特殊符號連接 (例 0912345678)";
          this.phoneReady = false;
          this.isValid[4] = "is-invalid";
          this.isValidMsg[4] = "invalid-feedback";
          this.checkInput();
        }
      // }
    },
  },
  methods: {
    clearText() {
      this.name = '';
      this.account =  '';
      this.password = '';
      this.repassword = '';
      this.email = '';
      this.phone = '';
    },
    checkInput() {
      if (this.nameReady == false || this.accReady == false || this.pwdReady == false || this.repwdReady == false || this.emailReady == false || this.phoneReady == false) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    },
    registered() {
      var _this = this;
      var formData = new FormData();
      formData.append('name', this.name);
      formData.append('account', this.account);
      formData.append('password', this.password);
      formData.append('email', this.email);
      formData.append('phone', this.phone);
      this.axios.post(`${this.$api}/members/members`, formData)
        .then(function (response) {
          _this.result = response.data;
          _this.$toasted.success(_this.result, {
            theme: 'bubble',
            duration: 3000
          });
        }).catch(function (error) {
          _this.$toasted.error(`會員註冊失敗，請確認網路連線狀態, ${error}`, {
              theme: 'bubble',
              duration: 3000
            });
        });

      console.log("before clear");
      this.name = '';
      this.account = '';
      this.password = '';
      this.repassword = '';
      this.email = '';
      this.phone = '';

      this.nameReady = false;
      this.accReady = false;
      this.pwdReady = false;
      this.repwdReady = false;
      this.emailReady = false;
      this.phoneReady = false;

      this.isValid[0] = "";
      this.isValid[1] = "";
      this.isValid[2] = "";
      this.isValid[3] = "";
      this.isValid[4] = "";
      this.isValid[5] = "";

      this.isValidMsg[0] = "";
      this.isValidMsg[1] = "";
      this.isValidMsg[2] = "";
      this.isValidMsg[3] = "";
      this.isValidMsg[4] = "";
      this.isValidMsg[5] = "";

      this.nameResult = "";
      this.accResult = "";
      this.pwdResult = "";
      this.repwdResult = "";
      this.emailResult = "";
      this.phoneResult = "";

      console.log("after clear");
      $('#register').modal('hide');
    },
  }
}
</script>