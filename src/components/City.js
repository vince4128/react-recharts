import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../actions';

class City extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchCities();
    }

    renderList(){
        if(this.props.openaqCities){

            const data = Object.assign({},this.props.openaqCities);

            return Object.keys(data)
                .map(key => {
                    const renderData = data[key];
                    return (<li>
                        <p>Ville : <em>{renderData.city}</em></p>
                        <p>Pays : <em>{renderData.country}</em></p>
                        <p>Count : <em>{renderData.count}</em></p>
                        <hr/>
                    </li>)
                })
        }else{
            return "loading...";
        }
        
    }

    render(){
        return(
            <React.Fragment>
                <h4>Cities List Data</h4>
                <ul>
                    {this.renderList()}
                </ul>
            </React.Fragment>
        )
    }

}

function mapStateToProps(state){
    return {openaqCities:state.openaqCities};
}

export default connect(mapStateToProps, { fetchCities })(City);