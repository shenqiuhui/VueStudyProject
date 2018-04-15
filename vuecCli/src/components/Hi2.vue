<template>
    <div>
        <h2>{{msg}}</h2>
        <p>用户名：{{username}}</p>
        <p>用户ID：{{uid}}</p>
    </div>
</template>

<script>
export default {
    name: 'Hi2',
    data () {
        return {
            msg: '我是详情页面',
            username: this.$route.params.username,
            uid: this.$route.params.uid
        }
    }
}
</script>

<style scoped>

</style>
