import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import './App.css'
import ListGroups from './components/ListGroups'
import { theme } from './styles'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ListGroups />
      </ThemeProvider>
    </div>
  )
}

export default App
