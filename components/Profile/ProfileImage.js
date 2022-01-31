import Image from 'next/image';
import { Col } from 'react-bootstrap'
import memberStyles from 'styles/Biography.module.css'

const ProfileImage = ({ image }) => (
  <Col sm={12} lg={5} className="pt-5">
    <div className={memberStyles.profile}>
      <Image
        {...image}
        alt={image.alt}
        layout="intrinsic"
        priority={true}
      />
    </div>
  </Col>
)

export default ProfileImage
