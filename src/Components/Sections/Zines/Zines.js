import React from 'react';
import { zinesItems } from '../../../FakeData/FakeData';
import Item from '../../Item/Item';

import './Zines.css';

const Zines = () => {

    console.log(zinesItems[0].img);

    return (
        <div className="container zines">

            <div className="row">
                <div className="col">
                    <div className="card zines-card">
                        <div className="card-body zines-card-body">
                            <h4 className="card-title zines-card-title">
                                Zines
                            </h4>
                        </div>

                    </div>
                </div>
            </div>

           
           <div className="row d-flex">
           {
               zinesItems.map(item => <Item  item={item} />)
           }
           </div>
           
        </div>
    );
};

export default Zines;