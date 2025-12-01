

const Hero = () => {
    return (
        <div>
            <div className="hero bg-black h-[500px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co/pj6n1642/rumi-aktar-profile-pic.jpg"
                        className="rounded-lg border-4 border-white h-[400px]"
                    />
                    <div className="space-y-10">
                        <h1 className="text-5xl max-w-4xl font-bold text-white leading-14">Bringing Ideas to Life through UI Design and Development.Here Creativity Meets Functionality </h1>
                        <button className="btn">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;