import React, { useState } from 'react'
import { useRef } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { fbContext } from '../context/feedback';

const Feedback = () => {
    const navigate = useNavigate();
    const { createFb } = useContext(fbContext);
    const ref = useRef()

const [display, setdisplay] = useState(false)
    const [data, setdata] = useState({
        rating : 0,
        comment: 'asdf'
    })
    const handlerating = (value) => {
        setdata({ 
            ...data,
            rating: value
        })
        setdisplay(true)
        console.log(data.rating)
    }
    const onChange = (e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        createFb( data.rating , data.comment)
        
    }
    const handleNavigate = () => {
        navigate('/')
        // ref.current.click()
    }
  return (
    <div className='container' style={{ marginTop: '5%', marginLeft: '10%'}}>
      <header className='mb-5'>
        <h2>User rating's Feedback form</h2>
      </header>
      <main>
        <div className='mb-5' style={{ fontSize:'x-large'}}>
            <button type='btn mx-3' onClick={() => handlerating(1)}>
                <i className="fa-thin fa-star mx-3"></i>
                      ⭐
            </button>
            <button type='btn mx-3' onClick={() => handlerating(2)}>
                <i className="fa-thin fa-star mx-3"></i>
                      ⭐
            </button>
            <button type='btn mx-3' onClick={() => handlerating(3)}>
                <i className="fa-thin fa-star mx-3"></i>
                      ⭐
            </button>
            <button type='btn mx-3' onClick={() => handlerating(4)}>
                <i className="fa-thin fa-star mx-3"></i>
                      ⭐
            </button>
            <button type='btn mx-3' onClick={() => handlerating(5)}>
                <i className="fa-thin fa-star mx-3"></i>
                      ⭐
            </button>

            { (display) && <p>
                      <b>Rating: </b><span>{data.rating}</span>
                </p>}
           
        </div>
        <div className="row">
            <div className="col-6">
                <textarea onChange={onChange} name='comment' value={data.comment} className='form-control' placeholder='Please describe your experience here' rows={5} cols={5} required minLength={3} />
            </div>
        </div>
        <div className='mt-3'>
                  <button ref={ref} className='btn btn-secondary w-5 ' style={{ marginLeft: '25%' }} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleSubmit} >
                Submit
            </button>
        </div>
      </main>
{/* modal */}
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content" >
                     
                      <div class="modal-body text-center">
                         Thank you for submitting the feedback
                      </div>
                        <div className="row">
                            <button className='btn btn-dark w-50 m-auto' onClick={() => handleNavigate} >
                                Go to Rating list page
                            </button>

                        </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Feedback
