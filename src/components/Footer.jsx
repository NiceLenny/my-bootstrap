import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
          <div className='col mb-3'>
            <a className=''>
              <img src="img/logoKu.jpg" className='bi me-2' width={150} />
            </a>
            <p>
              Роллы Кумихо - вкусно каждый день!
            </p>
          </div>
          <div className='col mb-4'>
              <h5>Описание</h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'> О нас</a>
                </li>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>Контакты</a> 
                </li>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'> Отзовы</a>
                </li>
              </ul>
             </div>
             <div className='col mb-4'>
              <h5>Описание</h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'> О нас</a>
                </li>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>Контакты</a> 
                </li>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'> Отзовы</a>
                </li>
              </ul>
             </div>
        </footer>
    </div>
  )
}

export default Footer