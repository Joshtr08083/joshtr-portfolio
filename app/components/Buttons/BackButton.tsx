'use client';
import { useRouter } from 'next/navigation' 
import { getPreviouslyCachedImageOrNull } from 'next/dist/server/image-optimizer';
import styles from "./BackButton.module.css";
import Link from "next/link";

interface Props {
  classes?: string;
  url?: string;
  nav?: boolean;
}

const BackButton = ( { classes = "", nav = false, url="" }: Props) => {
  const router = useRouter();
  const buttonClass = `btn btn-outline ${classes} ${(nav == true)? `${styles.button} top-2 left-2 px-3 h-8 md:top-4 md:left-4 md:px-6 md:h-10` : ""}`;

  return (
    (url == "")? 
      <button 
          onClick = {() => {router.back()}}
          className = {buttonClass}
          style={{content: "back"}}
      >
        {(nav == false)? "Back" : ""}
      </button>
    :
      <Link href={url}>
        <button 
            className = {buttonClass}
            style={{content: "back"}}
        >
          {(nav == false)? "Back" : ""}
        </button>
      </Link>
  )
}

export default BackButton