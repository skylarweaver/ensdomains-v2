import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "gatsby-plugin-react-i18next"
import mq from "../../mediaQuery"
import {
  MainPageBannerContainer,
  DAOBannerContent
} from '../DAOBanner'

const Title = styled("h2")`
  font-size: 24px;
  font-weight: 300;
  margin-top: 100px;
  color: white;
  text-align: center;
  max-width: 800px;
  padding: 40px 20px 0;

  ${mq.medium`
    margin-top: 0;
    padding: 120px 20px 0;
    font-size: 68px;
  `}
`

const HeroContainer = styled("div")`
  background-image: linear-gradient(90deg, #513eff 0%, #52e5ff 100%);
  display: flex;
  justify-content: center;
`

export default function Hero(props) {
  const { t } = useTranslation()
  return (
    <HeroContainer>
      <MainPageBannerContainer>
        <DAOBannerContent />
      </MainPageBannerContainer>
      <Title>{t("home.hero.title")}</Title>
    </HeroContainer>
  )
}
