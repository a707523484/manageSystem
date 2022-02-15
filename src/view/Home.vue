<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover" class="box-card">
        <div class="user">
          <img :src="userImg" />
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="loginInfo">
          <p>上次登录时间:<span>2022-1-26</span></p>
          <p>上次登录地点:<span>武汉</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px">
        <el-table
          :data="tableData"
          style="width: 100%"
          size="mini"
          show-header:false
        >
          <el-table-column prop="date" label="日期" height="120px">
          </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
          style="margin-bottom: 42px"
        >
          <i
            class="icon"
            :class="'el-icon-' + item.icon"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 460px; margin-top: -20px; margin-bottom: 20px">
        <div style="height: 460px" ref="echarts"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      userImg: require("../assets/user.jpg"),
      tableData: [],
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1af",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1af",
        },
      ],
    };
  },
  mounted() {
    this.$http.get("/getData").then((res) => {
      for (let index = 0; index < res.data.tableData.table.length; index++) {
        this.tableData.push(res.data.tableData.table[index]);
      }
      const xDataArray = res.data.orderData.xData.map((item) => item.city);
      const option = {
        title:{
          text:"各地产品销量"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          orient: "vertical",
          right: 10,
          top: "center",
        },
        xAxis: {
          type: "category",
          data: xDataArray,
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            name: "2015",
            data: res.data.orderData.xData.map((item) => item.number2015),
          },
          {
            type: "bar",
            name: "2016",
            data: res.data.orderData.xData.map((item) => item.number2016),
          },
          {
            type: "bar",
            name: "2017",
            data: res.data.orderData.xData.map((item) => item.number2017),
          },
        ],
      };

      const E = echarts.init(this.$refs.echarts);
      E.setOption(option);
    });
  },
};
</script>

<style>
.user img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.user {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: gray solid;
}
.userInfo p {
  line-height: 30px;
  margin: 0;
  margin-left: 40px;
}

.userInfo p:nth-child(1) {
  font-size: 20px;
}
.userInfo p:nth-child(2) {
  font-size: 10px;
  color: gray;
}
.loginInfo {
  display: flex;
}
.loginInfo p {
  line-height: 30px;
  font-size: 10px;
  width: 100%;
}

.loginInfo p span {
  margin-left: 0px;
}

.el-main {
  line-height: 60px;
}
.num {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  align-content: space-between;
}

.num el-card {
  margin-top: 10px;
}

.detail {
  width: 180px;
}

.detail p {
  line-height: 14px;
  margin-left: 10px;
}

.detail p:nth-child(1) {
  font-size: 20px;
}

.detail p:nth-child(2) {
  font-size: 10px;
}

.icon {
  width: 75px;
  padding-top: 10%;
  font-size: 30px;
}
.graph {
  display: flex;
  justify-content: space-between;
}
</style>