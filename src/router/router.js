import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserView from '../views/UserView.vue';
import SignUpView from '../views/SignUpView.vue';
// import MyPageView from '../views/MyPageView.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component : HomeView,
        },
        {
            path: "/user",
            name: "user",
            component : UserView,
        },
        {
            path: "/signup",
            name: "signup",
            component : SignUpView,
        },

    ],
});

export default router;