import React from 'react';
import Flyers from './Flyers/Flyers';
import Presentation from './Presentation/Presentation';
import PrintItems from './PrintItems/PrintItems';
import Zines from './Zines/Zines';


const Sections = () => {
    return (
        <div>
            <Zines />
            <Flyers />
            <PrintItems />
            <Presentation />
        
        </div>
    );
};

export default Sections;