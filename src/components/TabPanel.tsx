import React from 'react'
import { Box } from '@material-ui/core'

const TabPanel: React.FC<{
  tabValue: number
  index: number
}> = ({ tabValue, index, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={tabValue !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {tabValue === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

export default TabPanel
