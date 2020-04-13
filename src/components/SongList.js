/*
 1) call connect() function get a list of songs from Store through Provider
 2) pass SongList component as a second function call
 3) define mapStateToProps() function that pass props object from state to SongList
 4) function connect:
    1) returns the connect() function with argument mapStateToProps &
    2) invokes the SongsList function
 5) pass state to SongsList as a props
 6) import {selectedSong} & pass actionCreator to connect() to activate dispatch function
    & call in SongList component onClick={() => this.props.selectedSong(song)}
*/

import React, {Component} from "react";
import {connect} from 'react-redux';
import {selectedSong} from "../actions";

class SongsList extends Component {

    renderList() {
        return this.props.songs.map(
            song => <div className="item" key={song.title}>

                <div className="right floated content">
                    <button
                        // onClick={() => console.log('clicked', this.props.selectedSong(song))}
                        onClick={() => this.props.selectedSong(song)}
                        className="ui button primary">
                        Select
                    </button>
                </div>

                <div className="content">{song.title}</div>
            </div>
        )
    }

    render() {
        // this.props === {songs: state.songs}
        console.log('SongsList render() this.props: ', this.props);

        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    console.log('mapStateToProps(state): ', state);

    return {songs: state.songs}
};

export default connect(mapStateToProps, {selectedSong})(SongsList)