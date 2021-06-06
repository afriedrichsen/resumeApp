import React from 'react'
import { Col, Progress, Row } from 'reactstrap'

type SkillBarProps = {
    item?: any
}

type SkillBarState = {
    item?: any
}


const levelNumberToString = (level: string) => {
    let result = 'Beginner'
    const value: number = parseInt(level, 10)
    if (value >= 0 && value < 26) {
        result = 'Beginner'
    } else if (value >= 26 && value < 51) {
        result = 'Proficient'
    } else if (value >= 51 && value < 76) {
        result = 'Intermediate'
    } else {
        result = 'Advanced'
    }
    return result
}

export default class SkillBar extends React.Component<SkillBarProps, SkillBarState> {
    componentDidMount() {
        this.setState({
            item: this.props.item
        })
    }

    render() {
        return (<Row className='skillbar'>
            <Col className='col-sm-2'>
                <h4 className='mono-font hidden-phone skillbar-title'>{this.props.item.title}</h4>
            </Col>
            <Col className='col-lg float-left'>
                <Progress value={this.props.item.level} >
                {levelNumberToString(this.props.item.level)} - ({this.props.item.years})
                </Progress>
            </Col>
            <Col className='col-sm-2'></Col>
        </Row>)
    }
}