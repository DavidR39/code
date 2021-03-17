import React from 'react'

/* LAYOUT */
import {
    DeleteScreenContainer,
    DeletePanel,
    BtnWrapper
} from './style'
import { Button, Typography } from '@material-ui/core'

/* REDUX */
import { useDispatch, useSelector } from 'react-redux'
import { removePatientFromList } from '../../redux/actions/userActions'


const DeleteScreen = ({ patientId, setToggleDeletePanel }) => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.userState)

    /* Handle remove patient from list */
    const handleRemovePatient = () => {
        dispatch(removePatientFromList(user._id, patientId))
    }

    /* Handle close panel */
    const handleClose = () => {
        setToggleDeletePanel(false)
    }

    return (
        <DeleteScreenContainer onClick={() => handleClose()}>
            <DeletePanel>
                <Typography >Êtes-vous sûr de vouloir supprimer ce patient ?</Typography>
                <BtnWrapper>
                    <Button color="secondary" variant="contained" onClick={() => handleRemovePatient()}>Supprimer</Button>
                    <Button color="primary" variant="contained" onClick={() => handleClose()}>Annuler</Button>
                </BtnWrapper>
            </DeletePanel>
        </DeleteScreenContainer>
    )
}

export default DeleteScreen
