import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 2rem 0;
  text-align: center;
`

export const LogoContainer = styled.div`
  margin-bottom: 1rem;
`

export const LinkList = styled.ul`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 40px 0 28px;

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;
	}
`

export const Name = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 1rem;
`

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`
