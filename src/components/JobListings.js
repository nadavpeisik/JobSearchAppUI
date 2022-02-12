import JobListing from './JobListing'

const JobListings = ({ jobListings, onDelete, onClick }) => {
    return (
        <>
            <h2>New Jobs</h2>
            {jobListings.map((jobListing) => (
                <JobListing key={jobListing.link} jobListing={jobListing}
                onDelete={onDelete} onClick={onClick}/>
            ))}
        </>
    )
}

export default JobListings