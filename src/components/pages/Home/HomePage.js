import React, { Component } from 'react';

import SortList from '../../features/SortList/SortList'
import Pagination from '../../features/Pagination/Pagination'
import ProductList from '../../features/ProductList/ProductList'

// class example and testData is only temporary
class Example extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className='example'>
        {data.map((item) => {
          return (
            <div className='example__item'>
              {item.id} {item.first_name} {item.last_name}
            </div>
          );
        })}
      </div>
    );
  }
}


function testData() {
  return (
      [
      {"id":1,"first_name":"Doris","last_name":"Martinez"},
      {"id":2,"first_name":"Jerry","last_name":"Cunningham"},
      {"id":3,"first_name":"Kathy","last_name":"Griffin"},
      {"id":4,"first_name":"Frank","last_name":"Roberts"},
      {"id":5,"first_name":"Matthew","last_name":"Gonzalez"},
      {"id":6,"first_name":"Margaret","last_name":"Garrett"},
      {"id":7,"first_name":"Betty","last_name":"Kelly"},
      {"id":8,"first_name":"Maria","last_name":"Morales"},
      {"id":9,"first_name":"Joe","last_name":"Ward"},
      {"id":10,"first_name":"Dennis","last_name":"Simpson"},
      {"id":11,"first_name":"Willie","last_name":"Lane"},
      {"id":12,"first_name":"Denise","last_name":"Holmes"},
      {"id":13,"first_name":"Janice","last_name":"Kelley"},
      {"id":14,"first_name":"Frances","last_name":"Scott"},
      {"id":15,"first_name":"Kenneth","last_name":"Rose"},
      {"id":16,"first_name":"Bruce","last_name":"Williams"},
      {"id":17,"first_name":"Doris","last_name":"Ford"},
      {"id":18,"first_name":"Brian","last_name":"Phillips"},
      {"id":19,"first_name":"Ralph","last_name":"Medina"},
      {"id":20,"first_name":"Laura","last_name":"Kim"},
      {"id":21,"first_name":"Douglas","last_name":"Welch"},
      {"id":22,"first_name":"Janet","last_name":"Ray"},
      {"id":23,"first_name":"Stephen","last_name":"Garcia"},
      {"id":24,"first_name":"Theresa","last_name":"Knight"},
      {"id":25,"first_name":"Donald","last_name":"Hawkins"},
      {"id":26,"first_name":"Lisa","last_name":"Graham"},
      {"id":27,"first_name":"Louis","last_name":"Parker"},
      {"id":28,"first_name":"Harry","last_name":"Hart"},
      {"id":29,"first_name":"Doris","last_name":"Ward"},
      {"id":30,"first_name":"Earl","last_name":"Diaz"},
      ]
    )};

class HomePage extends Component{
    
  render(){
    return(
      <div className="d-flex row">
        <div className="col-3">
          <SortList />
        </div>
        <div className="col-9">
          <ProductList />
        </div>
          <Pagination
          data={testData()}
          >
          <Example />
          </Pagination>  
      </div>
    )
  }
}



export default HomePage;