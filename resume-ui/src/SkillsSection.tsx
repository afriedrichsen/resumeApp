import React from 'react'
import { Col, Row } from 'reactstrap'
import SkillBar from './SkillBar'

type SkillsSectionProps = {
    data?: any
}

type SkillsSectionState = {
    data?: any
}

class SkillsSection extends React.Component<SkillsSectionProps, SkillsSectionState> {
    constructor(incomingProps: SkillsSectionProps) {
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
                {this.props.data.items.map((item: any, key: any) => <SkillBar item={item} />)}
            </Row>
        </section>)
    }
}

export default SkillsSection