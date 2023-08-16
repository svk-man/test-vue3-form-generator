<template>
  <div class="modal" v-show="isOpened">
    <div class="modal__content">
      <span class="modal__close" @click="closeModal" @keyup="closeModal">&times;</span>
      <p>Some text in the Modal..</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';

defineComponent({
  name: 'ModalJsonForm',
});

const isOpened = ref(true);

function closeModal() {
  isOpened.value = false;
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  &__content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  &__close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover,
    &:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
}

</style>
