import {Link} from "react-router-dom";


const mode = () => {
    return (
        <div className ="align-items-start" style = {{width: "100%", height: "100%"}}>
            <div className = "container p-5 d-flex justify-content-center align-items-center">
                <div className="mt-4 mb-4"style ={{width: "25%",backgroundColor: "rgba(0, 0, 0, 0.65)", border: "2.4rem, solid,transparent",borderImage: "url('./src/assets/border.png') 130 fill round", borderRadius: "4rem" }}>
                    <div>
                        <div className=" d-flex flex-column justify-content-center align-items-center gap-5 mt-5 " style = {{marginBottom: "4.4rem"}}>
                            <Link to = "/"><button className=" p-3 pe-5 ps-5">Estandar</button></Link>
                            <Link to = "/CountEst"><button className="" style ={{padding: "1rem 4rem 1rem 4rem"}}>Pro</button></Link>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    )

}
export default mode;
