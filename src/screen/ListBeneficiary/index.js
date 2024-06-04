// ListBeneficiary.js
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBeneficiary } from '../../redux/ApiAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ListBeneficiary = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const beneficiaries = useSelector((state) => state.beneficiaries);

    const [open, setOpen] = useState(false);
    const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);

    const handleOpen = (beneficiary) => {
        setSelectedBeneficiary(beneficiary);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleEdit = (beneficiaryId) => {
        navigate(`/EditBeneficiary/${beneficiaryId}`);
    };

    const handleDelete = (id) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete this beneficiary?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        dispatch(deleteBeneficiary(id));
                        toast.success('Beneficiary deleted successfully!', {
                            position: "top-right",
                            autoClose: 500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
                beneficiaries.length > 0 && (
                    <button
                        style={{
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            width: '250px',
                            margin: '20px'
                        }}
                        onClick={() => navigate("/AddBeneficiary")}
                    >
                        <AddCircleIcon style={{ marginRight: '8px' }} />
                        Add Beneficiary
                    </button>
                )
            }

            <div style={{ marginTop: 30 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell align="center">Account number</StyledTableCell>
                                <StyledTableCell align="center">Bank name</StyledTableCell>
                                <StyledTableCell align="center">Type of account</StyledTableCell>
                                <StyledTableCell align="center">Address</StyledTableCell>
                                <StyledTableCell align="center">Country</StyledTableCell>
                                <StyledTableCell align="center">Pincode</StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {beneficiaries.length === 0 ? (
                                <StyledTableRow>
                                    <StyledTableCell colSpan={8} align="center">
                                        <div style={{ textAlign: 'center' }}>
                                            <h2>No Beneficiaries Found</h2>
                                            <p>It looks like you haven't added any beneficiaries yet. Click the button below to add your first beneficiary.</p>
                                            <button
                                                style={{
                                                    backgroundColor: '#007bff',
                                                    color: '#fff',
                                                    border: 'none',
                                                    padding: '10px 20px',
                                                    borderRadius: '5px',
                                                    cursor: 'pointer',
                                                    fontSize: '16px',
                                                    display: 'inline-flex',
                                                    alignItems: 'center'
                                                }}
                                                onClick={() => navigate("/AddBeneficiary")}
                                            >
                                                <AddCircleIcon style={{ marginRight: '8px' }} />
                                                Add Beneficiary
                                            </button>
                                        </div>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ) : (
                                beneficiaries.map((beneficiary) => (
                                    <StyledTableRow key={beneficiary.id}>
                                        <StyledTableCell>{beneficiary.fullName}</StyledTableCell>
                                        <StyledTableCell align="center">{beneficiary.accountNumber}</StyledTableCell>
                                        <StyledTableCell align="center">{beneficiary.bankName}</StyledTableCell>
                                        <StyledTableCell align="center">{beneficiary.accountType}</StyledTableCell>
                                        <StyledTableCell align="center">{beneficiary.address}</StyledTableCell>
                                        <StyledTableCell align="center">{beneficiary.country}</StyledTableCell>
                                        <StyledTableCell align="center">{beneficiary.pincode}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <a onClick={() => handleEdit(beneficiary.id)}><EditIcon /></a>
                                                <a onClick={() => handleDelete(beneficiary.id)}><DeleteIcon /></a>
                                                <a onClick={() => handleOpen(beneficiary)}><VisibilityIcon /></a>
                                            </div>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        Beneficiary Details
                    </Typography>
                    {selectedBeneficiary && (
                        <div>
                            <p><strong>Full Name:</strong> {selectedBeneficiary.fullName}</p>
                            <p><strong>Address:</strong> {selectedBeneficiary.address}</p>
                            <p><strong>Country:</strong> {selectedBeneficiary.country}</p>
                            <p><strong>Pincode:</strong> {selectedBeneficiary.pincode}</p>
                            <p><strong>Account Number:</strong> {selectedBeneficiary.accountNumber}</p>
                            <p><strong>Bank Name:</strong> {selectedBeneficiary.bankName}</p>
                            <p><strong>Account Type:</strong> {selectedBeneficiary.accountType}</p>
                        </div>
                    )}
                </Box>
            </Modal>
            <ToastContainer />
        </div>
    );
};

export default ListBeneficiary;
