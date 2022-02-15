import styled from "styled-components/native";

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
  border-bottom-width: 2px;
  padding-top: 20px;
  padding-bottom: 20px;
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
  font-weight: bold;
`;

export const ExampleView = styled.View`
  width: ${(props) => props.width};
`;

export const WordleExampleView = styled.View`
  display: flex;
  flex-direction: row;
`;

export const WordleExampleLetter = styled.Text`
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
