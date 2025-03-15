import React from "react";
interface TypographyProps {
    size?: "small" | "medium" | "large" | "xlarge" | "xxlarge";
    weight?: "light" | "regular" | "semibold" | "bold";
    color?: string;
    children: React.ReactNode;
}
declare const Typography: React.FC<TypographyProps>;
export default Typography;
