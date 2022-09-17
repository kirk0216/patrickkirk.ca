import './Portfolio.css';

import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/esm/Tooltip';

import { Github, PlayCircleFill } from 'react-bootstrap-icons';

const imageSize: number = 20;

interface ProjectData {
    title: string;
    description: string;
    github: string;
    demo?: string;
    screenshot?: string;

    technologies: string[];
}

const projects: ProjectData[] = [
    {
        title: 'Portfolio',
        description: 'My personal website which contains my resume and a portfolio of my academic and personal projects. ',
        github: 'kirk0216/patrickkirk.ca',
        demo: 'https://www.patrickkirk.ca',
        technologies: [
            'React', 'TypeScript', 'HTML', 'CSS'
        ],
        screenshot: '/portfolio-ss.png'
    },
    {
        title: 'Blog',
        description: 'An example project consisting of a blog. Features include: ...',
        github: 'kirk0216/blog',
        demo: 'https://blog.patrickkirk.ca',
        technologies: [
            'Python', 'Flask', 'Jinja', 'HTML', 'CSS', 'JavaScript', 'SQL'
        ],
        screenshot: '/blog-ss.png'
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
                                            tooltip='Click to view the Github repository for this project in a new tab.' />

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
                                                    alt={'A screenshot demonstrating a live version of ' + project.title}></img>
                                        <div className='card-footer d-grid p-0'>
                                            <button role='button' 
                                                    className='btn btn-primary rounded-top-0 stretched-link p-2' 
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
                                                    <img src={project.screenshot} className='w-90 h-auto'></img>
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
            <Accordion alwaysOpen defaultActiveKey={['0']}>
                {
                    projects.map((project, index) => {
                        return <Project key={project.title} eventKey={index.toString()} project={project} />
                    })
                }
            </Accordion>
        )
    }
}
