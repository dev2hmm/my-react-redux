import React, { Component } from 'react'
import {connect} from 'react-redux'
import {customerActions} from './actions/customer.actions'
import Index from './components/customers/index'
export class App extends Component {
  
    componentDidMount(){
        this.props.getAllCustomer();
      }
    render() {
        const {customers,loading}=this.props;
        console.log("cutomers log: ",customers);
        return (
            <div>
        {
          loading ? 
          <p>Loading ...</p>
          :
         <Index customers={customers} />
        }
        
      </div>
        )
    }
}
function mapStateToProps(state){
    return {
        customers:state.customer.customers,
        loading:state.customer.loading
    }
}
const mapDispatchToProps=dispatch=>( {
    getAllCustomer(){
        dispatch(customerActions.getAllCustomer());
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
