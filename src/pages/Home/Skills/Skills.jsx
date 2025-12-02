import { RiSeoLine } from "react-icons/ri";

const Skills = () => {
    return (
        <div className='container mx-auto mt-12 mb-12'>
            <h1 className='text-3xl font-bold text-center'>What I Do</h1>
            <div>
                <div className="card bg-base-100 w-96 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <span className="text-5xl"><RiSeoLine /></span>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">SEO</h2>
                        <p>SEO optimizing your website to improve its visibility on search engines.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;