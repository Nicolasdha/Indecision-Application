import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import ReactModal from 'react-modal';


//shorthand arrow return syntax implicit return
//Modal requires two props to work: isOpen(set to Boo) & contentLabel for accessibility purposes to access it with a name
const OptionModal = (props) =>(
    <Modal
        isOpen={!!props.selectedOption} // two !! to switch to Boo
        contentLabel="Selected Option"
        appElement={document.getElementById('app')}
        onRequestClose={props.closeModal} // for esc key and unfocus
        closeTimeoutMS={200} // how long it takes to gut div to have the ease-in-out take place
        className="modal" // When className provided modal doesnt use stock styles itll use className styles
    >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.closeModal}>Close</button>
    </Modal>
    );


export default OptionModal