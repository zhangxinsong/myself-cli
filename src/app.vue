<template>
    <div class="big">
        <!-- <div></div> -->
        <router-view></router-view>
    </div>    
</template>
<script>
export default {
    data(){
        return {

        }
    },
    mounted(){
        
    }
}
</script>
<style lang="less" scoped>
    .big{
        div{
            width: 100px;
            height: 100px;
            background: red;
        }
    }
</style>
