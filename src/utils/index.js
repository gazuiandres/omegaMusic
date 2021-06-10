// FUNCTION TO GET A RANDOM ID
const randomId = (maximo, originalId) => {
  const minimo = 1;
  let newId = Math.round(Math.random() * (maximo - minimo) + minimo);

  //If ID is equal to the actual, search for a diferent ID
  do {
    newId = Math.round(Math.random() * (maximo - minimo) + minimo);
  } while (originalId === newId);

  return newId;
};

export const findNextSong = (songs, id) => {
  let nextSong = songs.find((song) => song.id === id + 1);

  if (!nextSong) {
    const maximo = songs.length;
    const newId = randomId(maximo, id);
    nextSong = songs.find((song) => song.id === newId);
  }

  return nextSong;
};

export const findPrevSong = (songs, id) => {
  let nextSong = songs.find((song) => song.id === id - 1);

  if (!nextSong) {
    const maximo = songs.length;
    const newId = randomId(maximo, id);
    nextSong = songs.find((song) => song.id === newId);
  }

  return nextSong;
};
