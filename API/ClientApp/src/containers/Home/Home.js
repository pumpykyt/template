import React from "react"
import './Home.css'
import reactimage from './../../assets/react.png'
import netcoreimage from './../../assets/netcore.png'
import mobximage from './../../assets/mobx.png'
import Counter from "../../components/Counter/Counter";

const Home = () => {
    return(
        <div className="home">
            <div className="left">
                <h1>.NET 5 / React / MobX template</h1>
                <Counter/>
            </div>
            <div className="right">
                <img className="netcore-image" alt="" src={netcoreimage}/>
                <img className="react-image" alt="" src={reactimage}/>
                <img className="mobx-image" alt="" src={mobximage}/>
            </div>
        </div>
    )
}

export default Home