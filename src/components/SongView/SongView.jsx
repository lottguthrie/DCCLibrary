import React from 'react';
import Song from '../Song/Song';


const SongViewer = (props) => {
    return ( 
    <div className="row row-spacer">
        <div className="col-md-4">
         
            <button onClick={props.createSong}>CreateSong</button>
            </div>
        <div className="col-md-4">
            
                <Song song= {props.song} />
        </div>
        <div className="col-md-4">
            
            <button onClick={props.nextSong}>Next <Song></Song></button>
        </div>
    </div>  );
}
 
export default SongViewer;