import { Col } from 'react-bootstrap'
import memberStyles from 'styles/Biography.module.css'

import { createMarkup } from 'utils/helpers'

const Biography = ({ class: memberClass, inducted, biography, name }) => (
  <Col sm={12} lg={7} className="pt-4">
    <div className="me4">
      <h3>
        <strong className={memberStyles.name}>{name}</strong>
      </h3>
      <div className={`${memberStyles.classInductedContainer} p-2 my-4`}>
        <p className="p-0 m-0">
          <strong className="text-white">Class:</strong> {memberClass}{' '}
          <strong className="text-white">Inducted:</strong> {inducted}
        </p>
      </div>
      <div dangerouslySetInnerHTML={createMarkup(biography)} />
    </div>
  </Col>
)

export default Biography
