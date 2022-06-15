import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;

	return (
		<div style={{flex: 1, backgroundColor: 'black'}}>
			<div style={{opacity}}>
				<Sequence from={25} durationInFrames={videoConfig.durationInFrames}>
					<Logo transitionStart={transitionStart} />
				</Sequence>
				<Sequence from={80}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
			</div>
		</div>
	);
};
