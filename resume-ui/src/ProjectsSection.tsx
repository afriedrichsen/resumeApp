import React from 'react'
import { Col, Row } from 'reactstrap'
import ProjectItem from './ProjectItem'

type ProjectsSectionProps = {
    data?: any
}

type ProjectsSectionState = {
    data?: any
}

class ProjectsSection extends React.Component<ProjectsSectionProps, ProjectsSectionState> {
    constructor(incomingProps: ProjectsSectionProps) {
        super(incomingProps)
        this.state = {
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.data
        })
    }
    render() {
        return(<section>
            <Row>
                <Col className='col-sm'>
                <div className='page-header border border-left-0 border-right-0 border-top-0'>
                    <h2>{this.props.data.title}</h2>
                </div>
                </Col>
                {this.props.data.items.map((item: any, key: any) => <ProjectItem item={item} />)}
            </Row>
        </section>)
    }
}

export default ProjectsSection