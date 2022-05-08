import {createStore} from 'vuex';
import axiosClient from "../axios";

const tmpSurveys = [
    {
        id: 100,
        title: "TheCodeholic Youtube channel content",
        slug: "thecodeholic-youtube-channel-content",
        status: "draft",
        image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
        description: "This is a Test description from Codeholic and it is about the Survey App that I am developing with his help",
        created_at: "2022-04-30 05:22:00",
        updated_at: "2022-04-30 05:22:00",
        expiry_date: "2022-05-11 05:22:00",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you?",
                description: null,
                data: {
                    options: [
                        {uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "USA"},
                        {
                            uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
                            text: "Georgia"
                        },
                        {
                            uuid: "b5c09733-a49e-ba8a-52686310723",
                            text: "Germany"
                        },
                        {uuid: "2abf1cee-427c-a220-b5d159ad6513", text: "India"},
                        {
                            uuid: "8d14341b-ec2b-4924-9aea-bda6a53b1fc",
                            text: "United Kingdom"
                        },
                    ]
                },
            },
            {
                id: 2,
                type: "checkbox",
                question: "Which language do you want to see on my channel?",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos",
                data: {
                    options: [
                        {
                            uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", 
                            text: "Javascript",
                        },
                        {uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "PHP",},
                        {uuid: "b5c09733-a49e-460a-ba8a-526863010729", text: "HTML + CSS",},
                        {uuid: "b5c09733-a49e-460a-ba8a-526863010729", text: "All of the above",},
                        {uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "Everything Zura thinks will be good",},
                    ]
                }
            },
            {
                id: 3,
                type: "checkbox",
                question: "Which PHP framework videos do you want to see on my channel?",
                description: "Lorem ipsum dolor sit amet, consectetur adpisicing elit, Assumenda ...",
                data: {
                    options: [
                        {
                            uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
                            text: "Laravel",
                        },
                        { uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "Yii2"},
                        {
                            uuid: "b5c09733-a49e-460a-ba8a-526863010729",
                            text: "CodeIgniter",
                        },
                        {
                            uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", 
                            text: "Symfony",
                        },
                    ]
                }
            },
            {
                id: 4,
                type: "radio",
                question: "Which Laravel framework do you love the most?",
                description: "Lorem ipsum dolor sit amet, consectetur adpisicing elit. Assumenda cumque earum eos...",
                data: {
                    options: [
                        {
                            uuid: "31132230-29e0-4857-84ed-417542c7c8dd",
                            text: "Laravel 5",
                        },
                        {
                            uuid: "0ab85f86-15ee-4ec0-ba42-793daf243a5d",
                            text: "Laravel 6",
                        },
                        {
                            uuid: "748fd679-d983-8d7b-7bb4abd22254",
                            text: "Laravel 7",
                        },
                    ]
                }
            },
            {
                id: 5,
                type: "text",
                question: "What's your favourite YouTube channel?",
                description: null,
                data: {},
            },
            {
                id: 6,
                type: "textarea",
                question: "What do you think about the codeholic channel?",
                description: "Write your honest opinion. Everything is anonymous",
                data: {}
            }
        ]
    },
    {
        id: 200,
        title: "Laravel 8",
        slug: "laravel-8",
        status: "active",
        image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
        description: "This is a Survey about Laravel framework",
        created_at: "2022-04-30 05:22:00",
        updated_at: "2022-04-30 05:22:00",
        expiry_date: "2022-05-11 05:22:00",
        questions: []
    },
    {
        id: 300,
        title: "Vue3",
        slug: "vue-3",
        status: "active",
        image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
        description: "This is a Survey about Vue, Vuex and Vite",
        created_at: "2022-04-30 05:22:00",
        updated_at: "2022-04-30 05:22:00",
        expiry_date: "2022-05-11 05:22:00",
        questions: []
    },
    {
        id: 400,
        title: "Tailwind 3",
        slug: "tailwin-3",
        status: "active",
        image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
        description: "This is a Survey about thw Tailwind Css framework",
        created_at: "2022-04-30 05:22:00",
        updated_at: "2022-04-30 05:22:00",
        expiry_date: "2022-05-11 05:22:00",
        questions: []
    }
]

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        surveys: [...tmpSurveys],
        questionTypes: ["text", "select", "radio", "checkbox", "textarea"]
    },
    getters: {},
    actions: {
        register({ commit }, user){
            return axiosClient.post('/register', user)
                .then(({data}) => {
                    commit('setUser', data);
                    return data;
                })
        },
        login({ commit }, user){
            return axiosClient.post('/login', user)
                .then(({data}) => {
                    commit('setUser', data);
                    return data;
                })
        },
        logout({ commit }) {
            return axiosClient.post('/logout')
                .then(response => {
                    commit('logout');
                    return response;
                })
        }
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem("TOKEN");
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    },
    modules: {}
})

export default store;