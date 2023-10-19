<template>
  <div class="bg-slate-900 min-h-screen w-screen flex flex-col items-center">
    <header-bar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderBar from '@/components/HeaderBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderBar,
  },
});
</script>

<style lang="scss">
@import './assets/tailwind.css';
</style>
