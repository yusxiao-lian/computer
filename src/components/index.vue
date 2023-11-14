<template>
  <div class="content">
    <div style="margin-bottom:15px">
      <el-button @click="addProduct" type="primary">添加产品</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="材料">
        <template slot-scope="scope">
          <el-select
            v-model="tableData[scope.$index].materials"
            placeholder="请选择材料"
          >
            <el-option
              v-for="item in materials"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="印刷方式">
        <template slot-scope="scope">
          <el-select
            v-model="tableData[scope.$index].way"
            placeholder="请选择印刷方式"
            multiple
          >
            <el-option
              v-for="item in way"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="配件">
        <template slot-scope="scope">
          <el-select
            v-model="tableData[scope.$index].parts"
            placeholder="请选择配件"
            clearable
          >
            <el-option
              v-for="item in parts"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="数量">
        <template slot-scope="scope">
          <el-input type="number"  v-model="tableData[scope.$index].number"> </el-input>
        </template>
      </el-table-column>
      <el-table-column label="纸张长度">
        <template slot-scope="scope">
          <el-input type="number" @blur="paperBlur(scope.row)"  v-model="tableData[scope.$index].extent"> </el-input>
        </template>
      </el-table-column>
      <el-table-column label="纸张宽度">
        <template slot-scope="scope">
          <el-input type="number" @blur="paperBlur(scope.row)"  v-model="tableData[scope.$index].breadth"> </el-input>
        </template>
      </el-table-column>
      <el-table-column label="纸张成本">
        <template slot-scope="scope">
          <el-input type="number"  v-model="tableData[scope.$index].cost"> </el-input>
        </template>
      </el-table-column>
      <el-table-column prop="oneNumber" label="张/max量"> </el-table-column>
      <el-table-column prop="univalent" label="产品单价"> </el-table-column>
      <el-table-column prop="sum" label="总价"> </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">   
             <el-button @click="deleteRow(scope.$index)">删除</el-button>
             <el-button  @click="countRow(scope.$index,scope.row)">计算</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      materials: [
        { label: "色卡纸", value: "色卡纸" },
        { label: "棉卡纸", value: "棉卡纸" },
        { label: "绒布/丝布", value: "15" },
        { label: "2mm透明亚克力", value: "2mm透明亚克力" },
        { label: "3mm透明亚克力", value: "3mm透明亚克力" },
        { label: "2mm镜面亚克力", value: "2mm镜面亚克力" },
        { label: "3mm镜面亚克力", value: "3mm镜面亚克力" },
        { label: "灰板", value: "灰板" },
      ],
      way: [
        { label: "彩印", value: "彩印" },
        { label: "凹印", value: "凹印" },
        { label: "烫金", value: "烫金" },
        { label: "击凸", value: "击凸" },
        { label: "击凹", value: "击凹" },
        { label: "丝印", value: "丝印" },
        { label: "浮雕", value: "浮雕" },
      ],
      parts: [
        { label: "丝带", value: "丝带" },
        { label: "钻扣", value: "钻扣" },
        { label: "蜡印", value: "蜡印" },
      ],
    };
  },
  components: {

  },
  created() {
    this.tableData = [
      {
        materials: "",
        way: "",
        parts: "",
        number: "",
        univalent: "",
        extent: '',
        breadth: '',
        oneNumber: '',
        cost: '',
        sum: "",
      },
    ];
  },
  methods: {
    addProduct() {
      this.tableData.push({
        materials: "",
        way: "",
        parts: "",
        number: "",
        univalent: "",
        extent: '',
        breadth: '',
        oneNumber: '',
        cost: '',
        sum: "",
      });
    },
    deleteRow(index) {
        this.tableData.splice(index,1);
    },
    countRow(index,row) {
        let paper = Math.ceil(row.number/row.oneNumber)*row.cost;
        row.sum=paper;
        // if(row.materials && row.way && row.parts && row.number) {
        //     row.sum=index
        //1112223334445555666
        // }
    },
    paperBlur(row) {
        if(row.extent && row.breadth){
          row.extent=parseInt(row.extent)
          row.breadth=parseInt(row.breadth);
          let one = Math.floor(787/row.extent)*Math.floor(1092/row.breadth);
          let two = Math.floor(1092/row.extent)*Math.floor(787/row.breadth);
          if(one>two) {
            row.oneNumber=one;
          }else{
            row.oneNumber=two;
          }
        }
    }
  },
};
</script>

<style lang="less" scoped>
html,
body {
  height: 100%;
  width: 100%;
}
.content {
  position: relative;
  height: 100%;
}
</style>
