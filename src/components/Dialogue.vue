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
import { Field, Cell, CellGroup, Button } from 'vant'
export default {
  components: {
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style>

</style>
