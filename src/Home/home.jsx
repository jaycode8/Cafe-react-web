import React from 'react';
import './home.css'
import Typical from 'react-typical'

class Jayhome extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='homePage' id='home'>
                <div className='container'>
                    <div className="body">
                        <h1>welcome</h1>
                        <h2>RayC Cafe</h2>
                        <h3>
                            <Typical
                                loop={Infinity}
                                steps={[
                                    'Fast Foods',
                                    2000,
                                    'Tasty ingredients',
                                    2000,
                                    'Cheap and Affordable Snacks !',
                                    2000,
                                    'All Available in our CAFE....',
                                    2000,
                                    'Come One Come All !!'
                                ]}
                            />
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Jayhome;