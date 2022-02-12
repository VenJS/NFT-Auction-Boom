import classNames from "classnames";
import styles from './ProfileCollection.module.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import ProfileCollectionFilters from './ProfileCollectionFilters';
import Card from '../card/Card'

export default function ProfileCollection({user, filter, items}) {
    return (
        <div className={classNames(styles['profile-collection'])}>
            <Grid container>
                <Grid item xs={3}><Typography variant="h3">Collection</Typography></Grid>
                <Grid item xs={9}><ProfileCollectionFilters></ProfileCollectionFilters></Grid>
            </Grid>
            <Grid container>
                <Grid item xs={3}><Card></Card></Grid>
                <Grid item xs={3}><Card></Card></Grid>
                <Grid item xs={3}><Card></Card></Grid>
                <Grid item xs={3}><Card></Card></Grid>
                
            </Grid>
        </div>
    )
}