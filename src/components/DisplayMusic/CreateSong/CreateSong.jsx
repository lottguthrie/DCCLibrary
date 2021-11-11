import React, { Component } from 'react';

class CreateSong extends Component {
        state = { 
            titles: '',
            artist: '',
            album: '',
            genre: '', 
            release_date: '',
         }

    }
    <div className="row row-spacer">
        <div className="col-md-4">
            <button onClick={props.createSong}>CreateSong</button>
        </div>
    </div>

 
export default CreateSong;

const CreateSong = ({props}) => {
    return (
        <table>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>release_date</th>
                <th>genre</th>
            </tr>
        </table>
    );
}

export default DisplayMusic;