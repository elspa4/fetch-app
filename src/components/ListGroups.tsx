import React, { useEffect, useState } from 'react'
import DataTable from './DataTable'
import { Tabs, Tab } from '@material-ui/core'
import TabPanel from './TabPanel'
import { Item, ItemGroup } from '../types'
import { getListData } from '../api'
import styled from 'styled-components'

const Heading = styled.h1`
  color: #300c3a;
`

//FBA817

const ListGroups: React.FC = () => {
  const [dataByListId, setDataByListId] = useState<Array<ItemGroup>>([])
  const [allData, setAllData] = useState<Array<Item>>([])

  const [tab, setTab] = useState(0)
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue)
  }

  useEffect(() => {
    getListData().then(response => {
      setDataByListId(response.groups)
      setAllData(response.ungrouped)
    })
  }, [])

  /**
   * TODOS:
   * - error handling
   * - decide on display
   * - optimize functions
   * - write unit tests
   * - cleanup repo
   * - deploy
   */

  return (
    <>
      <Heading>Elena's Coding Challenge App</Heading>
      <Tabs value={tab} onChange={handleTabChange} centered>
        <Tab label={'All'} />
        {dataByListId.map(dataGroup => (
          <Tab
            key={`tab-${dataGroup.listId}`}
            label={`List ID: ${dataGroup.listId}`}
          />
        ))}
      </Tabs>
      <>
        <TabPanel tabValue={tab} index={0}>
          <DataTable items={allData} showListId />
        </TabPanel>
        {dataByListId.map((dataGroup, index) => (
          <TabPanel tabValue={tab} index={index + 1}>
            <DataTable items={dataGroup.items} />
          </TabPanel>
        ))}
      </>
    </>
  )
}

export default ListGroups
