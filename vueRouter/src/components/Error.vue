<template>
    <div>
        <h1>{{msg}}</h1>
        <p>页面不存在</p>
    </div>
</template>

<script>
export default {
    name: 'Error',
    data () {
        return {
            msg: 'Error: 404!'
        }
    }
}
</script>

<style scoped>

</style>


