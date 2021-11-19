<template>
<div class="map">
  <div id="chart" style="width: 600px; height: 500px"></div>
</div>
</template>

<script>
import jsonp from "jsonp";
import echarts from "echarts";
import "../../../static/js/chinamap/china.js"; // 引入中国地图数据
let options = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["中国新冠疫情实时数据地图"],
  },
  visualMap: {
    type: "piecewise",
    // left:"right",
    // padding:-50,
    // align:"left",
    pieces: [
      {
        min: 10000,
        max: 1000000,
        label: "确诊大于等于10000人",
        color: "#5d3372",
      },
      { min: 5000, max: 9999, label: "确诊5000-9999人", color: "#8061a4" },
      { min: 1000, max: 4999, label: "确诊1000-4999人", color: "#bc9cc6" },
      { min: 100, max: 999, label: "确诊100-999人", color: "#e2a0c9" },
      { min: 1, max: 99, label: "确诊1-99人", color: "#edd3e2" },
    ],
    color: ["#E0022B", "#E09107", "#A3E00B"],
  },
  toolbox: {
    show: true,
    orient: "vertical",
    left: "right",
    top: "center",
    feature: {
      mark: { show: true },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  roamController: {
    show: true,
    left: "right",
    mapTypeControl: {
      china: true,
    },
  },
  series: [
    {
      name: "确诊数",
      type: "map",
      mapType: "china",
      roam: false,
      label: {
        show: true,
        color: "rgb(249, 249, 249)",
      },
      data: [
        //实时数据放在这里，格式如下...
        // {
        //   name: '北京',
        //   value: 212
        // }, {
        //   name: '天津',
        //   value: 60
        // },
      ],
    },
  ],
};
visualMap: {
}
export default {
  name: "EpidemicMap",

  data() {
    return {
      mychinaChart: "",
    };
  },
  mounted() {
    this.mychinaChart = echarts.init(document.getElementById("chart"));
    this.mychinaChart.setOption(options);
    this.getData();
  },
  methods: {
    getData() {
      jsonp(
        "https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427",
        (err, data) => {
          console.log(data);
          var lists = data.data.list.map((item) => {
            return {
              name: item.name,
              value: item.value,
            };
          });
          options.series[0].data = lists;
          this.mychinaChart.setOption(options);
        }
      );
    },
  },
};
</script>
<style scoped>
.map{
    /* border: solid 1px #b0e0f4; */
    border-radius:10px;
    height: 600px;
    margin-top: -60px;
    padding-left: 15px;
}
</style>