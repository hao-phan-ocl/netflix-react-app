import { GitHub, LinkedIn } from '@material-ui/icons'
import './Footer.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="text-box">
                    <span className='span-1'>Developed by</span>
                    <span className='span-2'>Hao Phan</span>
                </div>
                <div className="icon-box">
                    <a
                        className='icon' 
                        href='https://www.linkedin.com/in/hao-phan-06b628110/'
                        target='_blank'
                        rel="noreferrer"
                    >
                        <LinkedIn />
                    </a>
                    <a  
                        className='icon'
                        href='https://github.com/nguyenhaophan'
                        target='_blank'
                        rel="noreferrer"
                    >
                        <GitHub />
                    </a>
                </div>
            </div>
        </div>
    )
}
