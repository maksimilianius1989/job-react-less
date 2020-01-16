import React, {Component} from "react";


export class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			color : '#ee6e73',
			color2 : '#ccc',
			menu : [
				{
					title : 'Main',
					url : '/',
					hide : false,
					alt : 'При наведенні на пункт меню курсором я буду бачити цей текст'
				},
				{
					title : 'Main',
					url : '/',
					hide : false,
					alt : 'При наведенні на пункт меню курсором я буду бачити цей текст'
				}
				,{
					title : 'Main',
					url : '/',
					hide : false,
					alt : 'При наведенні на пункт меню курсором я буду бачити цей текст'
				}
			]
		};
	}

	handleClick = (event)  => {
		event.preventDefault();
			this.setState( (oldState) => {
			return  {color2 : oldState.color2 === '#ccc' ? '#ee6e73' : '#ccc' };
		});
	};

	render() {
		const { color2 } = this.state;
		return (
			<nav style={ {backgroundColor : color2 } } >
				<div className="nav-wrapper">
					<a href="#"  onClick={this.handleClick}  className="brand-logo center">Logo</a>
					<ul id="nav-mobile" className="left hide-on-med-and-down">
						<li><a href="sass.html">Sass</a></li>
						<li><a href="badges.html">Components</a></li>
						<li><a href="collapsible.html">JavaScript</a></li>
					</ul>
				</div>
			</nav>
		)
	}
}