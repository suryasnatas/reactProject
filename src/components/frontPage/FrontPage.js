/**
 * @author Suryasnata Nayak
 */
import React from 'react';

/**
 * User defined Components
 * @Component Footer
 * @Component Header
 * @param Image
 * @css Frontpage.css
 */
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Image from '../../assets/marketplace.jpg';
import Image3 from '../../assets/marketplace2.jpg';
import Image4 from '../../assets/Technology-Trends-Impacting-Marketing-Analytics.jpg';

import '../../styles/FrontPage.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Frontpage extends React.Component {
  render() {

    return (
      <div>

        {/* Header Component */}
        <Header />

        {/* Body Contains only images*/}
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          dynamicHeight={true}
          useKeyboardArrows={true}
        >
          <div>
            <img src={Image} alt="" />
          </div>
          <div>
            <img src={Image3} alt="" />
          </div>
          <div>
            <img src={Image4} alt="" />
          </div>

        </Carousel>

        {/* Footer Component */}
        <Footer />

      </div>
    )
  }
}

export default Frontpage;