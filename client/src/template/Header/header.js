export default function Header(){

    return (
        <header id="header">
				<div class="inner">
					<a class="logo" href="index.html"><strong>Apex</strong> by Pixelarity</a>
					<nav id="nav">
						<ul>
							<li><a href="index.html">Home</a></li>
							<li>
								<a href="#">Dropdown</a>
								<ul>
									<li><a href="#">Magna tempus</a></li>
									<li><a href="#">Etiam lorem facilis</a></li>
									<li><a href="#">Veroeros consequat</a></li>
									<li>
										<a href="#">Dolore sed magna</a>
										<ul>
											<li><a href="#">Magna tempus</a></li>
											<li><a href="#">Etiam lorem facilis</a></li>
											<li><a href="#">Veroeros consequat</a></li>
											<li><a href="#">Dolore sed magna</a></li>
											<li><a href="#">Nisl sed adipiscing</a></li>
										</ul>
									</li>
									<li><a href="#">Nisl sed adipiscing</a></li>
								</ul>
							</li>
							<li><a href="generic.html">Generic</a></li>
							<li><a href="elements.html">Elements</a></li>
						</ul>
					</nav>
				</div>
			</header>

    )
}