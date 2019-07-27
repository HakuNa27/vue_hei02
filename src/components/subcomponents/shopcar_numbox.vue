<template>
    <div>
        <div class="mui-numbox" data-numbox-step='1' data-numbox-min='0' data-numbox-max='100'>
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input 
                class="mui-numbox-input" 
                type="number" 
                @change="changeVal"
                ref="numbox" />
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
import mui from '../../../dist/js/mui.js'


export default {
    mounted() {
        mui(".mui-numbox").numbox().setValue(1)
    },
    props: ["maxNum"],
    methods: {
        changeVal() {
            this.$emit("getcount", parseInt(this.$refs.numbox.value))
        }
    },
    watch: {
        maxNum(newVal, oldVal) {
            mui(".mui-numbox").numbox().setOption("max", newVal);
        }
    }
}
</script>

<style scoped>
    
</style>