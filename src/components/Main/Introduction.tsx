import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser'
import { Link } from 'gatsby'

type IntroductionProps = {
  profileImage : IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`
const SubTitleTB = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`
const SubTitleB = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({profileImage}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage}/>

        <div>
          <SubTitle>풀스택 지망</SubTitle>
          <Title>BlueBug의 개발 블로그</Title>
          <SubTitleTB>My Project</SubTitleTB>
          <SubTitleB>PETCARE : <Link to="https://github.com/Blue-Bug/PETCARE_BACKEND">https://github.com/Blue-Bug/PETCARE_BACKEND</Link></SubTitleB>
          <SubTitleB>MyPlaylist : <Link to="https://github.com/Blue-Bug/myplaylists">https://github.com/Blue-Bug/myplaylists</Link></SubTitleB>
          <SubTitleB>GameHub : <Link to="https://github.com/Blue-Bug/gamehub_api">https://github.com/Blue-Bug/gamehub_api</Link></SubTitleB>
          <SubTitleB>LOGOS : <Link to="https://github.com/LogosProject1/Logos">https://github.com/LogosProject1/Logos</Link></SubTitleB>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction