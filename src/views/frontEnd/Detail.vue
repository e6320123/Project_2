<template> 
<div class="container">
<div class="row">
    <div class="col-md-6"> 
        <h1 class="text-center my-4 pl-0"> 
    訂單詳細  </h1>
    </div>
    <div class="col-md-6 d-flex">
        <div class="col-md-6"> 
            <h1 class="text-center my-4 pl-0"> 
        剩餘時間：  </h1>
        </div>
        <div class="col-md-6 d-flex  justify-content-center"> 
            <div class="uk-grid-small uk-child-width-auto align-self-center" uk-grid v-bind:uk-countdown="countDown">
                <!-- <div>
                    <div class="uk-countdown-number uk-countdown-days"></div>
                    <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Days</div>
                </div>
                <div class="uk-countdown-separator">:</div>
                <div>
                    <div class="uk-countdown-number uk-countdown-hours"></div>
                    <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Hours</div>
                </div>
                <div class="uk-countdown-separator">:</div> -->
                <div class="align-self-center row">
                    <div class="uk-countdown-number uk-countdown-minutes text-center" v-bind:class="{redFont:isRed}"  id="min"></div>
                    <div class="uk-countdown-separator pt-2">:</div>
                    <div class="uk-countdown-number uk-countdown-seconds text-center" v-bind:class="{redFont:isRed}"  id="sec"></div>
                </div>
            </div>
        </div>
    </div>
        </div> 
  <div class="row">
    <div class="col-md-6 padding1"> 
    <div class="tab">
        <h6>確認內容</h6> 
        <div> 
            <table>
                <tr>
                    <td>&emsp;名&emsp;&emsp;稱&ensp;:</td>
                    <td>{{list.movieName}}</td>
                </tr>
                <tr> 
                    <td>&emsp;上映地點&ensp;:</td>
                    <td>中佑戲院台中影城</td>
                </tr>
                <tr>
                    <td>&emsp;放映場次&ensp;:</td>
                    <td>{{list.day}}&ensp;{{list.time}}</td>
                </tr>
                <tr>
                    <td>&emsp;大&emsp;&emsp;廳&ensp;:</td>
                    <td>第{{list.hall}}廳</td>
                </tr>
                <tr>
                    <td>&emsp;座&emsp;&emsp;位&ensp;:</td>
                    <td>{{list.seat}}</td>
                </tr>
                <tr>
                    <td>&emsp;票&emsp;&emsp;種&ensp;:</td>
                    <td>
                        {{list.ticketName["0"] + list.ticketNum["0"]}}
                        {{list.ticketName["1"] + list.ticketNum["1"]}}
                        {{list.ticketName["2"] + list.ticketNum["2"]}}
                        {{list.ticketName["3"] + list.ticketNum["3"]}}
                    </td> 
                </tr>
                <tr>
                    <td>&emsp;餐&emsp;&emsp;點&ensp;:</td>
                    <td>
                        {{list.food["0"]+list.foodNum["0"]}}
                        {{list.food["1"]+list.foodNum["1"]}}
                        {{list.food["2"]+list.foodNum["2"]}}
                        <br v-if="list.br">
                        {{list.food["3"]+list.foodNum["3"]}} 
                        {{list.food["4"]+list.foodNum["4"]}} 
                    </td>
                </tr>  
                <tr>
                    <td>&emsp;總&emsp;&emsp;價&ensp;:</td>
                    <td>{{list.total}}</td>
                </tr> 
                <tr>
                    <td>&emsp;折&emsp;&emsp;扣&ensp;:</td>
                    <td>{{list.discount}}</td>
                </tr>  
                <tr>
                    <td>&emsp;使用點數&ensp;:</td>
                    <td>{{list.pointValue}}</td>
                </tr> 
                <tr style="border:0;">
                    <td>&emsp;合&emsp;&emsp;計&ensp;:</td>
                    <td>{{list.real}}</td>
                </tr> 
                <tr style="border:0;">
                    <td>&emsp; </td> 
                    <td>&emsp; </td> 
                </tr> 
                <tr style="border:0;">
                    <td>&emsp; </td>
                    <td>本次消費可獲得點數:&ensp;{{list.getPoint}}點</td>
                </tr> 
            </table>
         </div>
        </div>     
    </div> 
    <div class="col-md-6  padding2">
        <div class="tab2">
            <h6>購買者資訊</h6>   
            <!--input-->
            <div class="editInputGrounp1 input-group input-group-sm mb-3">  
                <span> 真實姓名 &emsp; </span>
                <input v-model="list.memberName" @change="checkInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    </span>
                </div>
                <i v-if="chkInputEmpty['1']" class="empty fa fa-check fa-lg" aria-hidden="true"></i> 
                <i v-if="chkInputRight['1']" class="tick fa fa-check fa-lg" aria-hidden="true"></i>
                <i v-if="chkInputWrong['1']" class="cross fa fa-times fa-lg" aria-hidden="true"></i>
            </div>  
            <!--input-->
            <div class="editInputGrounp input-group input-group-sm mb-3"> 
                <span> 
                    電子信箱 &emsp; 
                </span>
                <input v-model="list.email" @change="checkInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </span>
                </div>
                <i v-if="chkInputEmpty['2']" class="empty fa fa-check fa-lg" aria-hidden="true"></i> 
                <i v-if="chkInputRight['2']" class="tick fa fa-check fa-lg" aria-hidden="true"></i>
                <i v-if="chkInputWrong['2']" class="cross fa fa-times fa-lg" aria-hidden="true"></i>
            </div>  
            <!--input-->
            <div class="editInputGrounp input-group input-group-sm mb-3"> 
                <span>
                    手機號碼 &emsp;
                </span>
                <input v-model="list.phone" @change="checkInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i class="fa fa-phone-square" aria-hidden="true"></i>
                    </span>
                </div>
                <i v-if="chkInputEmpty['3']" class="empty fa fa-check fa-lg" aria-hidden="true"></i>
                <i v-if="chkInputRight['3']" class="tick fa fa-check fa-lg" aria-hidden="true"></i>
                <i v-if="chkInputWrong['3']" class="cross fa fa-times fa-lg" aria-hidden="true"></i>
            </div>   
        </div><!--div"tab2"-->
        <button v-if="list.editBar"  type="button" 
            class="cancelHover loginBtn btn btn-outline-info">
            歡迎光臨 {{list.account}}</button> 
        <button v-if="list.loginBar"  href data-toggle="modal" data-target="#login" type="button" 
            class="loginBtn btn btn-outline-secondary">
            會員登入</button>
        <div class="tab3">
            <h6>會員點數</h6> 
            <!--input-->
            <div class="editInputGrounp input-group input-group-sm mb-1"> 
                <div class="col-12">
                    <span>擁有點數:&ensp;{{showPoint}}</span>
                </div> 
                <div class="col-12">
                    &emsp;
                </div>
                <div class="col-4">
                    <span>
                        輸入使用點數 
                    </span>
                </div>
                <div class="col-5">
                    <input  v-model="selectPoint" :max="maxPoint" :min="minPoint" type="number" class="form-control" id="example-number-input">
                </div>
                <div class="col-3">
                    <button @click="usePoint" type="button" class="btn btn-outline-success"
                        href data-toggle="modal" :data-target="chkPoint" >確定
                    </button>
                </div> 
            </div> 
        </div><!--div"tab3"--> 
        <!-- confirm modal-->
        <div
          class="modal fade"
          id="confirm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="login"
          aria-hidden="true"
        > 
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">確認訂購</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body"> 
                按下確定即送出訂單,確定此筆訂購內容無誤嗎? 
              </div> 
              <div class="modal-body">
              <div class="container"> 
                     <div class="row">
                         <div class="col-md-12">  
                         <button @click="ok()" type="button" class="btn btn-primary" data-dismiss="modal">
                             確定</button> 
                                    &emsp;
                                    &emsp;
                                    &emsp; 
                         <button type="button" class="btn btn-secondary" data-dismiss="modal">
                             取消</button> 
                         </div>
                     </div>
                 </div>
              </div>
            </div>
          </div>
        </div>  
        <!-- confirm modal end-->
        <!-- error modal-->
        <div
          class="modal fade"
          id="error"
          tabindex="-1"
          role="dialog"
          aria-labelledby="login"
          aria-hidden="true"
        > 
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">資料錯誤</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body"> 
                請確認輸入資料無誤
              </div> 
              <div class="modal-body">
              <div class="container"> 
                     <div class="row">
                         <div class="col-md-12">  
                         <button type="button" class="btn btn-primary" data-dismiss="modal">
                             確定</button> 
                         </div> 
                     </div>
                 </div>
              </div>
            </div>
          </div>
        </div>  
        <!-- error modal end-->
        <!-- point modal-->
        <div
          class="modal fade"
          id="point"
          tabindex="-1"
          role="dialog"
          aria-labelledby="login"
          aria-hidden="true"
        > 
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">提醒</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body"> 
                最多可使用點數: {{maxPoint}}點
              </div> 
              <div class="modal-body">
              <div class="container"> 
                     <div class="row">
                         <div class="col-md-12">  
                         <button type="button" class="btn btn-primary" data-dismiss="modal">
                             確定</button> 
                         </div> 
                     </div>
                 </div>
              </div>
            </div>
          </div>
        </div>  
        <!-- point modal end-->
        <div class="btnGroup row"> 
            <router-link  class="btn btn-outline-danger mr-3 router-link1 align-self-center"  to="/order/chooseSeat"><i class="fa fa-undo" aria-hidden="true"></i>上一頁</router-link>
  <button  href data-toggle="modal" :data-target="target" type='submit' name='btn' value='確認送出' class="btn btn-primary">
                <i class="fa fa-check" aria-hidden="true"></i>
                確認訂購
            </button> 
            <button @click="cancel" type='submit' name='btn' value='確認送出' class="router-link1 btn btn-danger">
                <i class="fa fa-times" aria-hidden="true"></i> 
                取消訂購
            </button> 
        </div>  
    </div> <!-- col-md-6  padding2 -->
  </div>  <!-- row -->

