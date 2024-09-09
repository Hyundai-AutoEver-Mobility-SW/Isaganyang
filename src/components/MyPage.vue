<template>
  <div class="mypage-box">
    <div class="desc">
      {{ $store.state.userData[$store.state.index].username }} 님
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
    <div class="btn-list">
      <div class="brown-btn" @click="updateUserData">UPDATE</div>
      <div class="brown-btn" @click="deleteUserData">DELETE</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const userData = ref({
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
const updateUserData = () => {
  if (
    userData.value.username === null ||
    userData.value.addr === null ||
    userData.value.image === null
  ) {
    alert("모든 항목을 입력해주세요");
    return;
  }
  let newUserData = { ...userData.value };
  store.commit("updateUserData", newUserData);
  console.log("updateUserData >>> ", newUserData);
  clearForm();
};
const deleteUserData = () => {
  store.commit("deleteUserData");
  clearForm();
};
</script>

<style lang="scss" scoped>
.mypage-box {
  width: 400px;
  height: 270px;
  background-color: $beige-color;
  border-radius: 20px;
  border: 1px solid $brown-color;
  padding: 25px 25px;
  position: relative;
  .desc {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
.btn-list {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
