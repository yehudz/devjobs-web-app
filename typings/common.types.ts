export type ButtonProps = {
  children: JSX.Element[] | string,
  type: string
  icon?: string
  isPopup?: boolean
  isMobile?: boolean
};

export type InputProps = {
  placeholder: string
  icon: string
  isMobile?: boolean
  isSearch: boolean
};

export type JobCardInfo = {
  postedAt: string
  contract: string
  position: string
  company?: string
  location: string
  isContent?: boolean
}

export type JobCardIcon = {
  image: string
  color: string
  company: string
}

export type JobPosting = {
  icon: JobCardIcon
  info: JobCardInfo
}

export type JobPost = {
  job: {
    id: number
    company: string
    logo: string
    logoBackground: string
    position: string
    postedAt: string
    contract: string
    location: string
    websiteName: string
    website: string
    apply: string
    description: string
    requirements: {
      content: string
      items: string[]
    }
    role: {
      content: string
      items: string[]
    }
  }
}

export type JobPostCard = {
  id: number
  company: string
  logo: string
  logoBackground: string
  position: string
  postedAt: string
  contract: string
  location: string
}

export type SearchContext = {
  searchQuery: string
  setSearchQuery: (searchQuery: string)=>void
  filterByLocation: string
  setFilterByLocation: (filterByLocation: string)=>void
  fullTimeFilter: boolean
  setFullTimeFilter: (fullTimeFilter: boolean)=>void
  searching: boolean
  setSearching: (searching: boolean)=>void
}
