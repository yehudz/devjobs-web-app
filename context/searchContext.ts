import { createContext } from "react";
import { SearchContext } from "../typings/common.types";
const searchContext = createContext<SearchContext>({
  searchQuery: '',
  setSearchQuery() {},
  filterByLocation: '',
  setFilterByLocation() {},
  fullTimeFilter: false,
  setFullTimeFilter() {},

})
export default searchContext