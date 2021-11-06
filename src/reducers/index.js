import { combineReducers } from "redux";
const songsReducer = () => {
    return [
        { title: 'No Srubs', duration: '4:06' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want It that Way', duration: '4:01' }
    ];
};

const selectedSongReducer = (selectSong = null, action) => {
    if (action.type === 'SONG_SELECTED')
        return action.payload;
    return selectSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});