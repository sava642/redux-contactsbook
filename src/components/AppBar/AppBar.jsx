import React from "react"
import { useSelector } from "react-redux"
import { AddedContacts } from "../AddedContacts/AddedContacts"
import { LoginForm } from "../LoginForm/LoginForm"
import './AppBar.css';
import { useDispatch } from "react-redux";
import { handleFrontBack } from "../redux/frontBackSlice/frontBackSlice"


export const AppBar = () => {
	//const isAdding = useSelector(state => state.contacts.isAdding)
	const dispatch = useDispatch()

	const handleChange = (e) => {

		const value = e.target.checked
		dispatch(handleFrontBack(value))
		console.log(value)
	}

	return (
		<>
			<a href="https://front.codes/" className="logo" target="_blank">
				<img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
			</a>

			<div className="section">
				<div className="container">
					<div className="row full-height justify-content-center">
						<div className="col-12 text-center align-self-center py-5">
							<div className="section pb-5 pt-5 pt-sm-2 text-center">
								<h6 className="mb-0 pb-3 centre h6">
									<span className="h6 first">Add contact </span>
									<span className="h6 second">Contacts</span>
								</h6>
								<input
									className="checkbox"
									type="checkbox"
									id="reg-log"
									name="reg-log"
									onClick={handleChange}
								/>
								<label htmlFor="reg-log"></label>
								<div className="card-3d-wrap mx-auto">
									<div className="card-3d-wrapper">
										<LoginForm />
										<AddedContacts />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
