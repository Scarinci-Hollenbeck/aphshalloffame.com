import styled from 'styled-components';
import styles from 'styles/Banner.module.css';

const Wrapper = styled.section`
  background: url(https://res.cloudinary.com/tumulty-web-services/image/upload/v1607992964/asburyparkhighschoolhalloffame/asbury-high-school-1250x526_wplohr.png)
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 526px;
  margin-bottom: 2rem;
  padding-top:3.5em;
  padding-bottom:3.5em;
`;

const ContentWrapper = styled.section`

`;

/* eslint-disable max-len */
export default function Latest() {
  return (
    <Wrapper>
      <div className={`${styles.content} animate__animated animate__fadeIn slow`}>
        <h3 className={`${styles.title} my-3`}>
          <strong>
            APHS Distingished Hall of Fame
          </strong>
        </h3>
        <p className={`${styles.subTitle} mt-4`}>
          Welcome to the Asbury Park High School Distinguished Alumni Hall of
          Fame. Part of our mission is to recognize and honor those APHS
          graduates who have used the skills and knowledge which they acquired
          in the High School to become “Distinguished” adults in many different
          and varied fields. Another and equally important portion of our
          mission is to instill in the current APHS students a feeling that they
          too can be successful adults irrespective of their often difficult
          backgrounds.
        </p>
        <p className={styles.tagLine}>
          <strong>
            A part of that task is for us to install a plaque in the hallway of
            the high school displaying a photo of the inductee together with a
            brief description of their accomplishments so that the current
            students can actually visualize who was inducted and why.
          </strong>
        </p>
      </div>
    </Wrapper>
  );
}
