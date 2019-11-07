<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="deleteModal"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button> -->
            <h2 class="text-center mt-5">確定要刪除嗎?</h2>
            <div class="d-flex justify-content-center mt-3 mb-4">
              <img src="../assets/exclamation-mark.png" height="15%" width="15%" />
            </div>
            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" @click.prevent="clear">取消</button>
              <button
                type="button"
                class="btn btn-outline-danger ml-3"
                data-dismiss="modal"
                @click.prevent="checkDel"
              >刪除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    checkDel() {
      this.$emit('delete');
    },
    clear() {
      this.$emit('clear');
    }
  }
}
</script>