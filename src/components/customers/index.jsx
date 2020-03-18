import React, { Component } from 'react'

export default class index extends Component {
  constructor(props){
      super(props);
      this.state={
          customers:[]
      }
  }
  tBbodyShow=(customers)=>{
      const arry=[];
      arry.push(customers.map((value,key) =>{
        return <tr key={key}>
             <td>{key+1}</td>
             <td>{value.name}</td>
             <td>{value.card_no}</td>
             <td>{value.amount}</td>
         </tr>
     })
      )
      this.setState({
          customers:arry
      })
  }
    componentDidMount(){
       
    }
    render() {
        const arry=[];
      arry.push(this.props.customers.map((value,key) =>{
        return <tr key={key}>
             <td>{key+1}</td>
             <td>{value.name}</td>
             <td>{value.card_no}</td>
             <td>{value.amount}</td>
         </tr>
     })
      )
        return (
            <div>
                <table style={{width:'100%'}}>
                    <thead style={{background:'black',color:'white'}}>
                        <tr>
                            <td>No.</td>
                            <td>Name</td>
                            <td>Card</td>
                            <td>Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        {arry}
                    </tbody>
                </table>
            </div>
        )
    }
}
