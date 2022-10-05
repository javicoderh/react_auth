import { Link , Route } from "wouter"
function Greeting() {
 return( 
  <div>
  <Route path="/greeting">congratulations u've met the almighty lion <br></br> <br></br> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/800px-Lion_waiting_in_Namibia.jpg' alt="lion"></img></Route>  
  <Route path="/step">may the power of the great tiger be with you <br></br> <br></br> <img src='https://s.abcnews.com/images/International/tiger-india-file-02-ap-jef-220728_1659051905465_hpMain_16x9_1600.jpg' alt="tiger"></img></Route>
  <Route path="/almost">as the rabbit never forget to eat your carrots... you'll need healthy eyes for web developing <br></br> <br></br><img src='https://cdn.hswstatic.com/gif/rabbits-love-carrots-orig.jpg' alt="rabbit"></img></Route>
  <Route path="/done"> dolphins have the secret for multitasking, learn from dolphins brain  <br></br> <br></br><img src='https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202109/dolphins_sexually_aggresive_4_0.jpg' alt="dolphin"></img></Route>
 </div> );
}  
 
 export default Greeting
 