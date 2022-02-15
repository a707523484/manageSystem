<template>
  <div class="manage">
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <c-form
        :form-label="operateFormLabel"
        :form="operateForm"
        :inline="true"
        ref="form"
      >
      </c-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="mange-header">
      <el-button type="primary" @click="addUser">+新增</el-button>
      <c-form
        :form-label="formLabel"
        :form="searchForm"
        :inline="true"
        ref="form"
      >
        <el-button type="primary" @click="getList">搜索</el-button>
      </c-form>
    </div>
    <c-table
      :tableData="tableData.slice((config.page - 1) * 10, config.page * 10)"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList"
      @edit="editUser"
      @del="delUser"
    >
    </c-table>
  </div>
</template>

<script>
import cForm from "./cForm";
import cTable from "./cTable";
export default {
  name: "User",
  components: {
    cForm,
    cTable,
  },
  data() {
    return {
      operateType: "add",
      isShow: false,
      operateFormLabel: [
        {
          model: "name",
          label: "姓名",
          type: "input",
        },
        {
          model: "age",
          label: "年龄",
          type: "input",
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            {
              label: "男",
              value: "男",
            },
            {
              label: "女",
              value: "女",
            },
          ],
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date",
        },
        {
          model: "addr",
          label: "地址",
          type: "input",
        },
      ],
      operateForm: {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: "",
      },
      formLabel: [
        {
          model: "keyword",
          label: "",
          type: "input",
        },
      ],
      searchForm: {
        keyword: "",
      },
      tableData: [],
      tableLabel: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: "sex",
          label: "性别",
        },
        {
          prop: "birth",
          label: "出生日期",
          width: 200,
        },
        {
          prop: "addr",
          label: "地址",
          width: 320,
        },
      ],
      config: {
        page: 1,
        total: 0,
      },
    };
  },
  methods: {
    confirm() {
      if (this.operateType === "add") {
        this.$http.post("/addUser", this.operateForm).then((res) => {
          this.isShow = false;
          this.tableData.push(res.data.addUserData);
          this.config.total=this.tableData.length;
        });
      }
      if (this.operateType === "edit") {
        this.isShow = false;
      }
    },
    addUser() {
      this.isShow = true;
      this.operateType = "add";
      this.operateForm = {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: "",
      };
    },
    getList() {
      for (let index = 0; index < this.tableData.length; index++) {
        if (this.searchForm.keyword == this.tableData[index].name) {
          this.tableData = this.tableData.slice(index, index + 1);
        }
      }
    },
    editUser(row) {
      this.operateType = "edit";
      this.isShow = true;
      this.operateForm = row;
    },
    delUser(row) {
      const id = row.id;
      this.$confirm("此操作将永久删除该用户，是否继续？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        for (let index = 0; index < this.tableData.length; index++) {
          if (id == this.tableData[index].id) {
            this.tableData.splice(index, 1);
            this.config.total=this.tableData.length;
          }
        }
      });
    },
  },
  mounted() {
    this.$http.get("/getUserList").then((res) => {
      this.tableData = res.data.userData.userList;
      this.config.total=this.tableData.length;
    });
  },
};
</script>

<style>
.mange-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>