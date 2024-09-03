import React from "react";
import { useParams } from "react-router-dom";

export default function Customer() {
    const {id} = useParams()
    return <>
    <h1>Customer Page</h1>
    <p>Customer Id is <b>{id}</b></p>
    </>
}