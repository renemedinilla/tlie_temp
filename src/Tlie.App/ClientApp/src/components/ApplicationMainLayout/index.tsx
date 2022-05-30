import { FC, ReactNode } from 'react'
import {
  MainContainer,
  HeaderContainer,
  BodyContainer,
  FooterContainer,
  FooterColumn
} from './styles'
import { HiPhone, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'
import { TiMessages } from 'react-icons/ti'

import logo1 from '../../assets/tlie-logo1.svg'
import accbusiness from '../../assets/accreditedbusiness.svg'

interface Props {
  children?: ReactNode
}

const ApplicationMainLayout: FC<Props> = ({ children }) => {
  return (
    <MainContainer>
      <HeaderContainer>
        <img src={logo1} alt="logo" />
        <div>
          <span>Want to speak with customer service?</span>
          <div>
            <HiPhone fontSize="12.8px" /><strong>(800) 252-9332</strong>
          </div>
        </div>
      </HeaderContainer>
      <BodyContainer>
        {children}
      </BodyContainer>
      <FooterContainer>
        <div>
          <FooterColumn>
            <div>
              <strong>
                <HiOutlinePhone fontSize="18px" />
                (800) 252-9332
              </strong>
            </div>
            <div>
              <hr />
            </div>
            <div>
              Monday – Friday  |  9am – 6pm CT
            </div>
          </FooterColumn>
          <FooterColumn>
            <div>
              <strong>
                <TiMessages fontSize="18px" />
                Chat with us.
              </strong>
            </div>
            <div>
              <strong>
                <HiOutlineMail fontSize="18px" />
                info@tlie.org
              </strong>
            </div>
          </FooterColumn>
          <FooterColumn>
            <img src={accbusiness} alt="accredited business" />
            <div>
              <a href="/">Privacy Policy</a>
              <a href="/">Subscribe</a>
            </div>
          </FooterColumn>
        </div>
      </FooterContainer>
    </MainContainer>
  )
}

export default ApplicationMainLayout