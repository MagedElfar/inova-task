import React from 'react';
import style from './Card.module.css'


const Map = ({item , updateCrod , setFilleterFlag}) => {
    function onClick(lat , lng){
        updateCrod(lat , lng)
        setFilleterFlag(false)
    }


    return (
        <div className= {`d-flex align-items-center ${style.card}`}>
            <div className={`col-1 d-flex align-items-center justify-content-center ${style.img}`}>
                <img className='img img-fluid' src="/images/map-icon.svg" />
            </div>
            <div className={`col-9 ${style.info}`}>
                <h4>{item.title}</h4>
                {item?.address ? <p>{item.address}</p> : null}
                {item?.working_hours ? 
                    item.working_hours.split(",").map((item , index) => <p key={index}>{item}</p>)
                : null}
                {item?.phone ? 
                    <p>
                        {item.phone}
                    </p> 
                : 
                    null}
            </div>
            <div className={`col-2 ${style.dir}`}>
                <button className='btn' title='go' onClick={() => onClick(+item.lat, +item.long)}>
                    <i className="fa-solid fa-diamond-turn-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Map