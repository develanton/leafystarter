import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import ProjectCards from '../../components/projects'
import Right from '../../components/sidebar/right'

export class AllProjects extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <Navbar />
                    <div className="row">
                        <div className="ten wide column">
                          <ProjectCards />
                        </div>
                        <div>
                            <Right className="column rightMobile" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllProjects


