import { FC } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import DOMElementRef from './DOMElementRef';
import MutableValueRef from './MutableValueRef';

interface Props { }

const UseRefHook: FC<Props> = () => {


   return <Box component='div'>
      <Typography variant='h4'>
         useRef
      </Typography>

      <Box component='div' sx={{ m: 4 }}>
         <Typography variant='h6'>
            Option 1: DOM element ref
         </Typography>
         <DOMElementRef />

         <Divider sx={{ marginTop: 4, marginBottom: 4 }} />

         <Typography variant='h6'>
            Option 2: Mutable value ref
         </Typography>
         <MutableValueRef />
      </Box>
   </Box>
};

export default UseRefHook;