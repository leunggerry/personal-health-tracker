import React from 'react';
import { Footer } from 'flowbite-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const FooterComponent = () => {
	return (
		<Footer bgDark={false}>
			<div className="w-full">
				<div className="grid w-full shadow-2xl sm:flex sm:justify-center md:flex grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
					<div>
						<Footer.Title title="Contact Us" />
						<Footer.LinkGroup col={true}>
							<Footer.Link href="#">Joseph Senyonga</Footer.Link>
							<Footer.Link href="#">Abdalla Hamdy</Footer.Link>
							<Footer.Link href="#">Gerry Leung</Footer.Link>
							<Footer.Link href="#">Ibrahim Imran</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.Title title="Source Code" />
						<Footer.LinkGroup col={true}>
							<Footer.Link
								href="https://github.com/leunggerry/personal-health-tracker"
								className="github social"
								id="github"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faGithub} size="2x" />
							</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.Title title="download" />
						<Footer.LinkGroup col={true}>
							<Footer.Link href="#">iOS</Footer.Link>
							<Footer.Link href="#">Android</Footer.Link>
							<Footer.Link href="#">Windows</Footer.Link>
							<Footer.Link href="#">MacOS</Footer.Link>
						</Footer.LinkGroup>
					</div>
				</div>
				<div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
					<Footer.Copyright href="#" by="Capstone" year={2022} />
					{/* <Footer.Copyright href="#" by="Capstone™" year={2022} /> */}
					{/* <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
					<Footer.Icon
						href="#"
						icon={BsFacebook}
					/>
					<Footer.Icon
						href="#"
						icon={BsInstagram}
					/>
					<Footer.Icon
						href="#"
						icon={BsTwitter}
					/>
					<Footer.Icon
						href="#"
						icon={BsGithub}
					/>
					<Footer.Icon
						href="#"
						icon={BsDribbble}
					/>
				</div> */}
				</div>
			</div>
		</Footer>
	);
};
export default FooterComponent;
