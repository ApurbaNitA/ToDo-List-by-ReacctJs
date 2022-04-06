import React from 'react'

const Footer = () => {
  let footerStyle={
    position: "relative",
    width: "100%",
    top: "50vh",
    //bottom: "0",
    border: "2px solid red"
  }
  return (
    
      <footer className="bg-dark text-light py-3" style={footerStyle}>
        <p className="text-center">
        Copyright &copy; MyTodosList.com</p>
      </footer>

    
  )
}

export default Footer
