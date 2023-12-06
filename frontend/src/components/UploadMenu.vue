<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-row items-start gap-4">
            <span class="text-lg font-medium text-white">Upload scan</span>
            <span class="text-sm font-medium text-white self-center">(accepted formats: .dicom)</span>
        </div>
        <div class="flex flex-row w-full h-[280px]">
            <button class="w-full flex flex-row border-white border border-dashed rounded-xl justify-center items-center">
                <div class="flex flex-col gap-4 items-center">
                    <img src="@/assets/upload.svg" class="w-8 stroke-white" />
                    <span class="text-lg font-medium text-white">Drop here or click</span>
                </div>
            </button>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'UploadsMenu',
};
</script>