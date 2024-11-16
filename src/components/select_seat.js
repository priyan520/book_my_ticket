import { createElement, useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, json } from "react-router-dom";
import { getbillval } from "../contslicer/slicer";

var a = 0, index;
function Selct_seat() {
    // localStorage.removeItem("seat_data");
    const i = localStorage.getItem("movie_indentyfier_index");
    let data = localStorage.getItem("seat_data" + i);
    let usedata = JSON.parse(data);


    if (usedata == null) {
        usedata = [];

    }


    const [seat_bg_color, setseat_bg_color] = useState([]);
    const [text_color, settext_color] = useState([]);
    const [book_seat_data, setbook_seat_data] = useState([...usedata]);
    const [bill, setbill] = useState(0);
    const dispecher = useDispatch();
    const [avil, setavil] = useState([]);

    a = book_seat_data.length;

    useEffect(() => {
        for (var i = 0; i < usedata.length; i++) {
            const temp = seat_bg_color;
            temp[usedata[i]] = "gray";
            setseat_bg_color([...temp]);

            const avil_temp = avil;
            avil_temp[usedata[i]] = true;
            setavil([...avil_temp]);
        }
    }, [])

    function book_my_seat(seat_no) {
        if (seat_bg_color[seat_no] == "transparent" || seat_bg_color[seat_no] == undefined) {
            const temp = [...seat_bg_color];
            temp[seat_no] = "#1ea83c";
            setseat_bg_color([...temp]);

            const temp_text_colot = [...text_color];
            temp_text_colot[seat_no] = "white";
            settext_color([...temp_text_colot]);

            const temp_for_data = [...book_seat_data];
            temp_for_data[a] = seat_no;
            setbook_seat_data([...temp_for_data]);

            if (seat_no <= 10) {
                setbill(bill + 100);
            }
            else if (seat_no > 10 && seat_no <= 20) {
                setbill(bill + 200);
            }
            else if (seat_no > 20) {
                setbill(bill + 300)
            }

            a++;
        }
        else if (seat_bg_color[seat_no] == "#1ea83c") {
            const temp_color_del = [...seat_bg_color];
            temp_color_del[seat_no] = "transparent";
            setseat_bg_color([...temp_color_del]);

            const temp_text_colot = [...text_color];
            temp_text_colot[seat_no] = "black";
            settext_color([...temp_text_colot]);

            index = book_seat_data.indexOf(seat_no);
            const temp_for_data_del = [...book_seat_data];
            temp_for_data_del.splice(index, 1);
            setbook_seat_data([...temp_for_data_del]);

            a--;

            if (seat_no <= 10) {
                setbill(bill - 100);
            }
            else if (seat_no > 10 && seat_no <= 20) {
                setbill(bill - 200);
            }
            else if (seat_no > 20) {
                setbill(bill - 300)
            }
        }
    }

    const send_data = () => {
        dispecher(getbillval(bill));
        var data_holder = JSON.stringify([...book_seat_data]);
        localStorage.setItem("seat_data" + i, data_holder);
        localStorage.setItem("currnt_bill" , bill)
    }

    return (
        <>
            <div className="box">
                <div className="row_1 flex justify-center items-center">
                    <div className="mr-6 w-1/4" style={{ color: "#1ea83c" }}>A 100</div>
                    <button className="button_1 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[1], color: text_color[1] }} onClick={() => book_my_seat(1)} disabled={avil[1]}>1</button>
                    <button className="button_2 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[2], color: text_color[2] }} onClick={() => book_my_seat(2)} disabled={avil[2]}>2</button>
                    <button className="button_3 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[3], color: text_color[3] }} onClick={() => book_my_seat(3)} disabled={avil[3]}>3</button>
                    <button className="button_4 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[4], color: text_color[4] }} onClick={() => book_my_seat(4)} disabled={avil[4]}>4</button>
                    <button className="button_5 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[5], color: text_color[5] }} onClick={() => book_my_seat(5)} disabled={avil[5]}>5</button>
                    <button className="button_6 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[6], color: text_color[6] }} onClick={() => book_my_seat(6)} disabled={avil[6]}>6</button>
                    <button className="button_7 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[7], color: text_color[7] }} onClick={() => book_my_seat(7)} disabled={avil[7]}>7</button>
                    <button className="button_8 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[8], color: text_color[8] }} onClick={() => book_my_seat(8)} disabled={avil[8]}>8</button>
                    <button className="button_9 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[9], color: text_color[9] }} onClick={() => book_my_seat(9)} disabled={avil[9]}>9</button>
                    <button className="button_10 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[10], color: text_color[10] }} onClick={() => book_my_seat(10)} disabled={avil[10]}>10</button>
                </div>
                <div className="row_2 flex justify-center items-center">
                    <div className="mr-6 w-1/4" style={{ color: "#1ea83c" }}>B 200</div>
                    <button className="button_11 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[11], color: text_color[11] }} onClick={() => book_my_seat(11)} disabled={avil[11]}>11</button>
                    <button className="button_12 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[12], color: text_color[12] }} onClick={() => book_my_seat(12)} disabled={avil[12]}>12</button>
                    <button className="button_13 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[13], color: text_color[13] }} onClick={() => book_my_seat(13)} disabled={avil[13]}>13</button>
                    <button className="button_14 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[14], color: text_color[14] }} onClick={() => book_my_seat(14)} disabled={avil[14]}>14</button>
                    <button className="button_15 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[15], color: text_color[15] }} onClick={() => book_my_seat(15)} disabled={avil[15]}>15</button>
                    <button className="button_16 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[16], color: text_color[16] }} onClick={() => book_my_seat(16)} disabled={avil[16]}>16</button>
                    <button className="button_17 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[17], color: text_color[17] }} onClick={() => book_my_seat(17)} disabled={avil[17]}>17</button>
                    <button className="button_18 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[18], color: text_color[18] }} onClick={() => book_my_seat(18)} disabled={avil[18]}>18</button>
                    <button className="button_19 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[19], color: text_color[19] }} onClick={() => book_my_seat(19)} disabled={avil[19]}>19</button>
                    <button className="button_20 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[20], color: text_color[20] }} onClick={() => book_my_seat(20)} disabled={avil[20]}>20</button>
                </div>
                <div className="row_3 flex justify-center items-center">
                    <div className="mr-6 w-1/4" style={{ color: "#1ea83c" }}>C 300</div>
                    <button className="button_21  w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[21], color: text_color[21] }} onClick={() => book_my_seat(21)} disabled={avil[21]}>21</button>
                    <button className="button_22 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[22], color: text_color[22] }} onClick={() => book_my_seat(22)} disabled={avil[22]}>22</button>
                    <button className="button_23 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[23], color: text_color[23] }} onClick={() => book_my_seat(23)} disabled={avil[23]}>23</button>
                    <button className="button_24 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[24], color: text_color[24] }} onClick={() => book_my_seat(24)} disabled={avil[24]}>24</button>
                    <button className="button_25 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[25], color: text_color[25] }} onClick={() => book_my_seat(25)} disabled={avil[25]}>25</button>
                    <button className="button_26 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[26], color: text_color[26] }} onClick={() => book_my_seat(26)} disabled={avil[26]}>26</button>
                    <button className="button_27 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[27], color: text_color[27] }} onClick={() => book_my_seat(27)} disabled={avil[27]}>27</button>
                    <button className="button_28 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[28], color: text_color[28] }} onClick={() => book_my_seat(28)} disabled={avil[28]}>28</button>
                    <button className="button_29 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[29], color: text_color[29] }} onClick={() => book_my_seat(29)} disabled={avil[29]}>29</button>
                    <button className="button_30 w-9 h-9 m-2 border-2 text-black hover:!bg-[#1ea83c] hover:!text-white" style={{ backgroundColor: seat_bg_color[30], color: text_color[30] }} onClick={() => book_my_seat(30)} disabled={avil[30]}>30</button>
                </div>
            </div>
            <div className="bttuon" style={{ textAlign: "center" }}>
                <Link to={"/finle"}>
                    <button className="w-1/4" style={{ padding: "10px 50px", border: "4px solid black", marginTop: "50px", fontSize: "24px", fontWeight: "700" }} onClick={send_data}>pay rs {bill}</button>
                </Link>
            </div>
        </>
    )
}

export default Selct_seat; 