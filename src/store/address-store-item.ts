import {makeAutoObservable} from "mobx";
import React from "react";

// can be implemented as well as
// https://mobx.js.org/defining-data-stores.html#example-domain-store

export class AddressItemStore {
    public id
    public name = ''
    public country = ''
    public city = ''
    public streetAddress = ''

    constructor(initialName: string) {
        this.id = Math.random().toString(16).slice(2)
        this.name = initialName

        makeAutoObservable(this, {
            id: false,
            handleChangeName: false,
            handleChangeCountry: false,
            handleChangeCity: false,
            handleChangeStreetAddress: false
        })

    }

    setName = (value: string) => {
        this.name = value
    }
    setCountry = (value: string) => {
        this.country = value
    }
    setCity = (value: string) => {
        this.city = value
    }
    setStreetAddress = (value: string) => {
        this.streetAddress = value
    }
    handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setName(e.target.value)
    }
    handleChangeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setCountry(e.target.value)
    }
    handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setCity(e.target.value)
    }
    handleChangeStreetAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setStreetAddress(e.target.value)
    }
}