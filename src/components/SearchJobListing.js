// import Button from './Button'
// import { useState } from 'react'

const SearchJobListing = ({ onClick, isLinkedIn, setIsLinkedIn,
    isGotFriends, setIsGotFriends, isEthosia, setIsEthosia,
    keyword, setKeyword }) => {
    // const [isLinkedIn, setIsLinkedIn] = useState(false)
    // const [isGotFriends, setIsGotFriends] = useState(false)
    // const [isEthosia, setIsEthosia] = useState(false)
    // const [keyword, setKeyword] = useState('')
    

    return (
        <form className='find-form' >
            <div className='form-control' style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
                <label>Keyword:</label>
                <input type='text' placeholder='Type a keyword' value={keyword} 
                onChange={(e) => {setKeyword(e.target.value)}} />
                <input type='submit' value='Find new jobs' className='btn btn-block' />
            </div >

            <div className='form-control form-control-check' >
                <input
                    type='checkbox' 
                    value={isLinkedIn}
                    onChange={(e) => setIsLinkedIn(e.currentTarget.checked)}
                />
                <label>LinkedIn</label>
                <input
                    type='checkbox'
                    value={isGotFriends}
                    onChange={(e) => setIsGotFriends(e.currentTarget.checked)}
                />
                <label>GotFriends</label>
                <input
                    type='checkbox'
                    value={isEthosia}
                    onChange={(e) => setIsEthosia(e.currentTarget.checked)}
                />
                <label>Ethosia</label>
            </div>

        </form >

    )
}

export default SearchJobListing