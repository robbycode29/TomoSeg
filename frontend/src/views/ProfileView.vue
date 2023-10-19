<template>
    <div class="w-10/12">
        <div class="bg-cyan-800 my-14 min-h-[50px] rounded-lg py-4 px-4 flex flex-col items-center">
            <button @click="signOut" class="p-2 text-white bg-red-800 rounded-lg">Sign out</button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
    name: 'ProfileView',
    components: {

    },
    methods: {
        ...mapActions(['setUser']),
        signOut() {
            this.setUser({});
            localStorage.removeItem('user');
            this.$router.push('/');
        },
    },
});
</script>