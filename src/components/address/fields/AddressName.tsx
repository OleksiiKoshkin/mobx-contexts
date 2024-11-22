import React from "react";
import {observer} from "mobx-react-lite";
import {useAddressContext} from "../../../store/components/adress-store-context.ts";

export const AddressName: React.FC = observer(() => {
    const store = useAddressContext()

    return <div key={'_address_name' + store.item?.id}>
        <label htmlFor="name">
            <span>Name</span>
            <input type="text" onChange={store.item?.handleChangeName} value={store.item?.name}/>
        </label>
    </div>
})