import React from "react";
import {observer} from "mobx-react-lite";
import {useAddressContext} from "../../adress-store-context.ts";

export const AddressStreet: React.FC = observer(() => {
    const store = useAddressContext()

    return <div key={'_address_street' + store.item?.id}>
        <label htmlFor="street">
            <span>Street address</span>
            <input type="text" onChange={store.item?.handleChangeStreetAddress} value={store.item?.streetAddress}/>
        </label>
    </div>
})