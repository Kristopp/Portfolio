import { container, title } from './styles'
import Logo from '@components/Logo'

type HeaderProps = { 
    pageTitle?: string
}


const Header = () => {
    return (
        <div css={container}>
            <Logo />
        </div>
    )
}

export default Header
