import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

export default function LoadingError() {
  const [show, setShow] = useState(true);
  return (
    <>
     {show && (
       <Alert variant="danger" onClose={() => setShow(false)}  className="my-5" dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Try clearing your browser cache, and refresh the page. If there error continues please email <strong>tumultywebservices@gmail.com.</strong>
        </p>
      </Alert>
     )}
    </>
  )
}