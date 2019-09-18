import React from 'react';

import hoodie from '../../resources/directories/hoodie_chae.jpg';
import shirt from '../../resources/directories/roseshirt1.jpg';
import cap from '../../resources/directories/irene_cap.jpg';
import posters from '../../resources/directories/gfriend_head_3.jpg';
import album from '../../resources/directories/itzy.jpg';





import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [
                {
                  title: 'hoodies',
                  imageUrl: hoodie,
                  id: 1,
                  linkUrl: 'shop/hoodies'
                },
                {
                  title: 'shirts',
                  imageUrl: shirt,
                  id: 2,
                  linkUrl: 'shop/shirts'
                },
                {
                  title: 'headwear',
                  imageUrl: cap,
                  id: 3,
                  linkUrl: 'shop/headwear'
                },
                {
                  title: 'posters',
                  imageUrl: posters,
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/posters'
                },
                {
                  title: 'albums',
                  imageUrl: album,
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/albums'
                }
              ]
              
        }
    }

    render() {
        return (
        <div className="directory-menu">
            {this.state.sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
        )
    }
}

export default Directory;