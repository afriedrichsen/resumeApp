import React from 'react'


type SocialMediaProps = {
    data?: any
}

type SocialMediaState = {
    data?: any
}

class SocialMedia extends React.Component<SocialMediaProps, SocialMediaState> {
    constructor(incomingProps: SocialMediaProps) {
        super(incomingProps)
        this.state = {
            data: []
        }
    }


    render() {
        return(
        <p className="social-media">
           { this.state.data.map((service: any, index: any) => { 
               return (
               <a>
                   <img className="img-circle" src={ "img/" + service.iconName + ".png"} />
               </a>
           )})
           }
        </p>)
    }
}

export default SocialMedia