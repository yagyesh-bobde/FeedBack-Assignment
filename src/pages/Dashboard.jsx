import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { fbContext } from '../context/feedback'

const Dashboard = () => {
    const { getAllFb, feedBacks } = useContext(fbContext);
    const navigate = useNavigate()


    console.log(feedBacks)
    useEffect(() => {
      getAllFb()

    }, [])
    
    
  return (
    <>
        <div className="container new">
            <div className="row place-opp top mb-4">
                <div className='col-8'>
                      <h2>List of all user Rating feedback</h2>
                </div>
                
                  <button className='btn btn-default col-3' type='button' onClick={() => navigate('/feedback')}>
                    Create New Feedback
                </button>
            </div>
              {(feedBacks.length !== 0) &&<div className="row">
                  <table class="table">
                      <thead>
                          <tr >
                              <th scope="col">S.no</th>
                              <th scope="col">Rating ⭐</th>
                              <th scope="col">Comment</th>
                              <th scope="col">Created On</th>
                          </tr>
                      </thead>
                      <tbody>
                            {/* MAP Here */}
                            {feedBacks.map((fb) => {
                                let getDate = new Date(fb.date).toString().split(" ")
                                let date = getDate[1] + getDate[2];
                                let time = getDate[4]
                                return (
                                    <tr >
                                        <th scope="row">1</th>
                                        <td>{fb.rating}</td>
                                        <td>{fb.comment}</td>
                                        <td>
                                            <b>Date: </b>{date}<br/>
                                            <b>Time: </b>{time}
                                        </td>
                                    </tr>
                                )
                            })}
                              
                      </tbody>
                  </table>
            </div>}
              { (feedBacks.length === 0) && <img className='image_center' src='https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png' alt='empty list' ></img> }
        </div>
    </>
  )
}

export default Dashboard
