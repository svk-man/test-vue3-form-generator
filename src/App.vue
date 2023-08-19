<template>
  <FormJsonEditor @submit="generateForm" />
  <ModalJsonForm
    :formJson="formJson"
    :isOpened="isModalOpened"
    @closeModal="closeModal"/>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import FormJsonEditor from './components/FormJsonEditor.vue';
import ModalJsonForm from './components/ModalJsonForm.vue';

defineComponent({
  name: 'App',
  components: {
    FormJsonEditor,
  },
});

const formJson = ref('');
const isModalOpened = ref(false);

function openModal() {
  isModalOpened.value = true;
}

function closeModal() {
  isModalOpened.value = false;
}

function isJson(json: string) {
  try {
    JSON.parse(json);
  } catch (e) {
    return false;
  }

  return true;
}

function generateForm(newFormJson: string) {
  if (!newFormJson.trim()) {
    return;
  }

  if (!isJson(newFormJson)) {
    alert('Невалидный JSON');
    return;
  }

  formJson.value = newFormJson;
  openModal();
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
