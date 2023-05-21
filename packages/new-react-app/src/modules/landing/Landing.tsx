import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



export const Landing = () => {

  const navigate = useNavigate();

  useEffect(() => {
    (() => {
      navigate('/home');
    })()
  }, [navigate])

  return (
    <div>laning</div>
  )
}
