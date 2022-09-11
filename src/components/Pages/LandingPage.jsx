import About from './About';
import Services from './Services';
import Staffing from './Staffing';
import Careers from './Careers';
import Contact from './Contact';

const LandingPage = ({ selectedTab }) => {

    const renderTab = (selectedPage) => {
        let returnElement = null;
        switch (selectedPage) {
            case 'about':
                returnElement = (<About />)
                break;
            case 'services':
                returnElement = (<Services />)
                break;
            case 'staffing':
                returnElement = (<Staffing />)
                break;
            case 'careers':
                returnElement = (<Careers />)
                break;
            case 'contact':
                returnElement = (<Contact />)
                break;
            default:
                break;
        }
        return returnElement

    }
    return (
        <div className='page-container'>
            {renderTab(selectedTab)}
        </div>

    )
}

export default LandingPage;