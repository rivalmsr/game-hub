import { Image, ImageProps } from "@chakra-ui/react";
import meh from '../assets/meh.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import bullsEye from '../assets/bulls-eye.webp'

interface Props {
  rating: number;
}

function Emoji({ rating }: Props) {

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: "25px" },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: bullsEye, alt: 'meh', boxSize: '35px' },
  }

  return (
    <Image {...emojiMap[rating]} />
  )
}

export default Emoji;
