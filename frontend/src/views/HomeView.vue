<template>
  <div class="flex flex-col gap-6 py-9 px-9 w-full">
    <div>
      <h1 class="text-2xl font-bold text-white">Projects</h1>
    </div>
    <div class="grid gap-6 grid-cols-[150px,1fr]">
      <div class="bg-cyan-800 rounded-xl shadow-lg w-full flex flex-col justify-between min-h-[400px] p-5">
        <div class="flex flex-col gap-4 items-start">
          <button @click="openMenu(0)" class="flex flex-row gap-2 items-center">
            <img src="@/assets/ct-scan.svg" class="w-4 stroke-white" />
            <span class="text-lg font-medium text-white">Scans</span>
          </button>
          <button @click="openMenu(1)" class="flex flex-row gap-2 items-center">
            <img src="@/assets/upload.svg" class="w-4 stroke-white" />
            <span class="text-lg font-medium text-white">Upload</span>
          </button>
        </div>
        <div class="flex flex-col gap-4 items-start">
          <button @click="openMenu(2)" class="flex flex-row gap-2 items-center">
            <img src="@/assets/settings.svg" class="w-4 stroke-white" />
            <span class="text-lg font-medium text-white">Settings</span>
          </button>
        </div>
      </div>
      <div class="bg-cyan-800 rounded-xl shadow-lg w-full p-9">
        <ScansMenu v-if="scansMenu" />
        <UploadMenu v-if="uploadsMenu" />
        <SettingsMenu v-if="settingsMenu" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ScansMenu from '@/components/ScansMenu.vue';
import UploadMenu from '@/components/UploadMenu.vue';
import SettingsMenu from '@/components/SettingsMenu.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ScansMenu,
    UploadMenu,
    SettingsMenu,
  },
  data() {
    return {
      scansMenu: true,
      uploadsMenu: false,
      settingsMenu: false,
    };
  },
  methods: {
    openMenu(menu: number) {
      switch (menu) {
        case 0:
          this.scansMenu = true;
          this.uploadsMenu = false;
          this.settingsMenu = false;
          break;
        case 1:
          this.scansMenu = false;
          this.uploadsMenu = true;
          this.settingsMenu = false;
          break;
        case 2:
          this.scansMenu = false;
          this.uploadsMenu = false;
          this.settingsMenu = true;
          break;
      }
    },
  },
});
</script>
