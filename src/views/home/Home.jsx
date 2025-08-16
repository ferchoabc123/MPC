const home = () => {
  return (
    //contenedor principal y centrado
    <div className="container" style={{height:"85vh", marginTop:"-2rem", marginBottom:"-4rem"}}>
  <div className="row justify-content-center align-items-center h-100">
    <div className="col-6 d-flex flex-column align-items-center justify-content-center p-2">
      <a href= ""><img src= "https://www.mariowiki.com/images/9/94/Super_Mario_Party_Jamboree_Logo.png" style ={{width: "15rem", height: "14rem"}} alt="Mario Party Logo"></img></a>
    </div>
    <div className="col-6 d-flex flex-column align-items-center justify-content-center p-2 ">
      <a href= ""><img src= "https://mario.wiki.gallery/images/thumb/8/80/Mario_Party_Superstars_logo.png/800px-Mario_Party_Superstars_logo.png" style ={{width: "15rem", height: "10rem"}} alt="Mario Party Logo"></img></a>
    </div>
    <div className="col-6 d-flex flex-column align-items-center justify-content-center p-5" style ={{marginTop:"-4rem"}}>
      <a href= ""><img src= "https://iconape.com/wp-content/png_logo_vector/super-mario-party-logo.png" style ={{width: "13rem", height: "12rem"}} alt="Mario Party Logo"></img></a>
    </div>
   
  </div>
</div>
  );
};

export default home;