<template>
    <div class="loadbox">
        <div class="load_box">
            <v-progress-circular
                    :size="50"
                    color="#fff"
                    :width="4"
                    indeterminate
            ></v-progress-circular>
            <span style="padding-top: 10px;">加载中...</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'v-loading',
    }
</script>

<style scoped>
    .loadbox{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 900;
    }
    .load_box{
        background: rgba(0,0,0,0.4);
        width: 100px;
        height: 110px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        flex-direction: column;
    }
</style>
