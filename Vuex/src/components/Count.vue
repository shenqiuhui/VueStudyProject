<template>
    <div>
        <h2>{{msg}}</h2>
        <!-- <h3>{{$store.state.count}}</h3> -->
        <h3>{{count}}</h3>
        <p>
            <button @click="$store.commit('add', 3)">+</button>
            <button @click="jian(2)">-</button>
        </p>
        <p>
            <button @click="addActions">+</button>
            <button @click="jianActions">-</button>
        </p>
    </div>
</template>

<script>
import store from "@/vuex/store";
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
export default {
    data() {
        return {
            msg: "Hello Vuex"
        };
    },
    // computed: {
    //     count () {
    //         return this.$store.state.count;
    //     }
    // },
    // computed: mapState({
    //     count: state => state.count
    // }),
    computed: {
        // ...mapState(['count']),
        ...mapState({
            count: 'count'
        }),
        ...mapGetters(['count'])
    },
    methods: {
        // ...mapMutations(['add', 'jian']),
        ...mapMutations({
            add: 'add',
            jian: 'jian'
        }),
        ...mapActions(['addActions', 'jianActions'])
    },
    store
};
</script>
