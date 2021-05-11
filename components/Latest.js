import styles from 'styles/Banner.module.css';
import textStyles from 'styles/Text.module.css';

/* eslint-disable max-len */
export default function Latest() {
  return (
    <>
      <div className={styles.banner}>
        <div
          className="animate__animated animate__fadeIn slow"
        >
          <h3 className={styles.title}>
            <strong>Asbury Park High School Distinguished Hall of Fame</strong>
          </h3>
          {/* <p className={styles.tagLine}>
            Welcome to the Asbury Park High School Distinguished Alumni Hall of
            Fame. Here we recognize and honor those APHS graduates who have used
            the skills and knowledge which they acquired in the High School to
            become “Distinguished” adults in many different and varied fields!
          </p> */}
        </div>
      </div>
      <div className="my-5 px-3 text-center">
        <p>
          Welcome to the Asbury Park High School Distinguished Alumni Hall of
          Fame. Part of our mission is to recognize and honor those APHS
          graduates who have used the skills and knowledge which they acquired
          in the High School to become “Distinguished” adults in many different
          and varied fields. Another and equally important portion of our
          mission is to instill in the current APHS students a feeling that they
          too can be successful adults irrespective of their often difficult
          backgrounds.
        </p>
        <h4 className="mt-4">
          A part of that task is for us to install a plaque in the hallway of
          the high school displaying a photo of the inductee together with a
          brief description of their accomplishments so that the current
          students can actually visualize who was inducted and why.
        </h4>
      </div>
    </>
  );
}
