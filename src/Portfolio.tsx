import './Portfolio.css';
import blogScreenshot from './blog-ss.png';
import portfolioScreenShot from './portfolio-ss.png';

import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { Github, PlayCircleFill } from 'react-bootstrap-icons';

const imageSize: number = 20;

interface ProjectData {
    title: string;
    description: string | JSX.Element;
    github: string;
    demo?: string;
    screenshot?: string;

    technologies: string[];
}

const projects: ProjectData[] = [
    {
        title: 'Portfolio',
        description: <div>
            <p>My personal website which contains my resume and a portfolio of my academic and personal projects.</p>
            <p>The site is written in TypeScript using React and related libraries. 
                It runs entirely on the client-side and has no back-end components.
                Bootstrap (via React-Bootstrap) is used for styling and layout.</p>
        </div>,
        github: 'kirk0216/patrickkirk.ca',
        technologies: [
            'React', 'TypeScript', 'HTML', 'CSS'
        ],
        screenshot: portfolioScreenShot
    },
    {
        title: 'Blog',
        description: <div>
            <p>A blog written in Python that uses Flask and related libraries.</p>

            Features include: 
            <ul>
                <li>User authentication</li>
                <li>Role based authorization</li>
                <li>Server-side sessions stored in redis</li>
                <li>Administration panel</li>
            </ul>
        </div>,
        github: 'kirk0216/blog',
        technologies: [
            'Python', 'Flask', 'Jinja', 'HTML', 'CSS', 'JavaScript', 'SQL', 'PostgreSQL'
        ],
        screenshot: blogScreenshot
    },
    {
        title: 'QuickHoard',
        description: 'A personal budget web application made using Flask and Python written for a school project that required the use of a programming language not covered in a previous course.',
        github: 'kirk0216/QuickHoard',
        technologies: [ 'Python', 'Flask', 'HTML', 'CSS', 'SQL' ]
    },
    {
        title: 'UserManagementService',
        description: <div>
            <p>Part of a school project where we wrote the API for a microblog using a microservice architecture.</p>
            <p>Handles user registration and authentication.</p>
        </div>,
        github: 'kirk0216/UserManagementService',
        technologies: [ 'Java', 'Spring', 'SQL' ]
    },
    {
        title: 'MessageService',
        description: <div>
            <p>Part of a school project where we wrote the API for a microblog using a microservice architecture.</p>
            <p>Handles CRUD for messages and message subscriptions.</p>
        </div>,
        github: 'kirk0216/MessageService',
        technologies: [ 'Java', 'Spring', 'SQL' ]
    }
]

interface ProjectProperties {
    eventKey: string;
    project: ProjectData;
}

interface ProjectIconProperties {
    destination: string;
    icon: React.ReactElement;
    tooltip: string;
}

function ProjectIcon(props: ProjectIconProperties) {
    return (
        <OverlayTrigger placement='left' overlay={
            <Tooltip>{props.tooltip}</Tooltip>
        }>
            <a href={props.destination} className='mx-1' target='_blank' rel='noreferrer'>{props.icon}</a>
        </OverlayTrigger>
    )
}

class Project extends Component<ProjectProperties> {
    render() {
        const project = this.props.project;

        return (
            <Accordion.Item eventKey={this.props.eventKey}>
                <Accordion.Header>
                    <Container className='px-0'>
                        <Row>
                            <Col xs lg={10}>{project.title}</Col>
                            <Col xs className='d-flex me-3 justify-content-end'>
                                <ProjectIcon destination={`https://github.com/${project.github}`} 
                                            icon={<Github size={imageSize} />} 
                                            tooltip='Github Repository' />

                                { project.demo && 
                                    <ProjectIcon destination={project.demo} 
                                                icon={<PlayCircleFill size={imageSize} />} 
                                                tooltip='Click to view a demo of the project in a new tab.' />
                                }
                            </Col>
                        </Row>
                    </Container>
                </Accordion.Header>

                <Accordion.Body>
                    <Container className='px-0'>
                        <Row>
                            <Col className='col-9'>
                                {project.description}
                            </Col>
                            <Col className='col-3'>
                                {project.screenshot && 
                                <div className='d-flex align-items-end'>
                                    <div className='card w-100'>
                                        <h5 className='card-header text-center'>Screenshot</h5>
                                        <img src={project.screenshot}
                                                    alt={'A thumbnail screenshot demonstrating a live version of ' + project.title}></img>
                                        <div className='card-footer d-grid p-0'>
                                            <button className='btn btn-primary rounded-top-0 stretched-link p-2' 
                                                    data-bs-toggle='modal' 
                                                    data-bs-target={'#' + project.title + '-modal-screenshot'}>
                                                        View fullscreen
                                            </button>
                                        </div>
                                    </div>

                                    <div className='modal fade' 
                                            id={project.title + '-modal-screenshot'} 
                                            aria-labelledby={project.title + '-modal-title'} 
                                            tabIndex={-1} 
                                            aria-hidden={true}>
                                        <div className='modal-dialog modal-fullscreen'>
                                            <div className='modal-content'>
                                                <div className='modal-header'>
                                                    <h5 className='modal-title' id={project.title + '-modal-title'}>{project.title} Screenshot</h5>
                                                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                                </div>

                                                <div className='modal-content align-items-center'>
                                                    <img src={project.screenshot} className='w-90 h-auto' 
                                                    alt={'A fullscreen screenshot demonstrating a live version of ' + project.title}></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </Col>
                        </Row>
                        <Row className='mt-1'>
                            <Col>
                                <ul className='list-unstyled mb-0'>
                                    <li><strong>Technologies</strong>: {project.technologies.join(', ')}</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        )
    }
}

export class Portfolio extends Component {
    render() {
        return (
            <Accordion alwaysOpen flush defaultActiveKey={['0']}>
                {
                    projects.map((project, index) => {
                        return <Project key={project.title} eventKey={index.toString()} project={project} />
                    })
                }
            </Accordion>
        )
    }
}
