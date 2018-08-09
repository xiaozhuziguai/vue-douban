<template>
    <div id="app">
      <m-head></m-head>
      <tap></tap>
      <router-view/>
    </div>
</template>

<script>
import MHead from '@/components/head/head'
import Tap from '@/components/tab/tab'
export default {
  name: 'App',
  components: {
    MHead,
    Tap
  }
}
</script>

<style lang='stylus' scoped rel='stylesheet/stylus'>
</style>
