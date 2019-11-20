import React from 'react';

import SortList from '../../features/SortList/SortList'
import Pagination from '../../features/Pagination/Pagination'

const HomePage = () => (
    <div className="d-flex row">
      <div className="col-3">
        <SortList />
      </div>
      <div className="col-9">
        Products display: 2columns x 3rows - change it to separate ProductDisplay component
      </div>
      <Pagination />
    </div>
);

export default HomePage;