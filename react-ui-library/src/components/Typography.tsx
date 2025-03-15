import React from "react";

const typographyStyles: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
};

const loadGoogleFont = () => {
  if (!document.getElementById("google-font-poppins")) {
    const fontLink = document.createElement("link");
    fontLink.id = "google-font-poppins";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
  }
};

interface TypographyProps {
  size?: "small" | "medium" | "large" | "xlarge" | "xxlarge";
  weight?: "light" | "regular" | "semibold" | "bold";
  color?: string;
  children: React.ReactNode;
}

const fontSizeMap: { [key: string]: string } = {
  small: "14px",
  medium: "16px",
  large: "20px",
  xlarge: "24px",
  xxlarge: "32px",
};

const fontWeightMap: { [key: string]: number } = {
  light: 300,
  regular: 400,
  semibold: 600,
  bold: 700,
};

const Typography: React.FC<TypographyProps> = ({
  size = "medium",
  weight = "regular",
  color = "#333",
  children,
}) => {

    loadGoogleFont(); 

  return (
    <span
      style={{
        ...typographyStyles,
        fontSize: fontSizeMap[size],
        fontWeight: fontWeightMap[weight],
        color: color,
      }}
    >
      {children}
    </span>
  );
};

export default Typography;
