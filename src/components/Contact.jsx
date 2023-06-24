import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="continer mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have some question ?</h1>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img src="/assets/images/5.png" alt="contact us" height="400px" width=
            "400px" />
          </div>

          <div className="col-md-6">
            <form>
            <div class="mb-3">
             
             <label for="exampleFormControlInput1" class="form-label">Full Name</label>
             <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Smith" />
           </div>
              <div class="mb-3">
             
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact
