import { CSSProperties, FC } from 'react'
import { Box } from '../../material-ui'

export interface ImageStyleProps {
  container?: CSSProperties | any;
  image?: CSSProperties | any;
}

type ImageProps = {
  alt?: string | undefined;
  src?: string | undefined;
  style?: ImageStyleProps;
};

export const Image: FC<ImageProps> = ({ alt, src, style, children }) => (
  <Box data-testid='Image' sx={style?.container}>
    <Box component='img' alt={alt} src={src} sx={style?.image} />
    <>{children}</>
  </Box>
);
