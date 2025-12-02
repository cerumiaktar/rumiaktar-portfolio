import { RiSeoLine } from "react-icons/ri";
import { FaPenNib, FaCode } from "react-icons/fa";

const Skills = () => {
    return (
        <div className='container mx-auto mt-12 mb-12'>
            <div className="flex items-center gap-6">
                <div className="w-6/12">
                    <h1 className='text-3xl font-bold'>What I Do</h1>
                    <p className="leading-8">I specialize in designing user experiences, crafting engaging interfaces, and building robust web applications that deliver value and usability.
                    My approach combines creativity and technical expertise to deliver solutions that are both visually appealing and highly functional for users.</p>
                </div>
                <div className="6/12 space-y-6">
                    <div className="card w-96 bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">SEO</h2>
                            <p>SEO optimizing your website to improve its visibility on search engines.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">UI/UX Design</h2>
                            <p>UI/UX design is to produce aesthetically pleasing and intuitive digital experiences.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Development</h2>
                            <p>It focuses on creating functional, efficient, and scalable digital solutions, transforming ideas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;