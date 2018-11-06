import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMeasurements } from '../actions';
import SimpleBar from './SimpleBar';

class Measurements extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchMeasurements();
    }

    renderList(){
        if(this.props.openaqMeasurements){

            const data = Object.assign({},this.props.openaqMeasurements);            

            return Object.keys(data)
                .map(key => {
                    const renderData = data[key];
                    return (<li>
                        <p>Pays : <em>{renderData.country}</em></p>
                        <p>Ville : <em>{renderData.city}</em></p>
                        <p>Location : <em>{renderData.location}</em></p>
                        <p>Particule : <em>{renderData.parameter}</em></p>
                        <p>Valeur : <em>{renderData.value}</em></p>
                        <p>Unité : <em>{renderData.unit}</em></p>
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
                <h4>Measurements Data</h4>
                <SimpleBar data={this.props.openaqMeasurements}/>
                <ul>
                    {this.renderList()}
                </ul>
                {/*JSON.stringify(this.props)*/}
            </React.Fragment>
        )
    }

}

function mapStateToProps(state){
    return {openaqMeasurements:state.openaqMeasurements};
}

export default connect(mapStateToProps, { fetchMeasurements })(Measurements);