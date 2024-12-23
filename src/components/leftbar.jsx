import styles from './styles.module.css'
import dashboard from '../assets/dashboard.png'
import Logo from '../assets/logo.png'
import inventory from '../assets/inventory.png'
import procurement from '../assets/procurements.png'
import finance from '../assets/finance.png'
import messages from '../assets/messsages.png'
import calender from '../assets/calender.png'
import contact from '../assets/contracts.png'

export  default function LeftBar() {
    const packs = [
        ['Dashboard', dashboard],
        ['Inventory',inventory],
        ['Procurement',procurement],
        ['Finance',finance],
        ['Communication',messages],
        ['Calender', calender],
        ['Contacts',contact],
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