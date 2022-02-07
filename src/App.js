import { useState, useEffect } from 'react'
import Header from './components/Header'
import JobListings from './components/JobListings'
import SearchJobListing from './components/SearchJobListing'


const App = () => {
  // const formState = {
  //   linkedin: [isLinkedIn, setIsLinkedIn] = useState(false),
  //   gotfriends: [isGotFriends, setIsGotFriends] = useState(false),
  //   ethosia: [isEthosia, setIsEthosia] = useState(false),
  //   kw: [keyword, setKeyword] = useState('')
  // }
  const [jobListings, setJobListings] = useState([]) 
  const [isLinkedIn, setIsLinkedIn] = useState(false)
  const [isGotFriends, setIsGotFriends] = useState(false)
  const [isEthosia, setIsEthosia] = useState(false)
  const [keyword, setKeyword] = useState('')

  // const queryInfo = {SearchJobListing.useState.}
  // const kek = () => {
  //   console.log(SearchJobListing.useState.keyword)
  // }

  // useEffect(() => {
  //   const getJobListings = async () => {
  //     const jobListingsFromServer = await fetchJobListings()
  //     setJobListings(jobListingsFromServer)
  //   }
  //   getJobListings()
  // }, [])

  useEffect(() => {
    const getJobListings = async () => {
      const jobListingsFromServer = await fetchJobListings()
      setJobListings(jobListingsFromServer)
    }
    getJobListings()
  }, [])

  // Fetch job listing from database
  const fetchJobListings = async() => {
    const res = await fetch('http://localhost:8080/joblistings')
    const data = await res.json()

    return data
  }

  // Fetch new job listing from scrapers
  const fetchNewJobs = async({sites,keyword}) => {
    const res = await fetch(`http://localhost:8080/joblistings/${sites}/${keyword}`)
    const data = await res.json()

    return data
  }

  // Delete Job Listing
  const deleteJobListing = async (link) => {
    setJobListings(jobListings.filter((jobListing) => jobListing.link !== link))
  }
  
  // const getJobListings = async () => {
  //   const jobListingsFromServer = await fetchJobListings()
  //   setJobListings(jobListingsFromServer)
  // }

  // const SearchJobListing = (keyword, siteString) => {
  //   console.log(siteString)
  // }





  

  // // Toggle apply
  // const toggleApply = (link) => {
  //   setJobListings(jobListings.map((jobListing) => jobListing.link === link ?
  //   {} : link))
  // }

  return (
    <div className="container">
      <Header />
      <SearchJobListing 
        isLinkedIn={isLinkedIn} setIsLinkedIn={setIsLinkedIn} 
        isGotFriends={isGotFriends} setIsGotFriends={setIsGotFriends}
        isEthosia={isEthosia} setIsEthosia={setIsEthosia}
        keyword={keyword} setKeyword={setKeyword}
      />
      
      
      {jobListings.length > 0 ? 
      (<JobListings jobListings={jobListings} onDelete={deleteJobListing}/>) :
      ('Nothing to show') }

      
    </div>
  );
}

export default App;
