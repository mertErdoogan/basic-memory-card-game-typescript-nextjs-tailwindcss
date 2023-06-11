import { CardSymbolsT } from '../consts';

export const shuffleArray = (data: CardSymbolsT) => {
  const newArray = [...data];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const repeatArray = (data: CardSymbolsT) => {
  let newArr = [];
  for (let i = 0; i < data.length; i++) {
    let element = { ...data[i], id: data[i].id + 100 };
    newArr.push(element);
  }
  return shuffleArray([...data, ...newArr]);
};
