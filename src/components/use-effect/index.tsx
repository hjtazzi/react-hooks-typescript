import { FC, useEffect, useState, useRef } from 'react';
import { Box, Typography, Fab, CircularProgress } from '@mui/material';
import { green } from '@mui/material/colors';
import { Check, AccessTime } from '@mui/icons-material';

interface Props { }

const UseEffectHook: FC<Props> = () => {
   const [loading, setLoading] = useState<boolean>(true);
   const [success, setSuccess] = useState<boolean>(false);
   const timer = useRef<number>();

   /***/
   useEffect(() => {
      console.log("componentDidMount");
      if (loading && !success) {
         timer.current = window.setTimeout(() => {
            setLoading(false);
            setSuccess(true);
         }, 2000);
      }
   });

   useEffect(() => {
      console.log("componentDidUpdate");
   }, [loading, success]);

   useEffect(() => {
      return () => {
         console.log("componentWillUnmount");
         clearTimeout(timer.current);
      }
   }, []);
   /***/

   const handleButtonClick = () => {
      if (!loading) {
         setLoading(true);
         setSuccess(false);
      }
   };

   return <Box component='div'>
      <Typography variant='h4'>
         useEffect
      </Typography>

      <Box
         component='div'
         sx={{
            position: 'relative',
            m: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
         }}
      >
         <Box sx={{ position: 'relative', margin: 'auto' }}>
            <Fab
               color="primary"
               sx={{
                  ...(success && {
                     bgcolor: green[500],
                     '&:hover': {
                        bgcolor: green[700],
                     },
                  }),
               }}
               onClick={handleButtonClick}
               title="CLICK ME"
            >
               {success ? <Check /> : <AccessTime />}
            </Fab>
            {loading && (
               <CircularProgress
                  size={68}
                  sx={{
                     color: green[500],
                     position: 'absolute',
                     top: -6,
                     left: -6,
                     zIndex: 1,
                  }}
               />
            )}
         </Box>
      </Box>
   </Box>;
};

export default UseEffectHook;