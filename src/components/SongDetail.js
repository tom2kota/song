// Shorthand: https://www.sitepoint.com/shorthand-javascript-techniques/
// Deep house https://youtu.be/Arfzh91K2TQ?t=4770
import React from "react";
import {connect} from 'react-redux';

const SongDetail = ({mySong}) => (!mySong ? <h3>Select the song</h3> :
        <div><h3>Details for:</h3><p>Title: {mySong.title}</p> <p> Duration: {mySong.duration}</p></div>
    // !mySong || <div>{mySong.title}</div>

    // if(!mySong){
    //     return <div>Select the song</div>
    // }
    // return (
    //     <div>
    //         {mySong.title}
    //     </div>
    // );
);


const mapStateToProps = (state) => {
    return {mySong: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail)