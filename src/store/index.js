import Vue from 'vue';
import Vuex from 'vuex';
import local from '@/api/axios';
import swal from 'sweetalert';
import {
    createUserWithEmailAndPassword,
    auth,
    signInWithEmailAndPassword,
} from '../../firebase/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        allNovel: [],
        novelToRead: [],
    },
    getters: {},
    mutations: {
        setAllNovels(state, novels) {
            state.allNovel = novels;
        },
        setNovelToRead(state, novel) {
            state.novelToRead = novel;
        },
    },
    actions: {
        postRegister: async (context, { email, password }) => {
            try {
                console.log(`masuk`, auth, email, password);
                const res = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                console.log(res);
                localStorage.setItem('access_token', res.user.accessToken);
                localStorage.setItem('email', email);
                swal('Success', 'Register Success', 'success');
                console.log(res.user.email, res.user.accessToken);
            } catch (error) {
                swal('Error', error.response.data.msg, 'error');
            }
        },

        postLogin: async (context, { email, password }) => {
            try {
                console.log(`masuk`, auth, email, password);
                const res = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                console.log(res);
                localStorage.setItem('access_token', res.user.accessToken);
                localStorage.setItem('email', email);
                swal('Success', 'Register Success', 'success');
                console.log(res.user.email, res.user.accessToken);
            } catch (error) {
                swal('Error', error.response.data.msg, 'error');
            }
        },

        getAllNovels: async ({ commit }, params) => {
            console.log(`masuk`, params);
            try {
                let query = `/novel`;
                if (params?.genre) query += `/${params.genre}`;
                if (params?.order) query += `?order=${params.order}`;
                const { data } = await local.get(query);
                commit('setAllNovels', data);
            } catch (error) {
                swal('Error!', error.response.data.msg, 'error');
            }
        },
        readNovel: async ({ commit }, { link, chapter }) => {
            try {
                console.log(`masukasdasdasd`, link, chapter);
                let url = `/novel/title/${link.split('/')[4]}`;
                if (!chapter) {
                    url = `/novel/title/${link.split('/')[4]}/chapter-1`;
                } else {
                    url = `/novel/title/${
                        link.split('/')[3]
                    }/chapter-${chapter}`;
                }
                const { data } = await local.get(url);
                commit('setNovelToRead', { data, url });
            } catch (error) {
                swal('Error!', error.response.data.msg, 'error');
            }
        },
    },

    modules: {},
});
