import axios from 'axios'
import { Item, ItemGroup } from './types'

export const getListData = async () => {
  return axios
    .get('https://fetch-hiring.s3.amazonaws.com/hiring.json')
    .then(response => {
      const data: Item[] = response?.data || []

      // remove all null entries to take size from 1000 -> 320
      const filteredArray = data.filter(item => item.name)

      // get the individual list ids
      const listIds = filteredArray.map(item => item.listId)
      let uniqueListIds = [...new Set(listIds)].sort()

      let groups: Array<ItemGroup> = []
      let ungrouped: Array<Item> = []
      uniqueListIds.forEach(id => {
        const groupById = filteredArray.filter(item => item.listId === id)
        groupById.sort((a, b) =>
          (a?.name || '').localeCompare(b?.name || '', undefined, {
            numeric: true,
          }),
        )
        const itemGroup = {
          listId: id,
          items: groupById,
        } as ItemGroup
        groups.push(itemGroup)
        ungrouped.push(...groupById)
      })

      return {
        groups,
        ungrouped,
      }
    })
}
