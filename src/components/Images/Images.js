import React from 'react'
import './Images.module.scss'

const Images = props => {
    return (
        <div className='container'>
          {
            props.images.map(img => {
              return <div className={'img__container'} key={img.id} >
                <div className='inner__img'>
                  <img className={'img'} src={img.largeImageURL}></img>
                  <p>{img.tags}</p>
                  <a target='_blank' className='img__link' href={img.pageURL}>Link to Photo</a>
                </div>
              </div>
            })
          }
        </div>
    )
}

export default Images
