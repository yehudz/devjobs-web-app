import { JobCardInfoProps } from "../../../typings/common.interfaces";

const JobCardInfo: React.FC<JobCardInfoProps> = ({
  postedAt,
  contract,
  position,
  company,
  location,
  isContent
})=> {
  return(
   <div 
    className="
      flex
      flex-col
    "
    style={{
      marginBottom: isContent ? '50px' : ''
    }}
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
      <p 
        className="body"
        data-testid="content-posted-at"
      >{postedAt}</p>
      <div 
        className="
          h-1
          w-1
          bg-dark-gray
          rounded-full
          mx-3
        "
      ></div>
      <p 
        className="body"
        data-testid="content-contract"
      >{contract}</p>
    </div>
    {isContent &&
      <h1 
        data-testid="content-info-title"
        className="
          dark:text-white
          text-midnight
          text-xl
          md:text-3xl
        "
      >{position}</h1>
    }
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
      data-testid="content-location"
      className="
        text-violet
        mt-10
      "
      style={{
        marginTop: isContent ? '0px' : ''
      }}
    >
      {location}
    </h4>
   </div>
  )
}

export default JobCardInfo