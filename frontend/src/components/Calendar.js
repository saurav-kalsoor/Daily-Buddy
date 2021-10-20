import React, { useRef, useState } from 'react'
import { addCalendarEvent } from '../utils/GCalApi'
import links from '../utils/Constants';


export default function Calendar() {

    const ref = useRef(null)
    const [classData, setclassData] = useState({ subject: "", time: new Date(), link: ""})
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const handleClick = (e) => {

        try {
            var id_arr = e.target.id.split("-")
            var day = id_arr[0]
            var hour = id_arr[1]
            var date = new Date();
            var sub = e.target.innerText
            date.setDate(date.getDate() + (((parseInt(day) + 7 - date.getDay()) % 7) || 7));
            date.setHours(parseInt(hour));
            date.setMinutes(0);
            date.setSeconds(0);

            
            setclassData({
                subject: sub,
                link : links.get(sub),
                time: date
            })

        } catch (error) {
            console.log("Error is : " + error.message)
        }

        ref.current.click()
    }

    const addEvent = () =>{
        addCalendarEvent(classData.time, classData.link, classData.subject)
    }

    return (
        <div className="container">


            <button ref={ref} type="button" className="d-none btn btn-primary" data-toggle="modal" data-target="#exampleModal"></button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Set Remainder</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-left container">
                            <div> <strong>Class :</strong> {classData.subject}</div>
                            <div> <strong>Time :</strong> {classData.time.toLocaleDateString("en-US", options)}</div>
                            <div> <strong>Webex Link :</strong> {classData.link}</div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={addEvent}>Add Remainder</button>
                        </div>
                    </div>
                </div>
            </div>



            <h1 className="my-5">Class Scheduler</h1>
            <div className="table-responsive">
                <table className="table table-bordered text-center">
                    <thead>
                        <tr className="bg-light-gray">
                            <th className="text-uppercase">Time
                            </th>
                            <th className="text-uppercase">Monday</th>
                            <th className="text-uppercase">Tuesday</th>
                            <th className="text-uppercase">Wednesday</th>
                            <th className="text-uppercase">Thursday</th>
                            <th className="text-uppercase">Friday</th>
                            <th className="text-uppercase">Saturday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle">08:00am</td>
                            <td />
                            <td />
                            <td />
                            <td name="saurav">
                                <span id="4-8" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-sky" onClick={handleClick} >DAA</span>
                                <div className="margin-10px-top font-size14">8:00-9:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td />
                            <td />
                        </tr>

                        <tr>
                            <td className="align-middle">09:00am</td>
                            <td />
                            <td>
                                <span id="2-9" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-lightred" onClick={handleClick} >SAQT</span>
                                <div className="margin-10px-top font-size14">9:00-10:00</div>
                                <div className="font-size13 text-light-gray">Marta Healy</div>
                            </td>
                            <td />
                            <td>
                                <span id="4-9" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-sky" onClick={handleClick} >DAA</span>
                                <div className="margin-10px-top font-size14">9:00-10:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td>
                                <span id="5-9" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-green" onClick={handleClick} >TOC</span>
                                <div className="margin-10px-top font-size14">9:00-10:00</div>
                                <div className="font-size13 text-light-gray">Kate Alley</div>
                            </td>
                            <td />
                        </tr>

                        <tr>
                            <td className="align-middle">10:00am</td>
                            <td>
                                <span id="1-10" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-yellow" onClick={handleClick} >NFT</span>
                                <div className="margin-10px-top font-size14">10:00-11:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td>
                                <span id="2-10" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-pink" onClick={handleClick} >IWP</span>
                                <div className="margin-10px-top font-size14">10:00-11:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td>
                                <span id="3-10" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-purple" onClick={handleClick} >OS</span>
                                <div className="margin-10px-top font-size14">10:00-11:00</div>
                                <div className="font-size13 text-light-gray">Kate Alley</div>
                            </td>
                            <td>
                                <span id="4-10" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-lightred" onClick={handleClick} >SAQT</span>
                                <div className="margin-10px-top font-size14">10:00-11:00</div>
                                <div className="font-size13 text-light-gray">Marta Healy</div>
                            </td>
                            <td>
                                <span id="5-10" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-green" onClick={handleClick} >TOC</span>
                                <div className="margin-10px-top font-size14">10:00-11:00</div>
                                <div className="font-size13 text-light-gray">James Smith</div>
                            </td>
                            <td>
                                <span id="6-10" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-blue" onClick={handleClick} >SL</span>
                                <div className="margin-10px-top font-size14">10:00-11:00</div>
                                <div className="font-size13 text-light-gray">James Smith</div>
                            </td>
                        </tr>

                        <tr>
                            <td className="align-middle">11:00pm</td>
                            <td>
                                <span id="1-11" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-purple" onClick={handleClick} >OS</span>
                                <div className="margin-10px-top font-size14">11:00-12:00</div>
                                <div className="font-size13 text-light-gray">Kate Alley</div>
                            </td>
                            <td>
                                <span id="2-11" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-purple" onClick={handleClick} >OS</span>
                                <div className="margin-10px-top font-size14">11:00-12:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td>
                                <span id="3-11" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-yellow" onClick={handleClick} >NFT</span>
                                <div className="margin-10px-top font-size14">11:00-12:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td>
                                <span id="4-11" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-pink" onClick={handleClick} >IWP</span>
                                <div className="margin-10px-top font-size14">11:00-12:00</div>
                                <div className="font-size13 text-light-gray">Marta Healy</div>
                            </td>
                            <td>
                                <span id="5-11" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-pink" onClick={handleClick} >IWP</span>
                                <div className="margin-10px-top font-size14">11:00-12:00</div>
                                <div className="font-size13 text-light-gray">Marta Healy</div>
                            </td>
                            <td>
                                <span id="6-11" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-lightred" onClick={handleClick} >SAQT</span>
                                <div className="margin-10px-top font-size14">11:00-12:00</div>
                                <div className="font-size13 text-light-gray">Marta Healy</div>
                            </td>
                        </tr>

                        <tr>
                            <td className="align-middle">12:00pm</td>
                            <td />
                            <td>
                                <span id="2-12" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-yellow" onClick={handleClick} >NFT</span>
                                <div className="margin-10px-top font-size14">12:00-1:00</div>
                                <div className="font-size13 text-light-gray">Kate Alley</div>
                            </td>
                            <td />
                            <td>
                                <span id="4-12" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-purple" onClick={handleClick} >OS</span>
                                <div className="margin-10px-top font-size14">12:00-1:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td>
                                <span id="5-12" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-yellow" onClick={handleClick} >NFT</span>
                                <div className="margin-10px-top font-size14">12:00-1:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td />
                        </tr>

                        <tr>
                            <td className="align-middle">01:00pm</td>
                            <td>
                                <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                                <div className="margin-10px-top font-size14">1:00-2:00</div>
                            </td>
                            <td>
                                <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                                <div className="margin-10px-top font-size14">1:00-2:00</div>
                            </td>
                            <td>
                                <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                                <div className="margin-10px-top font-size14">1:00-2:00</div>
                            </td>
                            <td>
                                <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                                <div className="margin-10px-top font-size14">1:00-2:00</div>
                            </td>
                            <td>
                                <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                                <div className="margin-10px-top font-size14">1:00-2:00</div>
                            </td>
                            <td>
                                <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                                <div className="margin-10px-top font-size14">1:00-2:00</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle">02:00pm</td>
                            <td>
                                <span id="1-14" className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13 cursor-pointer" onClick={handleClick}>IWP</span>
                                <div className="margin-10px-top font-size14">2:00-3:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td>
                                <span id="2-14" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-lightgreen" onClick={handleClick} >CP(TNP)</span>
                                <div className="margin-10px-top font-size14">2:00-3:00</div>
                                <div className="font-size13 text-light-gray">Marta Healy</div>
                            </td>

                            <td>
                                <span id="3-14" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-lightred" onClick={handleClick} >SAQT</span>
                                <div className="margin-10px-top font-size14">2:00-3:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td />
                            <td>
                                <span id="5-14" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-sky" onClick={handleClick} >DAA</span>
                                <div className="margin-10px-top font-size14">2:00-3:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td>
                                <span id="6-14" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-sky" onClick={handleClick} >DAA</span>
                                <div className="margin-10px-top font-size14">2:00-3:00</div>
                                <div className="font-size13 text-light-gray">Kate Alley</div>
                            </td>
                        </tr>

                        <tr>
                            <td className="align-middle">03:00pm</td>
                            <td>
                                <span id="1-15" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13 cursor-pointer bg-green" onClick={handleClick} >TOC</span>
                                <div className="margin-10px-top font-size14">3:00-4:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td>
                                <span id="2-15" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-green" onClick={handleClick} >TOC</span>
                                <div className="margin-10px-top font-size14">3:00-4:00</div>
                                <div className="font-size13 text-light-gray">Marta Healy</div>
                            </td>
                            <td />
                            <td>
                                <span id="4-15" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-lightgreen" onClick={handleClick} >CP(TNP)</span>
                                <div className="margin-10px-top font-size14">3:00-4:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td>
                                <span id="5-15" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-sky" onClick={handleClick} >DAA</span>
                                <div className="margin-10px-top font-size14">3:00-4:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td>
                                <span id="6-15" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-sky" onClick={handleClick} >DAA</span>
                                <div className="margin-10px-top font-size14">3:00-4:00</div>
                                <div className="font-size13 text-light-gray">Kate Alley</div>
                            </td>
                        </tr>

                        <tr>
                            <td className="align-middle">04:00pm</td>
                            <td />

                            <td />

                            <td>
                                <span id="3-16" className="padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 cursor-pointer bg-sky" onClick={handleClick} >DAA</span>
                                <div className="margin-10px-top font-size14">4:00-5:00</div>
                                <div className="font-size13 text-light-gray">Ivana Wong</div>
                            </td>
                            <td />
                            <td />
                            <td />
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
