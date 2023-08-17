<template>
  <div class="form-tree__item">
    <span class="form-tree__item-label">{{ node?.code }}</span>

    <div class="form-tree__item form-tree__item--container"
      v-if="node?.children && node?.children.length">
      <FormNodeTree v-for="child in node?.children" :node="child" :key="child.code"/>
    </div>
  </div>
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
