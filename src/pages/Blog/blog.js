import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import ArticlesLoad from '../../components/articles'
import Right from '../../components/sidebar/right'

export class Blog extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <Navbar />
                    <div className="row">
                        <div className="ten wide column">
                            <ArticlesLoad />
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

export default Blog


