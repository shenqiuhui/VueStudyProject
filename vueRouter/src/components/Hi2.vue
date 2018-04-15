<template>
    <div>
        <h1>{{msg}}</h1>
        <p>newsTitle：{{$route.params.newsTitle}}</p>
    </div>
</template>

<script>
export default {
    name: "Hi2",
    data() {
        return {
            msg: "I am Hi2!"
        };
    }
};
</script>

<style scoped>
div {
    background-color: lightskyblue;
    width: 50%;
    height: 200px;
}
</style>


