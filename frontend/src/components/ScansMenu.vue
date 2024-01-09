<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-row items-start">
            <span class="text-lg font-medium text-white">Scans</span>
        </div>
        <div v-if="getScans.length" class="flex flex-col gap-3 w-full">
            <div v-for="scan in getScans" :key="scan.id" class="p-2 rounded-md shadow-lg w-full bg-cyan-700 flex flex-row justify-between">
                <div class="flex flex-row gap-3">
                    <img src="@/assets/ct-scan.svg" class="w-6"/>
                    <span class="text-sm font-normal text-white">{{ scanName(scan.name) }}</span>
                </div>
                <div class="flex flex-row gap-3">
                    <button>
                        <img src="@/assets/eye.svg" class="w-6"/>
                    </button>
                    <button v-if="getUser.is_admin">
                        <img src="@/assets/delete.svg" class="w-6"/>
                    </button>
                </div>
            </div>
        </div>
        <div v-else>
            <span class="text-sm font-normal text-white">No scans uploaded yet</span>
        </div>
    </div>
</template>
<script lang="ts">
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'ScansMenu',
    data() {
        return {
            scans: [
                {
                    id: 1,
                    name: 'scan-0ds2213fds23',
                },
                {
                    id: 2,
                    name: 'scan-0ds2213fds23',
                },
                {
                    id: 3,
                    name: 'scan-0ds2213fds23',
                },
                {
                    id: 4,
                    name: 'scan-0ds2213fds23',
                },
                {
                    id: 5,
                    name: 'scan-0ds2213fds23',
                },
                {
                    id: 6,
                    name: 'scan-0ds2213fds23',
                },
            ],
        };
    },
    computed: {
        ...mapGetters(['getUser']),
        ...mapGetters('scans', ['getScans']),
    },
    methods: {
        ...mapActions('scans', ['listScans']),
        scanName(scan: string) {
            if (scan.split('.')[1] == 'zip') {
                return scan.split('.')[0];
            }
            return scan;
        },
    },
    created() {
        this.listScans();
    },
};
</script>