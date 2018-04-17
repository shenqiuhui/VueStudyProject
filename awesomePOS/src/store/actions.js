import axios from "axios";

export default {
    getOftenGoods({ commit }) {
        axios.post("http://jspang.com/DemoApi/oftenGoods.php").then(res => {
            const name = "oftenGoods";
            commit("GET_DATA", { name, res });
        }).catch(err => {
            console.log(err);
        });
    },
    getTypeGoods({ commit }) {
        axios.post("http://jspang.com/DemoApi/typeGoods.php").then(res => {
            const name = "typeGoods";
            commit("GET_DATA", { name, res });
        }).catch(err => {
            console.log(err);
        });
    },
    tableDataAdd({ commit }, goods) {
        commit('TABLE_DATA_ADD', goods);
        commit('TOTAL');
    },
    tableDataMinus({ commit }, index) {
        commit('TABLE_DATA_MINUS', index);
        commit('TOTAL');
    },
    payingBill({ commit, state }) {
        return new Promise((resolve, reject) => {
            if(state.tableData.length != 0) {
                // Ajax 于服务器交互时使用
                // axios.post('url', { data: state.tableData, money: state.totalMoney }).then(res => {
                //     commit('TABLE_DATA_CLEAR');
                //     resolve(res);
                // }).chatch(err => {
                //     reject(err);
                // });

                // 模拟不同状态结账
                commit('TABLE_DATA_CLEAR');
                resolve({
                    result: 1,
                    message: 'success'
                });
            } else {
                resolve({
                    result: 0,
                    message: 'warning'
                });
            }
        });

    }
};
