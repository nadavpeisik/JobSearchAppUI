import PropTypes from 'prop-types'

const Button = ({ bgColor, text, onClick, jobListing }) => {
    
    return (
        <button 
            onClick={() => onClick(jobListing)} 
            style={{background: bgColor} } 
            className='btn'
        >
            {text}
        </button>)
}

Button.defaultProps = {
    color: 'steelblue'
}

// Button.propTypes = {
//     text : PropTypes.string,
//     color : PropTypes.string,
//     onClick: PropTypes.func
// }

export default Button


