import React from 'react'
import SkillList from '@components/About/SkillList'
import mySkillList from '@data/myskills.json'

const AllSkillList = () => {
  return (
    <>
        <SkillList genre_name='フロントエンド' skill_list={mySkillList.front}/>
        <SkillList genre_name='バックエンド' skill_list={mySkillList.back}/>
        <SkillList genre_name='その他' skill_list={mySkillList.other}/>
        <SkillList genre_name='ツール' skill_list={mySkillList.tools}/>
    </>
  )
}

export default AllSkillList