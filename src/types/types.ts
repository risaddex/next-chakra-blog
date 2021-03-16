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

export function isError(error: unknown): error is Error {
  return error instanceof Error
}