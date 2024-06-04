import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useNavigate } from 'react-router-dom';

const BootstrapButton = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '10px 20px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#005bb5',
        borderColor: '#0056a3',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0056a3',
        borderColor: '#004a8f',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
}));

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <Grid container spacing={3} justifyContent="center" style={{ marginTop: '50px' }}>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            Welcome to Your Dashboard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Manage your beneficiaries quickly and efficiently using the button below.
                        </Typography>
                        <Stack spacing={2} direction="row" justifyContent="center" style={{ marginTop: '20px' }}>
                            <BootstrapButton
                                variant="contained"
                                disableRipple
                                startIcon={<ManageAccountsIcon />}
                                onClick={() => navigate("/ListBeneficiary")}
                            >
                                Manage Beneficiary
                            </BootstrapButton>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
