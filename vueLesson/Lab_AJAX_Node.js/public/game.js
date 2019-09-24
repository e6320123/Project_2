//toTop上捲動作
$("#toTop").on("click", "img", function () {
    var speed = scrollValue;
    var set = "";
    set =
        setInterval(function () {
            speed -= 17;
            console.log(speed);
            $(window).scrollTop(speed);
            if (speed <= 0) {
                clearInterval(set);
            }
        }, 1);
})

//取出現在捲軸值
var scrollValue = 0;
//顯現 #toTop
$(window).scroll(function () {
    var s = $(this).scrollTop();
    scrollValue = s;

    if (s > 700) {
        //到下面才顯現 #toTop
        $("#toTop").css("visibility", "visible");
    } else {
        $("#toTop").css("visibility", "hidden");
    }
})

$(window).click(function () {
    var w2 = event.clientX;
    var w3 = event.clientY; //可見高  非所有捲軸的高
})

//    ----------------------tuku----------------------------

// --------------------載入tuku後都需再跑一遍 loadTuku();--------------------
function loadTuku() {
    var tuku_elm = "";
    var tukuArry = [];
    var childnum = document.getElementById('downini').children.length;
    for (var i = 0; i < childnum; i++) {
        tuku_elm = $("<p>").append($(".tuku_down img").eq(0).clone()).html(); //取<img>元素        
        tukuArry.push(tuku_elm);
        $(".tuku_down img").eq(0).remove();
    }
    for (var i = 0; i < 11; i++) {
        tuku_elm = tukuArry[tukuArry.length - 1]
        $(".tuku_down").prepend(tuku_elm);
        tukuArry.pop();
    }
    $(".tuku_down img").css("margin", "2px");
}

// --------------------載入tuku後都需再跑一遍 loadTuku();--------------------
loadTuku();

var tuku_up_index=-1;
var v="";

$(document).on("click", ".tuku_down img", function () {
    v = $(this).attr("src");
    $(".tuku_up>img").prop("src", v);
    tuku_up_index=$(this).index();  
    // console.log(tuku_up_index);
        //取得小圖index
});
var trans_src="";
$(document).on("click", ".tuku_up img", function () {
    trans_src = $(this).attr("src");

})


var arry = [];
var img_elm = "";
var flag = true; //if通行開關 ,避免連續點選造成錯誤


    $(document).on("click", "#r", function () {
    if ($(".tuku_down img").eq(5).attr("class") != "end" && flag) { //最後一張圖class不等於end
        flag = false;
        img_elm = $("<p>").append($(".tuku_down img").eq(0).clone()).html(); //取<img>元素     
        arry.push(img_elm);
        $(".tuku_down img").eq(0).remove();
        flag = true;
    }
})
var flag2 = true; //一進if就關 ,避免連續點選造成錯誤
$(document).on("click", "#l", function () {

    if ($(".tuku_down img").eq(0).attr("class") != "star" && flag2) { //第一張圖class不等於star
        flag = false;
        img_elm = arry.pop();
        $(".tuku_down").prepend(img_elm);// $(".tuku_down img").eq(0).css("margin","0px 3px 0px 0px");  
        flag = true;
    }
})

var bs = 0;
$(document).on("click",".tuku_up img", function () {
    if (bs == 0) {
        bs++;
        $(this).removeClass("smallScreen");
        $(this).addClass("fullScreen");

    } else {
        bs--;
        $(this).removeClass("fullscreen");
        $(this).addClass("smallScreen");
    }
});

//    ----------------------tuku----------------------------





//------------------全螢幕控制---------------------------
var c=0;
$("body").keydown(function () {
    
   
    if (bs == 1) {
        var pattID =/^img.*g$/;
        if (window.event.keyCode == 37 && pattID.test(trans_src)) {//左
            
            //------------------------------修到剩數字 
            var t_i = trans_src.indexOf('.');
            var t_jpg = trans_src.substring(t_i,t_i+4);
            var t_l = trans_src.lastIndexOf('/');
            var t_img= trans_src.substring(0,t_l+1);
            var pattID2= /\d{2}/;
           if(pattID2.test(c)){
            c = trans_src.substr(t_l+1,2);
           }else{
            c = trans_src.substr(t_l+1,1);
           }

            
           
           //------------------------------修到剩數字
           c=Number(c);
           if(c!=1 ){
                c--;
                trans_src=String(c);
                trans_src=t_img+trans_src+t_jpg;
                $(".tuku_up>img").prop("src", trans_src);
                }
            
        } 
        if (window.event.keyCode == 39 && pattID.test(trans_src)) {//右

            //------------------------------修到剩數字 
            var t_i = trans_src.indexOf('.');
            var t_jpg = trans_src.substring(t_i,t_i+4);
            var t_l = trans_src.lastIndexOf('/');
            var t_img= trans_src.substring(0,t_l+1);
            var pattID3= /\d{2}/;
           if(pattID3.test(c)){
            c = trans_src.substr(t_l+1,2);
           }else{
            c = trans_src.substr(t_l+1,1);
           }
            
            console.log(c);
           //------------------------------修到剩數字
           c=Number(c);
           if(trans_src!=$(".end").attr("src") ){
                c++;
                trans_src=String(c);
                trans_src=t_img+trans_src+t_jpg;
                $(".tuku_up>img").prop("src", trans_src);
                }

        }

    }console.log(trans_src);
})

