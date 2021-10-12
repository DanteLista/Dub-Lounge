import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton, Icon } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

const pages = {
    JOIN: "pages.join",
    CREATE: "pages.create",
};


export default function Info(props) {
    const [page, setPage] = useState(pages.JOIN);

    function joinInfo(){
        return "Join page: Your friend hosting the room can provide you with a code to join in and listen along."
    }

    function createInfo() {
      return "Create page: Create a room where you can set guest controls and the amount of votes required to skip the current song."
    }

    
    return (<Grid container spacing={2}>
        <Grid item xs={12} align="center">
        
            <Typography component="h4" variant="h4">
                What is Dub Lounge?
                </Typography>
                <Typography variant="body2">
                <br />
                Dub Lounge is a collaborative music playing system for playing the crowd's favorite tunes at a party, restaurant, or gathering. Connect your Spotify account, give your friends a room code, and everyone gets a say in what stays or goes in the playlist.
                <br />
            </Typography>
            
        </Grid>
        <Grid item xs={12} align="center">
            <Typography variant="body1">
                { page === pages.JOIN ? joinInfo() : createInfo() }
            </Typography>
        <Grid item xs={12} align="center">
         <IconButton onClick={() => {page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);}}>
         {page === pages.CREATE ? <NavigateBeforeIcon/> : <NavigateNextIcon/>}
         </IconButton>
        </Grid>
        </Grid>
        <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
                <Button color="secondary" variant="contained" to="/" component={Link}>
                    Home
                </Button>
            </Typography>
        </Grid>
    </Grid>
    );
}
