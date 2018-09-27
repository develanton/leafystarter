import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import SingleCard from '../../components/single/single'
import Right from '../../components/sidebar/right'
import API from '../../api/api'

 class One extends Component {

    state = {
        project: {}
    }

    componentDidMount() {
        this.loadProject()
    }

    loadProject = () => {
        API.singleProject(this.props.match.params.id).then(item => {
            console.log(item)
        }).catch(err =>{console.log(err)})
    }

    render() {
        return (
            <div>
                <div className="homes">
                    <Navbar />
                        <div className="ten wide column">
                            <SingleCard 
                                id={this.props.match.params.id}
                             />
                        </div>
                        <div>
                            <Right className="column rightMobile" />
                        </div>
                    </div>
                </div>
        )
    }
}

export default One


