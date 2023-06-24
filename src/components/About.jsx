import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className='lead mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quasi laboriosam id numquam cum repellendus sunt saepe
                corporis, dolores voluptate esse asperiores distinctio
                 expedita sequi vel dolorum dolorem accusantium nisi
                  tenetur harum velit. Ex incidunt dolorem ut?
                   Distinctio dolores adipisci labore nemo delectus
                    similique, maiores possimus nostrum! Dolorum 
                    explicabo enim quae magnam, impedit nulla nisi saepe
                     incidunt dolore odit! Suscipit laborum consequatur 
                     earum, unde soluta placeat autem ut harum, dicta
                      natus sed, esse assumenda ratione enim. Alias 
                      molestias sint sed obcaecati saepe, illo, nesciunt
                       voluptatem quae nemo ea fugiat esse aspernatur 
                       rerum amet, tempora autem
               voluptatibus nulla sequi optio consectetur deserunt?
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
            <div className='col-md-6 d-flex justify-content-center'>
              <img src="/assets/images/5.png" alt="About" height="400px" width="400px"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
