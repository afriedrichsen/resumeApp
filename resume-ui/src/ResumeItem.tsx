import React from 'react'

type ResumeItemProps = {
    item?: any
}

type ResumeItemState = {}

class ResumeItem extends React.Component<ResumeItemProps, ResumeItemState> {
    constructor(incomingProps: ResumeItemProps) {
        super(incomingProps)
        this.state = {
            data: this.props.item || []
        }
    }

    render() {
        return(<div className='resume-item'></div>)
    }
}

export default ResumeItem