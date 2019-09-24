<template>
  <div>
    <div
      class="modal fade"
      id="register"
      tabindex="-1"
      role="dialog"
      aria-labelledby="register"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">註冊</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for>姓名 :</label>
              <input type="text" class="form-control" v-model="userName"/>
            </div>
            <div class="form-group">
              <label for>帳號 :</label>
              <input type="text" class="form-control" v-model="account" />
            </div>
            <div class="form-group">
              <label for>密碼 :</label>
              <input type="text" class="form-control" v-model="password"/>
            </div>
            <div class="form-group">
              <label for>信箱 :</label>
              <input type="text" class="form-control" v-model="email"/>
            </div>
            <div class="form-group">
              <label for>電話 :</label>
              <input type="text" class="form-control" v-model="phone"/>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="registered" 
            >送出</button>
            
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
      userName: '',
      account: '',
      password: '',
      email: '',
      phone: ''
    }
  },
  methods: {
    registered() {
      if (this.account == '123') {
        this.$toasted.error('註冊失敗', {
          theme: 'bubble',
          duration: 3000
        });
      } else { // 註冊成功 把各欄位資料寫到localStorage
        localStorage.setItem('userName', this.userName);
        localStorage.setItem('account', this.account);
        localStorage.setItem('password', this.password);
        localStorage.setItem('email', this.email);
        localStorage.setItem('phone', this.phone);
        this.$toasted.success(this.userName + " | " + this.account + " | 註冊成功", {
          theme: 'bubble',
          duration: 3000
        });
      }
    }
  }
}
</script>