import React from "react"
import styled from "styled-components"

const PTag = styled.p``
export const Paragraph = ({ children }: { children: React.ReactNode }) => (
	<PTag className="mb-4 leading-relaxed">{children}</PTag>
)
