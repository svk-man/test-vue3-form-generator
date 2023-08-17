<template>
  <div class="tree">
    <ul class="tree-list">
      <FormNodeTree :node="node"></FormNodeTree>
    </ul>
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

<style>
.tree-list ul {
  padding-left: 16px;
  margin: 6px 0;
}
</style>
