import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import './Pagination.scss';

class Pagination extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentPage: null,
      pageCount: null
    };
  }

  UNSAFE_componentWillMount() {
    const startingPage = this.props.startingPage ? this.props.startingPage : 1;
    const data = this.props.items;
    console.log(data);
    const pageSize = this.props.pageSize;
    let pageCount = parseInt(data.length / pageSize);
    if (data.length % pageSize > 0) {
      pageCount++;
    }
    this.setState({
      currentPage: startingPage,
      pageCount: pageCount
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.items !== this.props.items) {
      const startingPage = this.props.startingPage
        ? this.props.startingPage
        : 1;
      const data = this.props.items;
      console.log(data);
      const pageSize = this.props.pageSize;
      let pageCount = parseInt(data.length / pageSize);
      if (data.length % pageSize > 0) {
        pageCount++;
      }
      this.setState({
        currentPage: startingPage,
        pageCount: pageCount
      });
    }
  }

  setCurrentPage(num) {
    this.setState({ currentPage: num });
  }

  createControls() {
    let controls = [];
    const pageCount = this.state.pageCount;
    for (let i = 1; i <= pageCount; i++) {
      const baseClassName = "paginator-buttons";
      const activeClassName =
        i === this.state.currentPage ? `${baseClassName}-active` : "";
      controls.push(
        <div
          className={`${baseClassName} ${activeClassName}`}
          onClick={() => this.setCurrentPage(i)}
        >
          <button id={i} className="paginator-button">
            {i}
          </button>
        </div>
      );
    }
    return controls;
  }

  createPaginatedData() {
    const data = this.props.items;
    const pageSize = this.props.pageSize;
    const currentPage = this.state.currentPage;
    const upperLimit = currentPage * pageSize;
    const dataSlice = data.slice(upperLimit - pageSize, upperLimit);
    console.log(data);
    console.log(pageSize);
    console.log(currentPage);
    console.log(upperLimit);
    return dataSlice;
  }

  render() {
    return (
      <div className="products-container">
        {React.cloneElement(this.props.children, {
          data: this.createPaginatedData()
        })}
        <div className="paginator">{this.createControls()}</div>
      </div>
    );
  }
}

Pagination.propTypes = {
  data: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  startingPage: PropTypes.number.isRequired
};

Pagination.defaultProps = {
  pageSize: 6,
  startingPage: 1
};

const mapStateToProps = state => {
  console.log(state);
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(Pagination);
