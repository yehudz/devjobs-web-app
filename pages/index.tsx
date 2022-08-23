import type { NextPage } from 'next'
import PostingsContainer from '../components/views/PostingsContainer'
import data from './data.json'
import { JobPosting, JobCardIcon, JobCardInfo } from '../typings/common.types'
import JobCard from '../components/ui/JobCard/JobCard'
import { useState } from 'react'
import Button from '../components/ui/Button'
const Home: NextPage = (props) => {
  const [limit, setLimit] = useState<number>(12)
  return(
    <div 
      className="
        main
        h-full
        w-full
        bg-light-grey
        dark:bg-midnight 
      "
    >
      <PostingsContainer>
        {data.slice(0, limit).map((jobPosting)=> {
          let icon: JobCardIcon = {
            image: jobPosting.logo,
            color: jobPosting.logoBackground,
            company: jobPosting.company
          
          }
          let info: JobCardInfo = {
            postedAt: jobPosting.postedAt,
            contract: jobPosting.contract,
            position: jobPosting.position,
            company: jobPosting.company,
            location: jobPosting.location
          }
          return(
            <JobCard 
              icon={icon}
              info={info}
            />
          )
        })}

      </PostingsContainer>
      <div 
        onClick={()=> setLimit(20)}
        className="
          flex
          justify-center
          button-container
          pb-8
        "
      >
        <Button type="primary">Load More</Button>
      </div>
    </div>
  )
}

export default Home
