<template>
  <div class="modal" v-show="isOpened">
    <div class="modal__content">
      <span class="modal__close" @click="closeModal" @keyup="closeModal">&times;</span>
      <p>{{ formTree }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, computed } from 'vue';

defineComponent({
  name: 'ModalJsonForm',
});

const emit = defineEmits(['closeModal']);

const props = defineProps({
  formJson: {
    required: true,
    type: String,
  },
  isOpened: {
    required: true,
    type: Boolean,
  },
});

type ListDataItem = {
  key: number,
  value: string
};

type FormJsonItem = {
  type: 'container' | 'input' | 'datepicker' | 'list',
  code: string,
  parent: string,
  listdata: ListDataItem[],
  value: string
}

type TreeNode = {
  type: 'container' | 'input' | 'datepicker' | 'list',
  code: string,
  listdata: ListDataItem[],
  value: string | null,
  children: TreeNode[]
}

const formTree = computed(() => {
  const formJson = JSON.parse(props.formJson);
  const root = formJson.find((formJsonItem: FormJsonItem) => formJsonItem.parent === null);
  if (!root) {
    return '';
  }

  function getTreeNode(node: TreeNode) {
    const copyNode = JSON.parse(JSON.stringify(node));

    formJson.forEach((formJsonItem: FormJsonItem) => {
      if (formJsonItem.parent !== null && formJsonItem.parent === copyNode.code) {
        const childNode = {
          type: formJsonItem.type,
          code: formJsonItem.code,
          listdata: formJsonItem.listdata,
          value: formJsonItem.value,
          children: [],
        };

        if (formJsonItem.type === 'container') {
          copyNode.children.push(getTreeNode(childNode));
        } else {
          copyNode.children.push(childNode);
        }
      }
    });

    return copyNode;
  }

  const tree: TreeNode = getTreeNode({
    type: root.type,
    code: root.code,
    listdata: [],
    value: null,
    children: [],
  });

  console.dir(tree);

  return tree;
});

function closeModal() {
  emit('closeModal');
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
