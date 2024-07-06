import React from "react";
import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { pageval } from "../contslicer/slicer";
import { HiBars3 } from "react-icons/hi2";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { AiOutlineLeft } from "react-icons/ai";

function Home()
{

    const dispecher = useDispatch();
    const [data , setdata] = useState(
        [
            {
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICA5MC41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352941-qdafpgypxr-portrait.jpg", 
                name: "Kalki 2898 AD", 
                type: "Action/Sci-Fi/Thriller"
            },

            {
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA5LjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00395950-tgqqwnxmbj-portrait.jpg", 
                name: "Jhamkudi", 
                type: "Comedy/Horror/Mystery"
            },

            {
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny41LzEwICAxMEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00397769-vmhrznebfq-portrait.jpg", 
                name: "Trisha on the Rocks", 
                type: "Comedy/Drama/Romantic"
            },

            {
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA3NC44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398936-rmwsksawqv-portrait.jpg", 
                name: "Munjya", 
                type: "Comedy/Horror"
            },

            {
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICA0OC41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00363650-tlyjxxawja-portrait.jpg", 
                name: "Chandu Champion", 
                type: "Biography/Drama/Sports"
            },

            {
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAyMi40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384010-fchlbmjvwh-portrait.jpg", 
                name: "Inside Out 2", 
                type: "Animation/Comedy/Drama"
            },

            {
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTIuMksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386901-tdfghjbwms-portrait.jpg", 
                name: "Despicable Me 4", 
                type: "Action/Adventure/Animation/Comedy"
            },
            
            {
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni40LzEwICAzLjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00390813-gexewexzur-portrait.jpg", 
                name: "A Quiet Place - Day One", 
                type: "Horror/Thriller"
            },

            {
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICAyMC4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370091-lgsqbqcnrm-portrait.jpg", 
                name: "Jatt & Juliet 3", 
                type: "Comedy/Romantic"
            },

            {
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS43LzEwICA1OTIgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00402946-marwsgyzcx-portrait.jpg", 
                name: "Maharaja (Hindi)", 
                type: "Action/Drama"
            },

        ]
    )
    

    return(
        <>
            <div className="book_my_movie">
                <section className="slider" style={{padding: "12px 0px", backgroundColor: "#EBEBEB"}}>
                    <OwlCarousel items={1.2} margin={10} center={true} loop={true} mouseDrag={false} autoplay={true} autoplayTimeout={2500} nav={true}>
                        <div className="img_1 item">
                            <img src={require("../assets/1.avif")} alt=""  style={{borderRadius: "10px"}} />
                        </div>
                        <div className="img_2 item">
                            <img src={require("../assets/poster_2.avif")} alt=""  style={{borderRadius: "10px"}} />
                        </div>
                    </OwlCarousel>
                </section>
                <section className="movie py-[32px]" style={{backgroundColor: "#F5F5F5"}}>
                    <div className="container max-w-[1240px] mx-auto ">
                        <div className="con">
                            <div className="heading mb-[7px]">
                                <h2 className="text-[24px] font-bold">Recommended Movies</h2>
                            </div>
                            <div className="row flex justify-between max-w-[1240px] mx-auto">
                                <OwlCarousel items={5} margin={30} slideBy={5}  mouseDrag={false} nav={true}>
                                    {
                                        data.map((v , i) => {
                                            return(
                                                <Link to={"/movie"} onClick={() => dispecher(pageval(i))}>
                                                    <div className="box_1">
                                                        <div className="sub_box_1">
                                                            <div className="image">
                                                                <img src={v.image} alt="" height={"380px"} style={{borderRadius: "8px" , objectFit: "cover"}} width={"222px"} />
                                                            </div>
                                                            <div className="info mt-[8px] ">
                                                                <h4 className={"font-bold text-[18px] mb-[4px]"}>{v.name}</h4>
                                                                <span className={"text-[#666666]"}>{v.type}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </OwlCarousel>  
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;