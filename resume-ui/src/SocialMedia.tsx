import React from 'react'
import linkedin from './linkedin.png'
import github from './github.png'
import keybase from './keybase.png'

type SocialMediaProps = {
    data?: any
}

type SocialMediaState = {
    data?: any
}


const logos: any = {
    linkedin: linkedin,
    github: github,
    keybase: keybase
}

class SocialMedia extends React.Component<SocialMediaProps, SocialMediaState> {
    constructor(incomingProps: SocialMediaProps) {
        super(incomingProps)
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        this.setState({
            data: this.props.data || [{iconName: 'github'}]
        })
    }


    render() {
        return(
        <p className="social-media">
            {this.props.data.map((service: any, index: any) => (
               <a href={service.url}>
                   <img className="img-circle" src={logos[service.iconName]} />
               </a>
            )
           )}
        </p>)
    }
}

export default SocialMedia