import React from 'react'
import { Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react'
import './modal.css'

const ModalModalExample = () => (

  <Modal className='fund-modal centered' size={'tiny'} trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Fund this project</Modal.Header>
    <Modal.Content>

      <Form size={'large'}>
        <Form.Group>
          <Form.Input label='Card Number' placeholder='Card Number' width={16} />
        </Form.Group>
        <Form.Group>
          <Form.Input label='Cardholder Name' placeholder='Name' width={16} />
        </Form.Group>
        <Form.Group>
          <Form.Input label='Expiration Date' placeholder='MM/YY' width={8} />
          <Form.Input label='Security Code' placeholder='CVC' width={8} />
        </Form.Group>
        <Form.Group>
          <Form.Input label='Zip Code' placeholder='Zip code' width={16} />
        </Form.Group>
        <Form>
          <Form.Field control={Checkbox} label={{ children: 'Remember this card' }} />
        </Form>
        <Button  fluid positive>Support</Button>
      </Form>

    </Modal.Content>
  </Modal>
)

export default ModalModalExample