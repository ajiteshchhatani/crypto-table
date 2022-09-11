import * as React from 'react';
import Star from './Star';
import { DataGrid } from '@mui/x-data-grid';
import data from './coins.json';
import './CryptoDataTable.css';
import CoinName from './CoinName';
import ColumnInfo from './ColumnInfo';
import CoinFluctuation from './CoinFluctuation';
import CoinChart from './CoinChart';
import ActionsMenu from './ActionsMenu';

const columns = [
    {
        field: 'star',
        headerName: '',
        width: 50,
        renderCell: Star,
        sortable: false
    },
    { field: 'id', headerName: '#', width: 50 },
    {
        field: 'Name',
        headerName: 'Name',
        renderCell: (params) => {
            return (
                <CoinName props={params} />
            )
        },
        width: 150
    },
    { field: 'Price', headerName: 'Price' },
    /* {field: '1hr', headerName: '1h%'}, */
    { 
        field: 'Percentage24H', 
        headerName: '24hr%',
        renderCell: (params) => {
            return(
                <CoinFluctuation props={params} />
            )
        },
        width: 100
     },
    { 
        field: 'Percentage7D', 
        headerName: '7d%',
        renderCell: (params) => {
            return(
                <CoinFluctuation props={params} />
            )
        },
        width: 100
    },
    { 
        field: 'MarketCap',
        headerName: 'Market Cap', 
        renderHeader: (params) => {
            return (
                <ColumnInfo props={params} />
            )
        } , 
        width: 175 
    },
    { 
        field: 'Volume24H', 
        headerName: 'Volume(24h)',
        renderHeader: (params) => {
            return (
                <ColumnInfo props={params} />
            )
        } , 
        width: 175 
    },
    { 
        field: 'CirculatingSupply', 
        headerName: 'Circulating Supply',
        renderHeader: (params) => {
            return (
                <ColumnInfo props={params} />
            )
        } , 
        width: 200 
    },
    { 
        field: 'Last7Days', 
        headerName: 'Last 7 Days',
        renderCell: (params) => {
            return(
                <CoinChart props={params} />
            )
        },
        width: 200,
        sortable: false
     },
    { field: 'menu', headerName: '', width: 50, renderCell: ActionsMenu, sortable: false },
]

const modifyCoinsDataForRows = data.map((coin, index) => ({
    id: index + 1,
    ...coin
}))

export default function CryptoDataTable() {
    const [pageSize, setPageSize] = React.useState(10);
    return (
        <div className='crypto_table_container' style={{ height: '100vh' }}>
            <DataGrid 
                columns={columns} 
                rows={modifyCoinsDataForRows}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10]} 
                disableColumnMenu={true} 
            />
        </div>
    )
}