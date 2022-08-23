import { JobCardInfoProps } from "../../../typings/common.interfaces";

const JobCardInfo: React.FC<JobCardInfoProps> = ({
  postedAt,
  contract,
  position,
  company,
  location
})=> {
  return(
   <div 
    className="
      flex
      flex-col
    "
   >
    <div
      className="
        flex
        flex-row
        items-center
        my-2
        text-dark-gray
      "
    >
      <p className="body">{postedAt}</p>
      <div 
        className="
          h-1
          w-1
          bg-dark-gray
          rounded-full
          mx-3
        "
      ></div>
      <p className="body">{contract}</p>
    </div>
    <h3 
      className="
        dark:text-white
        text-midnight
      "
    >{position}</h3>
    <p 
      className="
        body 
        text-dark-gray
        mt-2
      "
    >
      {company}
    </p>
    <h4 
      className="
        text-violet
        mt-10
      "
    >
      {location}
    </h4>
   </div>
  )
}

export default JobCardInfo