import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
	let input

	return (
		<div>
			<form onSubmit={ e => {
					e.preventDefault()
					if ( !input.value.trim() ) {
						return
					}
					dispatch( addTodo( input.value ) )
					input.value = ''
				}}
			>
				<div className="field has-addons">
					<div class="control">
						<input className="input" placeholder="ToDo" ref={ node => { input = node }} />
					</div>
					<div className="control">
						<button type="submit" className="button is-primary">
							Add Todo
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

AddTodo = connect()(AddTodo)

export default AddTodo