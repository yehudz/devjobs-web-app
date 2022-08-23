import {
  Dialog,
  DialogContent,
  Divider,
} from '@mui/material';
import { useContext } from 'react';
import searchContext from '../../../context/searchContext';

import type { FilterPopupProps } from '../../../typings/common.interfaces';
import Button from '../Button';
import CheckboxComponent from '../Checkbox';
import SearchInput from '../SearchInput';
const FilterPopup: React.FC<FilterPopupProps> = ({
  open,
  setOpen
})=> {
  const {setSearching} = useContext(searchContext)

  function handleClose() {
    setOpen(false);
  };

  function setSearch() {
    setSearching(true)
    handleClose()
  }

  return (
    <div 
      data-testid="filter-popup-container"
    >
      <Dialog 
        open={open} 
        onClose={handleClose}
        fullWidth
      >
        <DialogContent
          data-testid="filter-popup-content"
          sx={{
            paddingTop: '12px',
            paddingBottom: '10px'
          }}
        >
          <div
            data-testid="filter-location"
          >
            <SearchInput
              icon="assets/desktop/icon-location.svg" 
              placeholder='Filter by location...'
              isMobile={true}
              isSearch={false}
            />
          </div>
        </DialogContent>
        <Divider variant='fullWidth'/>
        <DialogContent
          sx={{
            paddingBottom: '8px'
          }}
        >
          <div
            data-testid="filter-by-contract"
            className='
              flex
              flex-row
              items-center
            '
          >
            <CheckboxComponent />
            <h5
              className="
                font-bold
                ml-5
                text-very-dark-blue
                dark:text-white
              "
            >
              Full Time Only
            </h5>
          </div>
        </DialogContent>
        <DialogContent>
          <div
            data-testid="mobile-search-button"
            onClick={setSearch}
            className='
              flex
              justify-center
            '
          >
            <Button
              type="primary"
              isPopup={true}
            >
              Search
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FilterPopup
