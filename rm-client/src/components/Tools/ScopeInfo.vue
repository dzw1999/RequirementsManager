<template>
  <div>
    <!-- 面包屑区域 -->
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>工具箱</el-breadcrumb-item>
        <el-breadcrumb-item :to="{
          path: '/tools/FileList'
        }">模糊检测</el-breadcrumb-item>
        <el-breadcrumb-item>{{this.$route.query.fileName}}</el-breadcrumb-item>
        <el-breadcrumb-item>模糊语句检测结果</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div :style="mystyle">
      <el-scrollbar style="height:100%">
        <div style="width:800px;height:600px;border:solid;overflow-x:auto;" >
          <span v-html="uncertainoutput"></span>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.getScope()
  },
  data () {
    return {
      mystyle: {
        margin: 'auto',
        position: 'absolute',
        top: '8%',
        left: '27%',
        right: '0',
        bottom: '0'
      },
      projectForm: {
        fileName: '',
        description: ''
      },
      projectFormRules: {
        projectName: [
          { required: true, message: '请输入项目名称', trigger: 'blur' }
        ]
      },
      uncertainoutput: '<p><span style="color:blue">The following problem is<span style="color:red"> supposed</span> to be the participants of the Dagstuhl Meeting</span> .</p><p>It is important that the program works correctly because the quantity of water present when the steam - boiler is working has to be neither too low nor to high ; otherwise<span style="color:blue"> the steam - boiler or the turbine sitting in front of it<span style="color:red"> might</span> be seriously affected</span> .</p><p>You<span style="color:blue"><span style="color:red"> might</span> also judge that the speci cation contains some loose ends and inconsistencies</span> .</p>'
    }
  },
  methods: {
    async getScope () {
      const { data: res } = await this.$http({
        method: 'post',
        url: '/file/importfile/uncertaindetect',
        headers: {
          'Authorization': window.sessionStorage.getItem('token')
        },
        data: {
          token: this.uploadFileToken,
          fileId: this.$route.fileId
        }
      })
      if (res.meta.status === 200) {
        this.$message.success(res.meta.msg)
        this.currentDetectTag = '模糊语句检测成功'
        this.uncertainoutput = res.data
      } else {
        this.$message.error(res.meta.msg)
        this.currentDetectTag = '模糊语句检测失败'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-form {
  width: 70%;
}
</style>

<style lang="less">
/* 必须设置成全局，去掉scoped */
/* 参考：https://segmentfault.com/q/1010000017251094 */
.analyze-table-form label {
  color: #99a9bf
}
</style>
