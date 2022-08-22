import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import SearchInput from '../components/ui/SearchInput'
import ToggleSwitch from '../components/ui/ToggleSwitch'

const Home: NextPage = (props) => {
  return(
    <>
      <ToggleSwitch />
    </>
  )
}

export default Home
