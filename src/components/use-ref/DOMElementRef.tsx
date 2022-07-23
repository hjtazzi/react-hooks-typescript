import { FC, useRef } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

interface Props { }

const DOMElementRef: FC<Props> = () => {
   const inputRef = useRef<HTMLInputElement | null>(null);
   const divRef = useRef<HTMLDivElement | null>(null);

   const focusInput = () => {
      if (inputRef.current) {
         inputRef.current.focus();
      }
   }

   const changeInnerHTML = () => {
      if (divRef.current) {
         divRef.current.innerHTML = "InnerHTML Changed";
      }
   }

   return <Box component='div' sx={{ marginTop: 2, textAlign: 'center' }}>

      <div ref={divRef}
         style={{ padding: "16px 0", border: "1px solid #1976d2", borderRadius: "4px" }}>

         <TextField inputRef={inputRef}
            variant='filled' type='text' label="TextField" sx={{ width: "70%" }} />

      </div>

      <Button onClick={focusInput} variant="contained" sx={{ m: 2 }}>
         <Typography variant="button" display="block">Focus the input</Typography>
      </Button>
      <Button onClick={changeInnerHTML} variant="contained" sx={{ m: 2 }}>
         <Typography variant="button" display="block">Change innerHTML the div</Typography>
      </Button>
   </Box>
}

export default DOMElementRef;