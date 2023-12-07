<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-row items-start">
            <span class="text-lg font-medium text-white">Settings</span>
        </div>
        <div class="flex flex-col gap-3">
            <div class="flex flex-row justify-between items-center">
                <span class="text-sm font-normal text-white">Permissions: {{ permissionType }}</span>
                <button v-if="!getUser.is_admin" @click="requestAdmin" class="py-1 px-3 rounded-md bg-sky-400 hover:bg-sky-500 transition duration-300">
                    <span class="text-sm font-normal leading-6 text-black">Request admin</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { mapGetters } from 'vuex';

export default {
    name: 'SettingsMenu',
    computed: {
        ...mapGetters(['getUser']),
        permissionType() {
            return this.getUser.is_admin ? 'Admin' : 'Read only';
        },
    },
    methods: {
        requestAdmin() {
            window.location.href = "mailto:user@example.com?subject=admin%20request&body=I%20would%20like%20to%20request%20admin%20permissions.";
        },
    },
};
</script>