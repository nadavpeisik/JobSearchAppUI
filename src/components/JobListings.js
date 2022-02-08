import JobListing from './JobListing'

const JobListings = ({ jobListings, onDelete, onToggle }) => {
    return (
        <>
            <h2>New jobs</h2>
            {jobListings.map((jobListing) => (
                <JobListing key={jobListing.link} jobListing={jobListing}
                onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default JobListings