// 左邊

$("body").keydown(function () {
    // if (bs == 0) {
        if (window.event.keyCode == 37) {
            if ($(".tuku_down img").eq(0).attr("class") != "star" && flag2) { //第一張圖class不等於star
                flag = false;
                img_elm = arry.pop();
                $(".tuku_down").prepend(img_elm);
                flag = true;
            }
        }
    // }
})

//右邊
$("body").keydown(function () {
    // if (bs == 0) {
        if (window.event.keyCode == 39) {
            if ($(".tuku_down img").eq(5).attr("class") != "end" && flag) { //最後一張圖class不等於end
                flag = false;
                img_elm = $("<p>").append($(".tuku_down img").eq(0).clone()).html(); //取<img>元素     
                arry.push(img_elm);
                $(".tuku_down img").eq(0).remove();
                flag = true;
            }
        }
    // }
})

//bs==0  smallScreen
//bs==1  fullScreen



// $("body").click(function(){
//     console.log(tuku_up_index);
// })
// 左邊
$("body").keydown(function () {
    // if (bs == 1) {
    //     if (window.event.keyCode == 37) {
            
    //         tuku_up_index--;
    //         // if(tuku_up_index>-1){
    //        var newSrc= $(".tuku_down img").eq(tuku_up_index).attr("src")
    //        console.log(tuku_up_index);
           
    //        console.log(newSrc);
           
    //         $("tuku_up img").attr("src",newSrc);

          
    //     }
    // }
    if ($(".fullScreen").attr("src") == $(".tuku_down img").eq(0).attr("src")) {
        if (window.event.keyCode == 37) {
            if ($(".tuku_down img").eq(0).attr("class") != "star" && flag2) { //第一張圖class不等於star
                flag = false;
                img_elm = arry.pop();
                $(".tuku_down").prepend(img_elm);
                flag = true;
            }
        }
    }
})
//右邊
$("body").keydown(function () {
    // if (bs == 1) {
    //     if (window.event.keyCode == 39) {
    //         tuku_up_index++;
    //         if(tuku_up_index>-1){
    //        var newSrc= $(".tuku_down img").eq(tuku_up_index).attr("src")
    //         $("tuku_up img").attr("src",newSrc);
            
    //       }

    //     }
    // }
    if ($(".fullScreen").attr("src") == $(".tuku_down img").eq(5).attr("src")) {
        if (window.event.keyCode == 39) {
            if ($(".tuku_down img").eq(5).attr("class") != "end" && flag) { //最後一張圖class不等於end
                flag = false;
                img_elm = $("<p>").append($(".tuku_down img").eq(0).clone()).html(); //取<img>元素     
                arry.push(img_elm);
                console.log(arry);
                $(".tuku_down img").eq(0).remove();
                flag = true;
            }
        }
    }
})


function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};


var obj = JSON.parse(list);

