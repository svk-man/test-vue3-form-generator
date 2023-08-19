import ListDataItem from './ListDataItem';
import { TreeNodeType } from './TreeNode';

type FormJsonItem = {
  type: TreeNodeType.Container | TreeNodeType.Datepicker | TreeNodeType.Input | TreeNodeType.List,
  code: string,
  parent: string,
  listdata: ListDataItem[],
  value: string
}

export default FormJsonItem;
