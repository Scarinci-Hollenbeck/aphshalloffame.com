const Footer = () => {
  const date = new Date()
  return (
    <footer className="mt-3 ml-4">
      <span className="d-block w-100 my-0">
        <small>
          Asbury Park High School ©️
          {date.getFullYear()}
        </small>
      </span>
    </footer>
  )
}

export default Footer
