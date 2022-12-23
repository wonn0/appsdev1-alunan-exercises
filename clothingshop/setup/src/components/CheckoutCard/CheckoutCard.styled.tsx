import styled from 'styled-components';

type WrapperProps = {
  background: string;
};

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  align-items: flex-end;
  width: 240px;
  height: 340px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: 300px;
  overflow: hidden;
  position: relative;
`;''

export const TextContainer = styled.div`
  display: grid;
  gap: 10px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  width: 100%;
  padding: 20px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  margin: 0;
  color: #ffffff;
`;

export const SubTitle = styled.p`
  font-weight: normal;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;
