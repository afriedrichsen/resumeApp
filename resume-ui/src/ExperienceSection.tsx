import React from 'react'
import { Col, Row } from 'reactstrap'
import ResumeItem from './ExperienceItem'

type ExperienceSectionProps = {
    data?: any
}

type ExperienceSectionState = {
    data?: any
}

class ExperienceSection extends React.Component<ExperienceSectionProps, ExperienceSectionState> {
    constructor(incomingProps: ExperienceSectionProps) {
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
                {this.props.data.items.map((item: any, key: any) => <ResumeItem item={item} />)}
            </Row>
        </section>)
    }
}

export default ExperienceSection