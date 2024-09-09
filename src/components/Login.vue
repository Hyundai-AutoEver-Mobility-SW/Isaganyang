<template>
  <div class="login-box">
    <div class="desc text-center mb-2">Login</div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="UserID"
        v-model="userData.userid"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Password"
        v-model="userData.password"
      />
    </div>
    <div class="brown-btn" @click="checkUserLogin">LOGIN</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const userData = ref({
  userid: null,
  password: null,
});

const clearForm = () => {
  userData.value.userid = "";
  userData.value.password = "";
};
const checkUserLogin = () => {
  if (userData.value.userid === null || userData.value.password === null) {
    alert("모든 항목을 입력해주세요");
    return;
  }
  store.commit("checkUserLogin", userData.value);
  if (store.state.isLogin) {
    clearForm();
  } else {
    alert("아이디 또는 비밀번호가 틀렸습니다.");
  }
};
</script>

<style lang="scss" scoped>
.login-box {
  width: 400px;
  height: 230px;
  background-color: $beige-color;
  border-radius: 20px;
  border: 1px solid $brown-color;
  padding: 25px 25px;
  position: relative;
  .desc {
    font-size: 17px;
    font-weight: bold;
  }
}
</style>
