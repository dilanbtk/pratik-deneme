import React, { useTransition } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

function Post() {
    const [posts, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setPost(res.data))
            .catch((e) => console(e))
            .finally(() => setIsLoading(false));

    }, []);


    return (
        <div>


            {
                posts.map((posts) => (
                    <Grid key={posts.id}>
                        <Accordion  >
                            <AccordionSummary
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>{posts.id}</Typography>
                                <Typography sx={{ color: 'text.secondary' }}>{posts.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {posts.body}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                ))
            }


        </div>

    )
}

export default Post;