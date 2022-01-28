import styles from 'styles/Banner.module.css'

/* eslint-disable max-len */
const Latest = () => (
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
    <div className="my-5 px-3 text-center">
      <p>
        Welcome to the Asbury Park High School Distinguished Alumni Hall of
        Fame. Part of our mission is to recognize and honor those APHS graduates
        who have used the skills and knowledge which they acquired in High
        School to become “Distinguished” adults in many different and varied
        fields. Another and equally important portion of our mission is to
        instill in the current APHS students a feeling that they too can be
        successful adults irrespective of their often difficult backgrounds.
      </p>
      <p>
        A part of that task is for us to install a plaque in the hallway of the
        high school displaying a photo of the inductee together with a brief
        description of their accomplishments so that the current students can
        actually visualize who was inducted and why.
      </p>
    </div>
  </>
)

export default Latest
