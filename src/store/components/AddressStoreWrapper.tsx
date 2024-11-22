import React from "react";
import {AddressContext} from "./adress-store-context.ts";
import {useAddressStore} from "./useAddressStore.ts";
import {Address} from "../../components/address/Address.tsx";

type AddressProps = {
    initialName: string
}

export const AddressStoreWrapper: React.FC<AddressProps> = (props) => {
    const addressContextValue = useAddressStore(props.initialName)

    return <AddressContext.Provider value={addressContextValue}>
        <Address/>
    </AddressContext.Provider>
}
