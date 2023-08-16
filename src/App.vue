<template>
  <FormJsonEditor @submit="generateForm" />
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import FormJsonEditor from './components/FormJsonEditor.vue';

defineComponent({
  name: 'App',
  components: {
    FormJsonEditor,
  },
});

function generateForm(formJson: string) {
  console.log(formJson);
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
