import AppBar from '@mui/material/AppBar'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import useStyles from './styles'

interface HeaderProps {
  titleHeader?: string
  backgroundColor?: string
  subtitleHeader?: string
}

const Header: React.FC<HeaderProps> = ({
  titleHeader = 'PL TITLE',
  backgroundColor = '#262454',
  subtitleHeader = 'P0PL0Mock',
}) => {
  const classes = useStyles()

  const theme = createTheme({
    palette: {
      primary: {
        main: backgroundColor,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar
          className={classes.header}
          // style={{
          //   border: '1px solid #262454',
          //   borderRadius: 3,
          //   fontSize: 16,
          //   textTransform: 'uppercase',
          //   minHeight: 35,
          // }}
        >
          <Typography
            style={{ fontSize: 16, fontWeight: 600, marginBottom: 0 }}
          >
            {titleHeader}
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header
