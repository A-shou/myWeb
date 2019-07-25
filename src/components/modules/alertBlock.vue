<template>
    <div class="alter_box">
        <v-alert
            :value="$store.state.alertData.show"
            :type="$store.state.alertData.type || 'warning'"
            transition="slide-x-reverse-transition"
            class="ma-0 alter_massage"
        >
            {{$store.state.alertData.massage}}
        </v-alert>
    </div>
</template>

<script>
    export default {
        name: 'v-alert-block',
    }
</script>

<style scoped>
    .alter_box{
        position: fixed;
        z-index: 9999;
        top: 10px;
        right: 10px;
        width: 400px;
    }
    .alter_massage{
        box-shadow: 2px 2px 15px rgba(0,0,0,0.3);
        border-radius: 6px;
        overflow: hidden;
    }
</style>
