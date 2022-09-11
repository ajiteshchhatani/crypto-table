import * as React from 'react'

export default function CoinName({props}) {
    return (
        <div style={{display: 'flex'}}>
            <img src={`/icons/${props.row.Coin.toLowerCase()}.png`} width='25' height='25' style={{alignSelf: 'center', paddingRight: '8px'}} />
            <p>{props.row.Name}</p>
        </div>
    )
}