const SavedJobListing = ({ savedJobListing }) => {
    return (
        <div className='savedjoblisting' >
            <h3 style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {savedJobListing.jobTitle}{' '}
            </h3>
            <h4>{savedJobListing.companyName}</h4>

            <div 
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <a href={savedJobListing.link}>{savedJobListing.siteName}</a>
            </div>

        </div>
    )
}

export default SavedJobListing