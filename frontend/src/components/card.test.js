import React from "react";
import { ReactDOM } from "react";

import render from '@testing-library/react';

import AdminMaint from './Admin/AdminMaint';
import Button from "antd";

describe(
    'AdminMaint',
    ()=>{
        it(" test navigation",()=>{
            // const test = './admin_maint_detail';
            expect(AdminMaint).toContain(Button);
            // spyOn(global,'fetch').
            
        })
    }
);