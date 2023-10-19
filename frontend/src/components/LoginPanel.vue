<template>
    <div class="bg-cyan-800 rounded-xl mt-12 w-[300px] min-h-[500px] sm:w-[360px] md:w-[450px] lg:w-[550px]">
        <div class="flex flex-col items-center">
            <h1 class="text-3xl text-white font-medium mt-8">Login</h1>
        </div>
        <div id="firebaseui-auth-container" class="my-12"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { mapActions } from 'vuex';

export default defineComponent({
    name: 'LoginPanel',
    data() {
        return {
            firebaseConfig: {
                apiKey: "AIzaSyA50nx2Z2SmvOLsfEe3kG5VATytsEJF4u8",
                authDomain: "tomoseg-2b1d1.firebaseapp.com",
                projectId: "tomoseg-2b1d1",
                storageBucket: "tomoseg-2b1d1.appspot.com",
                messagingSenderId: "580611834942",
                appId: "1:580611834942:web:2bd2904ef130767f90bd6f",
                measurementId: "G-BN3NCK93PS"
            },
        };
    },
    components: {

    },
    methods: {
        ...mapActions(['setUser']),
        initializeFirebaseLogin() {
            const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
            ui.start('#firebaseui-auth-container', {
                callbacks: {
                    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                        // User successfully signed in.
                        // Return type determines whether we continue the redirect automatically
                        // or whether we leave that to developer to handle.
                        authResult.user.getIdToken().then((accessToken: any) => {
                            localStorage.setItem('accessToken', accessToken);
                            localStorage.setItem('user', JSON.stringify(authResult.user));
                            this.setUser(authResult.user);
                            this.$router.push('/');
                        });
                        return true;
                    },
                },
                signInFlow: 'popup',
                signInOptions: [
                    {
                        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
                    },
                    {
                        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    },
                    {
                        provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                    },
                ],
                signInSuccessUrl: '/',
            });
        },
    },
    mounted() {
        firebase.initializeApp(this.firebaseConfig);
        this.initializeFirebaseLogin();
    },
});
</script>