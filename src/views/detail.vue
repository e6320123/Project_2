<template>

<h2>訂購明細</h2>

</template>

<script>
var orderData = {
            movieName: '返校Detention',
            theater: 'taichung',
            day: '9/25',
            time: '14:00',
            ticket: '全票280',
            seat: 'b3',
            hall: '第10廳'
        };
localStorage.setItem('dataList', JSON.stringify(orderData));
export default {
    data(){
        return {
              movieName: '1',
              theater: '',
              day: '',
              time: '',
              ticket: '',
              seat: '',
              hall: ''
        }
    },
    mounted() {
        this.getData();
    },
    methods:{
       getData: function(){
            this.movieName=JSON.parse(localStorage.getItem('dataList')).movieName; 
            this.theater=JSON.parse(localStorage.getItem('dataList')).theater; 
            this.day=JSON.parse(localStorage.getItem('dataList')).day; 
            this.time=JSON.parse(localStorage.getItem('dataList')).time; 
            this.ticket=JSON.parse(localStorage.getItem('dataList')).ticket; 
            this.seat=JSON.parse(localStorage.getItem('dataList')).seat; 
            this.hall=JSON.parse(localStorage.getItem('dataList')).hall;
       }
    }
    
    
}
</script>

<style>
        h2 {
            background-color: blanchedalmond;
        }
        #btn{
            left:30px;
            font-size: 28px;
        }
</style>