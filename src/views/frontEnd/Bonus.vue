<template>
  <div class="row container m-auto">
    <!-- 說明區 -->
    <div class="accordion col-md-3 mt-3" id="gameIntroduce">
      <div class="card">
        <div class="card-header text-center" id="headingOne">
          <button
            class="btn btn-light text-left"
            type="button"
            data-toggle="collapse"
            data-target="#introduce"
            aria-expanded="true"
            aria-controls="introduce"
          >
            <h4 class="mb-0 font-weight-bold">中佑小瑪莉</h4>
            <h4>
              遊戲說明
              <span class="small btn-link">點我</span>
            </h4>
          </button>
        </div>

        <div
          id="introduce"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#gameIntroduce"
        >
          <div class="card-body">
            <h5>1. 押注：</h5>
            <h6>投注認為會中獎的圖案</h6>
            <h5>2. 開始轉盤：</h5>
            <h6>點擊輪盤中的開始按鈕</h6>
            <h5>3. 結果：</h5>
            <h6>若押注的圖案跟轉到的圖案相符即有對應的點數獎勵</h6>
            <h6>溫馨提醒： 小賭怡情大賭傷身</h6>
          </div>
        </div>
      </div>
    </div>

    <!-- 押注區 -->
    <div class="col-md-3 badge badge-light text-left border mt-3">
      <h3>押注</h3>
      <hr />
      <div class="row d-flex ">
        <span class="col-3 mr-2 pt-2" style="font-size:0.8rem">點數：</span>
        <input type="number" class="text-right form-control col-7 col-offset-2" disabled v-model="totalPoint" />
      </div>
      <hr />
      <div class="row mt-2">
        <div class="col-md-6 col-3 text-center">
          <img src="../../assets/hanlinBar/popcorn.png" alt />
          <p class="m-1">×2/6</p>
          <div class="d-flex justify-content-center">
          <input
            type="number"
            class="text-center form-control h-75 border border-secondary"
            max="100"
            v-bind:disabled="isStarted"
            v-model="betPopcorn"
          />
          </div>
          <div class="row justify-content-center my-2">
            <span class="w-75">
              <i
              class="fa fa-minus fa btn btn-secondary pl-1"
              @click="isStarted?betPopcorn=betPopcorn:betPopcorn--"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-circle-o fa mx-2 btn btn-secondary pl-1"
              @click="isStarted?betPopcorn=betPopcorn:betPopcorn=0"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-plus fa btn btn-secondary pl-1"
              @click="isStarted?betPopcorn=betPopcorn:betPopcorn++"
              aria-hidden="true"
            ></i>
            </span>

          </div>
        </div>

        <div class="col-md-6 col-3 text-center">
          <img src="../../assets/hanlinBar/drink.png" alt />
          <p class="m-1">×3</p>
          <div class="d-flex justify-content-center">
          <input
            type="number"
            class="text-center form-control h-75 border border-secondary"
            max="100"
            v-bind:disabled="isStarted"
            v-model="betDrink"
          />
          </div>
          <div class="row justify-content-center my-2">
            <span class="w-75">
            <i
              class="fa fa-minus fa btn btn-secondary pl-1"
              @click="isStarted?betDrink=betDrink:betDrink--"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-circle-o fa mx-2 btn btn-secondary pl-1"
              @click="isStarted?betDrink=betDrink:betDrink=0"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-plus fa btn btn-secondary pl-1"
              @click="isStarted?betDrink=betDrink:betDrink++"
              aria-hidden="true"
            ></i>
            </span>
          </div>
        </div>
        <div class="col-md-6 col-3 text-center">
          <img src="../../assets/hanlinBar/mealSet.png" alt />
          <p class="m-1">×4</p>
          <div class="d-flex justify-content-center">
          <input
            type="number"
            class="text-center form-control h-75 border border-secondary"
            max="100"
            v-bind:disabled="isStarted"
            v-model="betMealSet"
          />

          </div>
          <div class="row justify-content-center my-2">
            <span class="w-75">
            <i
              class="fa fa-minus fa btn btn-secondary pl-1"
              @click="isStarted?betMealSet=betMealSet:betMealSet--"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-circle-o fa btn btn-secondary pl-1 mx-2"
              @click="isStarted?betMealSet=betMealSet:betMealSet=0"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-plus fa btn btn-secondary pl-1"
              @click="isStarted?betMealSet=betMealSet:betMealSet++"
              aria-hidden="true"
            ></i>
            </span>
          </div>
        </div>
        <div class="col-md-6 col-3 text-center">
          <img src="../../assets/hanlinBar/threeBar.png" alt />
          <p class="m-1">×5/7/10</p>
          <div class="d-flex justify-content-center">
          <input
            type="text"
            class="text-center form-control h-75 border border-secondary"
            maxlength="3"
            v-bind:disabled="isStarted"
            v-model="betBar"
          />
          </div>
          <div class="row justify-content-center my-2">
            <span class="w-75">
            <i
              class="fa fa-minus fa btn btn-secondary pl-1"
              @click="isStarted?betBar=betBar:betBar--"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-circle-o fa btn btn-secondary pl-1 mx-2"
              @click="isStarted?betBar=betBar:betBar=0"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-plus fa btn btn-secondary pl-1"
              @click="isStarted?betBar=betBar:betBar++"
              aria-hidden="true"
            ></i>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 遊戲區 -->
    <div class="col-md-6">
      <table align="center" class="mt-3">
        <tr>
          <td id="img0" class="cell">
            <img src="../../assets/hanlinBar/drink.png" alt />
          </td>
          <td id="img1" class="cell">
            <img src="../../assets/hanlinBar/bar7.png" alt />
          </td>
          <td id="img2" class="cell">
            <img src="../../assets/hanlinBar/threeBar.png" alt />
          </td>
          <td id="img3" class="cell">
            <img src="../../assets/hanlinBar/bar5.png" alt />
          </td>
          <td id="img4" class="cell">
            <img src="../../assets/hanlinBar/nothing.png" alt />
          </td>
        </tr>
        <tr>
          <td id="img15" class="cell">
            <img src="../../assets/hanlinBar/nothing.png" alt />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td id="img5" class="cell">
            <img src="../../assets/hanlinBar/popcorn.png" alt />
          </td>
        </tr>
        <tr>
          <td id="img14" class="cell">
            <img src="../../assets/hanlinBar/mealSet.png" alt />
          </td>
          <!-- <td></td> -->
          <td colspan="3">
            <div class="text-center">
              <button
                v-bind:disabled="isStarted"
                class="btn btn-lg btn-warning"
                @click="rotation"
              >START</button>
            </div>
          </td>
          <!-- <td></td> -->
          <td id="img6" class="cell">
            <img src="../../assets/hanlinBar/drink.png" alt />
          </td>
        </tr>
        <tr>
          <td id="img13" class="cell">
            <img src="../../assets/hanlinBar/popcorn6.png" alt />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td id="img7" class="cell">
            <img src="../../assets/hanlinBar/mealSet.png" alt />
          </td>
        </tr>
        <tr>
          <td id="img12" class="cell">
            <img src="../../assets/hanlinBar/popcorn.png" alt />
          </td>
          <td id="img11" class="cell">
            <img src="../../assets/hanlinBar/nothing.png" alt />
          </td>
          <td id="img10" class="cell">
            <img src="../../assets/hanlinBar/drink.png" alt />
          </td>
          <td id="img9" class="cell">
            <img src="../../assets/hanlinBar/popcorn.png" alt />
          </td>
          <td id="img8" class="cell">
            <img src="../../assets/hanlinBar/drink.png" alt />
          </td>
        </tr>
      </table>
    </div>
    <Loading v-show="isLoading"></Loading>
  </div>

