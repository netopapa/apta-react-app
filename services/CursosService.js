import React from 'react';
import { URL_API } from '../config/constants';

export function getAllCursos(){
    fetch('http://aptacet.com.br/wp-content/themes/apta/php/server.php')
    .then(resp => resp.json())
    .then(resp => {return resp})
}