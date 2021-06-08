import React from 'react'
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap'

type LeadershipItemProps = {
    item?: any
}

type LeadershipItemState = {
    item?: any
}

class LeadershipItem extends React.Component<LeadershipItemProps, LeadershipItemState> {
    constructor(incomingProps: LeadershipItemProps) {
        super(incomingProps)
        this.state = {
            item: this.props.item || {}
        }
    }

    componentDidMount() {
        this.setState({
            item: this.props.item
        })
    }

    render() {
        return(<div className='resume-item'>
            <Row className='title-row'>
                <Col className='col-sm'>
                    <h4 className='title'>
                        {this.props.item.title}
                    </h4>
                </Col>
                <Col className='col-sm'>
                    <h4 className='float-right hidden-phone place'>{this.props.item.place}</h4>
                </Col>
            </Row>
            <Row className='subtitle-row'>
            <Col className='col-sm'>
                <span className='subtitle'>
                {this.props.item.subtitle}
                <span className='visible-phone badge badge-info'>{this.props.item.label}</span>
                <span className='badge badge-info hidden-phone'>{this.props.item.label}</span>
                </span>
            </Col>
            <Col className='col-sm'>
            <span className='hidden-phone float-right date'>{this.props.item.date}</span>
            </Col>
            </Row>
            <Row className='desc-row'>
            <Col className='col-sm'>
                <div className='fullSpan'>
                    <ul>
                        {this.props.item.highlights.map((i: any, key: any) => <li>
                            {i.desc}
                        </li>)}
                </ul>
                </div>
            </Col>
            </Row>
        </div>)
    }
}

export default LeadershipItem