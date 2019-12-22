import React, { Component } from "react";
import SideBar from "../../features/SideBar/SideBar";
import Pagination from "../../features/Pagination/Pagination";
import ProductList from "../../features/ProductList/ProductList";

class HomePage extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <Pagination>
              <ProductList />
            </Pagination>
          </div>
        </div>
    );
  }
}

export default HomePage;
