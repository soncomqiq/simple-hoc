import React from 'react';
import addHeader from '../../hoc/addHeader';

function Firstpage(props) {
    const newArray = [4, 9, 7, 1, 4, 2, 7, 7, 1, 4, 710, 114];
    props.sonterSort(newArray, false);
    console.log(newArray);

    return (
        <div>
            Welcome to my firstpage
        </div>
    );
}

export default addHeader(Firstpage, "marketing");
