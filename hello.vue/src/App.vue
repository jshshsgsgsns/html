<script  lang="ts">
import people from "./components/people.vue";

export default {
  name: 'App',
  components: {
    people,  // 注册 People 组件
  },
};

</script>

<template>
  <people/>
</template>


