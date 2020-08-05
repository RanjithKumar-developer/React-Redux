import { combineReducers } from "redux";

const songReducer = () => {
    return [
        { title: 'No surbs', duration: '3:04'},
        { title: 'Marcarus', duration: '4:45'},
        { title: 'I want it that way', duration: '1:25'},
        { title: 'All star', duration: '2:20' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});