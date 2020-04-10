import React from "react";
import {
	MDBCarousel,
	MDBCarouselCaption,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBView,
	MDBMask,
	MDBContainer
} from "mdbreact";
import img1 from "../../assets/images/AboutImg1.png";
import img2 from "../../assets/images/AboutImg10.png";

const CarouselPage = () => {
	return (
		<MDBContainer>
			<MDBCarousel
				activeItem={1}
				length={3}
				showControls={true}
				showIndicators={true}
				className="z-depth-1">
				<MDBCarouselInner>
					<MDBCarouselItem itemId="1">
						<MDBCarouselCaption>
							<h3 className="h3-responsive">Light mask</h3>
							<p>First text Lorem bsfjksbfksbdfksbdkbssbbk</p>
						</MDBCarouselCaption>
					</MDBCarouselItem>
					<MDBCarouselItem itemId="2">
						<MDBCarouselCaption>
							<h3 className="h3-responsive">Strong mask</h3>
							<p>Second text sdbchsdbfsdbfhbsdfbsfbjsdb</p>
						</MDBCarouselCaption>
					</MDBCarouselItem>
					<MDBCarouselItem itemId="3">
						<MDBView>
							<h1>ksNDFklanslnlwejtawjomkdck crrjwrwirjioe rjweo</h1>
							<MDBMask overlay="black-slight" />
						</MDBView>
						<MDBCarouselCaption>
							<h3 className="h3-responsive">Slight Mast</h3>
							<p>Third text</p>
						</MDBCarouselCaption>
					</MDBCarouselItem>
				</MDBCarouselInner>
			</MDBCarousel>
		</MDBContainer>
	);
};

export default CarouselPage;
