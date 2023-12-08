import Image from "next/image";
import styles from "./card-white.module.scss";

interface Props {
  image: string;
  title: string;
  content: string;
}

function CardWhite({ image, title, content }: Props) {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={image} alt={content} width={288} height={193} />
      <div className={styles.contentContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
}

export default CardWhite;
