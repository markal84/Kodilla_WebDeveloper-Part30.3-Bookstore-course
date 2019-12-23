import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Pulse from "react-reveal/Pulse";
import * as actions from "../../../actions/actions";
import './SideBar.scss'

class SideBar extends React.Component {
  handleFilter = e => {
    const id = e.target.id;
    const checked = e.target.checked;

    if (id === "nameA-Z") {
      if (checked) {
        return this.props.sortedByNameASC();
      }
      return this.props.resetFilters();
    }

    if (id === "nameZ-A") {
      if (checked) {
        return this.props.sortedByNameDSC();
      }
      return this.props.resetFilters();
    }

    if (id === "price ascending") {
      if (checked) {
        return this.props.sortedByPriceASC();
      }
      return this.props.resetFilters();
    }

    if (id === "price descending") {
      if (checked) {
        return this.props.sortedByPriceDSC();
      }
      return this.props.resetFilters();
    }
  };

  reset = () => {
    const inputs = document.getElementsByTagName("input");
    for (var input of inputs) {
      input.checked = false;
    }
    this.props.resetFilters();
  };

  render() {
    const resetData = [{ id: "reset", name: "reset filters" }];
    const books = [
      { id: "nameA-Z", name: "name A-Z" },
      { id: "nameZ-A", name: "name Z-A" },
      { id: "price ascending", name: "price ascending" },
      { id: "price descending", name: "price descending" },
    ];
    return (
      <Pulse>
        <div className="mb-3 font-weight-bold">Sort list by:</div>
        <form className="books-sort">
          {books.map(item => (
            <div key={item.id} className="book">
              <input id={item.id} type="radio" onClick={this.handleFilter} name="sorting" />
              <label htmlFor={item.id}>{item.name}</label>
            </div>  
          ))}

          <div className="line" />

          {resetData.map(item => (
            <NavLink
              key={item.id}
              id={item.id}
              exact
              to="/"
              activeClassName="active"
              className="reset"
              onClick={id => {
                this.reset(id);
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </form>
      </Pulse>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = {
  ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
