import React, { useEffect } from 'react';
import * as projectAction from '../../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SplashNav from './SplashNav';

import './SplashPageComponent.css'


export default function SplashPageComponent() {
    const dispatch = useDispatch()
    const allProjects = useSelector(state => Object.values(state.project))

    useEffect(() => {
        dispatch(projectAction.getRandomProjects());
        return () => {
            dispatch(projectAction.clear_project());
        }
    }, [dispatch])



    return (
        <div className="splash_outmost_container">
            <div className="splash-page main_container">
                <SplashNav />
                <div className="featuredProj_outmost_container">
                    <NavLink to={`/projects/${allProjects[0]?.id}/comments`}>
                        <div key={0} className="featuredProj_inner_container">
                            <li className="featuredProject_label featureItem" > Featured Project </li>
                            <img className="featuredProject_img featureItem" src={allProjects[0]?.image_src ? allProjects[0]?.image_src : allProjects[0]?.image_src} alt=""></img>
                            <p className="featuredProject_title featureItem">{allProjects[0]?.title}</p>
                            <p className="featuredProject_subTitle featureItem">{allProjects[0]?.description}</p>
                            <p className="featuredProject_owner featureItem">By {allProjects[0]?.username} </p>
                        </div>
                    </NavLink>
                </div>
                <div className="recommended_outmost_container">
                    <div className="recommendedLabel_ctnr">
                        <p className="recommendedLabel">RECOMMENDED FOR YOU</p>
                    </div>
                    <div key={1} className="recommendedTwo_ctnr">
                        <NavLink to={`/projects/${allProjects[1]?.id}/comments`}>
                            <img className="recommended_img rec_item" src={allProjects[1]?.image_src ? allProjects[1]?.image_src : allProjects[1]?.image_src} alt="" />
                            <li className="recommended_title rec_item" >{allProjects[1]?.title}</li>
                            <li className="recommended_goal rec_item" >{((allProjects[1]?.current_funding / allProjects[1]?.pledge_goal) * 100).toFixed(2)}% Funded</li>
                            <li className="recommended_owner rec_item" >By {allProjects[1]?.username}</li>
                        </NavLink>
                        <div className="accessory_ctnr">
                            <div className="bookmark_ctnr">
                                <li className="bookmark_btn" >
                                    <img className="boomark_img" src='https://www.clipartmax.com/png/small/473-4737744_bookmark-png-clipart-bookmark-icon-instagram.png' alt="" />
                                </li>
                            </div>
                            <div className="like_ctnr">
                                <li className="like_btn" >
                                    <img className="like_img" src="https://aux2.iconspalace.com/uploads/thumbs-up-icon-256-1592257045.png" alt="" />
                                </li>
                            </div>
                            <div className="dislike_ctnr">
                                <li className="dislike_btn" >
                                    <img className="dislike_img" src="https://aux2.iconspalace.com/uploads/thumbs-down-icon-256-470311744.png" alt="" />
                                </li>
                            </div>
                        </div>
                    </div>
                    <div key={2} className="recommendedThree_ctnr">
                        <NavLink to={`/projects/${allProjects[2]?.id}/comments`}>
                            <img className="recommended_img rec_item" src={allProjects[2]?.image_src ? allProjects[2]?.image_src : allProjects[2]?.image_src} alt="" />
                            <li className="recommended_title rec_item" >{allProjects[2]?.title}</li>
                            <li className="recommended_goal rec_item" >{((allProjects[2]?.current_funding / allProjects[2]?.pledge_goal) * 100).toFixed(2)}% Funded</li>
                            <li className="recommended_owner rec_item" >By {allProjects[2]?.username}</li>
                        </NavLink>
                        <div className="accessory_ctnr">
                            <div className="bookmark_ctnr">
                                <li className="bookmark_btn" >
                                    <img className="boomark_img" src='https://www.clipartmax.com/png/small/473-4737744_bookmark-png-clipart-bookmark-icon-instagram.png' alt="" />
                                </li>
                            </div>
                            <div className="like_ctnr">
                                <li className="like_btn" >
                                    <img className="like_img" src="https://aux2.iconspalace.com/uploads/thumbs-up-icon-256-1592257045.png" alt="" />
                                </li>
                            </div>
                            <div className="dislike_ctnr">
                                <li className="dislike_btn" >
                                    <img className="dislike_img" src="https://aux2.iconspalace.com/uploads/thumbs-down-icon-256-470311744.png" alt="" />
                                </li>
                            </div>
                        </div>
                    </div>
                    <div key={3} className="recommendedFour_ctnr">
                        <NavLink to={`/projects/${allProjects[3]?.id}/comments`}>
                            <img className="recommended_img rec_item" src={allProjects[3]?.image_src ? allProjects[3]?.image_src : allProjects[3]?.image_src} alt="" />
                            <li className="recommended_title rec_item" >{allProjects[3]?.title}</li>
                            <li className="recommended_goal rec_item" >{((allProjects[3]?.current_funding / allProjects[3]?.pledge_goal) * 100).toFixed(2)}% Funded</li>
                            <li className="recommended_owner rec_item" >By {allProjects[3]?.username}</li>
                        </NavLink>
                        <div className="accessory_ctnr">
                            <div className="bookmark_ctnr">
                                <li className="bookmark_btn" >
                                    <img className="boomark_img" src='https://www.clipartmax.com/png/small/473-4737744_bookmark-png-clipart-bookmark-icon-instagram.png' alt="" />
                                </li>
                            </div>
                            <div className="like_ctnr">
                                <li className="like_btn" >
                                    <img className="like_img" src="https://aux2.iconspalace.com/uploads/thumbs-up-icon-256-1592257045.png" alt="" />
                                </li>
                            </div>
                            <div className="dislike_ctnr">
                                <li className="dislike_btn" >
                                    <img className="dislike_img" src="https://aux2.iconspalace.com/uploads/thumbs-down-icon-256-470311744.png" alt="" />
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
