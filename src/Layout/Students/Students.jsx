import React from 'react'
import {Registration} from '../../Pages/Public/Registration';
import {FeeSlip} from '../../Pages/Public/FeeSlip';
import {Rollnumber} from '../../Pages/Public/RollNumber';
import { Route, Routes } from 'react-router-dom';

export const Students = () => {
  return (
    <div>
        <Routes>
            <Route path='registration' element={<Registration/>}/>
            <Route path='feeslip' element={<FeeSlip/>}/>
            <Route path='rollnumber' element={<Rollnumber/>}/>

        </Routes>
    </div>
  )
}
