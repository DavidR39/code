import React, { useState } from 'react'
import { TableRow, TableCell, IconButton, Menu, MenuItem } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';

const RowPatient = ({ p, handleActions }) => {
    const actionOptions = [
        'Modifier',
        'Supprimer'
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    /* Handle actions */
    const handleOnClickActions = (option, patientId) => {
        handleActions(option, patientId)
        
        setAnchorEl(null);
    };

    return (
        <TableRow >
            <TableCell>{p.gender}</TableCell>
            <TableCell>{p.first_name}</TableCell>
            <TableCell>{p.last_name}</TableCell>
            <TableCell>{`${p.age} ans`}</TableCell>
            <TableCell>{p.createdAt}</TableCell>
            <TableCell>{p.modifiedAt}</TableCell>
            <TableCell>{p.nature}</TableCell>
            <TableCell>{p.prescription ? 'Oui' : 'Non'}</TableCell>
            <TableCell>{p.doctor}</TableCell>
            <TableCell>{p.availability.length >= 12 ? `${p.availability.substring(0,12)}...` : p.availability} </TableCell>
            <TableCell>{p.comment}</TableCell>
            <TableCell>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    elevation={1}
                >
                    {actionOptions.map((option) => (
                        <MenuItem key={option} selected={false} onClick={() => handleOnClickActions(option, p._id)}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </TableCell>
        </TableRow>
    )
}

export default RowPatient
