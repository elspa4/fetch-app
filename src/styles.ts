import { createTheme } from '@material-ui/core/styles'

export const PRIMARY_COLOR = '#300C3A'
export const SECONDARY_COLOR = '#FBA817'

export const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
  },
  overrides: {
    MuiTableCell: {
      head: {
        color: SECONDARY_COLOR,
        fontSize: '14px',
        fontWeight: 'bold',
      },
    },
    MuiTableRow: {
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: 'rgb(48, 12, 58, .1)',
        },
        '&:nth-of-type(even)': {
          backgroundColor: 'rgb(251, 168, 23, .1)',
        },
      },
    },
  },
})
