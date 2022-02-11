import styled from "styled-components/native";
import { Icon } from "react-native-elements";

export const GameScreenStyled = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const IntroScreenNavButton = styled(Icon)``;

export const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WordleGameView = styled.View`
  width: ${(props) => props.width};
`;

export const WordleLetterView = styled.View`
  display: flex;
  flex-direction: row;
`;

export const WordleLetter = styled.Text`
  font-size: ${(props) => props.theme.fontSize.xxxlarge};
  color: ${(props) => props.theme.fontColor};
  font-weight: bold;
  flex: 1;
  text-align: center;
  margin: 10px;
  border-width: 2px;
  border-color: ${(props) => (props.color ? props.color : "grey")};
  background-color: ${(props) => (props.color ? props.color : "transparent")};
`;
