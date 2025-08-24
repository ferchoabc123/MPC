import {Link} from "react-router-dom";


const count_Est = () => {

    return (
       <div className ="align-items-start border border-primary border-2" style = {{width: "100%", height: "100%"}}>
            <div className = "container border border-primary border-2  p-5 d-flex justify-content-center align-items-center">
            <div className = " d-flex flex-column justify-content-start align-items-center border border-primary border-2 " style = {{ width: "40%", height: "100%"}} >
            <div className= "border-bottom border-primary border-2">
            <h1> Elige el Modo</h1>
            </div>
            <div className=" d-flex flex-column justify-content-center align-items-center gap-5 mt-5 " style = {{marginBottom: "7.5rem"}}>
            <Link to = "/"><button className=" p-3 pe-5 ps-5">Estandar</button></Link>
            <Link to = "/"><button className="" style ={{padding: "1rem 4rem 1rem 4rem"}}>Pro</button></Link>
            </div>
            </div>
            </div>
        </div>
    )
}

export default count_Est;