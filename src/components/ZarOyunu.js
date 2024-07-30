import { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { color } from '@mui/system';
import Button from '@mui/material/Button';



function ZarOyunu() {


  const [randoms, setRandoms] = useState([]);
  const [randoms2, setRandoms2] = useState([]);
/* random iki sayı tanımladık iki zar icin */


  function randomNumber() {
    let sayi1 = Math.floor(Math.random() * 6) + 1;  /* random sayı olustruduk 1 ile 6 arasında */
    let sayi2 = Math.floor(Math.random() * 6) + 1;

    /* kosul yapısı ilk zar icin */
    if (sayi1 === 1) {
      setRandoms([...randoms, "bir"])
    } else if (sayi1 === 2) {
      setRandoms([...randoms, "iki"])
    } else if (sayi1 === 3) {
      setRandoms([...randoms, "uc"])
    } else if (sayi1 === 4) {
      setRandoms([...randoms, "dort"])
    } else if (sayi1 === 5) {
      setRandoms([...randoms, "bes"])
    } else if (sayi1 === 6) {
      setRandoms([...randoms, "alti"])
    }
    /* kosul yapısı ikinci zar icin */
    if (sayi2 === 1) {
      setRandoms2([...randoms2, "bir"]) 
    } else if (sayi2 === 2) {
      setRandoms2([...randoms2, "iki"])
    } else if (sayi2 === 3) {
      setRandoms2([...randoms2, "uc"])
    } else if (sayi2 === 4) {
      setRandoms2([...randoms2, "dort"])
    } else if (sayi2 === 5) {
      setRandoms2([...randoms2, "bes"])
    } else if (sayi2 === 6) {
      setRandoms2([...randoms2, "alti"])
    }

  }




  return (

    <div>
       < button onClick={randomNumber} >ZAR AT</button > 
      
     
  
      <Grid container >
        {
          randoms.map((data, index) => {
            return (

              <>
                <Grid item  mx={3} mb={3}>
                    <Card sx={{ display: "flex"}}>

                      <Card> 
                        <CardMedia
                          component="img"
                          height="140"
                          src={require('../image/' + data + '.png')}
                          width="100" />
                           <Typography> {data}</Typography>
                      </Card>
                      
                      <Card>
                        <CardMedia
                          component="img"
                          height="140"
                          src={require('../image/' + randoms2[index] + '.png')}
                          width="100"/>
                        <Typography> {randoms2[index]}</Typography>
                      </Card>

                    </Card>
                  
                </Grid>
              </>
            )
          })
        }
      </Grid>
    </div >
  )



}
export default ZarOyunu;