export interface IPost {
  id: string
  published: Date
  updated: Date
  url: string
  title: string
  content: string
  images: string[]
  author: {
    displayName: string
  }
}
