import React from 'react'
import { Link, HStack, Text } from '@chakra-ui/react'
import { AiOutlineRight } from 'react-icons/ai'
import { TbBrandGithubFilled } from 'react-icons/tb'
import { BsPlayCircleFill } from 'react-icons/bs'

type Props = {
    link: string
    type: "github" | "demo" | "home"
}

const LinkButton = ({link, type}:Props) => {
  return (
    <>
        {link === '' ?
            <div/>
        :
            <Link href={link} style={{ textDecoration: 'none' }}>
                <HStack 
                    paddingLeft='25px' 
                    paddingRight='20px' 
                    paddingY='8px'
                    border='1px solid #DDDDDD' 
                    borderRadius='full'
                    bg='whiteAlpha.500'
                    transition='.2s'
                    _hover={{ bg: '#FAFAFA' }}
                >
                        {type === 'github' ? 
                            <>
                                <TbBrandGithubFilled size='30px' color='#036a80' />
                                <Text marginRight='15px' fontSize="16px" >
                                    ソースコードを見る
                                </Text>
                            </>
                        : type === 'demo' ? 
                            <>
                                <BsPlayCircleFill size='25px' color='#036a80' />
                                <Text marginRight='15px' fontSize="16px" >
                                    デモを見る
                                </Text>
                            </>
                        : 
                            <Text marginRight='15px' fontSize="16px" >
                                トップページへ戻る
                            </Text>
                        }
                    <AiOutlineRight size='20px' />
                </HStack>
            </Link>
        }
    </>
  )
}

export default LinkButton