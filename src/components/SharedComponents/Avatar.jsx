import React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'

const avatarConfig = {
    "sex": "man",
    "faceColor": "#F9C9B6",
    "earSize": "big",
    "eyeStyle": "oval",
    "noseStyle": "long",
    "mouthStyle": "peace",
    "shirtStyle": "polo",
    "glassesStyle": "none",
    "hairColor": "#fff",
    "hairStyle": "womanLong",
    "hatStyle": "none",
    "hatColor": "#77311D",
    "eyeBrowStyle": "up",
    // "shirtColor": "#F4D150",
    // "bgColor": "#9287FF"
}

export default function AvatarN() {

    const myAvatarConfig = genConfig(avatarConfig);

    return (
        <>
            <Avatar style={{ width: '40px', height: '40px' }} {...myAvatarConfig} />
        </>
    )
}
