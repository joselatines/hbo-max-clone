import { Column, Title, Subtitle, Container, Row } from './styles';

export default function Footer() {
	return (
		<Container>
			<Row>
				<Column>
					<a
						href='https://joselatines.netlify.app'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Title as='h1'>Jose Latines</Title>
						<p className='water'>Frontend Web Developer</p>
					</a>
				</Column>

				<Column>
					<Subtitle>Useful Links</Subtitle>
					<ul>
						<li>
							<a
								href='https://github.com/joselatines/hbo-max-clone'
								target='_blank'
								rel='noopener noreferrer'
							>
								Want to see the source code?
							</a>
						</li>
						<li>
							<a
								href='https://github.com/joselatines'
								target='_blank'
								rel='noopener noreferrer'
							>
								Github
							</a>
						</li>
						<li>
							<a
								href='https://twitter.com/joselatines_'
								target='_blank'
								rel='noopener noreferrer'
							>
								Twitter
							</a>
						</li>
					</ul>
				</Column>
			</Row>
		</Container>
	);
}
