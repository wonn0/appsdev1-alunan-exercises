import styled from "styled-components";

type WrapperProps = {
  background: string;
};

type AddButtonProps = {
  isInCart: boolean;
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
`;
("");

export const ButtonWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: "row";
`;
("");

export const AddButton = styled.div<AddButtonProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.isInCart ? "#E55336" : "#60c95d")};
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
    transition: 1s;
  }

  p {
    font-size: 20px;
    margin: 0;
    color: white;
  }
`;

export const PlusButton = styled.div<AddButtonProps>`
  border-radius: 50%;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 20px;
    margin: 0;
    color: black;
  }

  :hover {
    transform: scale(1.5);
    transition: 1s;
  }

`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: "row";
  align-items: center;
`;

export const QuantityButtonContainer = styled.div`
  display: flex;
  flex-direction: "row";
  justify-content: start;
  margin-left: 12px;
  background: white;
  border-radius: 20px;
`;

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
