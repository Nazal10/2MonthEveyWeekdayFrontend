import PropTypes from "prop-types";
// import {useEffect} from "react"

function ListItem({wasiiro, value}) {

    // useEffect(() => {
    //     console.log('Tijaabo useEfect');
    // }, []);

    return (
    <li>{wasiiro} {value}
    </li> 
    );
}

ListItem.propTypes = {
    wasiiro: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,

};

export default ListItem;





// rafce waxuu qorayaa sida hoos uga jeedid oo dhan 1 mar markaa tab raacisid.
// raflar da functional yani fonksiyondur component dir.
// ama altaki rfce ile yaptim. export default ListItem yazdirir. rafc da olur.

// import React from 'react' // import etmek artik gerek yok silebiliriz


// rcc na si lamid ah rafce waxay keeneesa kuwa hoose. 
// rcc ler class component dir.


// import React, { Component } from 'react'

// export default class ListItem extends Component {
//     render() {
//     return (
//     <div>ListItem</div>
//     )
// }
// }
