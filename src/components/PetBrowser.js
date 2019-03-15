import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  isAdoptedHandler = (petObj) => {
    // debugger
    // if(petObj.isAdopted === true){
    //   console.log(`${petObj.name} returned ${petObj.isAdopted}`)
    //   return (
    //     <div className="extra content">
    //       <button className="ui disabled button">Already adopted</button>
    //       <button className="ui primary button">Adopt pet</button>
    //     </div>
    //   )
    // } else {
    //   console.log('isAdoptedHandler returned false..')
    //   return (
    //     <div className="extra content">
    //       <button className="ui primary button">Already adopted</button>
    //       <button className="ui disabled button">Adopt pet</button>
    //     </div>
    //   )
    // }

  }

  onAdoptPetHandler = (event, id) => {
    // debugger
    console.log(event)
    console.log(id)

  }



  render() {
    let arrayOfPetCards = this.props.animals.map(animalObj => <Pet key={animalObj.id} petObj={animalObj} isAdopted={this.isAdoptedHandler} onAdoptPet={this.onAdoptPetHandler}/>)


    return <div className="ui cards">{arrayOfPetCards}</div>
  }
}

export default PetBrowser
