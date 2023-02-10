import styles from './Avatar.module.css'


interface AvatarProps {
    hasBorder?: boolean;
    src: string;
}

export function Avatar({hasBorder = true, src}: AvatarProps) {


    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
        />
    )
}