import React, { useEffect, useState } from 'react';
import AddBeneficiary from '../screen/AddBeneficiary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditBeneficiary from '../screen/EditBeneficiary';
import ListBeneficiary from '../screen/ListBeneficiary'
import Dashboard from '../screen/Dashboard'
import Error404 from '../screen/Error404';


function Navigation() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/AddBeneficiary" element={<AddBeneficiary />} />
                <Route path="/EditBeneficiary/:id" element={<EditBeneficiary />} />
                <Route path="/ListBeneficiary" element={<ListBeneficiary />} />
                <Route path="*" element={<Error404 />} /> {/* Catch-all route for 404 errors */}

            </Routes>
        </BrowserRouter>

    );
}
export default Navigation