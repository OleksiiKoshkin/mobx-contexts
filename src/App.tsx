import React from 'react';
import './App.css'
import {AddressesDatabase} from "./components/AddressesDatabase.tsx";

export const App:React.FC = () => {
    return (
        <>
            <h1>PoC: MobX multi stores and contexts</h1>
            <AddressesDatabase/>
        </>
    )
}
