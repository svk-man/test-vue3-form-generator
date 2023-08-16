<template>
  <form class="form-json">
    <label for="form-json" class="form-json__label">Введите JSON-представление формы:
      <textarea id="form-json" class="form-json__textarea"
        cols="30" rows="10" v-model="formJson"></textarea>
    </label>
    <button type="submit" class="form-json__button">Сгенерировать форму</button>
  </form>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';

defineComponent({
  name: 'FormJsonEditor',
});

const formJson = ref('');
</script>

<style scoped lang="scss">
.form-json {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  &__textarea {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
