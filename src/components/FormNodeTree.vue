<template>
  <li class="node-tree">
    <span class="label">{{ node?.code }}</span>

    <ul v-if="node?.children && node?.children.length">
      <FormNodeTree v-for="child in node?.children" :node="child" :key="child.code"/>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { defineComponent, PropType } from 'vue';
import TreeNode from '@/types/TreeNode';

defineComponent({
  name: 'FormNodeTree',
});

defineProps({
  node: Object as PropType<TreeNode>,
});
</script>
