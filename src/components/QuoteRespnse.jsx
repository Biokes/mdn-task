import searchIcon from '../assets/searchIcon.png'
import messages from '../assets/messsages.png'
import avatar from '../assets/Avatars.png'
import downArrow from '../assets/button-icon.png'
import bell from '../assets/bell.png'

export default function QuoteResponse(){
    return (
        <div>
            <div>
                <img src={searchIcon} width={14} height={14} alt={''}/>
                <input/>
            </div>
            <div>
                <img src={bell} alt="" width={20} height={20}/>
                <img src={messages} alt="" width={20} height={20}/>
                <img src={avatar} alt="" width={20} height={20}/>
                <img src={downArrow} alt="" width={20} height={20}/>
            </div>
        </div>
    )
}