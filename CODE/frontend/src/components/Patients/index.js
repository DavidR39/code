
import React, {useState} from 'react';
import { Grid, Paper } from '@material-ui/core';
import FormPatient from './formPatient'
import TablePatient from './tablePatient';

import { makeStyles } from '@material-ui/core/styles';
import DeleteScreen from './deleteScreen';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
        margin: 'auto',
        marginTop: 100,
    },
    paper: {
        height: 'auto',
        width: 'auto',
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const Patients = ({ patients }) => {

    
    const [toggleDeletePanel, setToggleDeletePanel] = useState(false)
    const [currentAction, setCurrentAction ] = useState('Ajouter')
    const [patientId, setPatientId ] = useState('')

    const classes = useStyles();

    /* Handle actions */
    const handleActions = (option, patientId) => {
        if(option === "Supprimer") {
            setToggleDeletePanel(true)
        } else {
            setCurrentAction(option)
        }
        setPatientId(patientId)
    };

    return (
        <>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} md={8}>
                <Paper className={classes.paper}>
                    <TablePatient patients={patients} handleActions={handleActions} />
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                    <FormPatient action={currentAction} patientId={patientId}/>
                </Paper>
            </Grid>
        </Grid >
            { toggleDeletePanel && <DeleteScreen patientId={patientId} setToggleDeletePanel={setToggleDeletePanel} /> }
        </>
    );
}

export default Patients