import styles from './styles.module.css'
import dashboard from '../../public/dashboard.png'
import Logo from '../../public/logo.png'
export  default function LeftBar() {
    const packs = [
        ['Dashboard', dashboard],
        ['Inventory',],
        ['Procurement',],
        ['Finance',],
        ['Communication',],
        ['Calender',],
        ['Contacts',],
    ]
    return (
        <div>
            <div>
                <Logo/>
                <p>Medical Advanced platform</p>
            </div>
            <div>
                {packs.map((pack, index) => (
                    <div key={index} className={styles.packMapping}>
                        <img src={pack[1]} alt="" width={20} height={20}/>
                        <p>{pack[0]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}