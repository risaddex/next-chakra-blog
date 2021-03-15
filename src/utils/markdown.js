import TurndownService from 'turndown'
import ReactMarkdown from 'react-markdown'
import React from 'react'
import { Img } from '@chakra-ui/image'
import { Link } from '@chakra-ui/layout'

export default function parseToMarkdown(input) {
  const turndownService = new TurndownService()

  turndownService.addRule('italicRemove', {
    filter: ['em', 'i'],
    replacement: function (content) {
      return content
    }
  })
  

  const markdown = turndownService.turndown(input)

  const renderers = {
    link: props => <Link href={props.href} target="_blank">{props.children}</Link>
  }
  
  return (
    <React.Fragment>
      <ReactMarkdown renderer={renderers} children={markdown} />
    </React.Fragment>
  )
}

