import * as React from 'react';
import Popover from '@mui/material/Popover';
import InfoIcon from '@mui/icons-material/Info';

export default function ColumnInfo({props}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handlePopoverOpen(event) {
        setAnchorEl(event.currentTarget)
    }

    function handlePopoverClose() {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl);
    return(
        <div style={{display: 'flex'}}>
            <p>{props.colDef.headerName}</p>
            <InfoIcon onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} style={{alignSelf: 'center', paddingLeft: '8px'}} />
            <Popover
                sx={{
                    pointerEvents: 'none',
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus

            >
                <p style={{width: '200px', padding: '4px'}}>Some dummy text about {props.colDef.headerName}</p>
            </Popover>
        </div>
    )
}