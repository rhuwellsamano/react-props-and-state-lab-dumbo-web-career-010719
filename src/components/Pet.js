import React from 'react'

class Pet extends React.Component {

  genderChecker = () => {
    if(this.props.petObj.gender === 'male') {
      return ('♂')
    } else if (this.props.petObj.gender === 'female') {
      return ('♀')
    }
  }

  onAdoptPetHandlerForPet = (event, id) => {
    this.props.onAdoptPet(event.target, this.props.petObj.id)

  }

  adoptedButtonRenderer = () => {
    // this.props.isAdopted(this.props.petObj)

    if(this.props.petObj.isAdopted === false){
      // console.log(`${this.props.petObj.name} returned ${this.props.petObj.isAdopted}`)
      return (
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={this.onAdoptPetHandlerForPet}>Adopt pet</button>
        </div>
      )
    } else {
      console.log('isAdoptedHandler returned false..')
      return (
        <div className="extra content">
          <button className="ui primary button">Already adopted</button>
          <button className="ui disabled button">Adopt pet</button>
        </div>
      )
    }

  }

  render() {
    // debugger
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderChecker()}
            {this.props.petObj.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petObj.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petObj.age}</p>
            <p>Weight: {this.props.petObj.weight}</p>
          </div>
        </div>

        { this.adoptedButtonRenderer() }

      </div>
    )
  }
}

export default Pet
