import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';

export function PortfolioContents() {
    return (
        <div>
            <div className="about">
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <IconButton aria-label="delete">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <InstagramIcon />
                    </IconButton>
                    <Button variant="contained">Resume</Button>
                </div>
                <div>
                    <img className="myphoto" src={require("./images/myphoto.jpg")} alt="my photo" />
                </div>
            </div>

            <h1>Skills</h1>

            <div className="skills">
                <img className="skillsimagespng" src={require("./images/html.png")} alt="html" />
                <img className="skillsimagespng" src={require("./images/css.png")} alt="css" />
                <img className="skillsimagespng" src={require("./images/javascript.png")} alt="javascript" />
                <img className="skillsimagespng" src={require("./images/mongodb.png")} alt="mongodb" />
                <img className="skillsimagespng" src={require("./images/expressjs.png")} alt="express js" />
                <img className="skillsimagespng" src={require("./images/reactjs.png")} alt="react js" />
                <img className="skillsimagespng" src={require("./images/nodejs.png")} alt="node js" />
            </div>

            <h1>Projects</h1>

            <div className="project">
                <img className="projectimages" src={require("./images/Project.jpg")} alt="Project" />
                <img className="projectimages" src={require("./images/Project.jpg")} alt="Project" />
                <img className="projectimages" src={require("./images/Project.jpg")} alt="Project" />
                <img className="projectimages" src={require("./images/Project.jpg")} alt="Project" />
            </div>

            <h1>About project</h1>

            <div className="aboutproject">
                <div>
                    <h1> Project 1</h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <h1> Project 2</h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <h1>Project 3</h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <h1> Project 4</h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>


            </div>
        </div>
    )
}