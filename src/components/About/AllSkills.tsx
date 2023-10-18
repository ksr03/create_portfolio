import React from 'react'
import Skills from '@components/About/SkillList'
import myskills from '@data/myskills.json'

const AllSkills = () => {
  return (
    <>
        <Skills genre_name='フロントエンド' skill_list={myskills.front}/>
        <Skills genre_name='バックエンド' skill_list={myskills.back}/>
        <Skills genre_name='その他' skill_list={myskills.other}/>
    </>
  )
}

export default AllSkills