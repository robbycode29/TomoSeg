<template>
  <div class="flex flex-col gap-6 py-9 px-9 w-full">
    <div>
      <h1 class="text-2xl font-bold text-white">Projects</h1>
    </div>
    <div class="grid gap-6 grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
      <div class="bg-cyan-800 rounded-xl shadow-lg w-full flex flex-col justify-between h-[400px] p-5">
        <div class="flex flex-col gap-4 items-start">
          <button>
            <CTScanIcon />
            <span class="text-lg font-medium">Scans</span>
          </button>
          <button>
            <span class="text-lg font-medium">Upload</span>
          </button>
        </div>
        <div class="flex flex-col gap-4 items-start">
          <button>
            <span class="text-lg font-medium">Settings</span>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CTScanIcon from '@/assets/ct-scan.svg';

export default defineComponent({
  name: 'HomeView',
  components: {
    CTScanIcon,
  },
});
</script>
