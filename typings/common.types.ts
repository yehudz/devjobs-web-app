export type ButtonProps = {
  children: JSX.Element | string,
  type: string
  icon?: string
};

export type InputProps = {
  placeholder: string,
  icon: string
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
