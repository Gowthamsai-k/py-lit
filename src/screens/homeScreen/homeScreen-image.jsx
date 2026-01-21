import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ImageContainer() {
  const cards = {
    background: "rgba(243, 242, 242, 1)",
    minWidth: 275 , display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: "1280px",
    maxHeight:"200px",
    // maxHeight : "1080px",
    alignItems: "center",
    margin: "40px auto",
    padding : "10px",
    borderRadius :"40px",
    
    gap: 3,
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: "0 12px 30px rgba(148, 147, 147, 0.6)",
      transform: "translateY(-2px)",
    },

  }

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
    <div style = {{justifyContent:"center", fontSize :"25px" , borderRadius : "40px" , margin: "20px" , background: "rgba(252, 252, 252, 1)", height :"200px" ,display:"flex" , alignItems:"center" }}>

      <p style ={{ fontSize:30}}>Stop writing training code. Start experimenting!!</p>
      <br />
    
     
    </div>
  
    <Box style ={{display:"flex" , background:"rgb(255 , 255 , 255)" , borderRadius :"40px" , margin : "20px " , height : "400px"}}>

  <Card sx = {cards}>
    <CardContent>
      <Typography sx={{ fontSize: 24 }}>Step 1 : Define Your Intent</Typography>
      <Typography variant="body2" sx = {{fontSize : 14}}>
     Describe model architecture and hyperparameters using structured inputs <br /> no training code required.
      </Typography>
    </CardContent>
  </Card>
    
  <Card sx={cards}>
    <CardContent> 
      <Typography sx={{ fontSize: 24 }}>Step 2  Compile & Validate Automatically</Typography>
      <Typography variant="body2">
        Does not need to write code, structure will automatically be generated
      </Typography>
    </CardContent>
  </Card>

  <Card sx={cards}>
    <CardContent>
      <Typography sx={{ fontSize: 24 }}>Step 3 Train & Analyze Seamlessly</Typography>
      <Typography variant="body1">
        Review and train model efficiently without leaving this application
      </Typography>
    </CardContent>
  </Card>
</Box>
     
  </>
  );
}

export default ImageContainer;