</div> <!-- container -->
</template>


<script> 
export default { 
    data(){
        return {
            list:{
                movieName: '',
                theater: '',
                day: '',
                time: '', 
                food:{"0":"","1":"","2":"","3":"","4":""},
                foodNum:{"0":"","1":"","2":"","3":"","4":""},
                ticketName:{"0":"","1":"","2":"","3":""},
                ticketNum:{"0":"","1":"","2":"","3":""},
                price:{"0":190,     "1":170,    "2":50,   "3":70,      "4":30,     "5":50,     "6":150,  "7":130,
                // Price {"0":全票,"1":優待票,"2":可樂 大,"3":爆米花 大,"4":可樂 中,"5":爆米花 中,"6":學生票,"7":敬老票}
                    //"8":爆米花 小
                       "8":30
                },
                ticketData:{"全票":0,"優待票":0,"學生票":0,"敬老票":0},
                foodData:{"爆米花 小":0,"爆米花 中":0,"爆米花 大":0,"可樂 中":0,"可樂 大":0},
                discount: 1,
                total:0,
                real:0, 
                seat: '',
                hall: '',
                account: '',
                memberName:'', 
                email:' ',
                phone:' ', 
                loginBar:1, 
                editBar:0, 
                br:1,
                orderNumber:"",
                pointValue:0,
                getPoint:0,
                isPost:"",
            },   
        target:"",
        chkInputEmpty:{"1":1,"2":1,"3":1,}, 
        chkInputRight:{"1":0,"2":0,"3":0,},  
        chkInputWrong:{"1":0,"2":0,"3":0,},  
        FinishPageData:"" ,
        maxPoint:0,
        minPoint:0,
        havePoint:0,
        showPoint:0, 
        selectPoint:0,
        chkPoint:"",
        real2:0,
        countDown:0,
        countInterval:null,
        isRed:0
        }
    }, 
    created() {
        console.log("created"); 
        this.getCountDownTime(); 
    },
    mounted() {  
        if(!(sessionStorage.getItem('choosedSeat')))
            return window.location.href="./#/order"; 
        this.checkCountDown();
        this.getNowDiscountData();
        this.countMoney();  
        this.checkLoginAndGetData();   
        this.list.hall = sessionStorage.courtsID;  
    },
    destroyed() {
        if(!this.isPost)  {
            this.recoverSeats();
        }  //isPost決定是不是到完成訂單
        console.log("destroyed");
        if(this.countInterval){
            clearInterval(this.countInterval);

        }
    }, 
    methods:{
            getNowDiscountData(){
        this.axios.get(`${this.$api}/discount/getNowDiscountData`).then(response=>{
            if(response.data.length){
            this.list.discount = parseInt(response.data[0].discount)/100;    //抓第一筆折扣
            }else{
            this.list.discount = 1;
            }
            this.countMoney();
        })
        },   
        checkCountDown:function(){      
            var minute = document.getElementById("min").innerText;
            var second = document.getElementById("sec").innerText;
            var _this = this;
            this.countInterval = setInterval(function(){
                minute = document.getElementById("min").innerText;
                second = document.getElementById("sec").innerText;
                if(parseInt(minute) < 1 && parseInt(second)<=60){
                    _this.isRed = 1;
                }

                if(minute =="00"&&second=="00"){
                    clearInterval(_this.countInterval);
                    _this.$router.push("/order/chooseSeat");
                }
            },1000)
        },
        usePoint:function(){   
            this.selectPoint = Number(this.selectPoint); 
            if(this.selectPoint>=0 && this.selectPoint<=this.maxPoint){  
                this.showPoint = this.havePoint; 
                this.showPoint -= this.selectPoint;
                this.list.pointValue = this.selectPoint;
                this.countMoney();
                this.chkPoint = "";
            }else{ 
                this.showPoint = this.havePoint;
                this.list.pointValue = 0;
                this.countMoney();
                this.chkPoint = "#point";
            }  
        }, 
        chkIcon:function(num,empty,right,wrong){
            this.chkInputEmpty[num] = empty;
            this.chkInputRight[num] = right;
            this.chkInputWrong[num] = wrong;
         },
        checkInput:function(){  
            var patt1 = /[\u4e00-\u9fa5a-zA-Z]/.test(this.list.memberName); 
                this.chkIcon('1',0,patt1,!patt1); 
            if(this.list.memberName.trim()=="") 
                this.chkIcon('1',1,0,0);
            var patt21 = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.com$/.test(this.list.email); 
            var patt22 = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.com\.[a-zA-Z0-9_]+$/.test(this.list.email);
                this.chkIcon('2',0,patt21+patt22,!(patt21+patt22));
            if(this.list.email.trim()=="")
                this.chkIcon('2',1,0,0); 
            var patt3 = /^09\d{8}$/.test(this.list.phone.trim());  
                this.chkIcon('3',0,patt3,!patt3);
            if(this.list.phone.trim()=="")
                this.chkIcon('3',1,0,0); 
            if(this.chkInputRight['1'] && this.chkInputRight['2'] && this.chkInputRight['3'])  
                return this.target = "#confirm"; 
            this.target = "#error";
        }, 
        post:function(){  
            this.isPost = 1;
            var ticketTotalNum = JSON.parse(JSON.parse(sessionStorage.movie).totalTicketsNum);
            var JSONData = JSON.stringify(this.list);
            var foodData   = this.list.foodData;
            var ticketData = this.list.ticketData; 
            var postData = new FormData(); 
            var screeningID = sessionStorage.getItem('screeningID');
            var courts_id = sessionStorage.courtsID;
            var real = this.real2;
            var usePoint = this.list.pointValue;
            postData.append('JSONData', JSONData); 
            postData.append('foodData', foodData); 
            postData.append('ticketData', ticketData);  
            postData.append('screeningID', screeningID);  
            postData.append('ticketTotalNum', ticketTotalNum);  
            postData.append('courts_id', courts_id);   
            postData.append('real', real);   
            postData.append('usePoint', usePoint);   
            // var SQL = 'show'  ; 
            // var SQL = "desc"  ;
            // var SQL = "select"; 
            // var ID ="2"; postData.append('ID', ID);
            var SQL = "save"  ;  
            postData.append('SQL', SQL);     
            this.axios.post(`${this.$api}/detail/saveOrder`, postData) 
            .then(function (response) {  
                console.log(response.data);  
            }).catch(function (error) { 
                console.log(error); 
                alert("訂購失敗，座位已被選走");
            });  
            
            if(sessionStorage.status){      //如果是會員要有點數新增
                this.axios.post(`${this.$api}/detail/updateMemberPoint`, postData) 
            .then(function (response) { 
                console.log(response.data);
            }).catch(function (error) { 
                console.log(error); 
            }); 
            }

            //測試
            //     this.axios.post(`${this.$api}/detail/getPointRecord`, postData) 
            // .then(function (response) { 
            //     console.log(response.data);
            // }).catch(function (error) { 
            //     console.log(error); 
            // }); 
        }, 
        ok:function(){   
            this.getOrderNumber();
            sessionStorage.setItem('FinishPageData',JSON.stringify(this.list)); 
            this.post();
            this.clrSession(); 
            window.location.href="./#/order/FinishDetail";
        },
        cancel:function(){ 
            this.clrSession(); 
            window.location.href="./#/order";
        },
        // lockSeats(){
        //   var postData = new FormData();
        //   postData.append('screeningID', sessionStorage.screeningID);
        //   postData.append('choosedSeat', sessionStorage.choosedSeat);

        //   this.axios.post(`${this.$api}/detail/lockScreeningSeat`,postData).then(response => {   //看位子還有沒有，有的話就鎖住，沒有就跳出訊息
        //     console.log(response.data);
        //     if(response.data=="there are not enough seats."){
        //       alert("位子已經被選走囉!再看看別的吧!");
        //       this.$router.push("/order/chooseSeat");     //沒位子了也跳回選位子
        //     }
        //     }).catch(error=>{
        //         console.log("lockSeatsError: "+error);
        //         this.$router.push("/order/chooseSeat");     //沒鎖成功跳回選位子
        //     })
        // },
        recoverSeats(){
            var postData = new FormData();
            postData.append('screeningID', sessionStorage.screeningID);
            postData.append('choosedSeat', sessionStorage.choosedSeat);
            this.axios.post(`${this.$api}/detail/unlockScreeningSeat`,postData).then(response=>{
                console.log(response.data);
            }).catch(()=>{
                console.log("Recover seats failed.");
            })
        },
        getCountDownTime(){
            var postData = new FormData();
            postData.append('screeningID', sessionStorage.screeningID);
            postData.append('choosedSeat', sessionStorage.choosedSeat);
            this.axios.post(`${this.$api}/detail/getCountDownTime`,postData).then(response=>{
                var nowTime = new Date(response.data);
                nowTime.setMinutes(nowTime.getMinutes()+3);
                nowTime = nowTime.toLocaleString('zh-tw',{hour12:false}).replace(/\//g,"-");
                this.countDown = "date: " + nowTime + "+08:00";
                console.log(nowTime);
            }).catch(()=>{
                console.log("getCountDownTime failed.");
            })
            
        },
        countMoney:function(){ 
            var ticketNum =JSON.parse(JSON.parse(sessionStorage.getItem('movie')).ticketsNum); 
            var mealsNum =JSON.parse(JSON.parse(sessionStorage.getItem('movie')).mealsNum);
            this.list.total=this.list.price["0"]*(ticketNum["0"]?ticketNum["0"]:0) +
                            this.list.price["1"]*(ticketNum["1"]?ticketNum["1"]:0) +
                            this.list.price["6"]*(ticketNum["2"]?ticketNum["2"]:0) +
                            this.list.price["7"]*(ticketNum["3"]?ticketNum["3"]:0) +

                            this.list.price["8"]*(mealsNum["0"]?mealsNum["0"]:0) +
                            this.list.price["5"]*(mealsNum["1"]?mealsNum["1"]:0) +
                            this.list.price["3"]*(mealsNum["2"]?mealsNum["2"]:0) +
                            this.list.price["4"]*(mealsNum["3"]?mealsNum["3"]:0) +
                            this.list.price["2"]*(mealsNum["4"]?mealsNum["4"]:0) ;
            this.real2 =Math.ceil(this.list.total*this.list.discount); 
            this.list.getPoint = Math.floor(this.real2/100); 
            this.list.real =Math.ceil(this.list.total*this.list.discount) - this.list.pointValue; 
        },
        memberGetData: function(){ 
            this.list.account = sessionStorage.getItem('nowAcc'); 
            this.list.memberName = sessionStorage.getItem('nowName'); 
            this.list.email = sessionStorage.getItem('nowEmail'); 
            this.list.phone = sessionStorage.getItem('nowPhone'); 
        },
        checkLoginAndGetData: function(){
            this.list.foodData   = JSON.parse(sessionStorage.getItem('movie')).mealsNameNum;
            this.list.ticketData = JSON.parse(sessionStorage.getItem('movie')).ticketsNameNum;
            var choosedSeat = sessionStorage.getItem('choosedSeat');
            this.list.seat = choosedSeat; 
            var movie = JSON.parse(sessionStorage.getItem('movie')); 
            var ticketNum =JSON.parse(movie.ticketsNum); 
            if(ticketNum["0"]){
                this.list.ticketName["0"] = "全票 "; 
                this.list.ticketNum["0"] = "x"+ ticketNum["0"] + "  ";
            }
            if(ticketNum["1"]){
                this.list.ticketName["1"] = "優待票 "; 
                this.list.ticketNum["1"] = "x"+ ticketNum["1"];
            }   
            if(ticketNum["2"]){
                this.list.ticketName["2"] = "學生票 "; 
                this.list.ticketNum["2"] = "x"+ ticketNum["2"] + "  ";
            }
            if(ticketNum["3"]){
                this.list.ticketName["3"] = "敬老票 "; 
                this.list.ticketNum["3"] = "x"+ ticketNum["3"];
            }   
            var mealsNum = JSON.parse(JSON.parse(sessionStorage.getItem('movie')).mealsNum);
               
            if(mealsNum["0"]){
                this.list.food["0"] = "爆米花 (小) "; 
                this.list.foodNum["0"] = "x"+ mealsNum["0"] + "  ";
            }
            if(mealsNum["1"]){
                this.list.food["1"] = "爆米花 (中) "; 
                this.list.foodNum["1"] = "x"+ mealsNum["1"] + "  ";
            }
            if(mealsNum["2"]){
                this.list.food["2"] = "爆米花 (大) "; 
                this.list.foodNum["2"] = "x"+ mealsNum["2"] + "  ";
            }
            if(mealsNum["3"]){
                this.list.food["3"] = "可樂 (中) ";
                this.list.foodNum["3"] = "x"+ mealsNum["3"] + "  ";
            } 
            if(mealsNum["4"]){
                this.list.food["4"] = "可樂 (大) "; 
                this.list.foodNum["4"] = "x"+ mealsNum["4"] + "  ";
            } 
            if(!(mealsNum["0"]+mealsNum["1"]+mealsNum["2"]+mealsNum["3"]+mealsNum["4"]))
                this.list.food["0"] = "無"; 

            //若上排無食物
            if(!(this.list.foodNum["0"] || this.list.foodNum["1"])){
                this.list.br=0;
            }else{
                this.list.br=1;
            } 
            this.list.movieName = JSON.parse(sessionStorage.getItem('movie')).moviesName;
            this.list.day = JSON.parse(sessionStorage.getItem('movie')).moviesDay;
            this.list.time = JSON.parse(sessionStorage.getItem('movie')).moviesTime;
            this.list.ticket = JSON.parse(sessionStorage.getItem('movie')).totalTicketsNum;
            // 登入狀態 
            if (sessionStorage.getItem('status')=="login") { 
                this.memberGetData();    //自動代入會員資料
                this.checkInput(); 
                this.list.loginBar = 0; //hide登入鈕
                this.list.editBar = 1;  //show歡迎光臨  
                this.target = "#confirm"; 
                // var acc = 'abc123';  
                var acc = sessionStorage.nowAcc;  
                let _this = this;
                this.axios.get(`${this.$api}/bonus/getMemberPoint/${acc}`) 
                .then(function (response) { 
                    console.log(response.data[0].point); 
                    _this.havePoint = Number(response.data[0].point);
                    console.log(_this.havePoint); 
                    _this.showPoint = _this.havePoint; 
                    console.log(_this.showPoint);
                    _this.maxPoint = _this.havePoint<= _this.list.real? _this.havePoint:_this.list.real;
                }).catch(function (error) { 
                    console.log(error);  
                }); 
                
            // 非登入狀態 
            }else{ 
                this.list.loginBar = 1; //show登入鈕
                this.list.editBar = 0;  //hide歡迎光臨
                this.target = "#error";
                // alert("no login");
            } 
        },
        getOrderNumber:function(){ 
            if(!(JSON.parse(sessionStorage.getItem('movie')).ticketsNum || JSON.parse(sessionStorage.getItem('movie')).mealsNum)) 
                return this.orderNumber = "no session";
            var d = new Date();
            var month = d.getMonth()< 9?"0"+String(d.getMonth()+1):String(d.getMonth()+1);
            var dNum = d.getDate()< 10?"0"+String(d.getDate()):String(d.getDate());
            var hour = d.getHours()< 10?"0"+String(d.getHours()):String(d.getHours());
            var minute = d.getMinutes()< 10?"0"+String(d.getMinutes()):String(d.getMinutes());
            this.ticketsNum = JSON.parse(JSON.parse(sessionStorage.getItem('movie')).ticketsNum);
            this.mealsNum = JSON.parse(JSON.parse(sessionStorage.getItem('movie')).mealsNum);
            this.list.orderNumber =
                String(this.ticketsNum["0"])+String(this.ticketsNum["1"])+
                String(this.ticketsNum["2"])+String(this.ticketsNum["3"])+
                String(this.mealsNum["0"])+
                String(this.mealsNum["1"])+String(this.mealsNum["2"])+String(this.mealsNum["3"])+
                String(d.getFullYear()-2000)+ month + dNum + hour + minute; 
        },
        clrSession:function(){    
            sessionStorage.removeItem('movie');  
            sessionStorage.removeItem('movieIndex');  
            sessionStorage.removeItem('choosedSeat');  
        },
    }  
} 
</script>

<style lang="scss" scoped>  
.redFont{
    color: red;
}
//-----------------------------------RWD  寬度769px以上-------------------------------------

@media only screen and (min-width: 769px) {
    //  h1{
    //     font-size: 4vw;
    //  }
     .modal-body{  
        text-align:center;
        font-size:20px; 
        border-bottom:1px solid rgb(222,226,230); 
    } 
    .col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-12{ 
        padding:0;  
    }
    .padding1{
        padding:0% 1% 0% 1%; 
    }
    .padding2{ 
        padding:0% 1% 0% 1%;
    } 
    .tab{
        width:95%;
        height:90%;
    } 
    .tab,.tab2,.tab3{  
        border-radius:5px; 
        border: 1px solid gray; 
        h6{ 
            text-align:left;
            padding:10px 0px 10px 20px;
            background-color:gray;
            color:white;
        }
        div{  
            margin:20px 20px 15% 20px; 
            font-size:16px; 
            table{   
                text-align:left;
                width:100%; 
                tr{ 
                    border-bottom: 2px solid gray;
                    td:first-child{
                        width:25%;
                        padding:5px 0px ; 
                    }
                    td:last-child{
                        width:75%;
                        padding:5px 0px ; 
                    }
                }
                tr:last-child{ 
                    border-bottom: 0;
                }
            } 
        }
    }  
    .empty{
        color:white;
        padding:5px 0 0 5px;
    }
    .tick{ 
        color:rgb(30,225,90);
        padding:5px 0 0 5px;
    }
    .cross{ 
        color:red;
        padding:5px 0 0 5px;
    }
    .tab2,.tab3{   
        button:last-child{ 
            width:100%; 
        }
        .input-group{
        margin-right:70px 40px; 
        }
        .editInputGrounp1{  
            padding:10px 20px 0px 20px ;
            span{
                font-size:20px;
            } 
        }
        .editInputGrounp{   
            padding:0 20px 0px 20px ; 
            span{
                font-size:20px;
            } 
        }   
        .redColor{  
            color:red; 
        }
        .greenColor{
            color:rgb(30,225,90);
        }
        .InfoGrounp{ 
            padding:10px 10px 10px 10px ; 
            span{
                font-size:20px;
            } 
        }
        div{
            border: 0;
            margin:0px;  
            .fa{//icon寬度
                width:18px;
            }
        }
    }
    .tab3{ 
        .editInputGrounp{  
            padding:20px 20px 20px 20px ;
            span:not(:first-child){
                font-size:25px;
                width:10px; 
            }
        } 
    } 
    .btnGroup{  
        margin:5% 0%;   //上下間隔 
        button{
            margin:0% 1% 0% 0%;  
            width:30%;
            font-size:20px;
        }  
        .router-link1{ 
            margin:0% 0% 0% 1%;  
            width:30%;
            font-size:20px; 
        } 
    }
    .loginBtn{ 
         margin:2% 0% 2% 0%;   //上下間隔 
         width:100%; 
    }
    .cancelHover:hover{ 
        background-color: white;
        color:rgb(23,162,184);
    }
}//-----------------------------RWD  寬度769px以上-----------------------------

//------------------------------RWD  寬度768px~321px---------------------------
@media only screen and (min-width: 321px) and (max-width: 768px) {
    h1{
        font-size:20px;
    }
     .modal-body{  
        text-align:center;
        font-size:20px; 
        border-bottom:1px solid rgb(222,226,230); 
    } 
    .col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-12{ 
        padding:0;  
    }
    .padding1{
        padding:0% 1% 0% 1%; 
    }
    .padding2{ 
        padding:0% 1% 0% 1%;
    }  
    .tab,.tab2,.tab3{  
        margin:2% 0;
        border-radius:5px; 
        border: 1px solid gray; 
        h6{ 
            text-align:left;
            padding:10px 0px 10px 20px;
            background-color:gray;
            color:white;
        }
        div{  
            margin:20px 20px 15% 20px; 
            font-size:16px; 
            table{   
                text-align:left;
                width:100%; 
                tr{ 
                    border-bottom: 2px solid gray;
                    td:first-child{
                        // width:25%;
                        padding:5px 0px ; 
                    }
                    td:last-child{
                        // width:75%;
                        padding:5px 0px ; 
                    }
                }
                tr:last-child{ 
                    border-bottom: 0;
                }
            } 
        }
    }  
    .empty{
        color:white;
        padding:5px 0 0 5px;
    }
    .tick{ 
        color:rgb(30,225,90);
        padding:5px 0 0 5px;
    }
    .cross{ 
        color:red;
        padding:5px 0 0 5px;
    }
    .tab2,.tab3{   
        button:last-child{ 
            width:100%; 
        }
        .input-group{
        margin-right:70px 40px; 
        }
        .editInputGrounp1{  
            padding:10px 20px 0px 20px ;
            span{
                font-size:20px;
            } 
        }
        .editInputGrounp{   
            padding:0 20px 0px 20px ; 
            span{
                font-size:20px;
            } 
        }   
        .redColor{  
            color:red; 
        }
        .greenColor{
            color:rgb(30,225,90);
        }
        .InfoGrounp{ 
            padding:10px 10px 10px 10px ; 
            span{
                font-size:20px;
            } 
        }
        div{
            border: 0;
            margin:0px;  
            .fa{//icon寬度
                width:18px;
            }
        }
    }
    .tab3{ 
        .editInputGrounp{  
            padding:20px 20px 20px 20px ;
            span:not(:first-child){
                font-size:25px;
                width:10px; 
            }
        } 
    } 
    .btnGroup{  
        margin:5% 0%;   //上下間隔 
        button{
            margin:0% 1% 0% 0%;  
            width:30%;
            font-size:20px;
        }  
        .router-link1{ 
            margin:0% 0% 0% 1%;  
            width:30%;
            font-size:20px; 
        } 
    }
    .loginBtn{ 
         margin:2% 0% 2% 0%;   //上下間隔 
         width:100%; 
    }
    .cancelHover:hover{ 
        background-color: white;
        color:rgb(23,162,184);
    }
}//---------------------------RWD  寬度768px~321px---------------------------

//----------------------------RWD  寬度320px~0px-----------------------------
@media only screen and (min-width: 0px) and (max-width: 320px){
      .modal-body{  
        text-align:center;
        font-size:20px; 
        border-bottom:1px solid rgb(222,226,230); 
    } 
    .col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-12{ 
        padding:0;  
    }
    .padding1{
        padding:0% 1% 0% 1%; 
    }
    .padding2{ 
        padding:0% 1% 0% 1%;
    } 
    .tab,.tab2,.tab3{  
        border-radius:5px; 
        border: 1px solid gray; 
        h6{ 
            text-align:left;
            padding:10px 0px 10px 20px;
            background-color:gray;
            color:white;
        }
        div{  
            margin:20px 20px 15% 20px; 
            font-size:16px; 
            table{   
                text-align:left;
                width:100%; 
                tr{ 
                    border-bottom: 2px solid gray;
                    td:first-child{
                        width:25%;
                        padding:5px 0px ; 
                    }
                    td:last-child{
                        width:75%;
                        padding:5px 0px ; 
                    }
                }
                tr:last-child{ 
                    border-bottom: 0;
                }
            } 
        }
    }  
    .empty{
        color:white;
        padding:5px 0 0 5px;
    }
    .tick{ 
        color:rgb(30,225,90);
        padding:5px 0 0 5px;
    }
    .cross{ 
        color:red;
        padding:5px 0 0 5px;
    }
    .tab2,.tab3{   
        button:last-child{ 
            width:100%; 
        }
        .input-group{
        margin-right:70px 40px; 
        }
        .editInputGrounp1{  
            padding:10px 20px 0px 20px ;
            span{
                font-size:20px;
            } 
        }
        .editInputGrounp{   
            padding:0 20px 0px 20px ; 
            span{
                font-size:20px;
            } 
        }   
        .redColor{  
            color:red; 
        }
        .greenColor{
            color:rgb(30,225,90);
        }
        .InfoGrounp{ 
            padding:10px 10px 10px 10px ; 
            span{
                font-size:20px;
            } 
        }
        div{
            border: 0;
            margin:0px;  
            .fa{//icon寬度
                width:18px;
            }
        }
    }
    .tab3{ 
        .editInputGrounp{  
            padding:20px 20px 20px 20px ;
            span:not(:first-child){
                font-size:25px;
                width:10px; 
            }
        } 
    } 
    .btnGroup{  
        margin:5% 0%;   //上下間隔 
        button{
            margin:0% 1% 0% 0%;  
            width:30%;
            font-size:20px;
        }  
        .router-link1{ 
            margin:0% 0% 0% 1%;  
            width:30%;
            font-size:20px; 
        } 
    }
    .loginBtn{ 
         margin:2% 0% 2% 0%;   //上下間隔 
         width:100%; 
    }
    .cancelHover:hover{ 
        background-color: white;
        color:rgb(23,162,184);
    }
}//RWD  寬度320px~0px  
</style>
