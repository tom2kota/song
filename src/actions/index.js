// Action creator returns an action - Selected Song

export const selectedSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
};
