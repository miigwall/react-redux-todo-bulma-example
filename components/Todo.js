import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
	<a
		onClick={ onClick }
		className="panel-block"
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>
	{ text }
	</a>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo