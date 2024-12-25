import styled, { keyframes } from "styled-components";
import ENVIRONMENT_IMG from "Assets/img/area_environment.jpg";
const scaleAnimation = keyframes`
  0%, 100% { transform: scale(1.05); }
  50% { transform: scale(1); }
`;

const AreaBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  min-height: 100dvh;
  z-index: 0;
  overflow: hidden;
`;

const ScalableImage = styled.div`
  min-height: 100vh;
  background: url(${ENVIRONMENT_IMG}) lightgray 50% / cover no-repeat;
  background-position: center;
  animation: ${scaleAnimation} 25s infinite;

  @media (min-width: 1440px) {
    background-position: left;
  }
`;

const BlurWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 425px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.73) 53.7%,
    rgba(255, 255, 255, 0.09) 106.46%
  );
  backdrop-filter: blur(5px);

  @media (min-width: 480px) {
    height: 450px;
  }
  @media (min-width: 750px) {
    height: 500px;
  }
  @media (min-width: 1440px) {
    width: 50%;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0.1) -4.52%,
      rgba(255, 255, 255, 0.92) 100%
    );
  }
`;

const TotalBackground = () => (
  <AreaBackground>
    <ScalableImage>
      <BlurWrapper />
    </ScalableImage>
  </AreaBackground>
);

export default TotalBackground;