import React from "react";
import {observer} from "mobx-react-lite";
import {useAddressContext} from "../../../store/components/adress-store-context.ts";

export const AddressCountry: React.FC = observer(() => {
    const store = useAddressContext()

    return <div key={'_address_country' + store.item?.id}>
        <label htmlFor="country">
            <span>Country</span>
            <input type="text" onChange={store.item?.handleChangeCountry} value={store.item?.country}/>
        </label>
    </div>
})