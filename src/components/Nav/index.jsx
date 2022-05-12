import { useState } from 'react';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import logo from '../../../public/img/logo.svg';

import Hamburger from './Hamburger';
import { Container, Column, Ul, Flex, ImgWrapper, UlContainer } from './styles';

export default function Nav() {
	const [toggleNav, setToggleNav] = useState(false);

	return (
		<Container>
			<Column>
				<Flex>
					<Hamburger setToggleNav={setToggleNav} toggleNav={toggleNav} />
					<UlContainer active={toggleNav}>
						<ul>
							<Hamburger setToggleNav={setToggleNav} toggleNav={toggleNav} />
							<li>Genre</li>
							<li>Genre</li>
							<li>Genre</li>
						</ul>
					</UlContainer>

					<FiSearch />
				</Flex>
			</Column>
			<Column>
				<ImgWrapper>
					<Image src={logo} />
				</ImgWrapper>
			</Column>
			<Column>Sing in</Column>
		</Container>
	);
}
