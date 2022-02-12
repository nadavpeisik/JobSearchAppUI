import JobListing from './JobListing'

const JobListings = ({ jobListings, onDelete, onClick }) => {
    return (
        <>
            <h2 style={{textAlign: 'center', border: "thin solid black"}}>New Jobs</h2>
            {jobListings.map((jobListing) => (
                <JobListing key={jobListing.link} jobListing={jobListing}
                onDelete={onDelete} onClick={onClick}/>
            ))}
        </>
    )
}

export default JobListings