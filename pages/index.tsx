import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import SearchInput from '../components/ui/SearchInput'

const Home: NextPage = (props) => {
  return(
    <>
      <SearchInput 
        placeholder='Filter by title, companies, experties...'
        icon="assets/desktop/icon-search.svg"
      />
      <SearchInput 
        placeholder='Filter by location'
        icon="assets/mobile/icon-filter.svg"
      />
    </>
  )
}

export default Home
