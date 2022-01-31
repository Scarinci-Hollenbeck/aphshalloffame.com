import TextContent from 'components/shared/TextContent'
import 'animate.css/animate.min.css'
import styles from 'styles/Banner.module.css'

/* eslint-disable max-len */
const Latest = ({ content }) => (
  <>
    <div className={styles.banner}>
      <div className="animate__animated animate__fadeIn slow">
        <h3 className={styles.title}>
          <strong className="text-white">
            Asbury Park High School Distinguished Alumni Hall of Fame
          </strong>
        </h3>
      </div>
    </div>
    <TextContent content={content} />
  </>
)

export default Latest
