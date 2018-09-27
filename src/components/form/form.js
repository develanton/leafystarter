import React, { Component } from 'react';
import { Button, Checkbox, Form, TextArea, Card, Image, Dropdown } from 'semantic-ui-react'
import axios from 'axios';
import { Route } from 'react-router-dom'
import NumberFormat from 'react-number-format';
import './form.css'
import countries from '../../assets/flags'

let countryOptions = countries;

const options = [
    { key: 1, text: 'One month', value: 1 },
    { key: 2, text: 'Three months', value: 2 },
    { key: 3, text: 'Six months', value: 3 },
]

class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            projectImage: '',
            location: '',
            duration: '',
            funding: '',
            about: '',
            file: '',
            redirect: false,
        };
    }

    onChange = (e) => {
        switch (e.target.name) {
            case 'projectImage':
                this.setState({ projectImage: e.target.files[0] });
                this.setState({ file: URL.createObjectURL(e.target.files[0]) })
                break;
            default:
                this.setState({ [e.target.name]: e.target.value });
        }
    }

    // SUBMIT TO BACKEND EACH INPUT FROM FORM 
    onSubmit = (e) => {
        // e.preventDefault();
        const { title, projectImage, location, duration, funding, about } = this.state;
        let formData = new FormData();

        formData.append('title', title);
        formData.append('projectImage', projectImage);
        formData.append('location', location);
        formData.append('duration', duration);
        formData.append('funding', funding);
        formData.append('about', about);

        axios.post(process.env.REACT_APP_API_URL + '/api/projects', formData)
            .then((result) => {
                //this.setRedirect();
                console.log('item saved:', result)
                // access results...
            }).catch(err => console.log(err));
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
        this.renderRedirect();
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Route to='/' />
        }
    }

    render() {
        const { title, location, duration, funding, about, value } = this.state;
        return (
            <span>
                <div className="ui grid">
                    <div className="two column row">
                        <div className="seven wide column">
                            <div id="equal" >
                                <Form>
                                    <Form.Field >
                                        <input
                                            onChange={this.onChange}
                                            className='upload'
                                            name='projectImage'
                                            type="file"
                                            ref={fileInput => this.fileInput = fileInput} />
                                    </Form.Field>

                                    <Form.Field >
                                        <label >Image</label>
                                        <Button className='imgButton' onClick={() => this.fileInput.click()}> <i class="far fa-image fa-2x"></i><br />
                                            Upload </Button>
                                    </Form.Field>


                                    <Form.Field >
                                        <label >Title</label>
                                        <input value={title} onChange={this.onChange} name="title" />
                                    </Form.Field>

                                    <Form.Field>
                                        <label >Project Location </label>
                                        <Dropdown placeholder={!location ? 'Select Country': location} value={this.state.value} name='country' onChange={this.onChange} fluid search selection options={countryOptions} />
                                    </Form.Field>
                                    <Form.Field>
                                        <label >Project Duration</label>
                                        <Dropdown placeholder={!duration ? 'Select duration' : duration} fluid selection options={options} value={value} onChange={this.onChange} name='duration' />
                                    </Form.Field>
                                    <Form.Field>
                                        <label >Funding goal</label>
                                        <NumberFormat
                                            className='project-amount'
                                            placeHolder='Funding Amount'
                                            thousandSeparator={true}
                                            prefix={'$'}
                                            value={funding}
                                            onChange={this.onChange}
                                            name='funding'
                                        />
                                    </Form.Field>


                                    <Form.Field control={TextArea} value={about} onChange={this.onChange} name='about' label='About' placeholder='Tell us more about you...' />
                                    <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
                                    <Form.Field control={Button} type="submit" onClick={this.onSubmit} >Submit</Form.Field>
                                </Form>
                            </div>
                        </div>
                        <div className="seven wide column">
                            <Card className="signCard raised very padded">
                                {!this.state.file ? <Image><i class="far fa-image fa-10x fap"></i></Image> : <Image src={this.state.file} />}
                                <Card.Content style={{ padding: 20 }}>
                                    {!title ? <Card.Header>Your Project</Card.Header> : <Card.Header>{title}</Card.Header>}
                                    <Card.Meta style={{ padding: 10, paddingLeft: 0 }}>
                                        {!duration ? <span className='date'>Project Duration</span> : <span className='date'>{duration}</span>}
                                    </Card.Meta>
                                    {!about ? <Card.Description>Keep in mind that we only support projects that commit to mother earth. Why not support the change, lets start today to change the world to better place. <br /><br /> Your project will be pre-evaluated by our team, if the project complies with our values it will be accepted and launched for funders to support your project.</Card.Description> : <Card.Description>{about}</Card.Description>}
                                    <div className="project-location">
                                        {!location ? <b>Project Location</b> : <b>{location}</b>}
                                    </div>
                                </Card.Content>
                                <Card.Content extra>
                                    <Button positive>Support</Button>
                                    <span className="start-right">
                                        <span className="icons"><i class="far fa-bookmark fa-2x"> </i></span>
                                        <span className="icons"><i class="fab fa-twitter fa-2x"> </i></span>
                                        <span className="icons"><i class="fab fa-facebook-square fa-2x"></i></span>
                                    </span>
                                </Card.Content>
                            </Card>
                        </div>
                    </div>
                </div>
            </span>


        );
    }

}

export default UserForm