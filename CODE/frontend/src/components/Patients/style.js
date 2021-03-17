import styled from 'styled-components'

export const PatientsContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: auto;
    padding: 20px;
    margin-top: 80px;
`

export const PatientList = styled.div`

`

export const PatientForm = styled.div`

`

export const DeleteScreenContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const DeletePanel = styled.div`
    border-radius: 4px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.6);
`

export const BtnWrapper = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
`