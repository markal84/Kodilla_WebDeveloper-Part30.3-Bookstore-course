import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Pulse from "react-reveal/Pulse";
import * as actions from "../../../actions/actions";

class SideBar extends React.Component {
  handleFilter = e => {
    const id = e.target.id;
    const checked = e.target.checked;

    if (id === "promo") {
      if (checked) {
        return this.props.filterByPromo();
      }
      return this.props.promoRemoved();
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

    const books = [{ id: "promo", name: "promo" }];

    return (
      <Pulse>
        <form>
          {books.map(item => (
            <div key={item.id} className="test">
              <input id={item.id} type="checkbox" onClick={this.handleFilter} />
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
