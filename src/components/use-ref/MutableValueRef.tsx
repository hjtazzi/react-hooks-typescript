import { FC, useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';

interface Props { }

type TSetInterval = NodeJS.Timeout | ReturnType<typeof setInterval>;

const MutableValueRef: FC<Props> = () => {
   const timerRef = useRef<TSetInterval | null>(null);
   const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

   useEffect(() => {
      timerRef.current = setInterval(() => {
         const date = new Date();
         setTime(date.toLocaleTimeString());
      }, 1000);

      return () => clearInterval(timerRef.current!);
   }, [time]);

   return <Box component='div' sx={{ marginTop: 2, textAlign: 'center' }}>
      <Box component='div' sx={{ padding: "16px 0", border: "1px solid #1976d2", borderRadius: "4px" }}>
         <Typography variant='subtitle1'>
            {time}
         </Typography>
      </Box>
   </Box>
};

export default MutableValueRef;