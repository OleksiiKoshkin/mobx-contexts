import React from "react";
import {AddressName} from "./fields/AddressName.tsx";
import {AddressCountry} from "./fields/AddressCountry.tsx";
import {AddressCity} from "./fields/AddressCity.tsx";
import {AddressStreet} from "./fields/AddressStreet.tsx";
import {AddressTitle} from "./fields/AddressTitle.tsx";

export const Address: React.FC = () => {

    return <div className={'card-content'}>
        <AddressTitle/>

        <AddressName/>
        <AddressCountry/>
        <AddressCity/>
        <AddressStreet/>
    </div>
}