/* eslint-disable @next/next/no-img-element */
import { Col } from 'react-bootstrap'
import memberStyles from 'styles/Biography.module.css'
import { CLOUDINARY_BASE_URL } from 'utils/constants';

const ProfileImage = ({ slug, name }) => (
  <Col sm={12} md={5} className="pt-5">
    <div className={memberStyles.profile}>
      <img
        src={`${CLOUDINARY_BASE_URL}${slug}.webp`}
        alt={name}
        style={{ maxWidth: '350px' }}
      />
    </div>
  </Col>
)

export default ProfileImage
