import { JobCardInfo, JobCardIcon } from "./common.types"

export interface JobCardIconProps  extends JobCardIcon {}

export interface JobCardInfoProps extends JobCardInfo {}

export interface JobCardProps {
  icon: JobCardIconProps
  info: JobCardInfoProps
}
