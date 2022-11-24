export default ( { src } ) => {
	const styles = {
		height: '600px',
		width: '100%',
	};
	return <iframe style={ styles } src={ src } />;
};
