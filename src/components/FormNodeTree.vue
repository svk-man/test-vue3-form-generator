<template>
  <div class="form-tree__item-wrapper">
    <label v-if="node?.type === 'input'"
      :for="node.code"
      class="form-tree__item-label">
      {{ node.code }}
      <input
        class="form-tree__item form-tree__item--input"
        :id="node.code" type="text" :value="node.value"
        @input="changeFormTreeModel">
    </label>
    <label v-if="node?.type === 'datepicker'"
      :for="node.code"
      class="form-tree__item-label">
      {{ node.code }}
      <input
        class="form-tree__item form-tree__item--datepicker"
        :id="node.code" type="date" :value="node.value"
        @input="changeFormTreeModel">
    </label>
    <label v-if="node?.type === 'list'"
      :for="node.code"
      class="form-tree__item-label">
      {{ node.code }}
      <select
        :id="node.code"
        class="form-tree__item form-tree__item--list"
        @change="changeFormTreeModel">
          <option v-for="listitem in node.listdata"
            :key="listitem.key">
            {{ listitem.value }}
          </option>
      </select>
    </label>
    <span v-else-if="node?.type === 'container'"
      class="form-tree__item-label">{{ node?.code }}</span>

    <div class="form-tree__item form-tree__item--container"
      v-if="node?.children && node?.children.length">
      <FormNodeTree v-for="child in node?.children" :node="child" :key="child.code"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, PropType, inject } from 'vue';
import { TreeNode } from '@/types/TreeNode';

defineComponent({
  name: 'FormNodeTree',
});

defineProps({
  node: Object as PropType<TreeNode>,
});

const { updateFormTreeModel }: any = inject('formTreeModel');

function changeFormTreeModel(event: Event) {
  const input = event.target as HTMLInputElement;
  const { id, value } = input;
  if (value) {
    updateFormTreeModel(id, value);
  }
}
</script>
