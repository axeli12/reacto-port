import React, { useState } from "react";
import Header from './componets/header';
import Projects from './componets/projects';
import About from "./componets/about";
import Resume from './componets/resume';
import Contact from './componets/contact';
import Footer from './componets/footer';

function App() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Projects') {
            return <Projects />
        }
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        return <Contact />
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return(
        <>
            <div>
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
                <div>
                    <div>
                        <main>
                            {renderPage()}
                        </main>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App;