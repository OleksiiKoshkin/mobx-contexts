import React, {useCallback, useState} from "react";
import {AddressesList} from "./AddressesList.tsx";

export type AddressDBItem = {
    recordId: string,
    initialName: string,
}

export const AddressesDatabase: React.FC = () => {

    const [addresses, setAddresses] = useState<AddressDBItem[]>([
        {recordId: '1', initialName: 'Main'},
        {recordId: '2', initialName: 'Secondary'},
        {recordId: '3', initialName: 'Tertiary'}
    ])

    const handleAddNew = useCallback(() => {
        const newName = prompt('New address')
        if (!newName) {
            return
        }

        console.log('+++ Create new record', newName)

        const id = Math.random().toString(16).slice(2)
        setAddresses([...addresses, {recordId: id, initialName: newName}])
    }, [addresses])

    const handleRemove = useCallback((id: string) => {
        console.log('--- Remove', id)
        setAddresses((v) => v.filter(addr => addr.recordId !== id))
    }, [])

    return <div>
        <h2>List of addresses</h2>
        <AddressesList
            addresses={addresses}
            addAddress={handleAddNew}
            removeAddress={handleRemove}/>
    </div>
}
