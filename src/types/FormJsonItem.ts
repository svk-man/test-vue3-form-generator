import ListDataItem from './ListDataItem';
import { TreeNodeType } from './TreeNode';

type FormJsonItem = {
  type: TreeNodeType,
  code: string,
  parent: string,
  listdata: ListDataItem[],
  value: string
}

export default FormJsonItem;
