import styled from 'styled-components'

interface DefaultButtonProps {
  variant: 'primary' | 'secondary'
}

const bgColors = {
  primary: '#3D6666',
  secondary: '#FFFFFF'
}

const fontColor = {
  primary: '#FFFFFF',
  secondary: '#3D6666'
}

export const DefaultButton = styled.button<DefaultButtonProps>`
  background: ${props => bgColors[props.variant]};
  border: 2px solid #3D6666;
  padding: 0 24px;
  font-weight: 800;
  font-size: 18px;
  line-height: 27px;
  color: ${props => fontColor[props.variant]};
  cursor: pointer;
`