import {
    GET_DATA,
    TABLE_DATA_ADD,
    TABLE_DATA_MINUS,
    TOTAL,
    TABLE_DATA_CLEAR
} from "./types";

const state = {
    tableData: [],
    oftenGoods: [],
    typeGoods: [],
    totalCount: 0,
    totalMoney: 0
};

const mutations = {
    [GET_DATA](state, { name, res }) {
        state[name] = res.data;
    },
    [TABLE_DATA_ADD](state, goods) {
        let tableData = state.tableData;
        let idx = null;

        let isHave = tableData.some((item, index) => {
            idx = index;
            return item.goodsId === goods.goodsId;
        });

        if (isHave) {
            tableData[idx].count++;
        } else {
            tableData.push(Object.assign({}, { count: 1 }, goods));
        }
    },
    [TABLE_DATA_MINUS](state, index) {
        state.tableData.splice(index, 1);
    },
    [TOTAL](state) {
        let tableData = state.tableData;
        let [count, money] = [0, 0];

        tableData.forEach((item, index) => {
            count += item.count;
            money += item.price * item.count;
        });

        state.totalCount = count;
        state.totalMoney = money;
    },
    [TABLE_DATA_CLEAR](state) {
        state.tableData = [];
        state.totalCount = 0;
        state.totalMoney = 0;
    }
};

export default {
    state,
    mutations
};
