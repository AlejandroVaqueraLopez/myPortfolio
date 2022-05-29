import {experienceListData} from "./data.js";

const experienceList = document.querySelector("#experienceList");

//render all the items iterating data objects 
const render = (experienceListData) => {
	experienceListData.forEach((obj) => {
		itemTemplate(obj);
	});
}

//this generates every list item template and fill it with data
const itemTemplate = (obj) => {
	const {name,image,description,role,from,to,link} = obj;

	const li = document.createElement("li");
	li.id = `${name}`;
	li.classList.add("experienceItem");

	const experienceContent = document.createElement("div");
	experienceContent.classList.add("experienceContent");

	const experienceInfo = document.createElement("div");
	experienceInfo.classList.add("experienceInfo");
	experienceInfo.id = "experienceInfo";

	const stExperienceInfoSection = document.createElement("div");
	stExperienceInfoSection.classList.add("experienceInfoSection");

	const ndExperienceInfoSection = document.createElement("div");
	ndExperienceInfoSection.classList.add("experienceInfoSection");

	const experienceInfoContent = document.createElement("div");
	experienceInfoContent.classList.add("experienceInfoContent");

	const h2 = document.createElement("h2");
	h2.textContent = `${name}`;

	const p = document.createElement("p");
	p.textContent = `${description}`;

	const roleContainer = document.createElement("div");
	roleContainer.classList.add("roleContainer");

	const lblRole = document.createElement("label");
	lblRole.textContent = "Role";

	const h3Role = document.createElement("h3");
	h3Role.textContent = `${role}`;

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

	const experienceLinkContainer = document.createElement("div");
	experienceLinkContainer.classList.add("experienceLinkContainer");

	const a = document.createElement("a");
	a.classList.add("experienceLink","btnMain");
	a.target = "_blank";
	if(link != ""){
		a.textContent = "Visit";
		a.href = `${link}`;
	}else{
		a.textContent = "Unavailable";
		a.style.opacity = "0.5";
		a.style.userSelect = "none";
	}

	const experienceImage = document.createElement("div");
	experienceImage.classList.add("experienceImage","experImageHoverAnim");

	const img = document.createElement("img");
	img.src = `${image}`;

	//apending (inside)
	experienceImage.appendChild(img);
	
	experienceInfoContent.appendChild(h2);
	experienceInfoContent.appendChild(p);

	roleContainer.appendChild(lblRole);
	roleContainer.appendChild(h3Role);

	fromContainer.appendChild(lblFrom);
	fromContainer.appendChild(h3From);

	toContainer.appendChild(lblTo);
	toContainer.appendChild(h3To);

	experienceLinkContainer.appendChild(a);

	stExperienceInfoSection.appendChild(experienceInfoContent);
	stExperienceInfoSection.appendChild(roleContainer);
	stExperienceInfoSection.appendChild(fromContainer);
	stExperienceInfoSection.appendChild(toContainer);

	ndExperienceInfoSection.appendChild(experienceLinkContainer);

	experienceInfo.appendChild(stExperienceInfoSection);
	experienceInfo.appendChild(ndExperienceInfoSection);

	experienceContent.appendChild(experienceInfo);
	experienceContent.appendChild(experienceImage);
	
	li.appendChild(experienceContent);

		/*
				<li id="clubEmprende" class="experienceItem">
					<div class="experienceContent">

						<div id="experienceInfo" class="experienceInfo">

							<div class="experienceInfoSection">
								<div class="experienceInfoContent">
									<h2>Club Emprende Mexico</h2>
									<p>In this job I took the position of Customer service and
						Lead funnel creator with ManyChat.</p>
								</div>

								<div class="roleContainer">
									<label>Role</label>
									<h3>Customer service</h3>
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

							<div class="experienceInfoSection">
								<div class="experienceLinkContainer">
									<a class="experienceLink" href="https://www.clubemprende.com.mx/">Visit</a>
								</div>
							</div>

						</div>

						<div class="experienceImage imageHoverAnim">
							<img src="" alt="">
						</div>

					</div>
				</li>
	;*/
	experienceList.appendChild(li);
}
render(experienceListData);
