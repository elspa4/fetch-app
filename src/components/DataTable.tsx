import React from 'react'
import styled from 'styled-components'
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'

import { Item } from '../types'
import { PRIMARY_COLOR } from '../styles'

const Container = styled(TableContainer)`
  border: 1px solid #e3e3e3;
  margin: auto;
  max-width: 500px;
`

const TableHeader = styled(TableHead)`
  background: ${PRIMARY_COLOR};
`

const DataTable: React.FC<{
  items: Item[]
  showListId?: boolean
}> = ({ items, showListId = false }) => {
  return (
    <Container>
      <Table size="small">
        <TableHeader>
          <TableRow>
            {showListId ? <TableCell>List ID</TableCell> : null}
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map(item => (
            <TableRow key={item.id}>
              {showListId ? <TableCell>{item.listId}</TableCell> : null}
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}

export default DataTable
