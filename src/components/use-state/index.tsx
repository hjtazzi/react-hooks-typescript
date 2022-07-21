import { FC, useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

interface Props { }

type User = {
   name: string;
}

const UseStateHook: FC<Props> = () => {
   const [user, setUser] = useState<User[]>([]);
   const [fieldValue, setFieldValue] = useState<string>('');

   const onAddUser = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      fieldValue && setUser([...user, { name: fieldValue }]);
   }

   return <Box component='div'>
      <Typography variant='h4'>
         useState
      </Typography>

      <Box
         component="form"
         sx={{ display: 'flex', alignItems: 'stretch', marginTop: 4, marginBottom: 4 }}
         noValidate
         autoComplete="off"
         onSubmit={onAddUser}
      >
         <TextField type={'text'} label="Pakage Name" variant="filled" sx={{ flex: '1 1 auto' }}
            defaultValue={fieldValue} onChange={e => setFieldValue(e.target.value)} />

         <Button type={'submit'} variant="contained" sx={{ marginLeft: 3 }}>
            <Typography variant="button" display="block">Add user</Typography>
         </Button>
      </Box>

      <Box component='div'>
         <Typography variant='h6'>users list:</Typography>

         {(user && user.length > 0) ?
            <ul>
               {user.map((val, i) => <li key={i}>
                  <Typography variant='subtitle1'>{val.name}</Typography>
               </li>)}
            </ul>
            : <Typography variant='subtitle1' sx={{ paddingLeft: 1 }}>Epmpty users list</Typography>}
      </Box>
   </Box>
};

export default UseStateHook;