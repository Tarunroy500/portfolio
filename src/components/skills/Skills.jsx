import "../skills/skills.css";
import Data from "../../Data2";
import {FaHtml5} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import Card from "../../Card2";
const Skills = () => {
    const data = Data;
    return (
        
            <section className="skills" id="skills">
                <div className="container">
                    <div className="heading">
                        <h4>SKILLS</h4>
                    </div>
                    <div className="cards">
                        {data.map((data, index) => {
                            return <Card key={index} {...data} />;
                        })}
                    </div>
                </div>

                <div class="main-wrapper">
                    <div class="badge yellow">
                        <div class="circle">
                            {" "}
                            <i class="fa fa-brands fa-react"></i>
                        </div>
                        <div class="ribbon">Node js</div>
                    </div>
                    <div class="badge orange">
                        <div class="circle">
                            {" "}
                            <i class="fa fa-brands fa-html5"><FaHtml5/></i>
                        </div>
                        <div class="ribbon">HTML</div>
                    </div>
                    <div class="badge pink">
                        <div class="circle">
                            {" "}
                            <i class="fa fa-js fa-brands fa-square-js"><SiJavascript/></i>
                        </div>
                        <div class="ribbon">JS</div>
                    </div>
                    <div class="badge red">
                        <div class="circle">
                            {" "}
                            <i class="fa fa-brands fa-bootstrap"></i>
                        </div>
                        <div class="ribbon">Bootstrap</div>
                    </div>
                    <div class="badge purple">
                        <div class="circle">
                            {" "}
                            <i class="fa fa-brands fa-java"></i>
                        </div>
                        <div class="ribbon">JAVA</div>
                    </div>
                    <div class="badge teal">
                        <div class="circle">
                            {" "}
                            <i class="fa fa-solid fa-brain"></i>
                        </div>
                        <div class="ribbon">DSA</div>
                    </div>
                    <div class="badge blue">
                        <div class="circle">
                            {" "}
                            <i class="fa fa-brands fa-css3-alt"></i>
                        </div>
                        <div class="ribbon">CSS</div>
                    </div>
                    <div class="badge blue-dark">
                        <div class="circle">
                            {" "}
                            <i class="fa fa-solid fa-user-secret"></i>
                        </div>
                        <div class="ribbon">C++</div>
                    </div>
                    <div class="badge green">
                        <div class="circle">
                            {" "}
                            <i class="fa fa-tree"></i>
                        </div>
                        <div class="ribbon">React</div>
                    </div>
                    
                </div>
            </section>
        
    );
};

export default Skills;
