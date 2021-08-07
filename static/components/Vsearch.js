import React, { Component } from 'react'
import './VIdeoitem.css'

export class Vsearch extends Component {
    state={ term: ''};

    onFormSubmit= event =>{
        event.preventDefault()

        this.props.onFormSubmit(this.state.term);//passing the onSubmit state.term properties to onTermsubmit 
    }
    
    render() {
        return (
            <div className="ui_seg">
                <form className="ui_form" onSubmit={this.onFormSubmit}>
                        <h3>Video search</h3>
                        <div className="search-box">
                        <input 
                            className="search-txt"
                            type="text"
                            value={this.state.term}
                            onChange={(event)=>{this.setState({term: event.target.value})}}/>
                        </div>
                    <a href="https://www.linkedin.com/login"><i className={'icon-lt large linkedin icon' } >RAMPRASATH_M_V</i></a>
                    <a href="https://www.instagram.com/"><i className={'icon-rt large instagram icon'}>_dearam_3</i></a>
                </form>
            </div>
            
        )
    }
}

export default Vsearch