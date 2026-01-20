import Card from '@mui/material/Card';
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function ImageContainer() {
  return (
    <>

    <div style ={{textAlign : "center", paddingTop : "120px"  ,margin: "20px", borderRadius:"40px" , background: "rgba(0, 0, 0, 1)" , color : "rgba(255, 255, 255, 1)"}}   
     >
      <div style = {{fontSize : "120px" , padding : "20px 0px" , fontFamily: '"Gravitas One", serif' , fontWeight : "100px"}}>PY-LIT</div>
      <p style = {{fontSize : "25px"}}>
       An intent-driven ML experimentation platform for teams
        </p>
      <br />
    </div>
     <br />

    {/* 2nd part  */}

   <div style = {{background : "rgb(214, 214, 216)" , margin : "20px" , borderRadius  : "40px"}}>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            margin : "20px",
            flexWrap: "wrap",
          }}
        >
          {/* Home Card */}
          <Card
            id="home"
            sx={{
              justifyContent : "center" , 
              width: "30%",
              height : "200px",
              borderRadius: "40px",
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                transform: "translateY(-6px)",
              },
            }}
          >
            <CardContent>
              <Typography variant="body1" color="black">
                PY-LIT helps teams define ML experiments using intent instead
              </Typography>
            </CardContent>
          </Card>

         
        </Box>
        </div>

    

     
  </>
  );
}

export default ImageContainer;
