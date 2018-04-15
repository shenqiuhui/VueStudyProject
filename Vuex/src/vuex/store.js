import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 1
}

const mutations = {
    add (state, num) {
        state.count += num;
    },
    jian (state, num) {
        state.count -= num;
    }
}

const getters = {
    count: state => state.count += 100
}

const actions = {
    addActions (context) {
        context.commit('add', 10);
        setTimeout(() => {
            context.commit('jian', 2);
        }, 3000);
        console.log('我先执行了');
    },
    jianActions ({commit}) {
        commit('jian', 2);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
