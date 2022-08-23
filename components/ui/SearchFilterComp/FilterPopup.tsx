import {
  Dialog,
  DialogContent,
} from '@mui/material'

import {useState} from 'react';

const FilterPopup: React.FC = ()=> {
  const [open, setOpen] = useState<boolean>(false);

  function handleClickOpen() {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  };

  return (
    <div>
      <Dialog 
        open={open} 
        onClose={handleClose}
      >
        <DialogContent>
          
          
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FilterPopup
