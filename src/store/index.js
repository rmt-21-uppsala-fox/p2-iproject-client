import Vue from 'vue';
import Vuex from 'vuex';
import local from '@/api/axios';
import swal from 'sweetalert';
import {
    createUserWithEmailAndPassword,
    auth,
    signInWithEmailAndPassword,
    db,
} from '../../firebase/index.js';
import {
    collection,
    doc,
    getDocs,
    query,
    setDoc,
    Timestamp,
    where,
} from 'firebase/firestore';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        allNovel: [],
        novelToRead: [],
        bookmarked: [],
        apiNovels: [],
    },
    getters: {},
    mutations: {
        setAllNovels(state, novels) {
            state.allNovel = novels;
        },
        setNovelToRead(state, novel) {
            state.novelToRead = novel;
        },
        setBookmarked(state, novels) {
            state.bookmarked = novels;
        },
        setApiNovel(state, novels) {
            state.apiNovels = novels.slice(0, 6);
        },
        getLogout() {
            localStorage.clear();
        },
    },
    actions: {
        postRegister: async (context, { email, password }) => {
            try {
                const res = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                await setDoc(doc(db, 'users', res.user.uid), {
                    uid: res.user.uid,
                    email,
                    password,
                    createdAt: Timestamp.fromDate(new Date()),
                });
                localStorage.setItem('access_token', res.user.accessToken);
                localStorage.setItem('email', email);
                localStorage.setItem('uid', res.user.uid);
                context.commit('isLogin', true);
                swal('Success', 'Register Success', 'success');
            } catch (error) {
                console.log(error);
                swal('Error', error, 'error');
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

                localStorage.setItem('access_token', res.user.accessToken);
                localStorage.setItem('email', email);
                localStorage.setItem('uid', res.user.uid);
                context.commit('isLogin', true);
                swal('Success', 'Register Success', 'success');
            } catch (error) {
                console.log(error);
                swal('Error', error, 'error');
            }
        },

        getAllNovels: async ({ commit }, params) => {
            console.log(`masuk`, params);
            try {
                let query = `/novel`;
                if (params?.genre) query += `/${params.genre}`;
                if (params?.order) query += `?order=${params.order}`;
                const { data } = await local.get(query, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'access_token'
                        )}`,
                    },
                });
                commit('setAllNovels', data);
            } catch (error) {
                console.log(error);
                swal('Error!', error, 'error');
            }
        },

        readNovel: async ({ commit }, { link, chapter }) => {
            try {
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
                console.log(error);
                swal('Error!', error, 'error');
            }
        },

        postBookmark: async (context, { link, title }) => {
            try {
                const uid = localStorage.getItem('uid');
                const ids = uid + '-' + title;
                await local.get('/auth', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'access_token'
                        )}`,
                    },
                });

                await setDoc(doc(db, 'bookmark', ids), {
                    userId: uid,
                    link,
                    title,
                    createdAt: Timestamp.fromDate(new Date()),
                });
                swal('Success', 'Bookmark Success', 'success');
            } catch (error) {
                console.log(error);
                swal('Error!', 'you need to relogin', 'error');
            }
        },

        getBookmark: async ({ commit }) => {
            try {
                const uid = localStorage.getItem('uid');
                await local.get('/auth', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'access_token'
                        )}`,
                    },
                });

                const bookmarks = await getDocs(
                    query(
                        collection(db, 'bookmark'),
                        where('userId', '==', uid)
                    )
                );

                const bookmarkList = [];
                bookmarks.docs.forEach(async (item) => {
                    const reses = await local.get(
                        `/novel/title/${item.data().link.split('/')[4]}`
                    );
                    bookmarkList.push(reses.data);
                });
                commit('setBookmarked', bookmarkList);
            } catch (error) {
                console.log(error);
                swal('Error!', error, 'error');
            }
        },

        getApiNovel: async ({ commit }) => {
            try {
                console.log(`masuk ke api novel`);
                const res = await local.post(`/novel/api`);
                console.log(res.data);
                commit('setApiNovel', res.data.data);
            } catch (error) {
                console.log(error);
                swal('Error!', error, 'error');
            }
        },
    },

    modules: {},
});
