import React from "react";
import {observer} from "mobx-react-lite";
import {useAddressContext} from "../../../store/components/adress-store-context.ts";

export const AddressCity: React.FC = observer(() => {
    const store = useAddressContext()

    return <div key={'_address_city' + store.item?.id}>
        <label htmlFor="city">
            <span>City</span>
            <input type="text" onChange={store.item?.handleChangeCity} value={store.item?.city}/>
        </label>
    </div>
})