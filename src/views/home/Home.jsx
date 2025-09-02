import { Link } from 'react-router-dom';

const home = () => {
  return (
    //contenedor principal
    
    <div className=" d-flex flex-column" style ={{ width: "100%", height: "100%" }}>
  <div className=" container justify-content-center align-items-center" >
    <div className="row justify-content-center align-items-center">
      <div className="col-6 d-flex flex-column align-items-center justify-content-center p-2">
      <Link to =  "/mode">
      <img src= "https://www.mariowiki.com/images/9/94/Super_Mario_Party_Jamboree_Logo.png"
       style ={{width: "auto",maxwidth: "100%", height: "16rem"}} 
       alt="Mario Party Logo">   
       </img>
       </Link>
    </div>
    <div className="col-6 d-flex flex-column align-items-center justify-content-center p-2 ">
      <Link to =  "/">
      <img src= "https://mario.wiki.gallery/images/thumb/8/80/Mario_Party_Superstars_logo.png/800px-Mario_Party_Superstars_logo.png"
       style ={{width: "auto",maxwidth: "100%", height: "12rem"}} 
       alt="Mario Party Logo">
        </img>
        </Link>
    </div>
    <div className="col-6 d-flex flex-column align-items-center justify-content-center p-5" style ={{marginTop:"-3.9rem"}}>
      <Link to =  "/">
      <img src= "https://iconape.com/wp-content/png_logo_vector/super-mario-party-logo.png" 
      style ={{width: "auto",maxwidth: "100%", height: "12.5rem"}} 
      alt="Mario Party Logo">
      </img>
      </Link>
    </div>
    </div>
   
   
  </div>
</div>
  );
};

export default home;