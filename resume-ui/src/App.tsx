import React from 'react'
// import logo from './logo.svg'
import './App.css'

import { Container } from 'reactstrap'

// Boostrap
import 'bootstrap/dist/css/bootstrap.css'

// Config
// import Config from './config/config'

// Components
import ExperienceSection from './ExperienceSection'
import LeadershipSection from './LeadershipSection'
import SkillsSection from './SkillsSection'
import SocialMedia from './SocialMedia'
import ResumeUtil from './utils/resume_util'
import ProjectsSection from './ProjectsSection'


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
    this.setState({
      data: data
    })
  }

  render() {
    const date: Date = new Date()
    const year: number = date.getFullYear()
    const currentTag: string = `Build: ${this.state.data.buildVersion}`
    return (
      this.state.data.sections ?
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
                  <SocialMedia data={this.state.data.socialmedia}/>
                  <ExperienceSection data={this.state.data.sections.experience} />
                  <SkillsSection data={this.state.data.sections.skillbars} />
                  <ProjectsSection data={this.state.data.sections.projects} />
                  <LeadershipSection data={this.state.data.sections.leadership} />
                </address>
              </span>
            </span>
          </div>
        </header>
        </Container>
        <div className='footer'>
          <hr />
          <p>
          <span className='sans-font'>&copy; {year}</span> <a href='https://alex.friedrichsen.me/'>Alex Friedrichsen</a>&nbsp;&nbsp;&middot;&nbsp;&nbsp;{currentTag} &nbsp;&nbsp;&middot;&nbsp;&nbsp;PDF Version <a href='./download'>here</a>.
          </p>
        </div>
      </div> : <div>Loading...</div>
    );
  }
}

export default App;
