import { FaTimes } from 'react-icons/fa'
import Button from './Button'

const JobListing = ({ jobListing, onDelete }) => {
    return (
        <div className='joblisting' >
            <h3 style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                {jobListing.jobTitle}{' '}
                <FaTimes
                    style={{
                        color: '#783048',
                        cursor: 'pointer'
                    }}
                    onClick={() => onDelete(jobListing.link)} />
            </h3>
            <h4>{jobListing.companyName}</h4>

            <div 
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <a href={jobListing.link}>{jobListing.siteName}</a>
                <Button text={'Save'} bgColor={'#2f4a85'} />
            </div>

        </div>
    )
}

export default JobListing