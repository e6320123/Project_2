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
            <div class="form-group">
              <label for>帳號 :</label>
              <input type="text" class="form-control" v-model="account" />
            </div>
            <div class="form-group">
              <label for>密碼 :</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="setCookie()" data-dismiss="modal">登入</button>
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
      account: '',
      password: ''
    }
  },
  methods: {
    setCookie() {
      // 取得登入的帳密 做登入比對
      localStorage.setItem('logAccount', this.account);
      localStorage.setItem('logPassword', this.password);
      this.$emit('setcookie');
      this.account = '';
      this.password = '';
    }
  }
}
</script>