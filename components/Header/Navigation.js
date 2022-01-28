import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { CeremoniesContext } from 'contexts/CeremoniesContext'
import styles from 'styles/Navigation.module.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Navigation = () => {
  const router = useRouter()
  const [active, setActive] = useState('')
  const [preSetActive, setPreSetActive] = useState(true)
  const { ceremonies, setCeremonies } = useContext(CeremoniesContext)
  const { data, error } = useSWR('/api/get-years', fetcher)

  useEffect(() => {
    if (error) {
      console.error(error)
    }

    if (data) {
      const years = data?.response
        .filter(({ year }) => year !== '2018' && year !== '2012')
        .map(({ year }) => year)
      setCeremonies(years)
    }
  }, [data, error])

  useEffect(() => {
    if (preSetActive) {
      setActive(router.asPath)
      setPreSetActive(false)
    }
  })

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/" className={styles.header}>
        <h1 className={`${styles.h1} mt-2 mb-0`}>
          <strong>Asbury Park High School</strong>
        </h1>
        <h2 className={`${styles.h2} mt-0`}>
          Distinguished Alumni Hall of Fame
        </h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            className={`${styles.navBlue} ${
              active === '/' ? styles.activeLink : ''
            } mx-1`}
            href="/"
          >
            HOME
          </Nav.Link>
          <NavDropdown
            className={styles.navBlue}
            title="CEREMONIES"
            id="basic-nav-dropdown"
          >
            {ceremonies.map((year) => (
              <NavDropdown.Item key={year} href={`/ceremony/${year}`}>
                {year}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Nav.Link
            className={`${styles.navBlue} ${
              active === '/events' ? styles.activeLink : ''
            } mx-1`}
            href="/events"
          >
            EVENTS
          </Nav.Link>
          <Nav.Link
            className={`${styles.navBlue} ${
              active === '/donate' ? styles.activeLink : ''
            } mx-1`}
            href="/donate"
          >
            DONATE
          </Nav.Link>
          <Nav.Link
            className={`${styles.navBlue} ${
              active === '/contact' ? styles.activeLink : ''
            } mx-1`}
            href="/contact"
          >
            CONTACT
          </Nav.Link>
          <Nav.Link
            className={`${styles.navBlue} ${
              active === '/directory' ? styles.activeLink : ''
            } mx-1`}
            href="/directory"
          >
            DIRECTORY
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