$("#search>img").click(function () {
$("#L_content").empty();
var siArry =[];
// for (var i = 0; i < obj.length; i++) {
//     siArry.push(i);
    
// }




var result = "";
var result2 = "";
var ch = $("#search>input").val();
for (var i = 0; i < obj.length; i++) {
    console.log(ch);
    
    var game = String(obj[i].name);
    console.log(game.indexOf(ch));
    if (game.indexOf(ch) > -1&&ch!="") { //&& ch!=""
// result+=
siArry.push(`<table class="smallFrame">
<tr>
<td>
    <img id="${obj[i].inx}" class="img_${obj[i].imgsize}" src="img/${obj[i].imgsrc}" alt="">
</td>
<td><span>${obj[i].platform}</span>&ensp;${obj[i].name}</td>
</tr>
</table>`) ;

    }
} 
$("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);   
shuffle(siArry);
var len = siArry.length;
for (var i = 0; i < len; i++) {    
    result=siArry.pop();
   $("#L_content").append(result);  
}
// console.log($("#L_content").html());
})
$("body").keydown(function () {
if (window.event.keyCode ==13){
    $("#L_content").empty();

    var result = "";
    var result2 = "";
    var ch = $("#search>input").val();
    for (var i = 0; i < obj.length; i++) {
        var c = 0;
        var game = String(obj[i].name);
        if (game.indexOf(ch) > -1&& ch!="") { //&& ch!=""
         result += `<table class="smallFrame">
         <tr>
             <td>
                 <img id="${obj[i].inx}" class="img_${obj[i].imgsize}" src="img/${obj[i].imgsrc}" alt="">
             </td>
             <td><span>${obj[i].platform}</span>&ensp;${obj[i].name}</td>
         </tr>
     </table>`
        }
    }
    $("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);
    $("#L_content").append(result);
    console.log(result);
}
})



function navShowL(platform){


var result = "";
var navch=platform;
var c = 0;
for (var i = 0; i < obj.length; i++) {
    var game = String(obj[i].platform);
    if (game.indexOf(navch) > -1 ) { //&& ch!=""   
     result += `<table class="smallFrame">
 <tr>
     <td>
         <img id="${obj[i].inx}" class="img_${obj[i].imgsize}" src="img/${obj[i].imgsrc}" alt="">
     </td>
     <td><span>${obj[i].platform}</span>&ensp;${obj[i].name}</td>
 </tr>
</table>`
 
}
} 

$("#L_content").append(result);
}


function navShowR(platform){
var R_cnt = `  ` ;
$("#R_content").empty();
$("#R_content").append(cnt);
}


$("ul>li").eq(1).click(function () {
$("#L_content").empty();
$("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);

navShowL("Online");
})

$("ul>li").eq(2).click(function () {
$("#L_content").empty();
$("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);

navShowL("PC");
// navShowR("PC");
})


$("ul>li").eq(3).click(function () {
$("#L_content").empty();
$("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);

navShowL("PS4");
// navShowR("PS4");
})

$("ul>li").eq(4).click(function () {  
$("#L_content").empty();
$("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);

navShowL("NS");
// navShowR("NS");
})


$("ul>li").eq(0).click(function () {

//首頁L-------------------------------------------------------
// var hL =` `;
    
    $("#L_content").empty();
    $("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);
    // $("#L_content").append(hL);

    navShowL("PC");
    navShowL("PS4");
    navShowL("Online");
    navShowL("NS");

 

 
$("#R_content").empty();
$("#R_content").append(hR);
})




var tet = "";

//tet是圖片id == 圖片inx值
$("#L_content").on("click","img", function () {
    tet = $(this).attr('id');
    $("#R_content").empty();

    switch (tet) {
        case "0":
            $("#R_content").append(cnt0);
            loadTuku();
            break;
        case "1":
            $("#R_content").append(cnt1);
            loadTuku();
            break;
        case "2":
            $("#R_content").append(cnt2);
            loadTuku();
            break;
        case "3":
            $("#R_content").append(cnt3);
            loadTuku();
            break;
        case "4":
            $("#R_content").append(cnt4);
            loadTuku();
            break;
        case "5":
            $("#R_content").append(cnt5);
            loadTuku();
            break;
        case "6":
            $("#R_content").append(cnt6);
            loadTuku();
            break;
        case "7":
            $("#R_content").append(cnt7);
            loadTuku();
            break;
        case "8":
            $("#R_content").append(cnt8);
            loadTuku();
            break;
        case "9":
            $("#R_content").append(cnt9);
            loadTuku();
            break;
        case "10":
            $("#R_content").append(cnt10);
            loadTuku();
            break;
        case "11":
            $("#R_content").append(cnt11);
            loadTuku();
            break;
        case "12":
            $("#R_content").append(cnt12);
            loadTuku();
            break;
        case "13":
            $("#R_content").append(cnt13);
            loadTuku();
            break;
        case "14":
            $("#R_content").append(cnt14);
            loadTuku();
            break;
        case "15":
            $("#R_content").append(cnt15);
            loadTuku();
            break;
        case "16":
            $("#R_content").append(cnt16);
            loadTuku();
            break;
        case "17":
            $("#R_content").append(cnt17);
            loadTuku();
            break;
        case "18":
            $("#R_content").append(cnt18);
            loadTuku();
            break;
        case "19":
            $("#R_content").append(cnt19);
            loadTuku();
            break;
        case "20":
            $("#R_content").append(cnt20);
            loadTuku();
            break;
        case "21":
            $("#R_content").append(cnt21);
            loadTuku();
            break;
        default:
            break;
    }
})
