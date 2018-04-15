<template>
    <div>
        <h1>{{msg}}</h1>
        <p>newsId：{{$route.params.newsId}}</p>
    </div>
</template>

<script>
export default {
    name: "Hi1",
    data() {
        return {
            msg: "I am Hi1!"
        };
    }
};
</script>

<style scoped>
div {
    background-color: pink;
    width: 50%;
    height: 200px;
}
</style>


