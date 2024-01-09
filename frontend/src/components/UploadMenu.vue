<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-row items-start gap-4">
            <span class="text-lg font-medium text-white">Upload scan</span>
            <span class="text-sm font-medium text-white self-center">(accepted formats: .dcm, .zip)</span>
        </div>
        <div class="flex flex-row w-full h-[280px]">
            <button @click="onButtonClick" @dragover.prevent="onDragOver" @drop.prevent="onDrop" @dragleave="dragging = false"
                class="w-full flex flex-row border-white border border-dashed rounded-xl justify-center items-center transition duration-300"
                :class="dragging ? 'bg-sky-700' : 'bg-cyan-800'">
                <div class="flex flex-col gap-4 items-center">
                    <img src="@/assets/upload.svg" class="w-8 stroke-white" />
                    <span class="text-lg font-medium text-white">Drop here or click</span>
                </div>
            </button>
            <input type="file" ref="fileInput" style="display: none" @change="onFileChange" />
        </div>
    </div>
</template>
<script lang="ts">
import { mapActions } from 'vuex';

export default {
    name: 'UploadsMenu',
    data() {
        return {
            dragging: false,
        };
    },
    methods: {
        ...mapActions('scans', ['uploadScan']),
        onDragOver(e: DragEvent) {
            e.preventDefault();
            this.dragging = true;
        },
        onDrop(e: DragEvent) {
            this.dragging = false;
            e.preventDefault();
            console.log(e.dataTransfer?.files);
        },
        onFileChange(e) {
            const files = e.target.files;
            if (!files) return;
            this.uploadScan(files[0]);
        },
        onButtonClick() {
            this.$refs.fileInput.click();
        },
    },
};
</script>