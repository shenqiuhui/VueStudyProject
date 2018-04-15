<template>
    <div>
        <div>
            <router-link to="/hi1">新闻</router-link>
            <router-link :to="{name: 'Hi2', params: params}">详情</router-link>
        </div>
        <h1>{{msg}}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Hi',
    data () {
        return {
            msg: 'I am Hi component!',
            params: {
                username: 'PandaShen',
                uid: '19910821'
            }
        };
    }
}
</script>

<style scoped>

</style>