</template>

<script>
import Loading from '@/components/Loading.vue'
export default {
  data() {
    return {
      isStarted: false,
      initRotateIndex: 0,   //一開始藍框在哪
      //各倍率中的機率，應和為1。依序是爆米花、飲料、套餐、5倍BAR、可愛爆米花、7倍BAR和10倍BAR
      bettingOddsArray: [0.5, 0.3, 0.1, 0.05, 0.03, 0.02, 0.01],    
      winOdds: 0.8,   //不骰中XX的機率
      endPrizeArray: [],
      endPrizeIndex: 0,
      gamePoint: 100,
      betPopcorn: 0,
      betDrink: 0,
      betMealSet: 0,
      betBar: 0,
      endPrize: 0,
      i:0,
      moveTime:0,
      lastRandToSlow:0,
      account:"",
      isLoading:true,
      updatePoint:0,
      winPoint:0,
      toastMessage:"",
      musicPlayed:[0,0],
      runMusic: new Audio(require("../../assets/hanlinBar/pt2-run.mp3")),  //跑的音樂
      slowMusic: new Audio(require("../../assets/hanlinBar/pt3-slow.mp3")),  //慢下來的音樂
      loseMusic: new Audio(require("../../assets/hanlinBar/lose.mp3")),  //沒中的音樂
      smallWinMusic: new Audio(require("../../assets/hanlinBar/smallWin.mp3")),  //得小獎的音樂
    };
  },
  components:{Loading},
  mounted() {
    this.setProbability();     // 初始化機率
    this.setMemberPoint();     // 讀取會員點數
  },
  watch: {
    betPopcorn: function() {
      this.betPopcorn = parseInt(this.betPopcorn);
        if (this.totalPoint<0) this.betPopcorn = this.gamePoint-this.betDrink-this.betMealSet-this.betBar;
        else if (this.betPopcorn < 0||isNaN(this.betPopcorn)) this.betPopcorn = 0;

    },
    betDrink: function() {
      this.betDrink = parseInt(this.betDrink);
      if (this.totalPoint<0) this.betDrink = this.gamePoint-this.betPopcorn-this.betMealSet-this.betBar;
      else if (this.betDrink < 0 ||isNaN(this.betDrink)) this.betDrink = 0;
    },
    betMealSet: function() {
      this.betMealSet = parseInt(this.betMealSet);
      if (this.totalPoint<0) this.betMealSet = this.gamePoint-this.betPopcorn-this.betDrink-this.betBar;
      else if (this.betMealSet < 0 ||isNaN(this.betMealSet)) this.betMealSet = 0;
    },
    betBar: function() {
      this.betBar = parseInt(this.betBar);
      if (this.totalPoint<0) this.betBar = this.gamePoint-this.betPopcorn-this.betDrink-this.betMealSet;
      else if (this.betBar < 0 ||isNaN(this.betBar)) this.betBar = 0;
    },
  },
  computed: {
    totalPoint: function() {
      return (
        this.gamePoint -
        this.betPopcorn -
        this.betDrink -
        this.betMealSet -
        this.betBar
      );
    }
  },
  methods: {
    // 點下開始的判斷以及初始化
    rotation() {
      this.setMemberPoint();  //開始前再檢查一次有沒有點數
      this.setProbability();     // 初始化機率
      if (this.gamePoint<=0) {
        this.$toasted.error("沒有點數囉", {
          theme: "bubble",
          duration: 3000
        });
      }else if(this.gamePoint - this.totalPoint <= 0){
        this.$toasted.error("麻煩先下注", {
          theme: "bubble",
          duration: 3000
        });
      } else {
        this.endPrize =
          this.endPrizeArray[
            Math.floor(Math.random() * this.endPrizeArray.length)
          ] +
          (Math.round(Math.random() * 1) + 5) * 16;
        this.isStarted = true;

        if (document.getElementsByClassName("cellChange")[this.initRotateIndex])
          document.getElementsByClassName("cellChange")[this.initRotateIndex].classList.remove("cellChange");

        //還沒跑完就更新資料，等跑完才映出資料
        this.toastMessage = "";
        this.winPoint = 0;
        this.updatePoint = 0;
        var _this = this;
        switch (_this.endPrize % 16) {
            case 5:
            case 9:
            case 12:
              if (_this.betPopcorn > 0) {
                _this.winPoint = 2 * _this.betPopcorn;
                _this.toastMessage = "命中爆米花啦！恭喜得到2倍點數： " + 2 * _this.betPopcorn +"點";
              } 
              break;
            case 0:
            case 6:
            case 8:
            case 10:
              if (_this.betDrink > 0) {
                _this.winPoint += 3 * _this.betDrink;
                _this.toastMessage = "命中可樂啦！恭喜得到3倍點數： " + 3 * _this.betDrink + "點";
              } 
              break;
            case 7:
            case 14:
              if (_this.betMealSet > 0) {
                _this.winPoint += 4 * _this.betMealSet;
                _this.toastMessage = "命中套餐啦！恭喜得到3倍點數： " +4 * _this.betMealSet +"點";
              }
              break;
            case 3:
              if (_this.betBar > 0) {
                _this.winPoint += 5 * _this.betBar;
                _this.toastMessage = "命中5倍Bar啦！恭喜得到5倍點數： " + 5 * _this.betBar + "點";
              }
              break;
            case 13:
              if (_this.betPopcorn > 0) {
                _this.winPoint += 6 * _this.betPopcorn;
                _this.toastMessage = "命中可愛爆米花啦！恭喜得到6倍點數： " +6 * _this.betPopcorn +"點";
              }
              break;
            case 1:
              if (_this.betBar > 0) {
                _this.winPoint += 7 * _this.betBar;
                _this.toastMessage = "命中7倍Bar啦！恭喜得到7倍點數： " + 7 * _this.betBar + "點";
              }
              break;
            case 2:
              if (_this.betBar > 0) {
                _this.winPoint += 10 * _this.betBar;
                _this.toastMessage = "命中10倍Bar啦！恭喜得到10倍點數： " +10 * _this.betBar +"點";
              }
              break;
            default:
              break;
        }
        this.updatePoint = parseInt(this.totalPoint) -parseInt(this.gamePoint) + parseInt(this.winPoint) ;
        console.log(`UP:${this.updatePoint} GP:${this.gamePoint} WP:${this.winPoint} TP:${this.totalPoint}`);
        this.updateMemberPoint();    //更新會員資料

        // 初始化一開始被框到的位置跟移動速度
        this.i=0;
        this.moveTime = 50;
        // this.lastRandToSlow = Math.ceil(Math.random()*5+3);
        this.lastRandToSlow = 5;
        this.running();
      }
    },
    // 開始動的邏輯
    running() {
      var _this = this;

      setTimeout(function() {

      _this.slowMusic.loop=true;
      if(!_this.musicPlayed[0]){
        _this.runMusic.play();
        _this.musicPlayed[0] = 1;
      }


        // console.log(_this.initRotateIndex);
        // console.log(_this.moveTime);
        // console.log("i: "+_this.i);
        document.getElementById("img" + ((_this.initRotateIndex + _this.i) % 16)).classList.remove("cellBack");
        document.getElementById("img" + ((_this.initRotateIndex + _this.i) % 16)).classList.add("cellChange");
        if (((_this.initRotateIndex + _this.i) % 16) - 1 >= 0){
          document.getElementById("img" + (((_this.initRotateIndex + _this.i) % 16) - 1)).classList.remove("cellChange");
          document.getElementById("img" + (((_this.initRotateIndex + _this.i) % 16) - 1)).classList.add("cellBack");
        }

        if ((_this.initRotateIndex + _this.i) % 16 == 15 &&(_this.initRotateIndex + _this.i)!=_this.endPrize) {
          setTimeout(function() {document.getElementById("img" + 15).classList.remove("cellChange")}, _this.moveTime);
          document.getElementById("img" + 15).classList.add("cellBack");
        }
        _this.i++;
        


        // 設大概要剩幾個的時候做線性減速
        if (_this.initRotateIndex + _this.i >_this.endPrize-_this.lastRandToSlow){
          _this.moveTime = 450-(_this.endPrize -_this.i-_this.initRotateIndex)*300/(_this.lastRandToSlow);

          _this.runMusic.pause();
          _this.runMusic.currentTime = 0;
          if(!_this.musicPlayed[1]){
            _this.slowMusic.play();
            _this.musicPlayed[1] = 1;
          }
        }
  
        //結束
        if (_this.initRotateIndex + _this.i > _this.endPrize) {

          _this.slowMusic.pause();
          _this.slowMusic.currentTime = 0;
          if(_this.winPoint>0){
            _this.smallWinMusic.play();
            _this.$toasted.success(_this.toastMessage,{
                      theme: "bubble",
                      duration: 3000
                    });
          }else{
            _this.loseMusic.play();
            _this.$toasted.info("差了一點點，再試一次吧!", {
                  theme: "bubble",
                  duration: 3000
               });
          }

          _this.musicPlayed[0]=0;
          _this.musicPlayed[1]=0;
          _this.setMemberPoint();

          _this.betPopcorn = 0;
          _this.betDrink = 0;
          _this.betMealSet = 0;
          _this.betBar = 0;
          _this.isStarted = false;
          _this.initRotateIndex = _this.endPrize % 16;
          return;
        }
        // console.log("123");
        _this.running();
      }, _this.moveTime);
    },
    // 設定機率
    setProbability() {
      this.axios.get(`${this.$api}/bonus/getProbability`).then(response=>{
        this.winOdds = response.data[0].winOdds;
        this.bettingOddsArray = response.data[0].bettingOddsArray;
        this.endPrizeIndex = 0;
      var totalOdds = 0;
      this.endPrizeArray = [];
      for (let k = 0; k < 7; k++) totalOdds += this.bettingOddsArray[k];
      // console.log("totalOdds: " + totalOdds);
      console.log("winOdds: " + this.winOdds);
      for (let k = 0; k < 7; k++) {
        this.bettingOddsArray[k] = Math.floor(
          ((this.bettingOddsArray[k] / totalOdds) * this.winOdds).toFixed(2) *
            100
        );
        switch (k) {
          case 0:
            var prizeArray = [5, 9, 12];
            for (let j = 0; j < this.bettingOddsArray[k]; j++) {
              var prize =
                prizeArray[Math.floor(Math.random() * prizeArray.length)];
              this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
              this.endPrizeIndex += 1;
            }
            break;
          case 1:
            prizeArray = [0, 6, 8, 10];
            for (let j = 0; j < this.bettingOddsArray[k]; j++) {
              prize = prizeArray[Math.floor(Math.random() * prizeArray.length)];
              this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
              this.endPrizeIndex += 1;
            }
            break;
          case 2:
            prizeArray = [7, 14];
            for (let j = 0; j < this.bettingOddsArray[k]; j++) {
              prize = prizeArray[Math.floor(Math.random() * prizeArray.length)];
              this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
              this.endPrizeIndex += 1;
            }
            break;
          case 3:
            prizeArray = [3];
            for (let j = 0; j < this.bettingOddsArray[k]; j++) {
              prize = prizeArray[Math.floor(Math.random() * prizeArray.length)];
              this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
              this.endPrizeIndex += 1;
            }
            break;
          case 4:
            prizeArray = [13];
            for (let j = 0; j < this.bettingOddsArray[k]; j++) {
              prize = prizeArray[Math.floor(Math.random() * prizeArray.length)];
              this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
              this.endPrizeIndex += 1;
            }
            break;
          case 5:
            prizeArray = [1];
            for (let j = 0; j < this.bettingOddsArray[k]; j++) {
              prize = prizeArray[Math.floor(Math.random() * prizeArray.length)];
              this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
              this.endPrizeIndex += 1;
            }
            break;
          case 6:
            prizeArray = [2];
            for (let j = 0; j < this.bettingOddsArray[k]; j++) {
              prize = prizeArray[Math.floor(Math.random() * prizeArray.length)];
              this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
              this.endPrizeIndex += 1;
            }
            break;
        }
      }
      prizeArray = [4, 11, 15];
      for (let j = 0; j < Math.floor(100 * (1 - this.winOdds)); j++) {
        prize = prizeArray[Math.floor(Math.random() * prizeArray.length)];
        this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
        this.endPrizeIndex += 1;
      }
      })
      // console.log(this.endPrizeArray);
    },
    setMemberPoint(){
      this.account = sessionStorage.nowAcc;
      this.axios.get(`${this.$api}/bonus/getMemberPoint/${this.account}`).then(response=>{
        this.gamePoint=response.data[0].point;
        this.isLoading=false;
      })
    },
    updateMemberPoint(){
      this.account = sessionStorage.nowAcc;
      var postData = new FormData();
      var current_point = parseInt(this.gamePoint) + parseInt(this.updatePoint);
      console.log("account:"+this.account+"CP:"+current_point+"UP:"+this.updatePoint);
      postData.append('account',this.account);
      postData.append('current_point',current_point);    //該用gamepoint嗎?還是用gamepoint+updatepoint
      postData.append('update_point',this.updatePoint);
      this.axios.post(`${this.$api}/bonus/updateMemberPoint/${this.account}`, postData) 
            .then(function (response) { 
                console.log(response.data);  
            }).catch(function (error) { 
                console.log(error); 
            }); 
 
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}

.cell {
  width: 15%;
  border: 1px solid black;
}

.cellBack{
  outline:0px solid blue;
  background-color: white;
  transition:outline 0.2s,background-color 0.15s;
  transition-timing-function: ease-in;
}

.cellChange {
  outline: 3px solid blue;
  background-color: rgba(102, 255, 204, 0.7);
  transition:outline 0.1s;
  transition-timing-function: ease-out;
  
}

input {
  width: 80%;
  font-size: 2vh;
}

/*讓number欄位不能滾動 */
input[type=number]::-webkit-inner-spin-button,  
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

.fa {
  width: 18%;
}
i {
  cursor: pointer;
}

p {
  font-size: 1.8vw;
}

</style>