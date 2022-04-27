import React from "react";
import { ReactDOM } from "react";
import CardsItem from "./CardsItem";

import render from '@testing-library/react';

import AdminMaint from './Admin/AdminMaint';

describe(
    'AdminMaint',
    ()=>{
        it(" test navigation",()=>{
            const test = './admin_maint_detail';
            expect(test).toBe('./admin_maint_detail');
        })
    }
);