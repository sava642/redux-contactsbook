import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteContact } from "../redux/contactSlice/contactSlice"
import IconButton from "./IconButton";
import { IoMdClose } from "react-icons/io";
import { SetFilter } from "../SetFilter/SetFilter";



export const AddedContacts = () => {

	const dispatch = useDispatch()
	const arrayContacts = useSelector(state => state.contacts.arrContacts)
	const filter = useSelector(state => state.filter)
	console.log(arrayContacts)

	const getVisiblContacts = arrayContacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	)




	return (
		<div className="card-back">
			<div className="center-wrap">
				<div className="section text-center">
					<SetFilter />
					<ul>
						{getVisiblContacts.map(({ id, name, number }, index) => (
							<li key={id}>
								<span style={{ marginRight: 15, textAlign: "center" }}>{index + 1}</span>
								<span style={{ marginRight: 15, textAlign: "center", color: "red" }}>{name}:</span>
								<span style={{ marginRight: 15, textAlign: "center" }}>{number}</span>
								<IconButton aria-label="delet" onClick={() => dispatch(deleteContact(id))}><IoMdClose /></IconButton>
							</li>
						)
						)}
					</ul>
				</div>
			</div>
		</div>
	)
}





