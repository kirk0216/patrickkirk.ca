import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface ResumeSectionProperties {
    eventKey: string;
    
    title: string;
    children?: React.ReactElement | string;
}

class ResumeSection extends React.Component<ResumeSectionProperties> {
    render() {
        return (
            <Accordion.Item eventKey={this.props.eventKey}>
                <Accordion.Header>{this.props.title}</Accordion.Header>

                <Accordion.Body>
                    {this.props.children}
                </Accordion.Body>
            </Accordion.Item>
        )
    }
}

export class Resume extends React.Component {
    render() {
        return (
            <Accordion alwaysOpen flush defaultActiveKey={['0', '1', '2', '3']}>
                <ResumeSection eventKey='0' title='Education'>
                    <Container>
                        <Row>
                            <Col><strong>Computer Programming - Algonquin College</strong></Col>
                            <Col className='d-flex justify-content-end'>September 2020 - December 2021</Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col>
                                <ul>                                    
                                    <li>Object-oriented fundamentals, including SOLID principles and design patterns</li>
                                    <li>Software Development Life Cycle including Agile principles</li>
                                    <li>Database design and usage (SQL, DDL, DML)</li>
                                    <li>Experience with Java, Python, SQL, and web (HTML/CSS/JS)</li>
                                    <li>Android development</li>
                                    <li>Management and configuration of Windows and Linux operating systems</li>
                                    <li>Graduated with Honours with a GPA of 3.96</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </ResumeSection>

                <ResumeSection eventKey='2' title='Technical Skills'>
                    <ul>
                        <li>Object-oriented programming</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>Database design</li> 
                        <li>SQL, DDL, DML</li>
                        <li>Microservices</li>
                        <li>JavaScript/TypeScript</li>
                        <li>HTML/CSS</li>
                        <li>SDLC, Agile</li>
                        <li>Git</li>
                    </ul>
                </ResumeSection>

                <ResumeSection eventKey='3' title='General Skills'>
                    <ul>
                        <li>Self-directed</li>
                        <li>Reliable</li>
                        <li>Team player</li>
                        <li>Strong written and oral communication skills</li>
                    </ul>
                </ResumeSection>

                <ResumeSection eventKey='1' title='Experience'>
                    <Container>
                        <Row>
                            <Col><strong>Customer Advisor - HGS Canada</strong></Col>
                            <Col className='d-flex justify-content-end'>August 2018 - December 2021</Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col>
                                <ul>
                                    <li>Provided high level customer service within a fast-paced and dynamic environment</li>
                                    <li>Utilized internal and external documentation to resolve customer concerns</li>
                                    <li>Communicated effectively with colleagues and team leads to escalate advanced issues for resolution</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </ResumeSection>
            </Accordion>
        )
    }
}
