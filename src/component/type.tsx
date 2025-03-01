export interface TodoType{
  id:number;
  text:string;
  isComplete:boolean;
}

export type TodoProps = {
  todos:TodoType[];
  completeTodo:(id:number) => void;
  removeTodo:(id:number) => void;
}

export type TodoFormProps = {
    onSubmit : (todo : {id:number, text: string}) => void
}