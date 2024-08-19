/* eslint-disable no-unused-vars */
import React, {useState, useContext} from 'react'

function App() {

  // Personal Information
  const [name, setName] = useState('Justin McMillion')
  const [email, setEmail] = useState('jmcmillion89@icloud.com')
  const [phone, setPhone] = useState('1-234-567-8910')

  // Education Information
  const [educations, setEducation] = useState([{id: 1, school: 'Colorado Technical University', degree: 'Computer Science', start: '01/2019', end: '01/2023', gpa: '4.0'}])

  // Experience Information
  const [experiences, setExperience] = useState([{id: 1, employer: 'Frito-Lay', role: 'Route Sales Rep', start: '06/2016', end: 'Present', description: 'Stuff'}])

  // Education rendering
  const educationItems = educations.map((education) => <li key={education.id}>
    <b> School:</b> {education.school} 
    <b> Degree:</b> {education.degree} 
    <b> Start:</b> {education.start} 
    <b> End:</b> {education.end} 
    <b> GPA:</b> {education.gpa}</li>)

  // Experience rendering
  const experienceItems = experiences.map((experience) => <li key={experience.id}>
    <b> Employer:</b> {experience.employer}
    <b> Role:</b> {experience.role}
    <b> Start:</b> {experience.start}
    <b> End:</b> {experience.end}
    <b> Description:</b> {experience.description}</li>)


  return (
<>
<div className='container'>


  <div className='sidebar'>

    <div className='sidebar-options'>
      Options
    </div>

    <div className='sidebar-personal-details'>
      Personal
    </div>

    <div className='sidebar-education'>
      Education
    </div>

    <div className='sidebar-experience'>
      Experience
    </div>
  </div>


  <div className='cv'>
      
    <div className='cv-personal-details'>
      <b> Name:</b> {name}
      <b> Email:</b> {email}
      <b> Phone: </b>{phone}
    </div>

    <div className='cv-education'>
      <ul>{educationItems}</ul>
    </div>

    <div className='cv-experience'>
      <ul>{experienceItems}</ul>
    </div>

  </div>


  <div className='footer'>
    <h2>Footer</h2>
  </div>
</div>

</>
  )
}

export default App
