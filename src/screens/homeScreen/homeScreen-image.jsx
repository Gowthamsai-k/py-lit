
function ImageContainer() {
  return (
    <>

    <div style ={{textAlign : "center", paddingTop : "120px"  ,margin: "20px", borderRadius:"40px" , background: "rgba(232, 229, 229, 1)" , color : "rgba(130, 98, 73, 1)"}}   
     >
      <div style = {{fontSize : "120px" , padding : "20px 0px"}}>PY-LIT</div>
      <p style = {{fontSize : "25px"}}>
       An intent-driven ML experimentation platform for teams
        </p>
      <br />
    </div>
     <br />

    {/* 2nd part  */}

    <div id = 'two-page' style = {{color : "black" , borderRadius : "40px" ,margin : "20px",   background: "rgba(221, 217, 217, 1)"}}>

    <div id = 'home' style  = {{ height : "100px"}} >
      Home Info
    </div>
     <div id = 'about'>
      about
    </div>

    </div>
     
  </>
  );
}

export default ImageContainer;
