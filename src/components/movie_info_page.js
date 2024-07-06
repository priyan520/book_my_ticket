import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import Caster from "../movie_info_page/about_caster";
import About_movie from "../movie_info_page/about_movie";
import Caster2 from "../movie_info_page/about_caster2";

function Movie_info_page() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  var value = useSelector((state) => state.counter.value);
  localStorage.setItem("movie_indentyfier_index" , value);

    
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  const [data , setdata] = useState(
      [
          {
              image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg", 
              name: "Kalki 2898 AD", 
              type: "Action/Sci-Fi/Thriller",
              temp: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kalki-2898-ad-et00352941-1718275859.jpg"
          },

          {
              image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jhamkudi-et00395950-1715072070.jpg", 
              name: "Jhamkudi", 
              type: "Comedy/Horror/Mystery",
              temp: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jhamkudi-et00395950-1715072070.jpg"
          },

          {
              image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/trisha-on-the-rocks-et00397769-1717822379.jpg", 
              name: "Trisha on the Rocks", 
              type: "Comedy/Drama/Romantic",
              temp: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/trisha-on-the-rocks-et00397769-1717822379.jpg"
          },

          {
              image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/munjya-et00398936-1716358299.jpg", 
              name: "Munjya", 
              type: "Comedy/Horror",
              temp: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/munjya-et00398936-1716358299.jpg"
          },

          {
              image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chandu-champion-et00363650-1715754023.jpg", 
              name: "Chandu Champion", 
              type: "Biography/Drama/Sports",
              temp: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/chandu-champion-et00363650-1715754023.jpg"
          },

          {
              image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/inside-out-2-et00384010-1705486755.jpg", 
              name: "Inside Out 2", 
              type: "Animation/Comedy/Drama",
              temp: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/inside-out-2-et00384010-1705486755.jpg"
          },

          {
              image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/despicable-me-4-et00386901-1715335701.jpg", 
              name: "Despicable Me 4", 
              type: "Action/Adventure/Animation/Comedy",
              temp: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/despicable-me-4-et00386901-1715335701.jpg"
          },
          
          {
              image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/a-quiet-place--day-one-et00390813-1716809747.jpg", 
              name: "A Quiet Place - Day One", 
              type: "Horror/Thriller",
              temp: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/a-quiet-place--day-one-et00390813-1716809747.jpg"
          },

          {
              image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jatt-and-juliet-3-et00370091-1717586765.jpg", 
              name: "Jatt & Juliet 3", 
              type: "Comedy/Romantic",
              temp: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jatt-and-juliet-3-et00370091-1717586765.jpg"
          },

          {
              image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/maharaja-hindi-et00402946-1719504211.jpg", 
              name: "Maharaja (Hindi)", 
              type: "Action/Drama",
              temp: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/maharaja-hindi-et00402946-1719504211.jpg"
          },

      ]
  )

  const imgcss = {
    backgroundImage: `linear-gradient(90deg, #1A1A1A 41.97%, #1A1A1A 38.3% , rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%) , url(${data[value].temp})`
  }

    return (
        <>  
            <section className="banner hidden lg:block" style={imgcss}>
              <div className="container">
                  <div className="py-8 con max-w-[1240px] mx-auto h-[100%] mx-auto flex justify-between">
                      <div className="flex items-center">
                        <div className="pr-[32px]">
                            <img src={data[value].image} height={"392px"} width={"261px"} style={{borderRadius: "16px 16px 0px 0px"}} />
                            <div className="bg-black text-white w-[261.5px] text-center p-2 pb-1 font-semibold text-[12px]"  style={{borderRadius: "0px 0px 16px 16px"}}>
                                <span className="">In cinemas</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-white font-bold text-[36px] mb-[16px]">{data[value].name}</h2> 

                            <button className="flex py-[12px] px-[24px] bg-[#333333] rounded-[8px] text-[white] items-center w-[446px] justify-between mb-[24px]">
                              <div className="flex">
                                <FaStar className="text-[#F07584] text-[22px]"></FaStar>
                                <span className="font-semibold text-[18px] mx-[8px]">10/10</span> (1000K Votes) {">"} 
                              </div>
                              <button className="py-[8px] px-[12px] bg-[white] text-[#1A1A1A] text-[18px] font-semibold rounded-[8px]">Rate now</button>
                            </button>

                            <div className="mb-[12px]">
                                <span className="py-[4px] px-[8px] bg-[#E5E5E5] rounded-[2px]">2D, 3D, IMAX 2D, IMAX 3D</span>
                            </div>

                            <div className="">
                                <span className="py-[4px] px-[8px] bg-[#E5E5E5] rounded-[2px]">Telugu, Kannada, Malayalam, Hindi, Tamil</span>
                            </div>

                            <div className="mt-[16px]">
                              <span className="text-[white]">3h 1m • Action, Sci-Fi, Thriller • UA • 27 Jun, 2024</span>
                            </div>
                            <br />
                            
                            <Link to="/select_seat"><button className="px-[65px] py-[12px] rounded-[8px] bg-[#F84464] text-white font-semibold" style={{ border: "1px solid black" }}>Book ticket</button></Link>
                        </div>
                      </div>
                      <div className="">
                        <button className="flex px-[20px] text-[32px] text-[white] py-[10px] items-center rounded-[4px] gap-[20px]" style={{backgroundColor: "rgba(34, 34, 34, 0.8)"}}><BsShare></BsShare> <span className="text-[16px] font-semibold">Share</span></button>
                      </div>
                    </div>
                </div>
            </section>
            <About_movie/>
            <Caster/>
            <Caster2/>
        </>

    )
}

export default Movie_info_page;

// {position.latitude && position.longitude ? (
//     <p>
//     Latitude: {position.latitude}, Longitude: {position.longitude}
//     </p>
// ) : (
//  <p>Loading...</p>)}