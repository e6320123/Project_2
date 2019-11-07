<template >
  <div>
    <h1 class="text-center my-3">最新消息</h1>
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-4 col-md-3 px-3 py-2" v-for="(item, index) in infos" :key="index">
          <a href data-toggle="modal" data-target="#myModal" @click.prevent="getInfo(index)">
            <div class="card text-left">
              <img class="card-img-top" :src="item.img_normal_url" alt />
            </div>
          </a>
        </div>

        <!-- <div class="col-sm-1">
          <h3></h3>
        </div>-->
        <!-- <div class="col-sm-10"> -->
        <!-- <ul class="eventList"> -->
        <!-- <li>
              <figure>
                <a href="#">
                  <img
                    src="..\..\assets\event_2019_1.jpg"
                    alt="《台南FOCUS限定》打卡同樂趣 一起FUN電影！"
                    title="《台南FOCUS限定》打卡同樂趣 一起FUN電影！"
                  />
                </a>
              </figure>
              <section class="infoArea">
                <h5>
                  <a href="#">
                    <div style>《台南FOCUS限定》打卡同樂趣 一起FUN電影！</div>
                  </a>
                </h5>
                <time>2019/10/03 ~ 2019/10/31</time>
              </section>
            </li>

            <li>
              <figure style="height:250px;">
                <a href="#" style="height:250px;">
                  <img
                    src="..\..\assets\event_2019_2.jpg"
                    alt="9月電影看不完 點數拿不完"
                    title="9月電影看不完 點數拿不完"
                    style="height:100%; width:auto; margin-left:0px;"
                  />
                </a>
              </figure>
              <section class="infoArea">
                <h5>
                  <a href="#" style="height:250px;">9月電影看不完 點數拿不完</a>
                </h5>
                <time>2019/09/06 ~ 2019/09/30</time>
              </section>
            </li>

            
            <li>
              <figure>
                <a href="#" data-toggle="modal" data-target="#myModal_3">
                  <img
                    src="..\..\assets\event_2019_3.jpg"
                    alt="《林口限定》Mappa獨家加碼。 iShow卡友享好禮"
                    title="《林口限定》Mappa獨家加碼。 iShow卡友享好禮"
                  />
                </a>
              </figure>
              <section class="infoArea">
                <h5>
                  <a
                    href="#"
                    data-toggle="modal" data-target="#myModal_3"
                  >《林口限定》Mappa獨家加碼。 iShow卡友享好禮</a>
                </h5>
                <time>2019/10/01~2019/10/31</time>
              </section>
            </li>
            <div class="container">
              <div class="modal fade" id="myModal_1" role="dialog">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" style="text-align:left; padding:10px">《台南FOCUS限定》打卡同樂趣 一起FUN電影！</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" style="text-align:left; padding:40px">
                      <h6>
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        開始日期 : 2019-10-03
                      </h6>
                      <h6>
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        截止日期 : 2019-10-30
                      </h6>
                      <h6>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        活動地點 : 中佑影城
                      </h6>
                      <h6>
                        <i class="fa fa-file-text-o" aria-hidden="true"></i>
                        活動辦法 :
                        <p style="line-height: 30px;">
                        憑台南FOCUS威秀影城手機打卡畫面+當日電影票或消費發票，即可兌換「威秀寶寶萬用桶」乙個！數量有限，送完為止！◎FB/ IG打卡地標請搜尋：台南focus威秀影城
                        注意事項:
                        1. 每人FB / IG帳號僅限兌換贈品乙次。
                        2. 贈品圖片僅供參考，不得要求折現或轉換其他商品。
                        3. 詳情請洽威秀影城官方網站或現場告示，威秀影城擁有保留修改活動內容之權利以及最終解釋權。</p>
                      </h6>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <li>
              <figure>
                <a href="#" data-toggle="modal" data-target="#myModal_3">
                  <img
                    src="..\..\assets\event_2019_3.jpg"
                    alt="《林口限定》Mappa獨家加碼。 iShow卡友享好禮"
                    title="《林口限定》Mappa獨家加碼。 iShow卡友享好禮"
                  />
                </a>
              </figure>
              <section class="infoArea">
                <h5>
                  <a
                    href="#"
                    data-toggle="modal_2" data-target="#myModal_2"
                  >《林口限定》Mappa獨家加碼。 iShow卡友享好禮</a>
                </h5>
                <time>2019/10/01~2019/10/31</time>
              </section>
            </li>
            <div class="container">
              <div class="modal fade" id="myModal_2" role="dialog">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" style="text-align:left; padding:10px">《台南FOCUS限定》打卡同樂趣 一起FUN電影！</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" style="text-align:left; padding:40px">
                      <h6>
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        開始日期 : 2019-10-03
                      </h6>
                      <h6>
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        截止日期 : 2019-10-30
                      </h6>
                      <h6>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        活動地點 : 中佑影城
                      </h6>
                      <h6>
                        <i class="fa fa-file-text-o" aria-hidden="true"></i>
                        活動辦法 :
                        <p style="line-height: 30px;">
                        憑台南FOCUS威秀影城手機打卡畫面+當日電影票或消費發票，即可兌換「威秀寶寶萬用桶」乙個！數量有限，送完為止！◎FB/ IG打卡地標請搜尋：台南focus威秀影城
                        注意事項:
                        1. 每人FB / IG帳號僅限兌換贈品乙次。
                        2. 贈品圖片僅供參考，不得要求折現或轉換其他商品。
                        3. 詳情請洽威秀影城官方網站或現場告示，威秀影城擁有保留修改活動內容之權利以及最終解釋權。</p>
                      </h6>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
        </div>-->

        <!-- <li>
              <figure>
                <a href="#" data-toggle="modal" data-target="#myModal_1">
                  <img
                    src="..\..\assets\event_2019_3.jpg"
                    alt="《林口限定》Mappa獨家加碼。 iShow卡友享好禮"
                    title="《林口限定》Mappa獨家加碼。 iShow卡友享好禮"
                  />
                </a>
              </figure>
              <section class="infoArea">
                <h5>
                  <a
                    href="#"
                    data-toggle="modal" data-target="#myModal_1"
                  >《林口限定》Mappa獨家加碼。 iShow卡友享好禮</a>
                </h5>
                <time>2019/10/01~2019/10/31</time>
              </section>
            </li>
            <div class="container">
              <div class="modal fade" id="myModal_2" role="dialog">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4
                        class="modal-title"
                        style="text-align:left; padding:10px"
                      >《台南FOCUS限定》打卡同樂趣 一起FUN電影！</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" style="text-align:left; padding:40px">
                      <h6>
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        開始日期 : 2019-10-03
                      </h6>
                      <h6>
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        截止日期 : 2019-10-30
                      </h6>
                      <h6>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        活動地點 : 中佑影城
                      </h6>
                      <h6>
                        <i class="fa fa-file-text-o" aria-hidden="true"></i>
                        活動辦法 :
                        <p style="line-height: 30px;">
                          憑台南FOCUS威秀影城手機打卡畫面+當日電影票或消費發票，即可兌換「威秀寶寶萬用桶」乙個！數量有限，送完為止！◎FB/ IG打卡地標請搜尋：台南focus威秀影城
                          注意事項:
                          1. 每人FB / IG帳號僅限兌換贈品乙次。
                          2. 贈品圖片僅供參考，不得要求折現或轉換其他商品。
                          3. 詳情請洽威秀影城官方網站或現場告示，威秀影城擁有保留修改活動內容之權利以及最終解釋權。
                        </p>
                      </h6>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
        </div>-->

        <!-- 睿霆 -->
        <!-- <li v-for="(info, index) in infos" :key="index">
              <figure>
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#myModal"
                  @click.prevent="getInfo(index)"
                >
                  <img :src="info.img_normal_url" :alt="info.title" :title="info.title" />
                </a>
              </figure>
              <section class="infoArea">
                <h5>
                  <a
                    href="#"
                    @click.prevent="getInfo(index)"
                    data-toggle="modal"
                    data-target="#myModal"
                  >{{info.title}}</a>
                </h5>

                <div v-if="(info.start_time !='0000-00-00') && (info.end_time!='0000-00-00') ">
                  <time>{{info.start_time}}~{{info.end_time}}</time>
                </div>
              </section>
        </li>-->
        <!-- </ul> -->
        <!-- </div> -->
        <!-- <div class="col-sm-1">
          <h3></h3>
        </div>-->
      </div>
    </div>

    <div class="container">
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">{{title}}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              
                <p><i class="fa fa-calendar" aria-hidden="true"></i>
                開始日期 : {{start_time}}</p>
             
                <p><i class="fa fa-calendar" aria-hidden="true"></i>
                截止日期 : {{end_time}}</p>
             
                <p><i class="fa fa-map-marker" aria-hidden="true"></i>
                活動地點 : 中佑影城</p>
              
                <p><i class="fa fa-file-text-o" aria-hidden="true"></i>
                活動辦法 :</p>
                {{content}}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
           
          <!-- </div>
          <div class="modal-body" style="text-align:left; padding:40px">
            <h6>
              <i class="fa fa-calendar" aria-hidden="true"></i>
              開始日期 : {{start_time}}
            </h6>
            <h6>
              <i class="fa fa-calendar" aria-hidden="true"></i>
              截止日期 : {{end_time}}
            </h6>
            <h6>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              活動地點 : 中佑影城
            </h6>
            <h6>
              <i class="fa fa-file-text-o" aria-hidden="true"></i>
              活動辦法 :
              <p style="line-height: 30px;">{{content}}</p>
            </h6>
    </div>-->
    <!-- <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    </div>-->
  <!-- </div>
 </template>-->



<script>
export default {
  data() {
    return {
      infos: null,
      content: "",
      end_time: "",
      id: "",
      img_normal_url: "",
      img_thumbs_url: "",
      release_time: "",
      start_time: "",
      title: ""
    };
  },
  mounted() {
    const _this = this;
    this.axios
      .get("https://cy-cinemas.ml/news/")
      .then(response => {
        _this.infos = response.data;
        console.log(_this.infos);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    getInfo(index) {
      this.id = this.infos[index].id;
      this.content = this.infos[index].content;
      this.end_time = this.infos[index].end_time;
      this.img_normal_url = this.infos[index].img_normal_url;
      this.img_thumbs_url = this.infos[index].img_thumbs_url;
      this.release_time = this.infos[index].release_time;
      this.start_time = this.infos[index].start_time;
      this.title = this.infos[index].title;
    }
  }
};
</script>

<style>
*{
  margin:0;
  padding:0;
}
.modal-title{
  font-size:20px;
}
h5{
  line-height: 10px;
}







</style>

