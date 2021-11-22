import classNames from "classnames";

const headings = {
	h1: { size: "text-8xl", classes: "font-bold font-serif", color: { default: "gray-100" } },
	h2: { size: "text-5xl", classes: "font-semibold font-serif", color: { default: "gray-100" } },
	h3: { size: "text-4xl", classes: "font-semibold", color: { default: "gray-100" } },
	h4: { size: "text-3xl", classes: "font-semibold", color: { default: "gray-100" } },
	h5: { size: "text-2xl", classes: "font-semibold", color: { default: "gray-100" } },
	h6: { size: "text-xl", classes: "font-semibold", color: { default: "gray-100" } },
};

export const Heading = ({ level, className = {}, color, size, children }) => {
	const Tag = `${level}`;
	const heading = headings[Tag];

	return <Tag className={classNames(heading.classes, className, size ? `text-${size}` : heading.size, (color = `text-${color || heading.color.default}`))}>{children}</Tag>;
};
