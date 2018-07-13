import React, { Component } from 'react';
import Famous from '../Famous/Famous';

class FamousList extends Component {
  render() {
    return (
      <div className="famous-list">
            {
                this.props.famous.map(item => {
                return (
                    <Famous
                      key={item.id}
                      {...item}
                    />
                )
                })
            }
      </div>
    );
  }
}

export default FamousList;