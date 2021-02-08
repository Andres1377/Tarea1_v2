import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
      super();
  
      this.state = {
        sections: [
          {
            title: "Perfumes Hombre",
            imageUrl: "https://i.ibb.co/7bf2p0Z/Catogoria-Hombre.jpg",
            id: 1,
            linkUrl: "fragancesmen",
          },
          {
            title: "Perfumes Mujer",
            imageUrl: "https://i.ibb.co/zHphf9s/Catogoria-Mujer.jpg",
            id: 2,
            linkUrl: "fraganceswoman",
          },
          {
            title: "Perfumes Unisex",
            imageUrl: "https://i.ibb.co/M25Ym0R/Catogoria-Unisex.jpg",
            id: 3,
            linkUrl: "fragancesunisex",
          }
        ],
      };
    }

    render() {
      return (
        <div className="directory-menu">
        
          {this.state.sections.map(({ id, ...otherSectionProps }) => ( 
            <MenuItem key={id} {...otherSectionProps} />

          ))}
        </div>
      );
    }
  }
  
  export default Directory;


