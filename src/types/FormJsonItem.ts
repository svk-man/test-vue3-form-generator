import ListDataItem from './ListDataItem';

type FormJsonItem = {
  type: 'container' | 'input' | 'datepicker' | 'list',
  code: string,
  parent: string,
  listdata: ListDataItem[],
  value: string
}

export default FormJsonItem;
