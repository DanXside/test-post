import Link from 'next/link';
import classes from './header.module.scss';


export default function Header() {
    return (
        <div className={classes.header}>
            <Link href='/'>PostHome</Link>
        </div>
    );
};