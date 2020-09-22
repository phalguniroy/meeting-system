import React, {useState} from 'react'

export const Schedule = () => {

    const getDate=(x=0)=>{
    let dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + x);
    let month = dateObj.getUTCMonth() + 1; 
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName = days[dateObj.getDay()];
    return {
        date : day+"-"+ month +"-"+ year,
        day: dayName,
        pureDate: dateObj
    }
    }

    let timeList=(hr, mn)=>{
        let hour =parseInt(hr);
        let minute = parseInt(mn)
        return {
            time: hour+":"+minute,
            status: 'vacant',
            timeInminutes: (hour * 60) + minute
        }
    }

    console.log(timeList(9,18))

    const [fourDays, setFourDays]= useState({
         first: getDate(0), 
         second: getDate(1), 
         third: getDate(2), 
         fourth: getDate(3),
         fifth: getDate(4)
        })

    


    return (
        <div>
        <div className="flex-container mt-4">
        <button type="button" className=" m-2 btn btn-primary">{fourDays.first.date} <br /> {fourDays.first.day}</button>
        <button type="button" className=" m-2 btn btn-primary">{fourDays.second.date} <br /> {fourDays.second.day}</button>
        <button type="button" className=" m-2 btn btn-primary">{fourDays.third.date} <br /> {fourDays.third.day}</button>
        <button type="button" className=" m-2 btn btn-primary">{fourDays.fourth.date} <br /> {fourDays.fourth.day}</button>
        <button type="button" className=" m-2 btn btn-primary">{fourDays.fifth.date} <br /> {fourDays.fifth.day}</button>
        </div>
        <div className="flex-container mt-5">
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        </div>
        <div className="flex-container mt-3">
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        </div>
        <div className="flex-container mt-3">
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        </div>
        <div className="flex-container mt-3">
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        <button type="button" class="btn btn-secondary mr-3 ml-3">7:00</button>
        </div>

        </div>
    )
}
