// Wire up 2 reducers using Redux library that will be the state (songs, selectedSong)

import {combineReducers} from "redux";

const songsReduucer = () => {
    return [
        {
            title: 'song1',
            duration: '4:20'
        }, {
            title: 'song2',
            duration: '2:40'
        }, {
            title: 'song3',
            duration: '5:10'
        }, {
            title: 'song4',
            duration: '3:20'
        }
    ]
};


const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
};

export default combineReducers({
    songs: songsReduucer,
    selectedSong: selectedSongReducer
});