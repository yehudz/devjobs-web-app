import {
  Dialog,
  DialogContent,
} from '@mui/material';

import type { FilterPopupProps } from '../../../typings/common.interfaces';
import SearchInput from '../SearchInput';

const FilterPopup: React.FC<FilterPopupProps> = ({
  open,
  setOpen
})=> {

  function handleClickOpen() {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  };

  return (
    <div 
      data-testid="filter-popup-container"
    >
      <Dialog 
        open={open} 
        onClose={handleClose}
      >
        <DialogContent
          data-testid="filter-popup-content"
        >
          <div
            data-testid="filter-location"
          >
            <SearchInput
              
              icon="assets/mobile/icon-filter.svg" 
              placeholder='Filter by location...'
            />
          </div>
          <div
            data-testid="filter-by-contract"
          >

          </div>
          <div
            data-testid="mobile-search-button"
          >

          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FilterPopup
