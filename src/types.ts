export interface ItemGroup {
  listId: string
  items: Item[]
}

export interface Item {
  id: string
  name?: string
  listId: string
}
