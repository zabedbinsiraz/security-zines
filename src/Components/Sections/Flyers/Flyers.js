import React from 'react';
import { flyers } from '../../../FakeData/FakeData';
import Item from '../../Item/Item';

const Flyers = () => {
    return (
        <div className="container zines">

        <div className="row">
            <div className="col">
                <div className="card zines-card">
                    <div className="card-body zines-card-body">
                        <h4 className="card-title zines-card-title">
                            Flyers
                        </h4>
                    </div>

                </div>
            </div>
        </div>

       
       <div className="row d-flex">
       {
           flyers.map(item => <Item  item={item} />)
       }
       </div>
       
    </div>
    );
};

export default Flyers;