import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './CoinFluctuation.css';

export default function CoinFluctuation({props}) {
    const random = Math.random() < 0.5
    
    return (
        <div style={{display: 'flex'}}>
            { random ? <ArrowDropUpIcon className={"indicator-position price-up"} /> : <ArrowDropDownIcon className={"indicator-position price-down"} /> }
            <p className={random ? 'price-up' : 'price-down'}>{props.row.Percentage24H}</p>
        </div>
    )
}