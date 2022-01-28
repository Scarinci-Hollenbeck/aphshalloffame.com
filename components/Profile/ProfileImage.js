/* eslint-disable @next/next/no-img-element */
import { Col } from 'react-bootstrap'
import memberStyles from 'styles/Biography.module.css'

const ProfileImage = ({ image, name }) => (
  <Col sm={12} md={5} className="pt-5">
    <div className={memberStyles.profile}>
      <img
        src={`https://res.cloudinary.com/tumulty-web-services/image/upload/c_scale,r_8/${image}`}
        alt={name}
        style={{ maxWidth: '350px' }}
      />
    </div>
  </Col>
)

export default ProfileImage
