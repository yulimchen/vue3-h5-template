<template>
  <div>
    <van-cell-group>
      <van-field
        v-model="message"
        rows="1"
        autosize
        type="textarea"
        placeholder="请输入留言"
      >
        <van-button slot="button" size="small" type="warning">警告按钮</van-button>
      </van-field>
    </van-cell-group>
  </div>

</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style>

</style>
