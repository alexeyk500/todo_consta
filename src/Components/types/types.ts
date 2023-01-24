export type TodoItemType = {
  id: number;
  title: string;
  status: TodoStatusEnum;
};

export enum TodoTypeEnum {
  all = 'Все',
  todo = 'Сделать',
  done = 'Готово',
}

export enum TodoStatusEnum {
  notDone = 'Не готов',
  done = 'Готов',
}
