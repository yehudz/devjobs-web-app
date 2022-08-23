export type ButtonProps = {
  children: JSX.Element[] | string,
  type: string
  icon?: string
  isPopup?: boolean
};

export type InputProps = {
  placeholder: string,
  icon: string
  isMobile?: boolean
};

export type JobCardInfo = {
  postedAt: string
  contract: string
  position: string
  company: string
  location: string
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
