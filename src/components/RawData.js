import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRawData } from '../actions';

class RawData extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchRawData();
    }

    renderList(){
        if(this.props.stat.data){
            return this.props.stat.data.map((l) => {
                return <li key={l.Identifiant}>{l.Identifiant} {l.Nom} {l.Prenom} {l.Groupe} {l.Sequence} {l.Activite}</li>
            })
        }else{
            return "loading...";
        }
        
    }

    render(){
        return(
            <React.Fragment>
                <h4>Raw Data</h4>
                <ul>
                    {this.renderList()}
                </ul>
                {JSON.stringify(this.props.stat.data)}
            </React.Fragment>
        )
    }

}

function mapStateToProps(state){
    return {stat:state.stat};
}

export default connect(mapStateToProps, { fetchRawData })(RawData);