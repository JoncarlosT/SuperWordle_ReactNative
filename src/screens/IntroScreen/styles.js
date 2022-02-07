import styled from "styled-components/native";

export const IntroScreenView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const HowToText = styled.Text``;

const ButtonContainer = styled.TouchableOpacity`
  background-color: red;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export const NavigationButton = ({ onPress, title }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
