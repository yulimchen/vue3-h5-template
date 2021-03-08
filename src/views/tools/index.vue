<template>
  <div>
    <van-button @click="handleClick">Ajax 按钮</van-button>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { Toast } from 'vant'

export default {
  name: 'Tools',
  setup() {
    const handleClick = () => {
      login({ username: 'test', password: 123 }).then((res) => {
        const { data } = res
        Toast.success(data.token)
      })
    }

    return {
      handleClick
    }
  }
}
</script>

<style>

</style>
