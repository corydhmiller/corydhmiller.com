import React from "react"
import styled from "styled-components"

const PTag = styled.p``
export const Paragraph = ({ children }: { children: React.ReactNode }) => (
	<PTag className="mb-4 text-xl font-normal text-gray-300">{children}</PTag>
)
