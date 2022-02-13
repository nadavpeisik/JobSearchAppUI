import SavedJobListing from './SavedJobListing'

const SavedJobListings = ( {savedJobListings, onDelete} ) => {
    return (
        <>
            <h2 style={{textAlign: 'center', border: "thin solid black"}}>Saved Jobs</h2>
            {/* <br></br> */}
            {savedJobListings.map((savedJobListing) => (
                <SavedJobListing 
                    key={savedJobListing.link} 
                    savedJobListing={savedJobListing} 
                    onDelete={onDelete} 
                />
            ))}
        </>
    )
}

export default SavedJobListings