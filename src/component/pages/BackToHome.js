import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


const BackToHome = () => {
    const history = useHistory()
    const BackToHome = () => {
        history.push('/')
    }
  return (
    <>
          <div className="row">
              <div className="col-md-12 text-center home_button">
                  <Button onClick={BackToHome} variant="contained">BACK TO HOME</Button>
              </div>
          </div>
    </>
  )
}

export default BackToHome
