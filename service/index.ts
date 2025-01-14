import { ChatClient } from 'agentbase-client'
import { cookies } from 'next/headers'
import dotenv from 'dotenv'
dotenv.config()

export const getLocale = () => {
  const cookieStore = cookies()
  return cookieStore.get('locale')?.value || 'en' // default to english
}
export const client = new ChatClient(process.env.API_SECRET)
