/* eslint-disable no-unused-vars */
 
import Servicesheader from '../../Components/Servicesheader';
import Services from '../../Components/Services';
import Workflow from '../../Components/Workflow';
import Project from '../../Components/Project';
import Projectshome from '../../Components/Projectshome';
import Footer from '../../Components/Footer/Footer';

const ServicesPage = () => {

 
  return (
    <div>
      <Servicesheader />
      <Workflow />
      <Services />
      <Project />
      <Projectshome />
      <Footer />
       
       
    </div>
  );
}

export default ServicesPage;
