import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';

const CustomAppBar = () => {
    return ( 
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6">
                    Taskmaster
                </Typography>
            </Toolbar>
        </AppBar>
     );
}
 
export default CustomAppBar;