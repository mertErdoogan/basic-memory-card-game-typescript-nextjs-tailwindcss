import Board from '../components/game/board';
import Card from '../components/game/card';
import { CardSymbolsT, gameConstants } from '../components/game/consts';
import { repeatArray } from '../components/game/helper/shuffleArray';
import React, { useState } from 'react';

type PicksT = {
  id: number;
  letter: string;
};

const Game = () => {
  const { cardSymbols } = gameConstants;
  const [boardData, setBoardData] = useState<CardSymbolsT>(
    repeatArray(cardSymbols)
  );
  const [firstPick, setFirstPick] = useState<PicksT>({
    id: -1,
    letter: '',
  });
  const [secondPick, setSecondPick] = useState<PicksT>({
    id: -1,
    letter: '',
  });

  const onCardClick = (id: number, index: number) => {
    const selectedLetter = findSelectedLetterItem(id);
    if (selectedLetter && selectedLetter.success !== true) {
      if (!firstPick.letter) {
        setFirstPick({ id, letter: selectedLetter.letter });
        turnOnCard(index);
      } else if (!secondPick.letter) {
        turnOnCard(index);
        setSecondPick({ id, letter: selectedLetter.letter });
      } else {
        chechSuccessSelection(selectedLetter.letter);
      }
    }
  };

  const chechSuccessSelection = (selectedLetter: string | undefined) => {
    if (firstPick.letter === secondPick.letter && selectedLetter) {
      onSuccessCardSelection(selectedLetter);
    } else {
      onFailedCardSelection();
    }
  };

  const onSuccessCardSelection = (selectedLetter: string) => {
    if (selectedLetter) {
      setFirstPick({ id: -1, letter: '' });
      setSecondPick({ id: -1, letter: '' });
    }
  };

  const onFailedCardSelection = () => {
    setBoardData((prevState) =>
      prevState.map((item) => {
        if (item.id === firstPick.id || item.id === secondPick.id) {
          return {
            ...item,
            success: false,
          };
        }
        return item;
      })
    );
    setFirstPick({ id: -1, letter: '' });
    setSecondPick({ id: -1, letter: '' });
  };

  const turnOnCard = (itemIndex: number) => {
    setBoardData((prevState) =>
      prevState.map((item, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            success: true,
          };
        }
        return item;
      })
    );
  };

  const findSelectedLetterItem = (itemId: number) => {
    return boardData.find(({ id }) => id === itemId);
  };

  return (
    <>
      <Board>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
          {boardData &&
            boardData.map(({ id, letter, success }, index) => (
              <div
                onClick={() => onCardClick(id, index)}
                key={`${letter}-${index}`}
              >
                <Card side={success} symbol={letter} />
              </div>
            ))}
        </div>
      </Board>
    </>
  );
};

export default Game;
