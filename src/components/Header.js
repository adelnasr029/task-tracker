import Button from './Button'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({title="Task Tracker", onAdd, showAdd}) => {
  const location = useLocation()
  return (
    <header className='header'>
       <h1 > {title}</h1>
        { location.path = '/' &&(
        <Button onClick={onAdd} color={showAdd? 'red': 'green'} text={showAdd? 'Close' : 'Add'}/>
    )}
    </header>
  )
}



Header.propTypes = {
title: PropTypes.string.isRequired
}

//CSS style
// const headingStyle = {
//     color: 'red',
//     background: 'black'
// }
export default Header