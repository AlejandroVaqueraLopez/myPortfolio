import {awardsListData} from "./data.js";

const awardsList = document.querySelector("#awardsList");

//render all the items iterating data objects 
const render = (awardsListData) => {
	awardsListData.forEach((obj) => {
		itemTemplate(obj);
	});
}

//this generates every list item template and fill it with data
const itemTemplate = (obj) => {
	const {name,image,description,place,from,to,link} = obj;

	const li = document.createElement("li");
	li.id = `${name}`;
	li.classList.add("awardsItem");

	const awardsContent = document.createElement("div");
	awardsContent.classList.add("awardsContent");

	const awardsInfo = document.createElement("div");
	awardsInfo.classList.add("awardsInfo");
	awardsInfo.id = "awardsInfo";

	const stAwardsInfoSection = document.createElement("div");
	stAwardsInfoSection.classList.add("awardsInfoSection");

	const ndAwardsInfoSection = document.createElement("div");
	ndAwardsInfoSection.classList.add("awardsInfoSection");

	const awardsInfoContent = document.createElement("div");
	awardsInfoContent.classList.add("awardsInfoContent");

	const h2 = document.createElement("h2");
	h2.textContent = `${name}`;

	const p = document.createElement("p");
	p.textContent = `${description}`;

	const placeContainer = document.createElement("div");
	placeContainer.classList.add("placeContainer");

	const lblPlace = document.createElement("label");
	lblPlace.textContent = "Place";

	const h3Place = document.createElement("h3");
	h3Place.textContent = `${place}`;

	const fromContainer = document.createElement("div");
	fromContainer.classList.add("fromContainer");

	const lblFrom = document.createElement("label");
	lblFrom.textContent = "From";

	const h3From = document.createElement("h3");
	h3From .textContent = `${from}`;

	const toContainer = document.createElement("div");
	toContainer.classList.add("toContainer");

	const lblTo = document.createElement("label");
	lblTo.textContent = "To";

	const h3To = document.createElement("h3");
	h3To.textContent = `${to}`;

	const awardsLinkContainer = document.createElement("div");
	awardsLinkContainer.classList.add("awardsLinkContainer");

	const a = document.createElement("a");
	a.classList.add("awardsLink","btnMain");
	a.target = "_blank";
	if(link != ""){
		a.textContent = "Visit";
		a.href = `${link}`;
	}else{
		a.textContent = "Not available";
		a.style.opacity = "0.5";
		a.style.userSelect = "none";
	}
	
	const awardsImage = document.createElement("div");
	awardsImage.classList.add("awardsImage","experImageHoverAnim");

	const img = document.createElement("img");
	img.src = `${image}`;

	//apending (inside)
	awardsImage.appendChild(img);
	
	awardsInfoContent.appendChild(h2);
	awardsInfoContent.appendChild(p);

	placeContainer.appendChild(lblPlace);
	placeContainer.appendChild(h3Place);

	fromContainer.appendChild(lblFrom);
	fromContainer.appendChild(h3From);

	toContainer.appendChild(lblTo);
	toContainer.appendChild(h3To);

	awardsLinkContainer.appendChild(a);

	stAwardsInfoSection.appendChild(awardsInfoContent);
	stAwardsInfoSection.appendChild(placeContainer);
	stAwardsInfoSection.appendChild(fromContainer);
	stAwardsInfoSection.appendChild(toContainer);

	ndAwardsInfoSection.appendChild(awardsLinkContainer);

	awardsInfo.appendChild(stAwardsInfoSection);
	awardsInfo.appendChild(ndAwardsInfoSection);

	awardsContent.appendChild(awardsInfo);
	awardsContent.appendChild(awardsImage);
	
	li.appendChild(awardsContent);

		/*
				<li id="HackerFest 2022" class="awardsItem">
					<div class="awardsContent">

						<div id="awardsInfo" class="awardsInfo">

							<div class="awardsInfoSection">
								<div class="awardsInfoContent">
									<h2>HackerFest 2022</h2>
									<p>A challenge of 100 teams of developers/designers to create a digital proyect that solves the laboral stress. Healthwork was my team proyect, we were among the 3 finalists.</p>
								</div>

								<div class="placeContainer">
									<label>Place</label>
									<h3>2nd</h3>
								</div>

								<div class="fromContainer">
									<label>from</label>
									<h3>June 2021</h3>
								</div>

								<div class="toContainer">
									<label>To</label>
									<h3>June 2022</h3>
								</div>
							</div>

							<div class="awardsInfoSection">
								<div class="awardsLinkContainer">
									<a class="awardsLink" href="https://www.clubemprende.com.mx/">Visit</a>
								</div>
							</div>

						</div>

						<div class="awardsImage experImageHoverAnim">
							<img src="" alt="">
						</div>

					</div>
				</li>
	;*/
	awardsList.appendChild(li);
}
render(awardsListData);
