<template>
    <login-panel />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import LoginPanel from '@/components/LoginPanel.vue';

export default defineComponent({
    name: 'AuthView',
    components: {
        LoginPanel,
    },
});
</script>