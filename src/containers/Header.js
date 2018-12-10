import React from 'react'

const Header = () => (
	<header className='header'>
		<div className='container'>
			<div className='header__inner'>
				<div className='row row--2'>
					<div className='col'>
						<ul className='list list--inline header__list'>
							<li>
								<a href='/'>
									<img
										src='https://cdn.dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png'
										alt='dribble logo'
										width='80'
									/>
								</a>
							</li>
						</ul>
					</div>
					<div className='col'>
						<ul className='list list--inline header__user-area'>
							<li>
								<nav className='header__nav'>
									<ul className='list list--inline'>
										<li>
											<a href='/'>dribbles</a>
										</li>
									</ul>
								</nav>
							</li>
							<li>
								<form className='header__search-form'>
									<label className='visually-hidden' htmlFor='search'>Search</label>
									<input type='text' id='search' placeholder='Search' />
								</form>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</header>
)

export default Header
