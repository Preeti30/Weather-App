import React, { useEffect, useState } from "react"
import "./css/style.css"
const TempApp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai")
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=df1f0e66828c16ba2ffd32a078d3612a`
            const response = await fetch(url)
            const response_in_Json = await response.json()
            console.log(response_in_Json)
            setCity(response_in_Json.main)
        }

        fetchApi()

    }, [search])



    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className="inputField"
                        onChange={
                            (event) => {
                                setSearch(event.target.value)
                            }
                        }
                    />
                </div>
                {
                    !city ? (<p className="errorMsg">No data found</p>) : (
                        <div>
                            <div className="info">
                                <h2 className="location">
                                    <i className="fas fa-street-view"></i>{search}
                                </h2>
                                <h1 className="temp">{city.temp}</h1>
                                <h3 className="tempmin_max">Min :{city.temp_min} | Max:{city.temp_max}</h3>
                            </div>
                        </div>
                    )
                }


                {/* <div className="wave -one">  </div>
                <div className="wave -two">  </div>
                <div className="wave -three">  </div> */}
            </div>
        </>
    )
}
export default TempApp