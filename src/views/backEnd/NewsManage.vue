<template>
  <div>
    <!-- 新增消息按鈕 -->
    <button
      class="btn btn-primary mt-4"
      data-toggle="modal"
      data-target="#newsForm"
      @click.prevent="action = '新增'"
    >新增 +</button>

    <!-- 最新消息的清單 -->
    <div class="row mt-3">
      <div
        class="col-6 col-md-4 col-lg-3 col-xl-2 mb-3"
        v-for="(item, index) in newsData"
        :key="index"
      >
        <div class="card img-container">
          <img :src="item.img_thumbs_url" alt class="card-img-top" />
          <div class="overlay d-flex flex-column justify-content-center align-items-center">
            <button
              class="btn btn-info mb-2"
              data-toggle="modal"
              data-target="#showNewsData"
              @click.prevent="showNews = item"
            >檢視</button>
            <button
              class="btn btn-warning mb-2"
              data-toggle="modal"
              data-target="#newsForm"
              @click.prevent="action = '修改'; getNewsData(item.id)"
            >修改</button>
            <button
              class="btn btn-danger"
              data-toggle="modal"
              data-target="#deleteModal"
              @click.prevent="setId = item.id"
            >刪除</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="showNewsData"
      tabindex="-1"
      role="dialog"
      aria-labelledby="showNewsData"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="showNewsData">{{ showNews.title }}</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row w-100">
              <div class="col-4">
                <img :src="showNews.img_thumbs_url" class="img-thumbnail w-100" alt />
              </div>
              <div class="col-8">
                <p v-if="showNews.start_time != '0000-00-00'">起始時間 : {{ showNews.start_time }}</p>
                <p v-if="showNews.end_time != '0000-00-00'">結束時間 : {{ showNews.end_time }}</p>
                <p>{{ showNews.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DeleteModal @delete="deleteNews" @clear="cleanData"></DeleteModal>

    <!-- 消息表單 -->
    <div
      class="modal fade"
      id="newsForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="newsForm"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newsForm">{{ action }}消息</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click.prevent="cleanData"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label>標題 :</label>
                <input type="text" class="form-control" v-model="title" required="required" />
              </div>
              <div class="form-group">
                <label>內容 :</label>
                <textarea class="form-control" rows="5" v-model="content" required></textarea>
              </div>
              <div class="form-group">
                <label>開始時間 :</label>
                <input type="date" class="form-control" v-model="startTime" required />
              </div>
              <div class="form-group">
                <label>結束時間 :</label>
                <input type="date" class="form-control" v-model="endTime" required />
              </div>
              <div class="form-group">
                <input type="file" id="file" accept="image/*" class="form-control" ref="file" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click.prevent="cleanData"
            >取消</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click.prevent="addNews"
              v-if="action == '新增'"
            >送出</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click.prevent="updateNews"
              v-if="action == '修改'"
            >送出</button>
          </div>
        </div>
      </div>
    </div>
    <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
import DeleteModal from "@/components/DeleteModal.vue";
import Loading from "@/components/Loading.vue";
import $ from "jquery";

export default {
  components: {
    DeleteModal,
    Loading
  },
  data() {
    return {
      newsData: [], // 所有最新消息的資料,
      viewNews: {},
      showNews: "",
      setId: Number, // 刪除或是修改消息的 ID
      title: "",
      content: "",
      startTime: "",
      endTime: "",
      file: "",
      fileName: "", // 修改消息的圖片名
      action: "", // 用來判斷是新增還是修改
      isLoading: true // 顯示 Loading 圖示直到資料準備好
    };
  },
  mounted() {
    this.getNewsData(); // 當網頁載入時發出請求取得資料
  },
  watch: {
    // 判斷是否取得所有消息的資料，還沒的話顯示 Loading 圖示
    newsData(val) {
      if (val) {
        this.isLoading = false;
      }
    }
  },
  methods: {
    // 取的News資料
    getNewsData(newsId = "") {
      const _this = this;
      // 判斷是否有ID，有的話為取得單筆資料，無則是取得所有資料
      if (newsId == "") {
        this.axios.get(`${_this.$api}/news/`).then(response => {
          _this.newsData = response.data;
          // console.log(response.data);
        });
      } else {
        this.axios.get(`${_this.$api}/news/${newsId}`).then(response => {
          // $('#newsForm').modal('show');
          let data = response.data[0];
          _this.title = data.title;
          _this.content = data.content;
          _this.startTime = data.start_time == "0000-00-00" ? "" : data.start_time;
          _this.endTime = data.end_time == "0000-00-00" ? "" : data.end_time;
          _this.fileName = data.img_normal_url.substr(-18, 18);
          _this.setId = data.id;
        });
      }
    },
    // 新增News
    addNews() {
      const _this = this;
      let formData = new FormData();
      this.file = this.$refs.file.files[0];
      formData.append("title", this.title);
      formData.append("content", this.content);
      formData.append("startTime", this.startTime);
      formData.append("endTime", this.endTime);
      formData.append("file", this.file);
      this.axios
        .post(`${this.$api}/news/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          if (response.data.status == 201) {
            _this.$toasted.success(response.data.msg, {
              theme: "bubble",
              duration: 5000
            });
            _this.getNewsData(); // 新增後將畫面刷新
            _this.cleanData(); // 新增後將表單資料清空
          } else {
            _this.$toasted.error(response.data.msg, {
              theme: "bubble",
              duration: 5000
            });
          }
        });
    },
    // 更新News
    updateNews() {
      const _this = this;
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.content);
      formData.append("startTime", this.startTime);
      formData.append("endTime", this.endTime);
      formData.append("fileName", this.fileName);
      formData.append("file", this.file);
      this.axios
        .post(`${this.$api}/news/${this.setId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          // console.log(response.data);
          if (response.data.status == 201) {
            _this.$toasted.success(response.data.msg, {
              theme: "bubble",
              duration: 3000
            });
            _this.getNewsData(); // 更新後刷新畫面
            _this.cleanData(); // 更新後將表單資料清空
          } else {
            _this.$toasted.error(response.data.msg, {
              theme: "bubble",
              duration: 3000
            });
          }
        });
    },
    // 刪除News
    deleteNews() {
      // console.log(this.setId);
      const _this = this;
      this.axios.delete(`${_this.$api}/news/${_this.setId}`).then(response => {
        _this.$toasted.success(response.data.msg, {
          theme: "bubble",
          duration: 5000
        });
        _this.getNewsData(); // 刪除後刷新畫面
      });
    },
    // 新增及修改資料送出、取消、關閉最新消息的表單時將資料清除
    cleanData() {
      this.title = "";
      this.content = "";
      this.file = "";
      this.startTime = "";
      this.endTime = "";
      this.fileName = "";
      this.setId = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 5px 5px 15px #999;
}
.card-title {
  height: 30px;
  line-height: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>