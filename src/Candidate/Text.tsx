import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Title: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	return (
		<h1
			style={{
				color: 'white',
				fontSize: 90,
				fontWeight: 'bold',
				fontFamily: 'Lato, sans-serif',
			}}
		>
			<span
				key={titleText}
				style={{
					color: titleColor,
					marginLeft: 10,
					marginRight: 10,
					transform: `scale(${spring({
						fps: videoConfig.fps,
						frame: frame - 5,
						config: {
							damping: 100,
							stiffness: 200,
							mass: 0.5,
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
