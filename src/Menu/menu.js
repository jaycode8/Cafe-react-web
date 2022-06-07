import React from 'react';
import './menu.css'


function MenuLists() {
    return (
        <div className='menuPage' id='menu'>
            <div className='container3'>
                <section className='sectionA'>
                    <hr/>
                    <h1>Discover <br/><span>MENU</span></h1>
                    <hr/>
                    <section className='jaymoh'>
                        <hr/>
                        <span className='star'>*</span>
                        <hr/>
                    </section>
                    <p className='menutext'>
                        For thoose with pure food indulgence in mind, come next door and state<br/> your desires
                        with our ever friendly chefs. <br/>We love lots of different food just like you.
                    </p>
                    <a href='#foods' className='btn'>View full Menu</a>
                </section>
                <section className='sectionB'>
                    <div className='gallery'>
                        <div className='img1'></div>
                        <div className='img2'></div>
                        <div className='img3'></div>
                        <div className='img4'></div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MenuLists;