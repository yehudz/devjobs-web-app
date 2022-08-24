import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/views/Layout'
import searchContext from '../context/searchContext'
import { useState } from 'react'
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filterByLocation, setFilterByLocation] = useState<string>('')
  const [fullTimeFilter, setFullTimeFilter] = useState<boolean>(false)
  const [searching, setSearching] = useState<boolean>(false)
  return (
    <ThemeProvider attribute="class">
      <searchContext.Provider
        value={{
          searchQuery,
          setSearchQuery,
          filterByLocation,
          setFilterByLocation,
          fullTimeFilter,
          setFullTimeFilter,
          searching,
          setSearching
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </searchContext.Provider>
    </ThemeProvider>
  ) 
  
}

export default MyApp
