<template>
  <div class="box">
    <div class="fl">
      <el-link href="https://element.eleme.io" target="_blank">全部</el-link>
      <el-link type="info">通知公告</el-link>
      <el-link href="https://element.eleme.io" target="_blank"
        >新闻时事</el-link
      >
    </div>
    <div
      class="cardList"
      v-for="(item, index) in assessList"
      :data="
        assessList.slice((currentPage - 1) * pagesize, currentPage * pagesize)
      "
      :key="index"
    >
      <el-row :gutter="20" class="card">
        <el-col :span="4"
          ><div class="tp">
            <img src="../../assets/public_images/laba.jpg" alt="" /></div
        ></el-col>
        <el-col :span="20"
          ><div class="title">【通知公告】{{ item.addr }}</div>
          <div class="nr">2021-11-25</div>
          <div class="nr">{{ item.name }}</div></el-col
        >
      </el-row>
      <el-divider></el-divider>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="assessList.length"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        currentPage: 1, //初始页
 pagesize: 5, //    每页的数据
      assessList: [
        {
          addr: "浙江省疫情防控办发出通知 规定“健康码”和行程卡联查适用范围",
          name: "为了更精准做好疫情防控工作、降低疫情输入风险，同时方便广大群众出行，浙江省疫情防控办近期发出《关于规范“健康码”和行程卡联动核查工作要求的通知》。通知规定了“健康码”和行程卡的适用范围：在公共场合对个人健康情况进行查验时，“健康码”和行程卡可以联动核查。当全国中高风险地区动态清零时，除医疗机构外，其他公共场所可暂停行程卡查验。通知还对“健康码”和行程卡联查的重点场所进行了明确。在交通枢纽，出行乘客如“健康码”为绿码且行程卡不带星号，可正常出行。出行乘客如“健康码”为绿码但行程卡带星号，应对照疫情中高风险地区划分情况进行自我申报。根据申报情况，如需纳入“2+14”健康管理（核验48小时内新冠病毒核酸检测阴性证明并纳入14天日常健康监测）的，出示48小时内核酸检测阴性证明或就近进行核酸检测。无需纳入“2+14”等健康管理的，在签署承诺书后可进出交通枢纽，但提倡主动进行一次核酸检测。出行乘客如“健康码”为红码、黄码等异常码，或“健康码”为绿码但行程卡带星号且其自主申报去过国内中高风险地区的，交通枢纽现场工作人员初步甄别后，由交通枢纽所在社区工作人员对其实施相应的健康管理措施。在宾馆酒店，住宿人员如“健康码”为绿码且行程卡不带星号，可正常入住。住宿人员如“健康码”为绿码但行程卡带星号时，应对照浙江省疫情中高风险地区划分情况进行自我申报。根据申报情况，如需纳入“2+14”健康管理的，出示48小时内核酸检测阴性证明或就近进行核酸检测后可办理登记入住手续。无需纳入“2+14”等健康管理的，在签署承诺书后可办理登记入住手续，但提倡主动进行一次核酸检测。在住宿期间，由宾馆工作人员每天核对“健康码”颜色，每天都为绿色方可持续住宿。住宿人员如“健康码”为红码、黄码等异常码，或“健康码”为绿码但行程卡带星号且其自主申报去过国内中高风险地区的，宾馆酒店工作人员初步甄别后，由宾馆酒店所在社区对其实施相应的健康管理措施。对于出租车（网约车）跨省业务，乘客如“健康码”为绿码且行程卡不带星号，可正常乘车。对“健康码”为绿码、行程卡带星号的乘客，需其承诺未有中高风险地区旅居史方可承接跨省业务。对“健康码”为红码、黄码等异常码，或“健康码”为绿码但尚处于日常健康监测期间的乘客，应拒绝承接跨省业务，并告知其就近联系属地社区，纳入相应健康管理措施。对拒不配合“健康码”和行程卡核验的乘客，司机可拒绝搭载。浙江省疫情防控办提醒，请广大市民朋友积极主动配合疫情防控工作，如“健康码”为绿码且行程卡不带星号，在符合其他疫情防控要求的前提下，可自由进出上述公共场所。",
        // https://k.sina.com.cn/article_7517400647_1c0126e4705901sn5n.html
        // https://k.sina.com.cn/article_7517400647_1c0126e4705901sn5n.html
        },
        {
          addr: "三亚发布会展活动新冠肺炎疫情常态化防控工作指引",
          name: "三亚市会展活动新冠肺炎疫情常态化防控工作指引为统筹新冠肺炎疫情防控和经济社会发展，全面贯彻国家和省市关于新冠肺炎疫情常态化防控工作的指导意见和部署要求，规范会展活动疫情防控工作，加快推进会展业恢复发展，充分发挥会展业在扩大开放、助推产业、促进投资、拉动消费等方面的重要作用，结合三亚市实际，制定本指引。一、适用范围本指引适用于疫情防控期间在我市范围内举办的各类会展活动的举办单位（主、承办单位，下同）、场馆运营单位及活动参与方（含参展商、参会单位、搭建商、服务分包商、观众等）。二、总体要求始终把人民群众生命安全和身体健康放在第一位，按照坚定信心、同舟共济、科学防治、精准施策的总要求，坚持预防为主、分类指导、快速响应、落实责任的防控原则，结合会展活动的实际情况，落实会展活动举办单位的疫情防控主体责任，建立“活动举办方+场馆运营方+活动参与方”的疫情联防联控机制，做好活动举办和疫情防控各项工作。三、总体原则按照“谁举办、谁负责，谁组织、谁负责”的原则，在活动举办过程中全面落实“四早”措施（早发现、早报告、早隔离、早治疗），严格遵循“六必”要求（身份必录、信息必验、体温必测、"
          },
        {
          addr: "a",
          name: "s",
        },
        {
          addr: "a",
          name: "s",
        },
        {
          addr: "a",
          name: "s",
        },
        {
          addr: "a",
          name: "s",
        },
        {
          addr: "a",
          name: "s",
        },
        {
          addr: "a",
          name: "s",
        },
        {
          addr: "a",
          name: "s",
        },
        {
          addr: "a",
          name: "s",
        },
      ],
      userType: null,
    };
  },
   methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      this.pagesize = size; //当前显示页数
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage; //第几页
      console.log(this.currentPage); //点击第几页
    }
    // handleUserList() {
    //   this.$http.get("http://localhost:3000/assessList").then(res => {
    //     //这是从本地请求的数据接口，
    //     this.assessList = res.body;
    //   });
    // }
  },
  mounted() {
    this.userType = this.$route.query.userType;
  },
};
</script>
<style scoped>
.box {
  padding: 200px 100px 0 100px;
  /* color: #d6aac58c; */
}
.fl {
  padding-top: 20px;
  text-align: left;
  margin: 0 auto;
  width: 70%;
}
.cardList {
  /* padding-top: 20px; */
  text-align: left;
  margin: 0 auto;
  width: 70%;
}
img {
  width: 90px;
  height: 90px;
}
.title {
  padding-top: 10px;
}
.card {
  padding-top: 20px;
}
.nr {
  padding-top: 12px;
  font-size: 12px;
  color: dimgrey;
  display: -webkit-box;
  /* -webkit-box-orient: vertical; */
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.block {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
}
</style>