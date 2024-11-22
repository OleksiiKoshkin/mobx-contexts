import React from "react";
import {AddressStoreWrapper} from "./AddressStoreWrapper.tsx";
import {AddressDBItem} from "./AddressesDatabase.tsx";

type AddressesListProps = {
    addresses: AddressDBItem[]
    addAddress: () => void
    removeAddress: (id: string) => void
}

export const AddressesList: React.FC<AddressesListProps> = ({addresses, addAddress, removeAddress}) => {
    return <div>
        {addresses.map(address => {
            return <div key={'_item' + address.id} className={'card'}>
                <AddressStoreWrapper key={address.id} name={address.name}/>

                <div className={'card-actions'}>
                    <button onClick={() => removeAddress(address.id)} className={'danger'}>Delete</button>
                </div>
            </div>
        })}
        <h3>Add new record</h3>
        <button onClick={addAddress}>Create new address</button>
    </div>
}
