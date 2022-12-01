import React , {useEffect , useState} from 'react';
import {Route, Routes , useLocation , Link, useParams} from "react-router-dom";

import Review from '../reveiw/Review';

import style from "./Gym.module.css"
import * as api from "./../../utliti/api"

const Gym = () => {
    const [gym , setGym] = useState(null)
    const {id} = useParams();

    const getGym = async () => {
        try {
            const {data} = await api.getGym(id);
            console.log(data)

            setGym(data.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getGym()
    } , [id])

    if(!gym) return null
    return(
        <div className= {style.gym}>
            <header>
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className={style.breadcrumb}>
                            <li className="breadcrumb-item">
                                <Link>EXPLORE GYM</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Al gym
                            </li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-md-2">
                            <img src={gym.logo_img_url} className="img-fluid rounded-img" />
                        </div>
                        <div className="col-md-10">
                            <div className="mb-3 row">
                                <div className={`${style.title} col`}>{gym.name}</div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <div className="row">
                                            <div className="mt-1 col-auto">
                                                <img src="/images/location.svg" className="img-fluid "/>
                                            </div>
                                            <div className="pl-1 col">
                                                <p className={` ${style.location}`} title="">
                                                   {gym.district}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 row">
                                        <Review rate={gym.rate} />
                                    </div>
                                </div>
                                <div className="text-right mt-4 col-6" style={{whiteSpace: "nowrap"}}>
                                    <button className={style.btn}>
                                        BECOME A MEMBER
                                    </button>
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
            </header>

            <div className='container'>
            <ul className={`${style.nav} nav nav-tabs gym-nav`}id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                        <Link to={`/gyms/${id}/info`}>Info</Link>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                        <Link to={`/gyms/${id}/Photo`}>Photo</Link>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">                        <Link to={`/gyms/${id}/Classes`}>Classes</Link>
                    </button>
                </li>
            </ul>
            </div>
         
            <div className={style.info}>
                <div className='container'>
                    <div className={`${style.info_block}`}>
                        <h2>Location</h2>
                        <p>
                            {gym.address}
                        </p>
                    </div>
                    <div className={`${style.info_block}`}>
                        <h2>Members should be</h2>
                        <p>
                            {gym.gender_type}
                        </p>
                    </div>
                    <div className={`${style.info_block}`}>
                        <h2>About Al gym</h2>
                        <p>
                            {gym.description}
                        </p>
                    </div>
                    <div className={`${style.info_block}`}>
                        <h2>Contact us</h2>
                        <a href={`mlito:${gym.email}`}>
                            {gym.email}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gym;