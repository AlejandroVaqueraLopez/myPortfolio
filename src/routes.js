const path = require("path");
const {Router} = require("express");
const router = Router();
const nodemailer = require("nodemailer");//to send the contact mail
const {google} = require("googleapis");//to send the contact mail via gmail api
require("dotenv").config();//environment variables

//main route
router.get("/",(req,res)=>{
	res.render(path.join(__dirname,"/views/index.ejs"));
});

//404 not found
router.use("*",(req,res)=>{
	res.status(404).render(path.join(__dirname,"/views/pageNotFound.ejs"));
});

//to get the contact message 
router.post("/send-email",(req,res)=>{

	//destructuring the data received
	const {email,message} = req.body;

	//creating the email structure 
	const contentHtml = `
		<h2>Email: ${email}</h2>
		<h3>Message:</h3>
		<p>${message}</p>
	`;

	//our developer keys for gmail api
	const CLIENT_ID=process.env.CLIENT_ID;
	const CLIENT_SECRET=process.env.CLIENT_SECRET;
	const REDIRECT_URI=process.env.REDIRECT_URI;
	const REFRESH_TOKEN=process.env.REFRESH_TOKEN;

	const oAuth2Client = new google.auth.OAuth2(
		CLIENT_ID,
		CLIENT_SECRET,
		REDIRECT_URI
	);

	//here we send the refresh token to get oAuthentication2
	oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

	//sending function
	async function sendMail(){
		try{
			const accessToken = await oAuth2Client.getAccessToken();
			//setting tokens to make a verified email
			const transporter = nodemailer.createTransport({
				service:"gmail",
				auth:{
					type:"OAuth2",
					user:"portfolio.vaquera@gmail.com",
					clientId:CLIENT_ID,
					clientSecret:CLIENT_SECRET,
					refreshToken:REFRESH_TOKEN,
					accessToken:accessToken
				}
			});

			//the content of the mail
			const mailOptions = {
				from: "Portfolio Vaquera <portfolioUser@gmail.com>",
				to:"alejandrovaqueralopez608@gmail.com",
				subject:"New portfolio contact message!",
				html: contentHtml,
			}
			//we send the options to the email
			const result = await transporter.sendMail(mailOptions);
			return result;
			
		}catch(err){
			console.log(err);
		}
	}

	//in case you need to make tests or modify the email, use the following lines, to not block the api
	//console.log(req.body);
	//res.send("Sended");
	sendMail()
		.then((result) => {
			if(res.status(200)){
				res.render(path.join(__dirname,"./views/mailSuccess.ejs"));//emailSuccess.ejs
			}else{
				res.render(path.join(__dirname,"./views/mailRejected.ejs"));//emailRejected.ejs
			}
		})
		.catch(err => console.log(err.message));
});

module.exports = router;
