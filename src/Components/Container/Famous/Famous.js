import React, { Component } from 'react';

import './famous.css';

class Famous extends Component {
	state = {
		vote: false,
		button: false,
	}

	handleUp = (event) => {
		this.setState({
			vote: true,
			button: true
		})		
	}	
	handleDown = (event) => {
		this.setState({
			vote: false,
			button: true
		})		
	}	
	onVote = (event) => {
		if(this.state.button) {
			if(this.state.vote) {		
				let totalUp = Number(localStorage.getItem('upcount_'+this.props.id)) + 1;				
				localStorage.setItem('upcount_'+this.props.id, totalUp)
	
				this.setState(prevState => ({
					upcount: Number(localStorage.getItem('upcount_'+this.props.id)),
					upbotton: false
				}))		
			
			} else {
				let totalDown = Number(localStorage.getItem('downcount_'+this.props.id)) + 1;
				localStorage.setItem('downcount_'+this.props.id, totalDown);

				this.setState(prevState => ({
					downcount: Number(localStorage.getItem('downcount_'+this.props.id)),
					upbotton: false
				}))			
			}
		}
	}
  render() {
		let totalUp = Math.round(this.state.upcount / (this.state.upcount + this.state.downcount)*100),
			totalDown = Math.round(this.state.downcount / (this.state.upcount + this.state.downcount)*100);

			totalUp = isNaN(totalUp) ? 0 : totalUp;
			totalDown = isNaN(totalDown) ? 0 : totalDown;

    return (
      	<div className={this.props.classimage}>
			<div className="famous">					
				<p className="title-famous">						
					<span> {this.props.character} </span>
				</p>
				<div className="info">
					<p className="">
						<span>{this.props.sectiontime} month ago</span> 
						<span> in {this.props.section}</span>
					</p>		
					<p>
						{this.props.description}
					</p>						
					<p>
						<button onClick={this.handleUp}> handUP</button>
						<button onClick={this.handleDown}>handdown</button>
						<button className="" onClick={this.onVote}>Vote now</button>						 
					</p>	
					<p className="result">
						<span className="Total">{totalUp}% </span>
						<span className="Total">{totalDown}% </span>
					</p>			
				</div>															
			</div>
		</div>
    );
  }
}

export default Famous;