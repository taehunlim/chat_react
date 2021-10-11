import React from 'react';
import styled from "@emotion/styled";

interface StyledProps {
    width?: number;
    height?: number;
    src?: string;
};

interface ImageProps extends React.ComponentProps<"div">, StyledProps {};

const Image = ({ src, width, height, ...props }: ImageProps) => {
    const AddUrl = encodeURI(src?.includes("url") ? src : `url('${src}')`)
    return (
        <ImageWrapper width={width} height={height}  {...props}>
            <StyledImage width={width} height={height} src={AddUrl} />
        </ImageWrapper>
    );
};

const ImageWrapper = styled.div<StyledProps>`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const StyledImage = styled.div<StyledProps>`
  background-image: ${props => props.src};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 12px;
  padding-top: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export default Image;
