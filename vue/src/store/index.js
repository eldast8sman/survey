import {createStore} from 'vuex';

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('token')
        }
    },
    getters: {},
    actions: {
        register({ commit }, user){
            return fetch('http://127.0.0.1:8000/api/register', {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                method: "POST",
                body: JSON.stringify(user)
            })
            .then((res) => res.json())
            .then((res) => {
                commit("setUser", res);
                return res;
            })
        }
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = sessionStorage.getItem('TOKEN');
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token)
        }
    },
    modules: {}
})

export default store;