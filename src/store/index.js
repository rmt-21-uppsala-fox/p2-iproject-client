import Vue from 'vue';
import Vuex from 'vuex';
import local from '@/api/axios';
import swal from 'sweetalert';

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
