    import React, { useEffect } from 'react';

    const Home = () => {

        return (
            <>
            <div className="Home">  
            <div className="content"/>
            <section className="intro">  
                <div className="content">
                    <h1>You can create full screen sections without javascript.</h1>
                    <p>The height is set to 90vh, that means 90% height.</p>
                    </div>
                    </section>

                    <section>  
                    <div className="content">
                        <h1>Resize your browser and see how they adapt.</h1>
                    </div>
                    </section>

                    <section>  
                    <div className="content">
                        <h1>It's amazing and fast.</h1>
                    </div>
                    </section>

                    <section>  
                    <div className="content">
                        <h1>See the <a href="http://caniuse.com/#feat=viewport-units">browser support.</a></h1>
                    </div>
                </section>
            </div>
            </>
        )

    }


    export default Home;