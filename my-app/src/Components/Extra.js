import React from 'react'
import { videodata, dataa } from './data'
import ReactPlayer from 'react-player'

function Extra() {
    return (
<div style={{ paddingTop: "20px" }}>

    {videodata?.[0]?.vv.map((val) => {
            
        return (
        <div style={{ paddingBottom: "20px" }}>
            
            <ReactPlayer  url={val.video}  width="350"  padding="20px" controls/>
            

        </div>
        )
    }

    )}
</div>
)}

export default Extra
