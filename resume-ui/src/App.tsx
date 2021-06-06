import React from 'react'
// import logo from './logo.svg'
import './App.css'

import { Container } from 'reactstrap'

// Boostrap
import 'bootstrap/dist/css/bootstrap.css'

// Config
// import Config from './config/config'

// Components
import ResumeSection from './ResumeSection'
import SocialMedia from './SocialMedia'
import ResumeUtil from './utils/resume_util'


type AppProps = {}

type AppState = {
  data?: any
}

class App extends React.Component<AppProps, AppState> {
  constructor(incomingProps: AppProps) {
    super(incomingProps)
    this.state = {
      data: {}
    }
  }

  async componentDidMount() {
    const util = new ResumeUtil()
    const data = await util.fetchResumeData()
    this.state = {
      data: {}
    }
  }

  render() {
    return (
      <div className="App">
        <Container>
        <header className='hero'>
          <div  className="row">
            <span className="span12 center">
              <h1 className="display-name">
                <strong>Alexander Friedrichsen</strong>
              </h1>
              <span>
                <address>
                  <a href="https://alex.friedrichsen.me">alex.friedrichsen.me</a>
                  <br/>
                  <a href="mailto:afriedrichsen@me.com">afriedrichsen@me.com</a>
                  <p>+1.605.380.7346</p>
                  <SocialMedia />
                </address>
              </span>
            </span>
          </div>
        </header>
        <ResumeSection />
        </Container>
        <div className='footer'>
          <hr />
          <p>
          <span className='sans-font'>&copy 2018</span> <a href='https://alex.friedrichsen.me/'>Alex Friedrichsen</a>&nbsp;&nbsp;&middot;&nbsp;&nbsp;Updated 06/13/18&nbsp;&nbsp;&middot;&nbsp;&nbsp;PDF Version <a href='/temp/Friedrichsen_Resume_data.pdf'>here</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
