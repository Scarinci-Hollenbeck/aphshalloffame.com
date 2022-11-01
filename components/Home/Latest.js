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

{/* <div
      className="bg-no-repeat bg-center bg-cover z-30"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{ minHeight: '575px' }}
      >
        <h1 className="m-0 p-0 banner-shadow  text-cream-200 font-bold text-7xl">
          {lineOne}
        </h1>
        <h2 className="m-0 p-0 banner-shadow  text-white italic font-serif font-bold text-7xl">
          {lineTwo}
        </h2>
      </div>
    </div> */}
