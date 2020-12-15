import styled from 'styled-components';

const Wrapper = styled.section`
  background: url(https://res.cloudinary.com/tumulty-web-services/image/upload/v1607990696/asburyparkhighschoolhalloffame/Screenshot_2_h2lowp.png)
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 400px;
`;

const ContentWrapper = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  margin-left: 7%;
  margin-right: 7%;
`;

/* eslint-disable max-len */
export default function Latest() {
  return (
    <Wrapper>
      <ContentWrapper>
        <h3>APHS Distingished Hall of Fame</h3>
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
        <p>
          A part of that task is for us to install a plaque in the hallway of
          the high school displaying a photo of the inductee together with a
          brief description of their accomplishments so that the current
          students can actually visualize who was inducted and why.
        </p>
      </ContentWrapper>
    </Wrapper>
  );
}
