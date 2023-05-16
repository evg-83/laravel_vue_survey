import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "EvgCodeholic content",
    slug: "evgcodeholic-content",
    status: "draft",
    image: "multfilm_Futurama_Bender_14573.jpg",
    description: "My name is Gru.<br>I`m developer in start way.",
    created_at: "2023-05-16 23:07:00",
    updated_at: "2023-05-16 23:07:00",
    expire_date: "2023-05-31 23:07:00",
    questions: [
      {
        id: 1,
        type: "select",
        question: "From which country are you",
        description: null,
        data: {
          options: [
            { uuid: "5dbb5779-4f98-4015-b6ac-c5ead3795ecc", text: "USA" },
            { uuid: "9278308a-fa74-452d-9d60-03c4214afdd8", text: "Russia" },
            { uuid: "cad61d9c-e482-4f5d-9b23-b3fdb17e2c94", text: "Germany" },
            { uuid: "d9dfb903-9604-4e18-b0eb-a66c4abd79b0", text: "India" },
            { uuid: "93dce552-011d-4b18-ae62-19817687ec05", text: "Britania" },
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "What language do you want to learn?",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quidem tenetur sapiente temporibus! Necessitatibus mollitia modi, tempora quis soluta non cupiditate ipsa optio architecto et, blanditiis ratione id, porro nemo!",
        data: {
          options: [
            { uuid: "78e5f644-6dc0-4490-aa98-ad305ca45d41", text: "PHP" },
            { uuid: "b338ebbd-1e33-40bf-8ef3-db8c270c7071", text: "JS" },
            { uuid: "37aa65c7-88c0-4dca-8add-9158057008c2", text: "Python" },
            { uuid: "1eb86588-9b1f-4c27-8aa7-f9256ed8fdfa", text: "HTML+CSS" },
            { uuid: "d56e2fab-9a4e-4988-a477-d0cc2dbe4415", text: "C++" },
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question: "Which PHP framework do you want to learn?",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quidem tenetur sapiente temporibus! Necessitatibus mollitia modi, tempora quis soluta non cupiditate ipsa optio architecto et, blanditiis ratione id, porro nemo!",
        data: {
          options: [
            { uuid: "4fced6b4-55ac-4250-8b4d-6141c9f6175f", text: "Laravel" },
            { uuid: "d6687709-c6cd-4dee-8b96-e437fbf6c0bb", text: "Symfony" },
            { uuid: "49279c24-8fdb-4904-b103-7a210f08e68b", text: "Yii2" },
            { uuid: "344ad515-69c6-4d28-8f44-0a0ed2c20b66", text: "Bitrix" },
          ],
        },
      },
      {
        id: 4,
        type: "radio",
        question: "Which Laravel framework do you love most?",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quidem tenetur sapiente temporibus! Necessitatibus mollitia modi, tempora quis soluta non cupiditate ipsa optio architecto et, blanditiis ratione id, porro nemo!",
        data: {
          options: [
            { uuid: "38dc74aa-224b-492b-8ad6-9e7ca7e5ad5f", text: "Laravel 5" },
            { uuid: "6be147e3-5035-4511-8aa8-ac4f8a56f81c", text: "Laravel 6" },
            { uuid: "c518fd16-aad2-424d-8de7-668d4bf61688", text: "Laravel 7" },
            {
              uuid: "c1672e48-91ba-489e-aa26-6833d397c5f9",
              text: "Laravel 10",
            },
          ],
        },
      },
      {
        id: 5,
        type: "checkbox",
        question: "What type of projects do you want to learn with Laravel?",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quidem tenetur sapiente temporibus! Necessitatibus mollitia modi, tempora quis soluta non cupiditate ipsa optio architecto et, blanditiis ratione id, porro nemo!",
        data: {
          options: [
            { uuid: "073dcd54-0d83-4274-aa21-50abe873a8fc", text: "REST API" },
            { uuid: "97b96ff5-3400-43fe-b2c9-ede8ef4f737c", text: "E-comerce" },
            {
              uuid: "a5603b96-21f7-49ba-a664-b51f22dfd130",
              text: "Real Estate",
            },
            {
              uuid: "da0920be-6d74-471d-9b7f-48e4f57fec67",
              text: "All of the above",
            },
          ],
        },
      },
      {
        id: 6,
        type: "text",
        question: "What`s your favorite from PHP?",
        description: null,
        data: {},
      },
      {
        id: 7,
        type: "textarea",
        question: "What`s your think about PHP?",
        description: "Bla bla bla",
        data: {},
      },
    ],
  },
  {
    id: 200,
    title: "Laravel 8",
    slug: "laravel-8",
    status: "active",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/77px-Laravel.svg.png",
    description: "Laravel is super",
    created_at: "2023-05-16 23:07:00",
    updated_at: "2023-05-16 23:07:00",
    expire_date: "2023-05-31 23:07:00",
    questions: [],
  },
  {
    id: 300,
    title: "Vue 3",
    slug: "vue-3",
    status: "active",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/93px-Vue.js_Logo_2.svg.png",
    description: "Vue 3 is super",
    created_at: "2023-05-16 23:07:00",
    updated_at: "2023-05-16 23:07:00",
    expire_date: "2023-05-31 23:07:00",
    questions: [],
  },
  {
    id: 400,
    title: "Tailwind 3",
    slug: "tailwind-3",
    status: "active",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/200px-Tailwind_CSS_logo.svg.png",
    description: "Tailwind 3 is super",
    created_at: "2023-05-16 23:07:00",
    updated_at: "2023-05-16 23:07:00",
    expire_date: "2023-05-31 23:07:00",
    questions: [],
  },
];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    surveys: [...tmpSurveys],
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post("/register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    logout({ commit }) {
      return axiosClient.post("/logout").then((response) => {
        commit("logout");
        return response;
      });
    },
  },
  mutations: {
    logout: (state) => {
      state.user.token = null;
      state.user.data = {};
      sessionStorage.removeItem("TOKEN");
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  modules: {},
});

export default store;
