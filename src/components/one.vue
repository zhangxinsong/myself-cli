<template>
    <div class="one">
        <div>one</div>
    </div>    
</template>
<script>
export default {
    data(){
        return {

        }
    },
    mounted(){
        this.$ajax('/sd/',{
            type: 'get'
        }).then(res=>{
            console.log(ENV);
        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>
<style lang="less" scoped>
    .one{
        
    }
</style>