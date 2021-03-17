import React, { useEffect, useState } from 'react'

/* LAYOUT MATERIAL UI */
import { Grid, FormControl, TextField, Typography, FormLabel, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio, Button } from '@material-ui/core'

/* REDUX */
import { useDispatch, useSelector } from 'react-redux'
import { updatePatientList } from '../../redux/actions/userActions'

const FormPatient = ({ action, patientId }) => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.userState)

    /* Form fields */
    const [patient, setPatient] = useState({
        _id: '',
        gender: '',
        first_name: '',
        last_name: '',
        age: '',
        createdAt: '',
        modifiedAt: '',
        nature: '',
        prescription: false,
        doctor: '',
        availability: [],
        comment: ''
    })

    /* Availability days */
    const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']

    const handleChangeGender = (event) => {
        setPatient({ ...patient, gender: event.target.value });
    };

    /* Handle radion btns */
    const handleChangePresc = () => {
        setPatient({ ...patient, prescription: !patient.prescription });
    };

    /* Handle submit */
    const handleSubmit = (e) => {

        /* Date generator and formating */
        const currentDate = new Date()
        const currenDateFormated = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()}`

        /* Handle if modification or add */
        if (action === "Modifier") {
            const newPatient = {
                ...patient,
                age: parseInt(patient.age),
                modifiedAt: currenDateFormated,
                availability: patient.availability.join(';')
            }

            dispatch(updatePatientList(user._id, newPatient))

        } else {
            const newPatient = {
                ...patient,
                age: parseInt(patient.age),
                createdAt: currenDateFormated,
                availability: patient.availability.join(';')
            }

            dispatch(updatePatientList(user._id, newPatient))
        }
    };


    useEffect(() => {


        if (action === 'Modifier') {
            const patientToModify = user.patients.find((p) => p._id === patientId)
            setPatient({ ...patientToModify, availability: patientToModify.availability.split(';') })
        }

    }, [action, patientId, user.patients])


    return (
        <form style={{ padding: '20px' }}>
            <Typography variant="h4">{action === 'Modifier' ? action : 'Ajouter'} un patient</Typography>
            <FormControl fullWidth margin="dense">
                <FormLabel margin="dense" style={{ textAlign: 'left', margin: '20px 0', paddingTop: 20, borderTop: '1px solid lightgrey' }} component="legend">PATIENT</FormLabel>
                <RadioGroup row aria-label="gender" name="gender1" value={patient.gender} onChange={handleChangeGender}>
                    <FormControlLabel value="F" control={<Radio color="primary" />} label="Femme" labelPlacement="top" />
                    <FormControlLabel value="H" control={<Radio color="primary" />} label="Homme" labelPlacement="top" />
                </RadioGroup>
                {/* {(patient.gender === '' && formValidation.error["gender"]) ? <span style={{ color: '#f44336', width: '100%' }} >{formValidation.error["gender"]}</span> : <></>} */}
                <TextField
                    label="Prénom"
                    variant="outlined"
                    margin="dense"
                    value={patient.first_name}
                    onChange={(e) => setPatient({ ...patient, first_name: e.target.value })}
                    // error={patient.first_name === '' && formValidation.error["first_name"] ? true : false}
                    // helperText={patient.first_name === '' && formValidation.error["first_name"] ? formValidation.error["first_name"] : ""}
                />
                <TextField
                    label="Nom"
                    variant="outlined"
                    margin="dense"
                    value={patient.last_name}
                    onChange={(e) => setPatient({ ...patient, last_name: e.target.value })}
                    // error={patient.last_name === '' && formValidation.error["last_name"] ? true : false}
                    // helperText={patient.last_name === '' && formValidation.error["last_name"] ? formValidation.error["last_name"] : ""}
                />
                <TextField label="Age" variant="outlined" margin="dense" value={patient.age} onChange={(e) => setPatient({ ...patient, age: e.target.value })}
                    //  error={formValidation.error["age"] ? true : false} helperText={formValidation.error["age"] ? formValidation.error["age"] : ""} 
                     />
                <TextField label="Nature de la demande" variant="outlined" margin="dense" multiline rows={5} value={patient.nature} onChange={(e) => setPatient({ ...patient, nature: e.target.value })} 
                // error={patient.nature === '' && formValidation.error["nature"] ? true : false} helperText={patient.nature === '' && formValidation.error["nature"] ? formValidation.error["nature"] : ""} 
                />
                <FormLabel component="legend" style={{ textAlign: 'left', margin: '20px 0', paddingTop: 20, borderTop: '1px solid lightgrey' }}>ORDONNANCE</FormLabel>
                <RadioGroup row aria-label="prsc" name="prsc" value={patient.prescription ? 'oui' : 'non'} onChange={handleChangePresc}>
                    <FormControlLabel value="oui" control={<Radio color="primary" />} label="Oui" labelPlacement="top" />
                    <FormControlLabel value="non" control={<Radio color="primary" />} label="Non" labelPlacement="top" />
                </RadioGroup>
                <TextField
                    label="Médecin"
                    variant="outlined"
                    margin="dense"
                    value={patient.doctor}
                    disabled={!patient.prescription}
                    onChange={(e) => setPatient({ ...patient, doctor: e.target.value })}
                    // error={(patient.prescription && formValidation.error["doctor"]) ? true : false} helperText={(patient.prescription && formValidation.error["doctor"]) ? formValidation.error["doctor"] : ""}
                />
                <FormLabel component="legend" style={{ textAlign: 'left', margin: '20px 0', paddingTop: 20, borderTop: '1px solid lightgrey' }}>DISPONIBILITE </FormLabel>
                <FormGroup aria-label="position" row>
                    {/* {(patient.availability.length === 0 && formValidation.error["availability"]) ? <span style={{ color: '#f44336', width: '100%' }} >{formValidation.error["availability"]}</span> : <></>} */}
                    {
                        days.map((d, index) => {

                            return (
                                <FormControlLabel key={index}
                                    value={d}
                                    control={<Checkbox color="primary" />}
                                    label={d}
                                    labelPlacement="bottom"
                                    checked={patient.availability.some(x => x === d)}
                                    onChange={(e) => setPatient({
                                        ...patient, availability: e.target.checked ? [...patient.availability, d] : patient.availability.filter((p) => p !== d)
                                    })}
                                />)
                        })
                    }

                </FormGroup>
                <FormLabel component="legend" style={{ textAlign: 'left', margin: '20px 0', paddingTop: 20, borderTop: '1px solid lightgrey' }}>COMMENTAIRES </FormLabel>
                <TextField
                    label="Commentaires"
                    variant="outlined"
                    multiline
                    rows={5}
                    margin="dense"
                    value={patient.comment}
                    onChange={(e) => setPatient({ ...patient, comment: e.target.value })}
                />
            </FormControl>
            <Grid container justify="space-around">
                <Button color="primary" type="submit" variant="contained" onClick={(e) => handleSubmit(e)}>Sauvegarder</Button>
                <Button color="secondary" type="submit" variant="contained" >Réinitialiser</Button>
            </Grid>
        </form>
    )
}

export default FormPatient