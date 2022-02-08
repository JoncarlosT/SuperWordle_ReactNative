import styled from "styled-components/native";
import { Button } from "react-native-elements";

export const IntroScreenView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  align-items: center;
  justify-content: center;
`;

export const HeaderDescription = styled.View``;

export const HowToText = styled.Text``;

export const NavigationButton = styled(Button).attrs({})``;
