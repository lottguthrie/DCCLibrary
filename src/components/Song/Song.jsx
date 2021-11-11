import React from 'react'
import SongViewer from '../SongView/SongView';
import song from SongViewer


const Song = ({props}) => {
    return (
        <div className="Song">
            <div className="cover">
                <h1 className="title">{props.song.title}</h1>
                    <h4 className="artist">{props.song.artist}</h4>
                    <h4 className="album">{props.song.album}</h4>
                    <h4 className="genre">{props.song.genre}</h4>
                    <h4 className="release_date">{props.song.release_date}</h4>
                    </div>
        </div>
      );
}
 
export default Song;