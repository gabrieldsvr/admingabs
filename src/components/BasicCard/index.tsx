import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid, Link} from "@mui/material";

type Props = {
    title?: string;
    subtitle?: string;
    price?: string;
    link?: string;
    fontSizeValue?: number;

}

export default function PlanCard({title, subtitle, price, link,fontSizeValue = 40}: Props) {
    return (
        <Card sx={{backgroundColor: "rgb(5, 68, 255)"}}>
            <CardContent>

                <Typography variant="h6" component="div" color={"white"} sx={{fontWeight: 'bold'}}>
                    {title}
                </Typography>
                <Typography sx={{fontSize: 14, opacity: 0.7}} color={"white"} gutterBottom>
                    {subtitle}
                </Typography>
                <Grid container marginTop={3}>
                    <Grid item xs={6} spacing={0}>
                        <Typography variant="body2" color={"white"} sx={{fontWeight: 'bold', fontSize: fontSizeValue}}>
                            R$ {price}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} spacing={0}>
                        <Typography variant="body2" color={"white"} sx={{fontSize: 12, opacity: 0.7}}>
                            por
                            <br/>
                            mês
                        </Typography>
                    </Grid>

                </Grid>
            </CardContent>
            <CardActions>
                <Link href={link} underline="none">
                    <Button size="large" variant="contained" color="inherit">Assinar</Button>
                </Link>
            </CardActions>
        </Card>
    );
}