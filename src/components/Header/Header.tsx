import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function Header({
  titleHeader = 'PL TITLE',
  backgroundColor = '#262454',
  subtitleHeader = 'P0PL0Mock',
}) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: backgroundColor,
      },
    },
  });
  return (
    <Stack spacing={2} sx={{ flexGrow: 2 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel(titleHeader)}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}

function appBarLabel(label: string) {
  return (
    <Toolbar>
      {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton> */}
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}
