import React from 'react';
import photo from '../images/Profile.jpg';

export default function Photo()
{
    return (
        <img src={photo} className="profile--img" alt="Hillary Odinchefu" />
    );
}