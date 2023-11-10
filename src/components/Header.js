import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Header = ({ theme, setTheme }) => {
	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
	}
	return (
		<div className='app-header'>
			<header className='brand'>Where in the world?</header>

			<button onClick={switchTheme} className='theme-toggler'>
				{theme === 'light' ? (
					<i class='fa-regular fa-moon'></i>
				) : (
					<FontAwesomeIcon icon={faMoon} />
				)}
				Dark Mode
			</button>
		</div>
	)
}

export default Header
