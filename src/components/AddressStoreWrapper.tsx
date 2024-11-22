import React from "react";
import {AddressContext} from "./adress-store-context.ts";
import {useAddressStore} from "./useAddressStore.ts";
import {Address} from "./address/Address.tsx";

type AddressProps = {
    name: string
}

export const AddressStoreWrapper: React.FC<AddressProps> = (props) => {
    const addressContextValue = useAddressStore(props.name)

    return <AddressContext.Provider value={addressContextValue}>
        <Address/>
        <br/>
    </AddressContext.Provider>
}
