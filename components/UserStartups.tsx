import { client } from '@/sanity/lib/client'
import { STARTUPS_BY_AUTHOR_QUERY } from '@/sanity/lib/queries'
import React from 'react'
import StartupCard, { StartupCardType } from './StartupCard'

const UserStartups = async ({id}:{id:string}) => {
    const startUps = await client.fetch(STARTUPS_BY_AUTHOR_QUERY,{id})

  return (
    <>
        {startUps.length > 0 ? startUps.map((startup:StartupCardType)=>(
          <StartupCard key={startup._id} post={startup}/>
        )):(
          <p className='no-result'>No post yet</p>
        )}
    </>
  )
}

export default UserStartups