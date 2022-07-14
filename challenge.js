//Dados dos números, devolver cuantos número Impares hay entre ellos
function calcularimp(num1, num2){
    let count = 0;
    for (let i = num1; i  <= num2; i++) {
        count += (i % 2)
    }
    return count;
}

import 'react';
import { useMemo } from 'react';

function Odd(props) {
    const count = useMemo(() => calcularimp(2, 100))

    return (
        <>
            <h4>Impares:</h4> <p>{count}</p>
        </>
    )
}