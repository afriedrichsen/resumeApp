import React from 'react'
import { Col, Row } from 'reactstrap'

type SkillBarProps = {
    item?: any
}

type SkillBarState = {}

export default class SkillBar extends React.Component<SkillBarProps, SkillBarState> {
    render() {
        return (<Row className='skillbar'>
            <Col className='col-sm-2'>
                <h4 className='mono-font hidden-phone skillbar-title'>{this.props.item.title}</h4>
            </Col>
            <Col className='col-lg float-left'>
                <progress>
                    <div className='progress-bar' style={{width: this.props.item.level }}>
                    {this.props.item.level} - ({this.props.item.years})
                    </div>
                </progress>
            </Col>
            <Col className='col-sm-2'></Col>
        </Row>)
    }
}