<template>
  <div class="form-tree">
    <FormNodeTree :node="node"></FormNodeTree>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, PropType } from 'vue';
import TreeNode from '@/types/TreeNode';
import FormNodeTree from './FormNodeTree.vue';

defineComponent({
  name: 'FormTree',
});

defineProps({
  node: Object as PropType<TreeNode>,
});
</script>

<style lang="scss">
.form-tree {
  padding: 10px;
  &__item {
    &--container {
      padding: 30px;
      margin: 6px 0;
      border: 1px solid black;
    }
  }
}
</style>
