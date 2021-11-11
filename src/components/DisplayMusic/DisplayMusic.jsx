import React from 'react';

const DisplayMusic = ({props}) => {
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