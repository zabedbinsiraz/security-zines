import React from 'react';
import { presentations } from '../../../FakeData/FakeData';
import Item from '../../Item/Item';

const Presentation = () => {
    return (
        <div className="container zines">

        <div className="row">
            <div className="col">
                <div className="card zines-card">
                    <div className="card-body zines-card-body">
                        <h4 className="card-title zines-card-title">
                            Presentation
                        </h4>
                    </div>

                </div>
            </div>
        </div>

       
       <div className="row d-flex">
       {
           presentations.map(item => <Item  item={item} />)
       }
       </div>
       
    </div>
    );
};

export default Presentation;