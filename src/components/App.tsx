import { FC, useState } from 'react';
import { Container, Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import UseStateHook from './use-state';
import UseEffectHook from './use-effect';
import UseRefHook from './use-ref';
import UseReducerHook from './use-reducer';

interface Props { }

const App: FC<Props> = () => {
   const [value, setValue] = useState<string>("1");

   return <Container>
      <Box sx={{ width: '100%', typography: 'body1' }}>
         <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <TabList onChange={(e, newValue) => setValue(newValue)} centered>
                  <Tab label="use-State" value="1" />
                  <Tab label="use-Effect" value="2" />
                  <Tab label="use-ref" value="3" />
                  <Tab label="use-reducer" value="4" />
               </TabList>
            </Box>

            <TabPanel value="1"><UseStateHook /></TabPanel>
            <TabPanel value="2"><UseEffectHook /></TabPanel>
            <TabPanel value="3"><UseRefHook /></TabPanel>
            <TabPanel value="4"><UseReducerHook /></TabPanel>
         </TabContext>
      </Box>
   </Container>
};

export default App;