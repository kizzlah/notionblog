import { NotionAPI } from 'notion-client'

export const notion = new NotionAPI({
  authToken: process.env.NOTION_TOKEN_V2,
  apiBaseUrl: process.env.NOTION_API_BASE_URL
})
