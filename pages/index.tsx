import type { NextPage } from 'next'
import PostingsContainer from '../components/views/PostingsContainer'
import data from './data.json'
import { JobPosting, JobCardIcon, JobCardInfo } from '../typings/common.types'
import JobCard from '../components/ui/JobCard/JobCard'
import { useContext, useEffect, useState } from 'react'
import Button from '../components/ui/Button'
import searchContext from '../context/searchContext'
const Home: NextPage = (props) => {
  const [jobPosts, setJobPosts] = useState(data)
  const [limit, setLimit] = useState<number>(12)
  const {
    searchQuery,
    filterByLocation,
    fullTimeFilter,
    searching
  } = useContext(searchContext)
  // Shows all data if filtering
  useEffect(()=> {
    if (
      searchQuery !== '' ||
      filterByLocation !== '' ||
      fullTimeFilter !== false
     ) setLimit(data.length)
     else setLimit(limit)
  }, [searchQuery, filterByLocation, fullTimeFilter])

  // Sets the filtered data
  useEffect(()=> {
    const includeColumns = [
      'position',
      'company'
    ]
    if (searching) {
      let filteredData = data.filter(
        (jobPost: any)=> {
          return Object.keys(jobPost).some(
            (key)=> {
              return includeColumns.includes(key) ?
              jobPost[key]
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) : 
              false
            }
          )
        }
      ).filter(jobPost=> 
        jobPost.location
        .toLowerCase()
        .includes(filterByLocation.toLowerCase())
      ).filter(jobPost=> 
         {
          if (fullTimeFilter === 
            (jobPost.contract === 'Full Time'))
            return jobPost
          else if (!fullTimeFilter)
            return jobPost
         }
      )
      setJobPosts(filteredData)
    }
  }, [searching])

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
        {jobPosts.slice(0, limit)
        .map((jobPosting)=> {
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
              key={jobPosting.id} 
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
          py-8
        "
      >
        {!searchQuery && 
          <Button 
            type="primary"
          >
            Load More
          </Button>
        }
      </div>
    </div>
  )
}

export default Home
