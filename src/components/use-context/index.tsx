import { FC, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { green, lightGreen } from '@mui/material/colors';
import { CreateContext } from './CreateContext';

interface Props { }

interface ThemeStyle {
   foreground: string;
   background: string;
}

const themes: { light: ThemeStyle; dark: ThemeStyle; } = {
   light: {
      foreground: green[900],
      background: lightGreen[100]
   },
   dark: {
      foreground: lightGreen[100],
      background: green[900]
   }
};

const [ThemeContext, ThemeProvider] = CreateContext<ThemeStyle>(themes.light);

const UseContextHook: FC<Props> = () => {
   const [theme, setTheme] = useState<ThemeStyle>(themes.light);

   const changeTheme = () => {
      if (theme === themes.light) {
         setTheme(themes.dark)
      } else {
         setTheme(themes.light)
      }
   };

   return <Box component='div'>
      <Typography variant='h4'>
         useContext
      </Typography>

      <Box component='div' sx={{ m: 4, textAlign: 'center' }} >
         {/***/}
         <ThemeProvider value={theme}>
            <ThemedButton />
         </ThemeProvider>
         {/***/}

         <Button variant="outlined" sx={{ m: 4 }} onClick={changeTheme} >
            <Typography variant='button'>
               change theme
            </Typography>
         </Button>
      </Box>
   </Box>
};

const ThemedButton: FC = () => {
   const theme = ThemeContext();
   const buttonStyle = {
      backgroundColor: theme.background,
      color: theme.foreground
   };

   return <Box component='div'>
      <Button variant="contained" sx={buttonStyle}>
         <Typography variant='button'>
            I am styled by theme context!
         </Typography>
      </Button>
   </Box>
};

export default UseContextHook;