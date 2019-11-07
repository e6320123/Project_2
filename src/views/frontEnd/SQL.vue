<template>  
<p>
{{SQL}}
</p>


</template>

<script>
export default {
    data() {
        return {
            SQL:0
        }
    },
    mounted (){
         this.axios.get(`${this.$api}/test/test`).then(response=>{ 
            console.log(response.data); 
            this.SQL = response.data;
        })
    }
}
</script>

<style lang="scss" scoped>  
// @import "@/assets/scss/sql";
</style>
