// @flow strict

import { FiberManualRecord, Info } from '@material-ui/icons';
import * as React from 'react';
import './widget.css'

function Widget() {

    const newArticle=(heading, subtitle)=>(
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecord className='Muisvgicon-root'/>
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

            
        </div>
    )
    
    return (
        <div className='widgets'>
            <div className='widgets__header' >
                <h2>Linked News</h2>
                <Info/>

            </div>

            {newArticle ('PAPA React is back', 'Top News - 9999 readers')}

            
        </div>
    );
};

export default Widget;