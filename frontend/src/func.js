import { useState } from 'react';

function Contacts(props) {

	console.log(props);

    function Contacts(props) {
        const [showInputs, setShowInputs] = useState(false);
        const [phoneInput, setPhoneInput] = useState('');
        const [nameInput, setNameInput] = useState('');
    

	function onChange() {
        const updatedContact = {
            id: props.id,
            description: props.description,
            completed: !props.completed
        };

        fetch(`http://localhost/api/contacts/${props.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedContact)
        })
        .then(response => response.json())
        .then(() => {
            props.setContact(contact => contact.map(contact => {
                if (contact.id === props.id) {
                    return updatedContact;
                } else {
                    return contact;
                }
            }));
        })
    }

	function onClick() {
        fetch(`http://localhost/api/contact/${props.id}`, {
            method: 'DELETE',
        })
        .then(() => {
            props.setContact(contact => contact.filter(contact => contact.id !== props.id));
        })
    }

	return (
        <fieldset class="fieldsetNames"> 
		<ul>< button class="toleft" type="button" onClick={onClick}>{ props.description }</button>
        <button type="button" onClick={onClick}>Delete</button> 
        <input id="but" type="checkbox" checked={props.completed} onChange={onChange}/>
        </ul>
        </fieldset>
	);
   }

    function List(props) {

        const [newContact, setNewContact] = useState("");
    
        function onChange(event) {
        setNewContact(event.target.value);
        }
    
        function onClick() {
            fetch('http://localhost/api/tasks', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ description: newContact, completed: false })
            })
                .then(response => response.json())
                .then(data => {
                    props.setContact(contact => [...contact, data]);
                })
    
            setNewContact(""); 
        }

	return (
		<div id="forFont"> 
			<h1>{ props.heading }</h1>
            <br></br>
            <fieldset class="fieldsetsize">
            <legend id="personaldetails">Let's add a contact!!</legend>       
			<input class="text" placeholder="    Name " onChange={onChange} />
            <br></br>
            <br></br>
			<button type="button" class="myButton myOtherButton" onClick={onClick}>Create contact</button>
            </fieldset>
            <br></br>
			<ul>
				{ props.contact.map(contact => <Contacts setContact={props.setContact} id={contact.id} description={contact.description} completed={contact.completed} />) }
			</ul>
		</div>
	);
}

export default Contacts;
