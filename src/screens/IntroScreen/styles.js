import styled from "styled-components/native";
import { Button } from "react-native-elements";

export const IntroScreenView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  align-items: center;
  justify-content: center;
`;

export const DescriptionView = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: ${(props) => props.width};
  border-bottom-color: grey;
  border-bottom-width: 2;
`;

export const HowToText = styled.Text`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.fontColor};
  padding: 3px;
`;

export const BoldSpan = styled.Text`
  font-weight: bold;
`;

export const HowToTextHeader = styled.Text`
  font-size: ${(props) => props.theme.fontSize.xxlarge};
  color: ${(props) => props.theme.fontColor};
`;

export const ExampleView = styled.View`
  width: ${(props) => props.width};
`;

export const NavigationButton = styled(Button).attrs({})``;
