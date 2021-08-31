import React from 'react'
import '../assets/scss/newsletter.scss'

const newsletter = () =>{
	
    const onSubmitForm = (e) => {
		e.preventDefault();
			 const form = e.target;
			 const data = new FormData(form);
			 const xhr = new XMLHttpRequest();
			 xhr.open(form.method, form.action);
			 xhr.setRequestHeader("Accept", "application/json");
			 xhr.onreadystatechange = () => {
				 if (xhr.readyState !== XMLHttpRequest.DONE) return;
				 if (xhr.status === 200) {
					 alert('Succesfully sent!')
					 form.reset();
				 } else {
					 console.log('something went wrong')
				 }
			 };
	 
			 xhr.send(data);
			}
	
	return(
		<div id="bottomWrapper">
			<div className="container">
				<section className="sectionNewsletter">

					<h2 className="newsletterHeading"> Newsletter</h2>
						<div className="containerNewsletter">
							<form   onSubmit={(e) => onSubmitForm(e)}
                          action = "https://formspree.io/f/mknkvenn"
                        method="POST">
								  <div className="form-group">
								    <div className="form-text text-muted" id="pbb-letter-cont-nw">Stay up to date with the latest from me</div>
								    <div className="input-group" id="pd-elementor-apex">

										<input 
											type='text' 
											placeholder='Email'
											name='email' 
											className="inputStyles" />
									    <input name="author_name" type="hidden" value='Edwin Alan Salhany'></input>
										  <div className="input-group-append">

											<input 
												className="buttonNewsletter" 
												value="Subcribe" 
												type="submit" />
										  </div>

									</div>
								  </div>
							</form>
						</div>
						
				</section>
			</div>
		</div>
	)
}

export default newsletter