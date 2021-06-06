import React from 'react'
import { Col, Row } from 'reactstrap'

type ResumeSectionProps = {
    data?: any
}

type ResumeSectionState = {}

class ResumeSection extends React.Component<ResumeSectionProps, ResumeSectionState> {
    constructor(incomingProps: ResumeSectionProps) {
        super(incomingProps)
        this.state = {}
    }
    render() {
        return(<section>
            <Row>
                <Col>
                <div className='page-header border border-left-0 border-right-0 border-top-0'>
                    <h2>Data from Array Goes Here</h2>
                </div>
                </Col>
            </Row>
        </section>)
    }
}

export default ResumeSection