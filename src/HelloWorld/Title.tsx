import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import '../font.css';

export const Title: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const text = titleText.split(' ').map((t) => ` ${t} `);
	return (
		<h1
			style={{
				color: 'white',
				fontSize: 90,
				fontWeight: 'bold',
				fontFamily: 'Lato, sans-serif',
				textAlign: 'center',
				position: 'absolute',
				bottom: 160,
				width: '100%',
			}}
		>
			<span
				style={{
					color: titleColor,
					marginLeft: 10,
					marginRight: 10,
					transform: `scale(${spring({
						fps: videoConfig.fps,
						frame: frame - 5,
						config: {
							damping: 10,
							stiffness: 160,
							mass: 0.6,
							overshootClamping:true
						},
					})})`,
					display: 'inline-block',
				}}
			>
				{titleText}
			</span>
		</h1>
	);
};
