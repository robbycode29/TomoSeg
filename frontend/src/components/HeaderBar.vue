<template>
    <div class="w-screen h-16 md:h-20 bg-cyan-800 flex justify-between">
        <div class="flex items-center">
            <router-link to="/" class="ml-4">
                <img src="@/assets/Tomoseg.png" class="w-36" />
            </router-link>
        </div>
        <div class="flex">
            <div class="flex items-center px-4 gap-2">
                <router-link to="/" class="text-slate-900 text-xl font-medium mr-4">Home</router-link>
                <router-link to="/about" class="text-slate-900 text-xl font-medium mr-4">About</router-link>
                <div @click="openProfile" class="cursor-pointer flex gap-2 items-center">
                    <img v-if="getUser?.photoURL" :src="userIcon" class="w-6 h-6 rounded-full" />
                    <img v-else src="@/assets/profile.png" class="w-6 h-6" />
                    <span class="text-slate-900 text-lg font-medium">{{ userName }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
    name: 'HeaderBar',
    components: {

    },
    computed: {
        ...mapGetters(['getUser']),
        userName() {
            const user = this.getUser;
            if (!user?.displayName) {
                if (Object.keys(user).length === 0) {
                    return 'Sign in';
                }
                return 'Profile';
            }
            return user.displayName;
        },
        userIcon() {
            const user = this.getUser;
            return user.photoURL;
        },
    },
    methods: {
        openProfile() {
            this.$router.push('/profile');
        },
    },
});
</script>