import Vue from 'vue';
import Vuex from 'vuex';
import local from '@/api/axios';
import swal from 'sweetalert';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        allNovel: [],
    },
    getters: {},
    mutations: {
        setAllNovels(state, novels) {
            state.allNovel = novels;
        },
    },
    actions: {
        getAllNovels: async ({ commit }, params) => {
            try {
                let query = `/novel`;
                if (params?.filter) query += `/${params.filter}`;
                if (params?.search) query += `?order=${params.search}`;
                const { data } = await local.get(query);
                commit('setAllNovels', data);
            } catch (error) {
                swal('Error!', error.response.data.msg, 'error');
            }
        },
    },
    modules: {},
});
