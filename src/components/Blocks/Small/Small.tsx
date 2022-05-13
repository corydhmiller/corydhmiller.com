import styled from "styled-components"

const SmallTag = styled.small`
	opacity: 0.8;
	font-style: italic;
`
export const Small = ({ children }) => {
	return <SmallTag>{children}</SmallTag>
}
