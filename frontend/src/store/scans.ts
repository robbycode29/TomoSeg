import { getStorage, ref, uploadBytes, listAll } from "firebase/storage";

export default {
    namespaced: true,
    state: {
        scans: [],
    },
    getters: {
        getScans: (state) => state.scans,
    },
    mutations: {
        setScans(state, scans) {
            state.scans = scans;
        },
    },
    actions: {
        async uploadScan({ commit, rootGetters }, scan) {
            const user = rootGetters["getUser"];
            const storageRef = getStorage();
            const scansRef = ref(storageRef, `${user.uid}/${scan.name}`);
            uploadBytes(scansRef, scan);
        },
        async listScans({ commit, rootGetters }) {
            const user = rootGetters["getUser"];
            const storageRef = getStorage();
            const scansRef = ref(storageRef, `${user.uid}`);
            const scans = [];
            listAll(scansRef)
                .then((res) => {
                    res.prefixes.forEach((folderRef) => {
                        // All the prefixes under listRef.
                        // You may call listAll() recursively on them.
                    });
                    res.items.forEach((itemRef) => {
                        scans.push(itemRef);
                    });
                    commit("setScans", scans);
                }).catch((error) => {
                    console.log(error)
                });
        },
    },
};