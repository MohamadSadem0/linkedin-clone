import {React ,useState, useEffect} from "react";

const Education = () => {
    const [educations, setEducations] = useState([]);

    useEffect(() => {
        const fetchEducationData = async () => {
            try {
                const response = await fetch('');
                if (response.ok) {
                    const data = await response.json();
                    setEducations(data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchEducationData();
    }, []);

    return (
        <section className="education">
            <h2>Education</h2>
            <ul>
                {educations.map((education) => (
                    <li key={education.id}>
                        <p>{education.degree} in {education.major} at {education.institution}</p>
                        <p>{education.graduation_year}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};