import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2024 | By:<a href="https://adelabdulazeem.netlify.app"> Adel Abdulazeem</a></p>
        <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer