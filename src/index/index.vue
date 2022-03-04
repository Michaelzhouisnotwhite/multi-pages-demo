<template>
  <div>
    <h1>首页内容</h1>
    <app-header></app-header>
    <hr>
    <a href="page2" target="_Blank">跳到page2</a>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
  name:'Index',
  components: {
    AppHeader,
  },
}
</script>

<style>

</style>
