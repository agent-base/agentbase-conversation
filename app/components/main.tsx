'use client'
import React, { useState } from 'react'
import styles from './style.module.css'
import XPowerBy, {
  XPowerByFooter,
  XPowerByPrivacy
} from '@/components/x-power-by'
import Button from '@/components/button'
import ChatBubbleIcon from '@heroicons/react/24/solid/ChatBubbleOvalLeftEllipsisIcon'
import PencilSquare from '@heroicons/react/24/solid/PencilSquareIcon'
import LikeAndDislike from '@/components/like-and-dislike'
import Loading from '@/components/loading'
import Input from '@/components/input'
import Select from '@/components/select'
import WordCount from '@/components/word-count'
import Welcome from '@/components/welcome'
import Hint from '@/components/hint'
import Form from '@/components/form'
import MenuItem from '@/components/menu-item'
import ChatBubble from '@/components/chat-bubble'

const Main = () => {
  const [value, setValue] = useState('Hello')
  const [selectValue, setSelectValue] = useState(undefined)

  const items = [
    {
      type: 'text-input',
      label: '昵称',
      variable: 'name',
      required: false,
      max_length: 48,
      default: ''
    },
    {
      type: 'select',
      label: '类型',
      variable: 'type',
      required: false,
      options: ['单板', '双板'],
      default: ''
    }
  ]
  return (
    <main className={styles.container}>
      <h1>Components</h1>

      <div>
        <h2>Form</h2>
        <Form hint='Init Prompt' items={items} />
      </div>

      <div>
        <h2>Button</h2>
        <div className='flex gap-4 flex-col'>
          <Button text='Blue' type='blue' />
          <Button text='Red' type='red' />
          <Button text='Transparent' type='transparent' />

          <Button text='Blue' type='blue'>
            <ChatBubbleIcon className='h-4 w-4 text-white mr-2' />
            Start Chat
          </Button>

          <Button text='' type='transparent'>
            <PencilSquare className='h-4 w-4 text-gray-500 mr-2' />
            New Chat
          </Button>
        </div>
      </div>

      <div>
        <h2>Input</h2>
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
          placeholder='Input something here...'
          className='w-full'
        />
      </div>

      <div>
        <h2>Select</h2>
        <Select
          value={selectValue}
          className='w-full'
          options={[
            { label: 'Option 1', value: 'option-1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
            { label: 'Option 4', value: 'option-4' }
          ]}
          onSelect={(value) => {
            setSelectValue(value)
          }}
        />
      </div>

      <div>
        <h2>Word Count</h2>
        <WordCount wordCount={value.length} />
      </div>

      <div>
        <h2>Loading</h2>
        <div className='flex w-[120px] h-[120px] border border-gray-300 rounded-lg'>
          <Loading />
        </div>
      </div>

      <div className='flex flex-col'>
        <h2>Like And Dislike</h2>
        <div className='flex gap-2'>
          <div className='flex gap-2'>
            <LikeAndDislike
              status='like'
              onAction={(action) => {
                console.log(action)
              }}
            />
            <LikeAndDislike
              status='dislike'
              onAction={(action) => {
                console.log(action)
              }}
            />
            <LikeAndDislike
              status='none'
              onAction={(action) => {
                console.log(action)
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <h2>Welcome</h2>
        <Welcome
          name='AgentBase.AI'
          description='A platform for AI,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt laudantium distinctio aut voluptates recusandae in.'
        />
      </div>

      <div>
        <h2>Hint</h2>
        <Hint
          hint='Initial Prompt'
          hintDescription='Initial Prompt Hint Description'
        />
        <br />
        <Hint hint='Initial Prompt' />
        <br />
        <Hint hint='Initial Prompt' onAction={() => {}} />
      </div>

      <div>
        <h2>Chat Bubble</h2>
        <div className='flex flex-col gap-6'>
          <ChatBubble content='Hello' opening_statement='Hello World' />
          <ChatBubble content='Hello' mine />
          <ChatBubble content='Menu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dolorum quasi nobis non quo cumque modi eum, consectetur quibusdam! Magnam corporis iste repudiandae laborum dolore vero aspernatur distinctio architecto repellendus, molestiae dolor est magni sed debitis alias excepturi, accusantium maiores! Ipsam modi aperiam quos? Ipsum omnis esse blanditiis saepe labore. Menu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dolorum quasi nobis non quo cumque modi eum, consectetur quibusdam! Magnam corporis iste repudiandae laborum dolore vero aspernatur distinctio architecto repellendus, molestiae dolor est magni sed debitis alias excepturi, accusantium maiores! Ipsam modi aperiam quos? Ipsum omnis esse blanditiis saepe labore.Menu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dolorum quasi nobis non quo cumque modi eum, consectetur quibusdam! Magnam corporis iste repudiandae laborum dolore vero aspernatur distinctio architecto repellendus, molestiae dolor est magni sed debitis alias excepturi, accusantium maiores! Ipsam modi aperiam quos? Ipsum omnis esse blanditiis saepe labore.' />
          <ChatBubble
            content='Menu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dolorum quasi nobis non quo cumque modi eum, consectetur quibusdam! Magnam corporis iste repudiandae laborum dolore vero aspernatur distinctio architecto repellendus, molestiae dolor est magni sed debitis alias excepturi, accusantium maiores! Ipsam modi aperiam quos? Ipsum omnis esse blanditiis saepe labore.'
            mine
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <h2>Menu Item</h2>
        <MenuItem
          text='Menu Item'
          onClick={() => {}}
          actions={[
            { label: 'Option 1', value: 'option-1' },
            { label: 'Option 2', value: 'option-2' }
          ]}
          onActionClick={(value) => {
            console.log(value)
          }}
        />
        <MenuItem text='Menu Item' onClick={() => {}} />
        <MenuItem
          text='Menu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dolorum quasi nobis non quo cumque modi eum, consectetur quibusdam! Magnam corporis iste repudiandae laborum dolore vero aspernatur distinctio architecto repellendus, molestiae dolor est magni sed debitis alias excepturi, accusantium maiores! Ipsam modi aperiam quos? Ipsum omnis esse blanditiis saepe labore.'
          onClick={() => {}}
          active
        />
      </div>

      <div className='flex flex-col gap-3'>
        <h2>Power By</h2>
        <XPowerBy />
        <XPowerByFooter appName='AgentBase.AI' />
        <XPowerByPrivacy />
      </div>
    </main>
  )
}

export default Main
