import React from 'react';
import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from 'react-icons/fa';

export default function Footer()
{
    return (
        <div className="footer">
            <ul className="socials">
                <li>
                    <a href="#a"><FaTwitterSquare /></a>
                </li>
                <li>
                    <a href="#b"><FaFacebookSquare /></a>
                </li>
                <li>
                    <a href="#c"><FaInstagramSquare /></a>
                </li>
                <li>
                    <a href="#d"><FaGithubSquare /></a>
                </li>
            </ul>
        </div>
    );
}