

const AboutUs = () => {
    return (
        <div className='flex flex-col lg:flex-row mx-auto justify-center'>
            <div className="flex-1">
                <img className="w-3/4 rounded-lg mx-auto" src="https://i.ibb.co/4tftY4h/2151024229.jpg" alt="" />
            </div>
            <div className="mx-auto flex-1">

                <h1 className="lg:text-4xl text-2xl text-center font-semibold font-serif pb-5 lg:pb-10">About Us</h1>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Curious about exploring the housing market?
                    </div>
                    <div className="collapse-content">
                        <p>Welcome! Take a peek at our diverse listings and discover the possibilities.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Concerned about the security of your personal information?
                    </div>
                    <div className="collapse-content">
                        <p>We prioritize data security and utilize industry-standard encryption methods to safeguard your information.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Hesitant about interacting with strangers online?
                    </div>
                    <div className="collapse-content">
                        <p>We understand! Our platform allows you to browse listings and contact agents at your own pace, fostering a comfortable search experience.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Feeling unsure about the quality of service you will receive?
                    </div>
                    <div className="collapse-content">
                        <p>Our dedicated team of real estate professionals is committed to exceeding your expectations. We offer personalized guidance and support throughout your entire journey.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Worried about hidden fees or unexpected costs?
                    </div>
                    <div className="collapse-content">
                        <p>Transparency is key! We strive to provide clear pricing information and upfront communication about any associated fees.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    New to the real estate process and feeling overwhelmed?
                    </div>
                    <div className="collapse-content">
                        <p>No problem! We offer educational resources and step-by-step guides to empower you and make informed decisions.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Worried about the complexity of online contracts and paperwork?
                    </div>
                    <div className="collapse-content">
                        <p> We simplify the process! We provide clear explanations and easy-to-understand documents to ensure you feel informed and comfortable throughout the transaction.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;