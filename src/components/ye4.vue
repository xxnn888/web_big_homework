<template>
    <div class="img">
      <el-upload
          action="https://up-z2.qiniup.com/my"
          :on-success="uploadSuccess"
          :limit="9"
          drag
          :data="postData"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          list-type="picture-card"
          :auto-upload="false">
        <i slot="default" class="el-icon-plus">点击上传</i>
        <div slot="file" slot-scope="{file}">
          <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt="">
          <span class="el-upload-list__item-actions">
        <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)">
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)">
          <i class="el-icon-download"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)">
          <i class="el-icon-delete"></i>
        </span>
      </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
</template>

<script>
export default {
  name: "ye4",
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      postData: {
        token: "3xDQvuj_5fwOatHR5JutJUXOt5jofKFzDEnM6fCH:Mm4QaJeeqmHeeeuFHf8ZN_zjbGA=:eyJzY29wZSI6Inh4bm44MDgtbmF0IiwiZGVhZGxpbmUiOjE2ODU2OTg5MjR9",
      }
    }
  },
  mounted() {
    const items = document.querySelectorAll('.item')

    items.forEach(dom => {
      dom.onclick = function(){
        dom.classList.toggle('active')
      }
    })
  },
  methods: {
    uploadSuccess(res) {
      console.log(res)
      this.dialogImageUrl = "https://cdn.xxnn808.top/" + res.key
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    }
  }
}
</script>

<style scoped>
.img {
  padding: 20px 0;
  text-align: left;
}

.img .el-upload-dragger {
  width: 338px;
  height: 147px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}




</style>
