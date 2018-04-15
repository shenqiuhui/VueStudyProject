<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div>
            <button @click="goBack">后退</button>
            <button @click="goForward">前进</button>
            <button @click="goHome">返回首页</button>
        </div>
        <div>
            <router-link to="/change/666/panda in China">更换区域</router-link>
            <router-link to="/home">还原区域</router-link>
            <router-link to="/alias/777/hello">别名</router-link>
            <router-link to="/xiaxie">瞎写</router-link>
        </div>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
        <transition name="fade" mode="out-in">
            <router-view id="fl" name="left"/>
        </transition>
        <transition name="fade" mode="out-in">
            <router-view id="fr" name="right"/>
        </transition>
    </div>
</template>

<script>
export default {
    name: "App",
    methods: {
        goBack () {
            this.$router.go(-1);
        },
        goForward () {
            this.$router.go(1);
        },
        goHome () {
            this.$router.push('/');
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
#fl {
    float: left;
}
#fr {
    float: right;
}
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    opacity: 1;
    transition: opacity .5s;
}
.fade-leave {
    opacity: 1;
}
.fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
}
</style>
