import {Link} from "react-router-dom";
import quizz from '../components/graphs/quizz.json'

export const Page3 = ({ ...props }) => {
    return (
        <div>
            <p>page 3 </p>
        <p><Link to="/">Home - page 1</Link></p>
        <p><Link to="/page2">Page 2</Link></p>
        <p><Link to="/page3">Page 3</Link></p>
        <h1>Quizz</h1>
        <p>{quizz.quizz.map(quizz => (<li>{quizz.question}</li>))}</p>
        <p>{quizz.quizz.map(quizz => (<li>{quizz.answers}</li>))}</p>
        </div>
    );
  };
  

export default Page3;