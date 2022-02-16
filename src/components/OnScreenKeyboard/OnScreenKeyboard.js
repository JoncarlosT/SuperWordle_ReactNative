import { OnScreenKeyboardStyled, KeyBoardRow, KeyBoardKey } from "./styles";

export default function OnScreenKeyboard({ setKeyBoardInput }) {
  const keyBoardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keyBoardRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keyBoardRow3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "←"];
  const keyBoard = [keyBoardRow1, keyBoardRow2, keyBoardRow3];

  const renderKeyBoard = (keyBoard) => {
    return keyBoard.map((row, idx) => {
      return (
        <KeyBoardRow key={idx}>
          {row.map((key, idx) => {
            return (
              <KeyBoardKey onPress={() => setKeyBoardInput(key)} key={idx}>
                {key}
              </KeyBoardKey>
            );
          })}
        </KeyBoardRow>
      );
    });
  };

  return (
    <OnScreenKeyboardStyled>{renderKeyBoard(keyBoard)}</OnScreenKeyboardStyled>
  );
}
