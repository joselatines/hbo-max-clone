import { useState } from 'react';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import logo from '../../../public/img/logo.svg';

import Hamburger from './Hamburger';
import { Container, Column, Flex, ImgWrapper, UlContainer } from './styles';
import Link from 'next/link';

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
				<Link href='/'>
					<ImgWrapper>
						<Image src={logo} alt='logo-hbo-max-svg' />
					</ImgWrapper>
				</Link>
			</Column>
			<Column>Sing in</Column>
		</Container>
	);
}
