<template>
    <div class="container">
        <h1 class="text-center my-5">訂購明細</h1> 
    <div class='detail'>
        <p>{{movie}}</p>
        <p>台中影城</p>
        <p>9.25 [星期三]</p>
        <p>14.05</p>
        <p>全票280</p>
        <p>座位b3</p>
        <p>第十廳</p>
        <pre>個人明細
    姓名
    信箱
    電話</pre>
    </div>

<form action="sql.php" method='post'> 
<input type='submit' name='btn' value='確認送出'></button>
<input type='submit' name='btn' value='取消訂購'></button> 
</form>
    </div>

   
</template>

<script>
const data =  {
    movieName: 'sky',
    theater: 'taichung',
    day: '9.25',
    time: '14.00',
    ticket:'full-280',
    seat:'b3',
    hall:'hall_10'
}; 

localStorage.setItem('dataList', JSON.stringify(data));  


var app1 = new Vue({
        el: "#app1",
        data: {
            message: 'Hello Vue!'
        }
    });
</script>


<style>


</style>