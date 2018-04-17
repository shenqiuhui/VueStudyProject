<template>
    <div class="pos">
        <el-row>
            <el-col :span="7" class="pos_order">
                <el-tabs type="card">
                    <el-tab-pane label="点餐">
                        <el-table :data="tableData" border style="width: 100%">
                            <el-table-column prop="goodsName" label="商品名称" align="center">
                            </el-table-column>
                            <el-table-column prop="count" label="数量" align="center">
                            </el-table-column>
                            <el-table-column prop="price" label="金额" align="center">
                            </el-table-column>
                            <el-table-column label="操作" align="center" fixed="right">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="tableDataMinus(scope.$index)" style="color: #f56c6c">删除</el-button>
                                    <el-button type="text" size="small" @click="tableDataAdd(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="total clearfix" v-show="tableData.length">
                            <span>
                                <small>数量：</small>{{totalCount}}</span>
                            <span>
                                <small>金额：</small>{{totalMoney}}元</span>
                        </div>
                        <div class="table_btns">
                            <el-button type="primary">挂单</el-button>
                            <el-button type="danger" @click="tableDataClear">删除</el-button>
                            <el-button type="success" @click="payingBillEvent">结账</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">挂单</el-tab-pane>
                    <el-tab-pane label="外卖">外卖</el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="17">
                <div class="offten_goods">
                    <div class="title">常用商品</div>
                    <ul class="often_goods_list clearfix">
                        <li v-for="goods in oftenGoods" :key="goods.goodsId" @click="tableDataAdd(goods)">
                            <span>{{goods.goodsName}}</span>
                            <span class="often_goods_price">￥{{goods.price}}元</span>
                        </li>
                    </ul>
                    <div class="goods_box">
                        <el-tabs>
                            <el-tab-pane v-for="(goodsItem, index) in typeGoods" :key="index" :label="index === 0 ? '汉堡' : (index === 1 ? '小食' : (index === 2 ? '饮料' : '套餐'))">
                                <ul class="cook_list clearfix">
                                    <li v-for="goods in goodsItem" :key="goods.goodsId" @click="tableDataAdd(goods)">
                                        <span class="food_img">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
                                        <span class="food_name">{{goods.goodsName}}</span>
                                        <span class="food_price">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import { Message } from "element-ui";

export default {
    name: "Pos",
    data() {
        return {};
    },
    created() {
        this.$store.dispatch("getOftenGoods");
        this.$store.dispatch("getTypeGoods");
    },
    methods: {
        ...mapMutations({
            tableDataClear: "TABLE_DATA_CLEAR"
        }),
        ...mapActions([
            "getOftenGoods",
            "getTypeGoods",
            "tableDataAdd",
            "tableDataMinus",
            "payingBill"
        ]),
        payingBillEvent() {
            this.$store.dispatch("payingBill").then(res => {
                if (res.result) {
                    Message.success("结算成功");
                } else {
                    Message.warning("列表为空");
                }
            });
        }
    },
    computed: {
        ...mapState([
            "tableData",
            "oftenGoods",
            "typeGoods",
            "totalCount",
            "totalMoney"
        ]),
        ...mapGetters([])
    },
    mounted() {
        document.querySelector(".pos_order").style.height = `${
            document.body.clientHeight
        }px`;
    }
};
</script>

<style scoped>
.pos_order {
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
}

.total {
    background-color: #fff;
    border-bottom: 1px solid #d3dce6;
}

.total span {
    display: block;
    float: left;
    height: 50px;
    line-height: 50px;
    width: 50%;
}

.table_btns {
    margin-top: 10px;
}

.title {
    height: 20px;
    border-bottom: 1px solid #d3dce6;
    background-color: #f9fafc;
    padding: 10px;
    text-align: left;
}

.often_goods_list li {
    float: left;
    border: 1px solid #e5e9f2;
    padding: 10px;
    margin: 10px;
    background-color: #fff;
    cursor: pointer;
}

.often_goods_price {
    color: #58b7ff;
}

.goods_box {
    padding: 10px;
}

.cook_list li {
    width: 23%;
    border: 1px solid #e5e9f2;
    height: atuo;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}

.cook_list li span {
    display: block;
    float: left;
}

.food_img {
    width: 40%;
}

.food_name {
    font-size: 18px;
    padding-left: 10px;
    color: brown;
    width: calc(60% - 20px);
    text-align: left;
}

.food_price {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
}
</style>
