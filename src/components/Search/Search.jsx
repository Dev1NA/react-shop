import React, { useContext } from 'react';
import { ShopContext } from '../../context'

function Search() {
  const { setValue, value } = useContext(ShopContext);
  return <div>
    <nav className='teal darken-2'>
      <div className="nav-wrapper container ">
        <form
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="input-field">
            <input
              id="search"
              className='search'
              type="search"
              required
              onChange={(event) => setValue(event.target.value)}
              value={value}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i
              className="material-icons"
              onClick={() => setValue('')}
            >
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  </div>;
}

export default Search;
