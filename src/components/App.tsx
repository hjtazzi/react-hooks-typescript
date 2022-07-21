import { FC, useState } from 'react';
import { Container, Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import UseStateHook from './use-state';

interface Props { }

const App: FC<Props> = () => {
   const [value, setValue] = useState<string>("1");

   return <Container>
      <Box sx={{ width: '100%', typography: 'body1' }}>
         <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <TabList onChange={(e, newValue) => setValue(newValue)} centered>
                  <Tab label="use-State" value="1" />
               </TabList>
            </Box>
            <TabPanel value="1">
               <UseStateHook />
            </TabPanel>
         </TabContext>
      </Box>
   </Container>
};

export default App;