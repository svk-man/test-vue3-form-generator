<template>
  <div class="modal" v-show="isOpened">
    <div class="modal__content">
      <span class="modal__close" @click="closeModal" @keyup="closeModal">&times;</span>
      <FormTree :node="formTree"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  defineComponent,
  computed, provide, reactive,
} from 'vue';
import FormTree from './FormTree.vue';
import FormJsonItem from '../types/FormJsonItem';
import {
  copyTreeNode,
  defaultTreeNode,
  TreeNode,
  TreeNodeType,
} from '../types/TreeNode';

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

const formTree = computed((): TreeNode => {
  if (!props.formJson) {
    return copyTreeNode(defaultTreeNode);
  }

  const formJson = JSON.parse(props.formJson);
  const root = formJson.find((formJsonItem: FormJsonItem) => formJsonItem.parent === null);
  if (!root) {
    return copyTreeNode(defaultTreeNode);
  }

  function getTreeNode(node: TreeNode) {
    const copyNode = copyTreeNode(node);

    formJson.forEach((formJsonItem: FormJsonItem) => {
      if (formJsonItem.parent !== null && formJsonItem.parent === copyNode.code) {
        const childNode: TreeNode = {
          type: formJsonItem.type as TreeNodeType,
          code: formJsonItem.code,
          listdata: formJsonItem.listdata,
          value: formJsonItem.value,
          children: [],
        };

        if (formJsonItem.type === TreeNodeType.Container) {
          copyNode.children.push(getTreeNode(childNode));
        } else {
          copyNode.children.push(childNode);
        }
      }
    });

    return copyNode;
  }

  const tree: TreeNode = getTreeNode(copyTreeNode(defaultTreeNode));

  return tree;
});

function getFormTreeModel(): { [key: string]: string; } {
  if (!props.formJson) {
    return {};
  }

  const formJson = JSON.parse(props.formJson);
  const result: { [key: string]: string; } = {};
  formJson.forEach((formJsonItem: FormJsonItem) => {
    result[formJsonItem.code] = formJsonItem.value;
  });

  return result;
}

const formTreeModel = reactive(getFormTreeModel());

const updateFormTreeModel = (code: string, value: string) => {
  const newFormTreeModel = JSON.parse(JSON.stringify(formTreeModel.value));
  newFormTreeModel[code] = value;

  formTreeModel.value = newFormTreeModel;
};

provide('formTreeModel', formTreeModel);
provide('updateFormTreeModel', updateFormTreeModel);

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
