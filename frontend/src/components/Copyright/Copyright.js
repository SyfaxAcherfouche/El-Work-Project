import React from 'react';
import {
    Link,
    Typography
} from '@material-ui/core';

const Copyright = () => {
    return (
        <Typography variant="body2" style={{color: '#fff'}} align="center">
        {'Copyright © '}
        <Link style={{color: 'inherit', fontFamily: 'Dancing Script, cursive'}} href="http://localhost:3000/">
            El Work
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

export default Copyright;