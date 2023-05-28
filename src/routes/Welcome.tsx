import { useNavigate } from 'react-router-dom';
import styles from './Welcome.module.scss';

const Welcome = () => {
	const navigate = useNavigate();

	const onLogout = () => {
		navigate('/');
	};

	return (
		<div className={styles.Welcome}>
			<h2>Welcome</h2>
			<button>Next</button>
		</div>
	);
}

export default Welcome;
