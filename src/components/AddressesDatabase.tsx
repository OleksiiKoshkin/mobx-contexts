import React, {useCallback, useState} from "react";
import {AddressesList} from "./AddressesList.tsx";

export type AddressDBItem = {
    id: string,
    name: string,
}

export const AddressesDatabase: React.FC = () => {

    const [addresses, setAddresses] = useState<AddressDBItem[]>([
        {id: '1', name: 'Main'},
        {id: '2', name: 'Secondary'},
        {id: '3', name: 'Tertiary'}
    ])

    const handleAddNew = useCallback(() => {
        const newName = prompt('New address')
        if (!newName) {
            return
        }

        console.log('+++ Create new record', newName)

        const id = Math.random().toString(16).slice(2)
        setAddresses([...addresses, {id, name: newName}])
    }, [addresses])

    const handleRemove = useCallback((id: string) => {
        console.log('--- Remove', id)
        setAddresses((v) => v.filter(addr => addr.id !== id))
    }, [])

    return <div>
        <h2>List of addresses</h2>
        <AddressesList
            addresses={addresses}
            addAddress={handleAddNew}
            removeAddress={handleRemove}/>
    </div>
}
