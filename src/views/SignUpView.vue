<template>
  <div class="container-fluid p-0 bg-container">
    <div class="content">
      <div class="overlay-text">
        <h1 class="title">Sign Up</h1>
        <p class="description">register</p>
      </div>
      <div class="signup-box">
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
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="UserName"
            v-model="userData.username"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Addr"
            v-model="userData.addr"
          />
        </div>
        <div class="input-group mb-3">
          <input
            type="file"
            class="form-control"
            id="fileform"
            @change="handleImage"
            accept="image/*"
          />
          <label class="input-group-text" for="fileform">Upload</label>
        </div>
        <div class="brown-btn" @click="addUserData">가입하기</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const userData = ref({
  userid: null,
  password: null,
  username: null,
  addr: null,
  image: null,
});

const clearForm = () => {
  userData.value.userid = "";
  userData.value.password = "";
  userData.value.username = "";
  userData.value.addr = "";
  userData.value.image = null;
};
const handleImage = (e) => {
  const file = e.target.files[0];
  console.log(file);
  if (file) {
    userData.value.image = URL.createObjectURL(file);
  }
};
const addUserData = () => {
  if (
    userData.value.userid === null ||
    userData.value.password === null ||
    userData.value.username === null ||
    userData.value.addr === null ||
    userData.value.image === null
  ) {
    alert("모든 항목을 입력해주세요");
    return;
  }
  let newUserData = { ...userData.value };
  store.commit("addUserData", newUserData);
  console.log("newUserData >>> ", newUserData);
  clearForm();
};
</script>

<style lang="scss" scoped>
.bg-container {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100vh;
  background-image: url("/src/assets/pixel.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20vh;
}
.overlay-text {
  text-align: center;
  color: $beige-color;
  margin-bottom: 1%;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: $beige-color;
}

.description {
  font-size: 1.2rem;
  color: $beige-color;
}
.signup-box {
  width: 400px;
  height: 350px;
  background-color: $beige-color;
  border-radius: 20px;
  border: 1px solid $brown-color;
  padding: 25px 25px;
  position: relative;
}
</style>
