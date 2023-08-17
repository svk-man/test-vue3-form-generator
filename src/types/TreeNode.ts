import ListDataItem from './ListDataItem';

export enum TreeNodeType {
  Container = 'container',
  Input = 'input',
  Datepicker = 'datepicker',
  List = 'list',
}

export type TreeNode = {
  type: TreeNodeType.Container | TreeNodeType.Input | TreeNodeType.Datepicker | TreeNodeType.List,
  code: string,
  listdata: ListDataItem[],
  value: string | null,
  children: TreeNode[]
}

export const defaultTreeNode: TreeNode = {
  type: TreeNodeType.Container,
  code: 'k1',
  listdata: [],
  value: null,
  children: [],
};

export function copyTreeNode(treeNode: TreeNode) {
  return JSON.parse(JSON.stringify(treeNode));
}
