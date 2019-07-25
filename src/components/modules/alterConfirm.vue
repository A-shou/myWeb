<template>
    <v-layout row justify-center>
        <v-dialog v-model="$store.state.alterConfirmData.show" persistent max-width="290">
            <v-card>
                <v-card-title class="headline">
                    {{$store.state.alterConfirmData.title ? $store.state.alterConfirmData.title : '提示'}}
                </v-card-title>

                <v-card-text>
                    <p>{{$store.state.alterConfirmData.text}}</p>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-if="!$store.state.alterConfirmData.onCancel" color="primary" flat @click="cancel">取消</v-btn>
                    <v-btn color="primary" flat @click="confirm">确认</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    export default {
        name: 'v-alter-confirm',
        data () {
            return {
                dialog: false
            }
        },
        methods: {
            confirm () {
                if (this.$store.state.alterConfirmData.success) {
                    this.$store.state.alterConfirmData.success()
                }
                this.$store.commit('closeAlertC')
            },
            cancel () {
                this.$store.commit('closeAlertC')
            }
        }
    }
</script>

<style scoped>

</style>
