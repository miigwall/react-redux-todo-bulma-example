import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
	<div>
		<nav className="panel">
			<p className="panel-heading">
				repositories
			</p>
			<div className="add-todo">
				<AddTodo />
			</div>
			<div className="panel-block">
				<p className="control has-icons-left">
					<input className="input is-small" type="text" placeholder="search" />
					<span className="icon is-small is-left">
						<i className="fa fa-search"></i>
					</span>
				</p>
			</div>
			<p className="panel-tabs">
				<Footer />
			</p>
			<VisibleTodoList />
			<div className="panel-block">
				<button className="button is-primary is-outlined is-fullwidth">
					reset all filters
				</button>
			</div>
		</nav>
	</div>
)

export default App