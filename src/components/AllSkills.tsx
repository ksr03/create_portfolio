import React from 'react'
import Skills from './Skills'
import myskills from '../data/myskills.json'

const AllSkills = () => {
  return (
    <>
        <Skills genre_name='フロントエンド' skill_list={myskills.front}/>
        <hr color='#EEEEEE' style={{ width: '95%' }}/>
        <Skills genre_name='バックエンド' skill_list={myskills.back}/>
        <hr color='#EEEEEE' style={{ width: '95%' }}/>
        <Skills genre_name='その他' skill_list={myskills.other}/>
        <hr color='#EEEEEE' style={{ width: '95%' }}/>
    </>
  )
}

export default AllSkills