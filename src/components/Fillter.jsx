import React, { Component } from 'react'

export default class Fillter extends Component {
  render() {
    return (
      <div className='filter'>
        <div className="filter-result">
            {this.props.count} Proudects 
        </div>
        <div className="filter-sort">
            
            order {"  "}
            <select value={this.props.sort} onChange={this.props.sortProducts}> 
                <option value="">Latest</option>
                <option value="lawest">Lawest</option>
                <option value="highest">Highest</option>

            </select>
        </div>
        <div className="filter-size">
            Filter {"  "}
            <select value={this.props.size} onChange={this.props.filterProducts}>
                <option value="">All</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
        </div>
      </div>
    )
  }
}
