<template>
  <div>
    <h1>page2</h1>
    <app-header></app-header>
    <hr />
    <a href="index">回到首页</a>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "page-2",
  components: {
    AppHeader,
  },
};
</script>

<style>
</style>
