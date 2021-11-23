import styled from "styled-components";

const PTag = styled.p`
	font-size: 1.3rem;
`;
export const Paragraph = ({ children }) => <PTag className="mb-4">{children}</PTag>;
