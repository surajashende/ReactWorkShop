import img1 from '../images/img2.jfif';
import img2 from '../images/motu.jfif';
import img3 from '../images/tom&jerry.jfif';


const RandomImage=()=>{
    return <div style={{ "float":"left", "width":"30%","img-size":"10px"}}>
          <center>
          <h2>Randome Images</h2>
              <img src={img1} style={{width:'100%',height:'150px'}}/>
              <img src={img2} style={{width:'100%',height:'150px'}}/>
              <img src={img3} style={{width:'100%',height:'150px'}}/>
          </center>
          <h2>Favorite Links</h2>
          <strong style={{color:"blue"}}><u>Lunch Code</u></strong><br/>
          <strong style={{color:"blue"}}><u>Web Element</u></strong>
          </div>
    }
 export default RandomImage 