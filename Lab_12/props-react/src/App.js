import './App.css';
import User from "./comments"
import".index.css"
// import images
import avatar1 from "Lab_12/props-react/src/images/avatar1.png"
import avatar2 from "Lab_12/props-react/src/images/avatar1.png"
import avatar3 from "Lab_12/props-react/src/images/avatar1.png"

function App(){
	returin(
<>
<h1> User Comments </h1>
<main className='maincontainer'>
	<User image={avatar1} username="Mr. cactus" date="04/01/25" usercomment="Great Job!"/>
	<User image={avatar2} username="Clark" date="04/05/25" usercomment="I need more rest"/>
	<User image={avatar3} username="Jessica" date="04/10/25" usercomment="Glad to meet you!"/>
</main>
</>
);
}

export default App;