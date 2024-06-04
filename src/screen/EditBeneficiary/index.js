// EditBeneficiary.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editBeneficiary } from '../../redux/ApiAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditBeneficiary = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const beneficiary = useSelector((state) => state.beneficiaries.find(b => b.id === parseInt(id)));

    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [pincode, setPincode] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountType, setAccountType] = useState('');

    useEffect(() => {
        if (beneficiary) {
            setFullName(beneficiary.fullName);
            setAddress(beneficiary.address);
            setCountry(beneficiary.country);
            setPincode(beneficiary.pincode);
            setAccountNumber(beneficiary.accountNumber);
            setBankName(beneficiary.bankName);
            setAccountType(beneficiary.accountType);
        }
    }, [beneficiary]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editBeneficiary({
            id: parseInt(id),
            fullName,
            address,
            country,
            pincode,
            accountNumber,
            bankName,
            accountType
        }));
        toast.success('Beneficiary updated successfully!', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            navigate('/ListBeneficiary');
        }, 1000); // Delay for better user experience
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>Edit Beneficiary</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Full Name"
                            variant="outlined"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Address"
                            variant="outlined"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined" required>
                            <InputLabel>Country</InputLabel>
                            <Select
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                label="Country"
                            >
                                <MenuItem value="">Select Country</MenuItem>
                                <MenuItem value="USA">USA</MenuItem>
                                <MenuItem value="UK">UK</MenuItem>
                                <MenuItem value="Canada">Canada</MenuItem>
                                <MenuItem value="Australia">Australia</MenuItem>
                                <MenuItem value="Germany">Germany</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Pincode"
                            variant="outlined"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Account Number"
                            variant="outlined"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Bank Name"
                            variant="outlined"
                            value={bankName}
                            onChange={(e) => setBankName(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Account Type"
                            variant="outlined"
                            value={accountType}
                            onChange={(e) => setAccountType(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>Save</Button>
                    </Grid>
                </Grid>
            </form>
            <ToastContainer />
        </Container>
    );
};

export default EditBeneficiary;
