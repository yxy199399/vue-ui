<template>
  <div id="app">
    <!-- <div class="row">
      <yxy-button @click="fn">按钮</yxy-button>
      <yxy-button type="primary">按钮</yxy-button>
      <yxy-button type="success">按钮</yxy-button>
      <yxy-button type="info">按钮</yxy-button>
      <yxy-button type="danger">按钮</yxy-button>
      <yxy-button type="warning">按钮</yxy-button>
    </div>
    <div class="row">
      <yxy-button>按钮</yxy-button>
      <yxy-button type="primary" plain>按钮</yxy-button>
      <yxy-button type="success" plain>按钮</yxy-button>
      <yxy-button type="info" plain>按钮</yxy-button>
      <yxy-button type="danger" plain>按钮</yxy-button>
      <yxy-button type="warning" plain>按钮</yxy-button>
    </div>
    <div class="row">
      <yxy-button icon="yxy-icon-yuyin" plain round>按钮</yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="primary" plain round>按钮</yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="success" plain round>按钮</yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="info" plain round>按钮</yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="danger" plain round>按钮</yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="warning" plain round>按钮</yxy-button>
    </div>
    <div class="row">
      <yxy-button plain round circle>拆</yxy-button>
      <yxy-button type="primary" plain round circle>拆</yxy-button>
      <yxy-button type="success" plain round circle>拆</yxy-button>
      <yxy-button type="info" plain round circle>拆</yxy-button>
      <yxy-button type="danger" plain round circle>拆</yxy-button>
      <yxy-button type="warning" plain round circle>拆</yxy-button>
    </div>
    <div class="row">
      <yxy-button icon="yxy-icon-yuyin" plain round circle></yxy-button>
      <yxy-button icon="yxy-icon-yuyin" plain round circle></yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="primary" plain round circle></yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="success" plain round circle></yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="info" plain round circle></yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="danger" plain round circle></yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="warning" plain round circle></yxy-button>
    </div>
    <div class="row">
      <yxy-button icon="yxy-icon-yuyin" plain round disabled>按钮</yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="primary" plain round disabled>按钮</yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="success" plain round disabled>按钮</yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="info" plain round disabled>按钮</yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="danger" plain round disabled>按钮</yxy-button>
      <yxy-button icon="yxy-icon-yuyin" type="warning" plain round disabled>按钮</yxy-button>
    </div> -->
    <yxy-button @click="visible = true">按钮</yxy-button>
    <yxy-dialog width="30%" top="20px" :visible.sync="visible">
      <template v-slot:title>
        <div>
          温馨提示
        </div>
      </template>
      <ul>
        <li>111</li>
        <li>111</li>
        <li>111</li>
      </ul>
      <template v-slot:footer>
        <div>
          <yxy-button @click="visible = false">取消</yxy-button>
          <yxy-button @click="visible = false" type="primary">确定</yxy-button>
        </div>
      </template>
    </yxy-dialog>
  </div>
</template>

<script>

export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    fn (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
  .row {
    margin-bottom: 20px;
    .yxy-button {
      margin-right: 20px !important;
    }
  }
</style>
