import React from 'react';
import { URL_API } from '../config/constants';

export const getAllCursos = () => {
    return fetch(URL_API)
    .then(resp => resp.json())
    .then(json => {return  json[0]});
}

export function getCurso(id){
    return fetch(`${URL_API}?id=${id}`)
        .then(resp => resp.json())
}