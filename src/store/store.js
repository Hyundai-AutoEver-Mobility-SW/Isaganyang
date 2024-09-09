import { createStore } from "vuex";

export default createStore({
    state: {
        modalView: false,
        isLogin: false,
        index : -1,
        userData: [
        { userid: 'dog1', password: 'dog1', username: "초코", addr: "강남구", image: "/profile/1.jpg" },
        { userid: 'dog2', password: 'dog2', username: "하양이", addr: "마포구", image: "/profile/2.jpg"},
        { userid: 'dog3', password: 'dog3', username: "식빵이", addr: "성수", image: "/profile/3.jpg" },
        { userid: 'dog4', password: 'dog4', username: "크림이", addr: "잠실", image: "/profile/4.jpg" },
        { userid: 'dog5', password: 'dog5', username: "설이", addr: "옥수", image: "/profile/5.jpg" },
        ],
    },
    mutations: {
        setModalView(state, payload) {
            state.modalView = payload;
        },
        setIndex(state, payload) {
            state.index = payload;
        },
        setAddr(state, payload) { 
            state.userData[state.index].addr = payload;
        },
        addUserData(state, payload) {
            state.userData.push(payload);
        },
        updateUserData(state, payload) {
            payload.userid = state.userData[state.index].userid;
            payload.password = state.userData[state.index].password;
            console.log(payload);
            state.userData[state.index] = payload;
        },
        checkUserLogin(state, payload) {
            const userIndex = state.userData.findIndex((user) => user.userid === payload.userid);
            console.log("find : ", userIndex);
            if(userIndex === -1) {
                state.isLogin = false;
                return;
            }
            state.index = userIndex;
            state.isLogin = true;
        },
        deleteUserData(state) {
            // payload는 삭제할 index 값
            state.userData.splice(state.index, 1);
            state.isLogin = false;
        }
    },
    actions: {},
});