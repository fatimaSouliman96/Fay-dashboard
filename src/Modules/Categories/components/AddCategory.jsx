import TextField from '@mui/material/TextField';
import { GrAddCircle } from 'react-icons/gr';

export default function AddCategory() {
  return (
    <div className='w-1/4 p-3 bg-white h-fit rounded-lg flex flex-col gap-3' >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <button type='submit' className='btn-add-pro btn flex items-center justify-center gap-1 bg-blue-600 p-2 text-white rounded-lg w-28' >
                <GrAddCircle />
        Add</button>
    </div>
  )
}
