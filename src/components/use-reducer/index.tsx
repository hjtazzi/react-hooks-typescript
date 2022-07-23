import { FC, useReducer } from 'react';
import { ActionType } from "./actionType";
import { counterReducer, CounterState } from "./reducer";
import { Box, Typography, Button } from '@mui/material';

interface Props { }

const initialState: CounterState = {
   count: 0
}

const UseReducerHook: FC<Props> = () => {
   const [state, dispatch] = useReducer(counterReducer, initialState);

   const decrementClick = () => {
      dispatch({ type: ActionType.DECREMENT, payload: 1 });
   }

   const incrementClick = () => {
      dispatch({ type: ActionType.INCREMENT, payload: 1 });
   }

   return <Box component='div'>
      <Typography variant='h4'>
         useReducer
      </Typography>

      <Box component='div' sx={{ m: 4, textAlign: 'center' }}>
         <Button onClick={decrementClick} variant="contained" sx={{ m: 2 }}>
            <Typography variant="button" display="block">-</Typography>
         </Button>
         <Box component='div' sx={{ display: 'inline-block', m: 2, paddingTop: 1, paddingBottom: 1, paddingLeft: 3, paddingRight: 3 }}>
            <Typography variant="button">
               {state.count}
            </Typography>
         </Box>
         <Button onClick={incrementClick} variant="contained" sx={{ m: 2 }}>
            <Typography variant="button" display="block">+</Typography>
         </Button>
      </Box>
   </Box>
};

export default UseReducerHook;