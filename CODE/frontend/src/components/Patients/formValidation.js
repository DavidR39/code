export const formValidation = ( patient ) => {

    /* Form fields */
    const { gender, first_name, last_name, age, nature, availability, prescription, doctor } = patient

    /* Variables */
    let error = {}
    let isValid = true

    if (gender === '') {
        isValid = false
        error["gender"] = "Le genre doit être renseigné."
    }

    if (first_name === '') {
        isValid = false
        error["first_name"] = "Le prénom doit être renseigné."
    }

    if (last_name === '') {
        isValid = false
        error["last_name"] = "Le nom doit être renseigné."
    }

    if(!age.toString().match(/^[0-9]+/)){
        isValid = false
        error["age"] = "L'âge doit être renseigné en chiffre."
     }  

    if (nature === '') {
        isValid = false
        error["nature"] = "La nature doit être renseignée."
    }

    if (availability.length === 0) {
        isValid = false
        error["availability"] = "Veuillez entrer au moins une disponibilité."
    }

    if (doctor === '' && prescription) {
        isValid = false
        error["doctor"] = "Le médecin doit être renseigné."
    }
    
    return { isValid: isValid, error: error }
}

