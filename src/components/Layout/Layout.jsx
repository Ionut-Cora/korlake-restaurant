import React from 'react';
import Top from '../Top/Top';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout(props) {
    return(
        <div>
            <Top />
            <Header />
                { props.children }
            <Footer />
        </div>
    )
}

export default Layout;