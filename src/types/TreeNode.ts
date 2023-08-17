import ListDataItem from './ListDataItem';

type TreeNode = {
  type: 'container' | 'input' | 'datepicker' | 'list',
  code: string,
  listdata: ListDataItem[],
  value: string | null,
  children: TreeNode[]
}

export default TreeNode;
