import React, { Component } from 'react';
import Famous from '../Famous/Famous';

class FamousList extends Component {
  render() {
    return (
      <div className="famous-list">SOY La FamousList
            {
                this.props.famous.map(item => {
                return (
                    <Famous
                        people={item.id}
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