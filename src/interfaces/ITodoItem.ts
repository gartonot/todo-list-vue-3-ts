import { EnumCategory, EnumStatusTodo } from "@/enums";

export interface ITodoItem {
  id: number,
  title: string,
  category: {
    name: EnumCategory,
    color: EnumCategory,
  },
  status: EnumStatusTodo,
  text: string,
}
