import React, { useEffect, useState } from 'react'
import DataTable from './DataTable'
import { Tabs, Tab, CircularProgress } from '@material-ui/core'
import TabPanel from './TabPanel'
import { Item, ItemGroup } from '../types'
import { getListData } from '../api'
import styled from 'styled-components'
import { PRIMARY_COLOR } from '../styles'

const Heading = styled.h1`
  color: ${PRIMARY_COLOR};
`

const ListGroups: React.FC = () => {
  // data for display
  const [dataByListId, setDataByListId] = useState<Array<ItemGroup>>([])
  const [allData, setAllData] = useState<Array<Item>>([])

  // various UI state (loading, error, tab)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [tab, setTab] = useState(0)
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue)
  }

  // load the data
  useEffect(() => {
    setLoading(true)
    getListData()
      .then(response => {
        setDataByListId(response.groups)
        setAllData(response.ungrouped)
      })
      .catch(e => {
        console.log(`Failed to fetch data groups: ${e}`)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  /**
   * TODOS:
   * - decide on display
   * - optimize functions
   * - write unit tests
   * - cleanup repo
   * - deploy
   */

  return (
    <>
      <Heading>Elena's Coding Challenge App</Heading>
      {error ? <div>Oh no, something went wrong!</div> : null}
      {loading || dataByListId?.length < 1 ? (
        <CircularProgress />
      ) : (
        <>
          <Tabs
            value={tab}
            onChange={handleTabChange}
            centered
            indicatorColor="primary"
            textColor="primary"
          >
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
              <TabPanel
                tabValue={tab}
                index={index + 1}
                key={`tab-${dataGroup.listId}`}
              >
                <DataTable items={dataGroup.items} />
              </TabPanel>
            ))}
          </>
        </>
      )}
    </>
  )
}

export default ListGroups
