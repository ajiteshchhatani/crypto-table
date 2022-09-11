import * as React from 'react';
import { Line, LineChart } from 'recharts'

export default function CoinChart({ props }) {
    const random = Math.random() < 0.5
    //const data = JSON.parse(props.row.Last7Days)
    return (
            <LineChart data={props.row.Last7Days} width={150} height={50}>
                {
                    random ? 
                        <Line type="monotone" dataKey="value" stroke='#F16895' strokeWidth={2}></Line> :
                        <Line type="monotone" dataKey="value" stroke='#00B8B0' strokeWidth={2}></Line>
                }
            </LineChart>
    )
}