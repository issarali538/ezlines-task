import React from 'react';
import { Stack,Button } from 'react-bootstrap';

const BrowseBuyExport = function(){
    return(
        <>
            <Stack direction="vertical" className="browser-buy-export" gap={2}>
                <Button className="browser-buy-export__button d-md-inline d-none"> <i className="fa-solid fa-border-all me-2"></i> Browse Demos</Button>
                <Button className="browser-buy-export__button"> <i className="fa-solid fa-bag-shopping me-2"></i> Buy Now?</Button>
                <Button className="browser-buy-export__button d-md-inline d-none"> <i className="fa-solid fa-arrow-right-from-bracket me-2"></i> Export Section</Button>
            </Stack>
        </>
    )
}
export default BrowseBuyExport;