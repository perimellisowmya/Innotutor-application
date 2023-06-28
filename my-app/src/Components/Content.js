import React from 'react'
import { videodata, dataa } from './data'
import ReactPlayer from 'react-player'
import Extra from './Extra';
import './content.css';
import Nav from './Nav';

function Content() {
    return (
        <div>
            <Nav/>
            <h2 style={{ color: "black" }}><center></center></h2>
            {dataa?.[0]?.videos.map((val) => {
                
            
                return (  
                     
                        <div className='whole'>
                                <div className='left'>
                                   <div className='videocontainer'> <ReactPlayer controls url={val.videoUrl}  /></div>
                                   <h3>Title of video</h3>
                                    <p id='ppp'>{val.description}</p>
                                </div>
                        

                                <div className='right'>
                                    <Extra/>
                                </div>

                        </div>
                                
                    
                )
            }

            )}

        </div>
        
    )
    
}
export default Content
